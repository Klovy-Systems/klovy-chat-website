import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import TeamCarousel from "@/components/Team/TeamCarousel";
import TeamIntro from "@/components/Team/TeamIntro";
import { TEAM_MEMBERS } from "@/lib/team";
import TeamCarousel from "@/components/Team/TeamCarousel";
import TeamIntro from "@/components/Team/TeamIntro";

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <TeamIntro>
        <TeamCarousel members={TEAM_MEMBERS} />
      </TeamIntro>
      <Footer />
    </div>
  );
}
