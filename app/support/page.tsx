import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Support from "@/components/Support/Support";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Support />
      <Footer />
    </div>
  );
}
