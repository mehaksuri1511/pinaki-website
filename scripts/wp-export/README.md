# WordPress → Node one-time export

Read-only dump of published posts and pages from Hostinger MySQL. You run this locally. Credentials stay in `.env` and are never committed.

The React site stores blogs as static files (`client/src/data/blogData.js`), not a database. Export writes JSON first. Import copies reviewed JSON + images into the client.

## Setup

```bash
cd scripts/wp-export
cp .env.example .env
# fill WP_DB_* using a read-only Hostinger user
npm install
```

Ask Hostinger for phpMyAdmin / MySQL host, database name, user, password, and table prefix (usually `wp_`). Prefer a user with SELECT only.

## 1. Inspect (no files written)

```bash
npm run inspect
```

Prints tables, post type/status counts, and the postmeta keys actually in use (featured image, Yoast, ACF, etc.).

## 2. Export (JSON only until you review)

```bash
npm run export
```

Writes:

- `output/wordpress-export.json` — posts, pages, cleaned HTML, SEO, categories
- `output/media/` — featured + in-content images (if `WP_DOWNLOAD_IMAGES=1`)

Open the JSON and check titles, slugs, and HTML before importing.

## 3. Import into the React site

Dry run (default): prints what would change.

```bash
npm run import
```

Apply after you are happy with the JSON:

```bash
npm run import -- --apply
```

This copies images to `client/public/wp-media/` and writes `client/src/data/wpBlogs.js`. Existing hand-written blogs in `blogData.js` are left alone. The app merges both lists.

## Safety

- Scripts only run `SELECT`
- `.env` and `output/` are gitignored
- Nothing is pushed to GitHub from these scripts
