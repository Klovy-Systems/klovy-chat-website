import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Blog from "@/components/Blog/Blog";
import { getAllBlogsByLang } from "@/lib/blog";

export const dynamic = "force-static";

export default function BlogPage() {
  const blogsByLang = getAllBlogsByLang();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Blog blogsByLang={blogsByLang} />
      <Footer />
    </div>
  );
}
