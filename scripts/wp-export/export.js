import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { connectReadOnly, table } from "./lib/db.js";
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
const outputDir = path.join(dirname, "output");
const mediaDir = path.join(outputDir, "media");

function siteUrl() {
  return (process.env.WP_SITE_URL || "https://pinakiithub.com").replace(/\/$/, "");
}

async function metaMap(db, postId) {
  const [rows] = await db.query(
    `SELECT meta_key, meta_value FROM ${table("postmeta")} WHERE post_id = ?`,
    [postId]
  );
  return Object.fromEntries(rows.map((row) => [row.meta_key, row.meta_value]));
}

async function categoriesFor(db, postId) {
  try {
    const [rows] = await db.query(
      `SELECT t.name, t.slug
       FROM ${table("term_relationships")} tr
       JOIN ${table("term_taxonomy")} tt ON tt.term_taxonomy_id = tr.term_taxonomy_id
       JOIN ${table("terms")} t ON t.term_id = tt.term_id
       WHERE tr.object_id = ? AND tt.taxonomy IN ('category', 'post_tag')`,
      [postId]
    );
    return rows;
  } catch {
    return [];
  }
}

async function attachmentUrl(db, attachmentId) {
  if (!attachmentId) {
    return null;
  }

  const [files] = await db.query(
    `SELECT meta_value FROM ${table("postmeta")}
     WHERE post_id = ? AND meta_key = '_wp_attached_file'
     LIMIT 1`,
    [attachmentId]
  );
  if (files[0]?.meta_value) {
    return `${siteUrl()}/wp-content/uploads/${files[0].meta_value}`;
  }

  const [posts] = await db.query(
    `SELECT guid FROM ${table("posts")} WHERE ID = ? LIMIT 1`,
    [attachmentId]
  );
  return posts[0]?.guid || null;
}

async function exportWordpress() {
  const db = await connectReadOnly();
  const download = process.env.WP_DOWNLOAD_IMAGES !== "0";

  try {
    const [rows] = await db.query(
      `SELECT ID, post_type, post_name, post_title, post_content, post_excerpt, post_date
       FROM ${table("posts")}
       WHERE post_status = 'publish'
         AND post_type IN ('post', 'page')
         AND post_name NOT IN ('', 'auto-draft')
       ORDER BY post_date DESC`
    );

    console.log(`Found ${rows.length} published posts/pages`);

    const items = [];
    const imageUrls = new Set();

    for (const row of rows) {
      const meta = await metaMap(db, row.ID);
      const terms = await categoriesFor(db, row.ID);
      const html = stripWordPressCruft(row.post_content);
      const featuredUrl = await attachmentUrl(db, meta._thumbnail_id);

      if (featuredUrl) {
        imageUrls.add(featuredUrl);
      }
      for (const url of collectImageUrls(html, siteUrl())) {
        imageUrls.add(url);
      }

      items.push({
        wpId: row.ID,
        type: row.post_type,
        slug: row.post_name || slugify(row.post_title),
        title: row.post_title,
        date: formatDate(row.post_date),
        isoDate: row.post_date,
        excerpt: excerptFrom(html, row.post_excerpt),
        read: readMinutes(html),
        category: terms[0]?.name || (row.post_type === "page" ? "Page" : "Blog"),
        categories: terms.map((term) => term.name),
        seoTitle: meta._yoast_wpseo_title || row.post_title,
        seoDescription: meta._yoast_wpseo_metadesc || excerptFrom(html, row.post_excerpt),
        featuredImageUrl: featuredUrl,
        html,
        sections: splitSections(html),
        metaKeys: Object.keys(meta),
      });
    }

    let urlMap = new Map();
    if (download && imageUrls.size) {
      console.log(`Downloading ${imageUrls.size} images`);
      urlMap = await downloadImages([...imageUrls], mediaDir);
    }

    const exported = items.map((item) => {
      const featuredImage = item.featuredImageUrl
        ? urlMap.get(item.featuredImageUrl) || item.featuredImageUrl
        : null;
      return {
        ...item,
        featuredImage,
        html: rewriteImageUrls(item.html, urlMap),
      };
    });

    await fs.mkdir(outputDir, { recursive: true });
    const payload = {
      exportedAt: new Date().toISOString(),
      siteUrl: siteUrl(),
      counts: {
        posts: exported.filter((item) => item.type === "post").length,
        pages: exported.filter((item) => item.type === "page").length,
        images: urlMap.size,
      },
      items: exported,
    };

    const jsonPath = path.join(outputDir, "wordpress-export.json");
    await fs.writeFile(jsonPath, JSON.stringify(payload, null, 2));
    console.log(`Wrote ${jsonPath}`);
    console.log(payload.counts);
  } finally {
    await db.end();
  }
}

exportWordpress().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
