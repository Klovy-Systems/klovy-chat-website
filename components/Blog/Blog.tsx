"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import BlogCard from "./BlogCard";

export default function Blog() {
  const { lang } = useLanguage();
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    fetch(`/api/blogs?lang=${lang}`)
      .then((res) => res.json())
      .then(setBlogs);
  }, [lang]);

  return (
    <section className="flex-1 max-w-7xl mx-auto px-spacing_lg py-section">
      <h1 className="text-4xl font-bold mb-spacing_lg">Blog</h1>

      <div className="grid gap-spacing_lg md:grid-cols-2 xl:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </section>
  );
}
