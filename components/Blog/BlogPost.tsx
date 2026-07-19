"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import BlogContent from "./BlogContent";

type BlogMeta = {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  readingTime?: string;
};

export default function BlogPost({ slug }: { slug: string }) {
  const { lang } = useLanguage();
  const [content, setContent] = useState<string | null>(null);
  const [meta, setMeta] = useState<BlogMeta | null>(null);

  useEffect(() => {
    fetch(`/api/blog/${slug}?lang=${lang}`)
      .then((res) => res.json())
      .then((data) => {
        setMeta(data.meta);
        setContent(data.content);
      });
  }, [slug, lang]);

  if (!content || !meta) return <p>Loading...</p>;

  return (
    <article className="w-full py-section">
      <div className="max-w-7xl mx-auto px-spacing_lg xl:px-spacing_xl">
        <h1 className="text-4xl font-bold mb-4">{meta.title}</h1>
        <p className="opacity-70 mb-6">{meta.description}</p>

        <BlogContent content={content} />
      </div>
    </article>
  );
}
