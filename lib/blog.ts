import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type BlogMeta = {
  slug: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  readingTime?: string;
};

export type BlogPost = BlogMeta & {
  content: string;
};

function getBlogSlugsFromDisk(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

function readBlogFile(slug: string, lang: string): BlogPost | null {
  const localizedPath = path.join(BLOG_DIR, slug, `${lang}.md`);
  const enPath = path.join(BLOG_DIR, slug, "en.md");
  const plPath = path.join(BLOG_DIR, slug, "pl.md");
  const finalPath = fs.existsSync(localizedPath)
    ? localizedPath
    : fs.existsSync(enPath)
      ? enPath
      : plPath;

  if (!fs.existsSync(finalPath)) return null;

  const fileContent = fs.readFileSync(finalPath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title,
    description: data.description,
    image: data.image,
    tags: data.tags || [],
    readingTime: data.readingTime,
    content,
  };
}

export function getBlogSlugs(): string[] {
  return getBlogSlugsFromDisk();
}

export function getAllBlogs(lang: string): BlogMeta[] {
  return getBlogSlugsFromDisk()
    .map((slug) => {
      const post = readBlogFile(slug, lang);
      if (!post) return null;

      const { content: _content, ...meta } = post;
      return meta;
    })
    .filter((post): post is BlogMeta => post !== null);
}

export function getBlogPost(slug: string, lang: string): BlogPost | null {
  return readBlogFile(slug, lang);
}

export function getAllBlogsByLang(): Record<string, BlogMeta[]> {
  return {
    pl: getAllBlogs("pl"),
    en: getAllBlogs("en"),
  };
}

export function getBlogPostByLang(slug: string): Record<string, BlogPost | null> {
  return {
    pl: getBlogPost(slug, "pl"),
    en: getBlogPost(slug, "en"),
  };
}
