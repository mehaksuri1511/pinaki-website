import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { excerptFrom, textFromHtml } from "./lib/clean.js";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const jsonPath = path.join(dirname, "output", "wordpress-export.json");
const wpCoursesPath = path.join(dirname, "..", "..", "client", "src", "data", "wpCourses.js");

const COURSE_PAGES = [
  {
    slug: "introduction-to-generative-ai",
    category: "Artificial Intelligence",
    duration: "12 Weeks",
    level: "Beginner to Advanced",
    image: "/wp-media/the-future-of-generative-ai-in-software-development-e1738147482454.png",
    photos: "proof",
  },
  {
    slug: "cyber-security-and-ethical-hacking",
    category: "Security",
    duration: "12 Weeks",
    level: "Intermediate",
    image: "/wp-media/cyber-security-and-ethical-hacking.jpg",
    photos: "proof",
  },
  {
    slug: "machine-learning",
    category: "Data Science",
    duration: "14 Weeks",
    level: "Intermediate",
    image: "/wp-media/what-is-data-science-2.jpg",
    photos: "proof",
  },
  {
    slug: "advanced-digital-marketing",
    category: "Marketing",
    duration: "10 Weeks",
    level: "Beginner to Intermediate",
    image: "/wp-media/ai-with-digital-marketing.jpg",
    photos: "proof",
  },
  {
    slug: "full-stack-development",
    category: "Web Development",
    duration: "16 Weeks",
    level: "Beginner to Advanced",
    image: "/wp-media/software-development-lifecycle-qwozynr2ed8qnezeokyzvpyslnek27aa5fj1onugf4.webp",
    photos: "fullstack",
  },
  {
    slug: "data-scientist-global-certification",
    category: "Certification",
    duration: "16 Weeks",
    level: "Intermediate to Advanced",
    image: "/wp-media/data-scientist-scaled.jpg",
    photos: "proof",
  },
];

const PHOTO_SETS = {
  proof: [
    { src: "/wp-media/untitled-design-1.webp", alt: "Hands-on learning" },
    { src: "/wp-media/live-classes-by-faculty.webp", alt: "Live classes by faculty" },
    { src: "/wp-media/practical-experience.webp", alt: "Practical experience" },
    { src: "/wp-media/regular-11-mentorship.webp", alt: "1:1 mentorship" },
    { src: "/wp-media/career-support.webp", alt: "Career support" },
    { src: "/wp-media/aspirational-pair-group.webp", alt: "Peer learning" },
  ],
  fullstack: [
    { src: "/wp-media/front-end-development-qwo4wohlq6t9rywswbvd8u8159s6y6zfry2mythh28.webp", alt: "Front-end development" },
    { src: "/wp-media/back-end-development-qwozr8swhf3b25r5zdky7lbvw7ybc5uigq95e2u9i8.webp", alt: "Back-end development" },
    { src: "/wp-media/full-stack-development-projects-qwozvf72uwt6nropl6l9ajdmxvd1jqfkdemu6cn9uo.webp", alt: "Full stack projects" },
    { src: "/wp-media/software-development-lifecycle-qwozynr2ed8qnezeokyzvpyslnek27aa5fj1onugf4.webp", alt: "Software development lifecycle" },
    { src: "/wp-media/additional-skills-qwp02s9ke6w1lszold61tohmgj2judnvdulridq940.webp", alt: "Additional skills" },
    { src: "/wp-media/career-development-qwp06ws2e0jck6zyi5d3rn0gbeqjmk1gm9ohc3m1sw.webp", alt: "Career development" },
  ],
};

const PARTNER_LOGOS = [
  { src: "/wp-media/flipkart-logo.jpg", alt: "Flipkart" },
  { src: "/wp-media/olx-logo.jpg", alt: "OLX" },
  { src: "/wp-media/uber-logo.jpg", alt: "Uber" },
  { src: "/wp-media/ola-logo.jpg", alt: "Ola" },
  { src: "/wp-media/paytm-logo.jpg", alt: "Paytm" },
  { src: "/wp-media/paypal-logo.jpg", alt: "PayPal" },
  { src: "/wp-media/goldman-sachs-logo.jpg", alt: "Goldman Sachs" },
  { src: "/wp-media/nvidia-logo.jpg", alt: "NVIDIA" },
  { src: "/wp-media/oneplus-logo.jpg", alt: "OnePlus" },
  { src: "/wp-media/atlassian-logo.jpg", alt: "Atlassian" },
  { src: "/wp-media/myntra-logo.jpg", alt: "Myntra" },
  { src: "/wp-media/gojek-logo.jpg", alt: "Gojek" },
];

