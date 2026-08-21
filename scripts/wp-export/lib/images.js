import fs from "node:fs/promises";
import path from "node:path";
import { slugify } from "./clean.js";

function extensionFrom(url, contentType) {
  const fromUrl = path.extname(new URL(url).pathname).toLowerCase();
  if (fromUrl && fromUrl.length <= 5) {
    return fromUrl;
  }
  if (contentType?.includes("png")) {
    return ".png";
  }
  if (contentType?.includes("webp")) {
    return ".webp";
  }
  if (contentType?.includes("gif")) {
    return ".gif";
  }
  return ".jpg";
}

export async function downloadImages(urls, mediaDir) {
  const urlMap = new Map();
  await fs.mkdir(mediaDir, { recursive: true });

  for (const url of urls) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.warn(`Skip image ${url} (${response.status})`);
        continue;
      }

      const buffer = Buffer.from(await response.arrayBuffer());
      const base = slugify(path.basename(new URL(url).pathname, path.extname(new URL(url).pathname)));
      const filename = `${base}${extensionFrom(url, response.headers.get("content-type"))}`;
      const target = path.join(mediaDir, filename);
      await fs.writeFile(target, buffer);
      urlMap.set(url, `/wp-media/${filename}`);
      console.log(`Saved ${filename}`);
    } catch (error) {
      console.warn(`Skip image ${url}: ${error.message}`);
    }
  }

  return urlMap;
}
