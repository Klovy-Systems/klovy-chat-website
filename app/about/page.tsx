import Roadmap from "@/components/About/Roadmap";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
}
