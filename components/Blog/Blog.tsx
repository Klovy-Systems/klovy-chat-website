"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import type { BlogMeta } from "@/lib/blog";
import BlogCard from "./BlogCard";

type BlogProps = {
  blogsByLang: Record<string, BlogMeta[]>;
};

export default function Blog({ blogsByLang }: BlogProps) {
  const { lang } = useLanguage();
  const blogs = blogsByLang[lang] ?? blogsByLang.pl ?? [];

  return (
    <section className="flex-1 max-w-7xl mx-auto px-spacing_lg py-section">
      <h1 className="text-4xl font-bold mb-spacing_lg">Blog</h1>

      {blogs.length === 0 ? (
        <p className="opacity-70">Brak wpisów na blogu.</p>
      ) : (
        <div className="grid gap-spacing_lg md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      )}
    </section>
  );
}
