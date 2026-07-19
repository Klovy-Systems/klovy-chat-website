import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import BlogPost from "@/components/Blog/BlogPost";
import { getBlogPostByLang, getBlogSlugs } from "@/lib/blog";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const postsByLang = getBlogPostByLang(slug);

  if (!postsByLang.pl && !postsByLang.en) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <BlogPost postsByLang={postsByLang} />
      <Footer />
    </>
  );
}
