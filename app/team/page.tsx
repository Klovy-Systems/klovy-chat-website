import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import TeamGrid from "@/components/Team/TeamGrid";
import TeamIntro from "@/components/Team/TeamIntro";

export const dynamic = "force-static";

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <TeamIntro>
        <TeamGrid />
      </TeamIntro>
      <Footer />
    </div>
  );
}
