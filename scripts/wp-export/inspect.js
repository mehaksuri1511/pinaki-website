import { connectReadOnly, table } from "./lib/db.js";

async function inspect() {
  const db = await connectReadOnly();

  try {
    const [tables] = await db.query("SHOW TABLES");
    const names = tables.map((row) => Object.values(row)[0]);
    console.log("Tables:");
    for (const name of names) {
      console.log(`  ${name}`);
    }

    const posts = table("posts");
    const postmeta = table("postmeta");

    console.log(`\nPost types in ${posts}:`);
    const [types] = await db.query(
      `SELECT post_type, post_status, COUNT(*) AS total
       FROM ${posts}
       GROUP BY post_type, post_status
       ORDER BY total DESC`
    );
    console.table(types);

    console.log(`\nPublished posts/pages sample:`);
    const [sample] = await db.query(
      `SELECT ID, post_type, post_name, post_title, LEFT(post_content, 80) AS excerpt
       FROM ${posts}
       WHERE post_status = 'publish' AND post_type IN ('post', 'page')
       ORDER BY post_date DESC
       LIMIT 15`
    );
    console.table(sample);

    console.log(`\npostmeta keys in ${postmeta} (top 40):`);
    const [keys] = await db.query(
      `SELECT meta_key, COUNT(*) AS total
       FROM ${postmeta}
       GROUP BY meta_key
       ORDER BY total DESC
       LIMIT 40`
    );
    console.table(keys);

    const interesting = [
      "_thumbnail_id",
      "_wp_attached_file",
      "_yoast_wpseo_metadesc",
      "_yoast_wpseo_title",
      "_yoast_wpseo_canonical",
    ];
    console.log("\nKnown SEO / image keys present?");
    for (const key of interesting) {
      const [rows] = await db.query(
        `SELECT COUNT(*) AS total FROM ${postmeta} WHERE meta_key = ?`,
        [key]
      );
      console.log(`  ${key}: ${rows[0].total}`);
    }
  } finally {
    await db.end();
  }
}

inspect().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
