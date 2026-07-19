import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const lang = new URL(req.url).searchParams.get("lang") || "pl";

  const baseDir = path.join(process.cwd(), "content/blog");
  const slugs = fs.readdirSync(baseDir);

  const blogs = slugs.map((slug) => {
    const filePath = path.join(baseDir, slug, `${lang}.md`);
    const fallback = path.join(baseDir, slug, "pl.md");

    const finalPath = fs.existsSync(filePath) ? filePath : fallback;

    const { data } = matter(fs.readFileSync(finalPath, "utf-8"));

    return {
      slug,
      title: data.title,
      description: data.description,
      image: data.image,
      tags: data.tags || [],
      readingTime: data.readingTime,
    };
  });

  return NextResponse.json(blogs);
}
