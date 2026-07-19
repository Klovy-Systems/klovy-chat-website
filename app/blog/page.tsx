import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Blog from "@/components/Blog/Blog";

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Blog />
      <Footer />
    </div>
  );
}
