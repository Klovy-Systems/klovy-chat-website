import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export function getAllBlogs() {
  const files = fs.readdirSync(BLOG_DIR);

  return files.map((file) => {
    const slug = file.replace(".md", "");
    const fullPath = path.join(BLOG_DIR, file);
    const fileContent = fs.readFileSync(fullPath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title,
      description: data.description,
      image: data.image,
      tags: data.tags || [],
      readingTime: data.readingTime,
    };
  });
}

export function getBlog(slug: string) {
  const fullPath = path.join(BLOG_DIR, `${slug}.md`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContent = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    meta: {
      title: data.title,
      description: data.description,
      image: data.image,
      tags: data.tags || [],
      readingTime: data.readingTime,
    },
    content,
  };
}
