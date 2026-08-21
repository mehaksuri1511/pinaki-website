const BLOCK_COMMENT = /<!--\s+\/?wp:[\s\S]*?-->/g;
const SHORTCODE = /\[[/]?[a-zA-Z][\w-]*(?:\s[^\]]*)?\]/g;
const SCRIPT_TAGS = /<(script|style|noscript|form)[\s\S]*?<\/\1>/gi;
const ON_ATTR = /\s+on\w+="[^"]*"/gi;
const EMPTY_P = /<p>(?:\s|&nbsp;)*<\/p>/gi;

export function stripWordPressCruft(html) {
  if (!html) {
    return "";
  }

  return html
    .replace(BLOCK_COMMENT, "")
    .replace(SCRIPT_TAGS, "")
    .replace(ON_ATTR, "")
    .replace(SHORTCODE, "")
    .replace(EMPTY_P, "")
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function textFromHtml(html) {
  return stripWordPressCruft(html)
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

export function excerptFrom(html, fallback = "") {
  const text = textFromHtml(fallback) || textFromHtml(html);
  if (text.length <= 220) {
    return text;
  }
  return `${text.slice(0, 217).trim()}...`;
}

export function readMinutes(html) {
  const words = textFromHtml(html).split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

export function splitSections(html) {
  const cleaned = stripWordPressCruft(html);
  const parts = cleaned.split(/<h2\b[^>]*>/i);
  const sections = [];

  if (parts.length === 1) {
    const content = textFromHtml(cleaned);
    if (content) {
      sections.push({ heading: "Overview", content });
    }
    return sections;
  }

  const intro = textFromHtml(parts[0]);
  if (intro) {
    sections.push({ heading: "Overview", content: intro });
  }

  for (const part of parts.slice(1)) {
    const [headingHtml, ...rest] = part.split(/<\/h2>/i);
    const heading = textFromHtml(headingHtml || "Section");
    const bodyHtml = rest.join("</h2>");
    const points = [...bodyHtml.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)].map((match) =>
      textFromHtml(match[1])
    ).filter(Boolean);

    const content = textFromHtml(bodyHtml.replace(/<li\b[\s\S]*?<\/li>/gi, ""));
    const section = { heading };
    if (content) {
      section.content = content;
    }
    if (points.length) {
      section.points = points;
    }
    sections.push(section);
  }

  return sections;
}

export function collectImageUrls(html, siteUrl) {
  const urls = new Set();
  const origin = (siteUrl || "").replace(/\/$/, "");
  const matches = html.matchAll(/<img\b[^>]*src=["']([^"']+)["']/gi);

  for (const match of matches) {
    let src = match[1];
    if (src.startsWith("//")) {
      src = `https:${src}`;
    } else if (src.startsWith("/")) {
      src = `${origin}${src}`;
    }
    if (/^https?:\/\//i.test(src)) {
      urls.add(src);
    }
  }

  return [...urls];
}

export function rewriteImageUrls(html, urlMap) {
  let next = html;
  for (const [from, to] of urlMap.entries()) {
    next = next.split(from).join(to);
  }
  return next;
}

export function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return String(value || "");
  }
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "untitled";
}
