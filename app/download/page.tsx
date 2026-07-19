import Download from "@/components/Download/Download";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Download />
      <Footer />
    </div>
  );
}
