import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  const lang = new URL(req.url).searchParams.get("lang") || "pl";

  const basePath = path.join(process.cwd(), "content/blog", slug);

  const filePath = path.join(basePath, `${lang}.md`);
  const fallbackPath = path.join(basePath, "pl.md");

  const finalPath = fs.existsSync(filePath) ? filePath : fallbackPath;

  if (!fs.existsSync(finalPath)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const file = fs.readFileSync(finalPath, "utf-8");
  const { data, content } = matter(file);

  return NextResponse.json({
    meta: {
      title: data.title,
      description: data.description,
      image: data.image,
      tags: data.tags || [],
      readingTime: data.readingTime,
    },
    content,
  });
}