const HIGHLIGHT_ALLOW = [
  "missed a class",
  "work / family",
  "have doubts",
  "want to revise",
  "live interactive",
  "one-to-one",
  "corporate mentors",
  "global certification",
  "real-world live",
  "lifetime support",
];

const HIGHLIGHT_SKIP =
  /easy registration|quick evaluation|enroll in your course|placemenet|placement support|^duration$|^lectures$/i;

const DEFAULT_HIGHLIGHTS = [
  {
    title: "Missed a class?",
    text: "Watch the recording later, with teaching assistants available to solve your doubts",
  },
  {
    title: "Work / family needs time?",
    text: "Pause your course and restart a month later with the next batch!",
  },
  {
    title: "Have doubts?",
    text: "Get them resolved over text / video by our expert teaching assistants!",
  },
  {
    title: "Want to revise?",
    text: "Access assignments/notes lifelong and recordings upto 6 months post course completion",
  },
];

const INTRO_SKIP =
  /^(home\s*\/|watch the recording|pause your course|get them resolved|access assignments|learn directly from|personalized guidance|get trained by|earn a globally|work on hands-on|continuous learning)/i;

function decode(text) {
  return String(text || "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function plain(html) {
  return decode(textFromHtml(html));
}

function cleanOverview(title, html, excerpt) {
  let text = decode(excerptFrom(html, excerpt));
  const titleRe = title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  text = text.replace(new RegExp(`^${titleRe}\\s*Home\\s*/\\s*.*?${titleRe}\\s*`, "i"), "");
  text = text.replace(/^Home\s*\/\s*/i, "");
  text = text.replace(new RegExp(`^${titleRe}\\s+`, "i"), "");
  return text.trim();
}

function extractIntro(html, max = 3) {
  return [...html.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)]
    .map((match) => plain(match[1]))
    .filter((text) => text.length > 80 && !INTRO_SKIP.test(text) && !/interviewbit/i.test(text))
    .slice(0, max);
}

function extractHighlights(html) {
  const pairs = [...html.matchAll(/<h3\b[^>]*>([\s\S]*?)<\/h3>\s*<p\b[^>]*>([\s\S]*?)<\/p>/gi)];
  const preferred = [];
  const fallback = [];

  for (const match of pairs) {
    const title = plain(match[1])
      .replace(/:$/, "")
      .replace(/^./, (char) => char.toUpperCase());
    const text = plain(match[2]);
    if (!title || !text || HIGHLIGHT_SKIP.test(title)) {
      continue;
    }

    const item = { title, text };
    if (HIGHLIGHT_ALLOW.some((key) => title.toLowerCase().includes(key))) {
      preferred.push(item);
    } else if (text.length > 20 && text.length < 280) {
      fallback.push(item);
    }
  }

  return (preferred.length ? preferred : fallback).slice(0, 6);
}

function extractModules(html) {
  return [...html.matchAll(/<details[\s\S]*?<summary[\s\S]*?>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/gi)]
    .map((match) => ({
      title: plain(match[1]),
      points: [...match[2].matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)]
        .map((item) => plain(item[1]))
        .filter(Boolean),
    }))
    .filter((module) => module.title && module.points.length);
}

async function main() {
  const payload = JSON.parse(await fs.readFile(jsonPath, "utf8"));
  const pages = payload.items.filter((item) => item.type === "page");

  const courses = COURSE_PAGES.map((meta, index) => {
    const page = pages.find((item) => item.slug === meta.slug);
    if (!page) {
      throw new Error(`Missing WordPress page for ${meta.slug}`);
    }

    const title = decode(page.title);
    const highlights = extractHighlights(page.html);
    return {
      id: 2000 + index,
      slug: meta.slug,
      title,
      category: meta.category,
      duration: meta.duration,
      level: meta.level,
      image: meta.image,
      overview: cleanOverview(page.title, page.html, page.excerpt),
      intro: extractIntro(page.html),
      highlights: highlights.length ? highlights : DEFAULT_HIGHLIGHTS,
      photos: PHOTO_SETS[meta.photos],
      modules: extractModules(page.html),
      logos: PARTNER_LOGOS,
    };
  });

  const file = `// Generated from WordPress course pages.
const wpCourses = ${JSON.stringify(courses, null, 2)};

export default wpCourses;
`;

  await fs.writeFile(wpCoursesPath, file);
  console.log(`Wrote ${wpCoursesPath}`);
  for (const course of courses) {
    console.log(
      `  ${course.slug} — ${course.intro.length} paras, ${course.highlights.length} highlights, ${course.photos.length} photos, ${course.modules.length} modules`
    );
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
