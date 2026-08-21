import fs from "node:fs";
import path from "node:path";
import { createGunzip } from "node:zlib";
import { fileURLToPath } from "node:url";
import readline from "node:readline";

import { downloadImages } from "./lib/images.js";
import {
  collectImageUrls,
  excerptFrom,
  formatDate,
  readMinutes,
  rewriteImageUrls,
  slugify,
  splitSections,
  stripWordPressCruft,
} from "./lib/clean.js";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const dumpPath = path.join(dirname, "output/hostinger/wordpress.sql.gz");
const outputDir = path.join(dirname, "output");
const mediaDir = path.join(outputDir, "media");
const SITE_URL = "https://pinakiithub.com";

// Actual wp_posts order from CREATE TABLE:
const POST_INDEX = {
  ID: 0,
  post_date: 2,
  post_content: 4,
  post_title: 5,
  post_excerpt: 6,
  post_status: 7,
  post_name: 11,
  guid: 18,
  post_parent: 17,
  post_type: 20,
  post_mime_type: 21,
};

const META_INDEX = { post_id: 1, meta_key: 2, meta_value: 3 };
const TERM_INDEX = { term_id: 0, name: 1, slug: 2 };
const TAX_INDEX = { term_taxonomy_id: 0, term_id: 1, taxonomy: 2 };
const REL_INDEX = { object_id: 0, term_taxonomy_id: 1 };

function decodeSqlString(value) {
  return value
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, "\\")
    .replace(/\\n/g, "\n")
    .replace(/\\r/g, "\r")
    .replace(/\\t/g, "\t")
    .replace(/\\0/g, "");
}

function parseRow(rowText) {
  const values = [];
  let i = 0;
  while (i < rowText.length) {
    while (rowText[i] === " " || rowText[i] === "\n" || rowText[i] === "\r") {
      i += 1;
    }
    if (i >= rowText.length) {
      break;
    }
    if (rowText.startsWith("NULL", i) && !/[A-Za-z0-9_]/.test(rowText[i + 4] || "")) {
      values.push(null);
      i += 4;
    } else if (rowText[i] === "'") {
      i += 1;
      let out = "";
      while (i < rowText.length) {
        if (rowText[i] === "\\" && i + 1 < rowText.length) {
          out += rowText[i] + rowText[i + 1];
          i += 2;
          continue;
        }
        if (rowText[i] === "'") {
          i += 1;
          break;
        }
        out += rowText[i];
        i += 1;
      }
      values.push(decodeSqlString(out));
    } else {
      let out = "";
      while (i < rowText.length && rowText[i] !== ",") {
        out += rowText[i];
        i += 1;
      }
      values.push(out.trim());
    }
    while (rowText[i] === " " || rowText[i] === "\n" || rowText[i] === "\r") {
      i += 1;
    }
    if (rowText[i] === ",") {
      i += 1;
    }
  }
  return values;
}

function extractRowsFromInsert(statement) {
  const valuesIndex = statement.indexOf("VALUES");
  if (valuesIndex === -1) {
    return [];
  }
  const body = statement.slice(valuesIndex + 6).trim().replace(/;$/, "");
  const rows = [];
  let depth = 0;
  let start = -1;
  let inString = false;
  let escape = false;

  for (let i = 0; i < body.length; i += 1) {
    const ch = body[i];
    if (inString) {
      if (escape) {
        escape = false;
      } else if (ch === "\\") {
        escape = true;
      } else if (ch === "'") {
        inString = false;
      }
      continue;
    }
    if (ch === "'") {
      inString = true;
      continue;
    }
    if (ch === "(") {
      if (depth === 0) {
        start = i + 1;
      }
      depth += 1;
    } else if (ch === ")") {
      depth -= 1;
      if (depth === 0 && start !== -1) {
        rows.push(parseRow(body.slice(start, i)));
        start = -1;
      }
    }
  }
  return rows;
}

