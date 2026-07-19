import Footer from "@/components/Footer/Footer";
import Features from "@/components/MainPage/Features";
import Hero from "@/components/MainPage/Hero";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
