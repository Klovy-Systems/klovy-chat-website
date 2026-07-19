import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Team from "@/components/Team/Team";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Team />
      <Footer />
    </div>
  );
}