async function collectInserts(filePath, tableNames) {
  const wanted = new Set(tableNames);
  const buckets = Object.fromEntries(tableNames.map((name) => [name, []]));
  const stream = fs.createReadStream(filePath).pipe(createGunzip());
  const rl = readline.createInterface({ input: stream, crlfDelay: Infinity });

  let currentTable = null;
  let buffer = "";

  for await (const line of rl) {
    const tableMatch = line.match(/INSERT INTO `([^`]+)`/);
    if (tableMatch && wanted.has(tableMatch[1])) {
      currentTable = tableMatch[1];
      buffer = line;
      if (line.trim().endsWith(";")) {
        buckets[currentTable].push(...extractRowsFromInsert(buffer));
        currentTable = null;
        buffer = "";
      }
      continue;
    }

    if (!currentTable) {
      continue;
    }

    buffer += `\n${line}`;
    if (line.trim().endsWith(";")) {
      buckets[currentTable].push(...extractRowsFromInsert(buffer));
      currentTable = null;
      buffer = "";
    }
  }

  return buckets;
}

function attachmentUrl(postsById, metaByPost, attachmentId) {
  if (!attachmentId) {
    return null;
  }
  const file = metaByPost.get(String(attachmentId))?.get("_wp_attached_file");
  if (file) {
    return `${SITE_URL}/wp-content/uploads/${file}`;
  }
  return postsById.get(String(attachmentId))?.guid || null;
}

async function main() {
  if (!fs.existsSync(dumpPath)) {
    throw new Error(`Missing dump at ${dumpPath}`);
  }

  console.log("Parsing SQL dump (posts, meta, terms)...");
  const tables = await collectInserts(dumpPath, [
    "wp_posts",
    "wp_postmeta",
    "wp_terms",
    "wp_term_taxonomy",
    "wp_term_relationships",
  ]);

  const postsById = new Map();
  const typeCounts = new Map();
  for (const row of tables.wp_posts) {
    const post = {
      ID: String(row[POST_INDEX.ID]),
      post_date: row[POST_INDEX.post_date],
      post_content: row[POST_INDEX.post_content] || "",
      post_title: row[POST_INDEX.post_title] || "",
      post_excerpt: row[POST_INDEX.post_excerpt] || "",
      post_status: row[POST_INDEX.post_status],
      post_name: row[POST_INDEX.post_name] || "",
      guid: row[POST_INDEX.guid],
      post_parent: String(row[POST_INDEX.post_parent] || "0"),
      post_type: row[POST_INDEX.post_type],
      post_mime_type: row[POST_INDEX.post_mime_type],
    };
    postsById.set(post.ID, post);
    const key = `${post.post_type}/${post.post_status}`;
    typeCounts.set(key, (typeCounts.get(key) || 0) + 1);
  }

  console.log("Post type / status counts:");
  for (const [key, count] of [...typeCounts.entries()].sort((a, b) => b[1] - a[1])) {
    console.log(`  ${key}: ${count}`);
  }

  const metaByPost = new Map();
  for (const row of tables.wp_postmeta) {
    const postId = String(row[META_INDEX.post_id]);
    if (!metaByPost.has(postId)) {
      metaByPost.set(postId, new Map());
    }
    metaByPost.get(postId).set(row[META_INDEX.meta_key], row[META_INDEX.meta_value]);
  }

  const termsById = new Map();
  for (const row of tables.wp_terms) {
    termsById.set(String(row[TERM_INDEX.term_id]), {
      name: row[TERM_INDEX.name],
      slug: row[TERM_INDEX.slug],
    });
  }

  const taxById = new Map();
  for (const row of tables.wp_term_taxonomy) {
    taxById.set(String(row[TAX_INDEX.term_taxonomy_id]), {
      term_id: String(row[TAX_INDEX.term_id]),
      taxonomy: row[TAX_INDEX.taxonomy],
    });
  }

  const termsByObject = new Map();
  for (const row of tables.wp_term_relationships) {
    const objectId = String(row[REL_INDEX.object_id]);
    const tax = taxById.get(String(row[REL_INDEX.term_taxonomy_id]));
    if (!tax || !["category", "post_tag"].includes(tax.taxonomy)) {
      continue;
    }
    const term = termsById.get(tax.term_id);
    if (!term) {
      continue;
    }
    if (!termsByObject.has(objectId)) {
      termsByObject.set(objectId, []);
    }
    termsByObject.get(objectId).push({ ...term, taxonomy: tax.taxonomy });
  }

  const published = [...postsById.values()].filter(
    (post) => post.post_status === "publish" && ["post", "page"].includes(post.post_type)
  );

  const imageUrls = new Set();
  const items = published.map((post) => {
    const meta = metaByPost.get(post.ID) || new Map();
    const html = stripWordPressCruft(post.post_content);
    const featuredUrl = attachmentUrl(postsById, metaByPost, meta.get("_thumbnail_id"));
    const terms = termsByObject.get(post.ID) || [];
    if (featuredUrl) {
      imageUrls.add(featuredUrl);
    }
    return {
      wpId: Number(post.ID),
      type: post.post_type,
      slug: post.post_name || slugify(post.post_title),
      title: post.post_title,
      date: formatDate(post.post_date),
      isoDate: post.post_date,
      excerpt: excerptFrom(html, post.post_excerpt),
      read: readMinutes(html),
      category: terms.find((term) => term.taxonomy === "category")?.name || (post.post_type === "page" ? "Page" : "Blog"),
      categories: terms.map((term) => term.name),
      seoTitle: meta.get("rank_math_title") || post.post_title,
      seoDescription: meta.get("rank_math_description") || excerptFrom(html, post.post_excerpt),
      featuredImageUrl: featuredUrl,
      html,
      sections: splitSections(html),
    };
  });

  console.log(`Downloading ${imageUrls.size} images from the live site...`);
  const urlMap = await downloadImages([...imageUrls], mediaDir);
  const exported = items.map((item) => ({
    ...item,
    featuredImage: item.featuredImageUrl ? urlMap.get(item.featuredImageUrl) || item.featuredImageUrl : null,
    html: rewriteImageUrls(item.html, urlMap),
  }));

  const payload = {
    exportedAt: new Date().toISOString(),
    source: "hostinger-sql-dump",
    siteUrl: SITE_URL,
    counts: {
      posts: exported.filter((item) => item.type === "post").length,
      pages: exported.filter((item) => item.type === "page").length,
      images: urlMap.size,
    },
    items: exported,
  };

  fs.mkdirSync(outputDir, { recursive: true });
  const jsonPath = path.join(outputDir, "wordpress-export.json");
  fs.writeFileSync(jsonPath, JSON.stringify(payload, null, 2));
  console.log(`Wrote ${jsonPath}`);
  console.log(payload.counts);
  console.log("\nPosts:");
  for (const item of exported.filter((entry) => entry.type === "post")) {
    console.log(`  /blogs/${item.slug} — ${item.title}`);
  }
  console.log("\nPages:");
  for (const item of exported.filter((entry) => entry.type === "page")) {
    console.log(`  /${item.slug} — ${item.title}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
