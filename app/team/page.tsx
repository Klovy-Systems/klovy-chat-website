import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Team from "@/components/Team/Team";
import { TEAM_MEMBERS } from "@/lib/team";

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Team users={TEAM_MEMBERS} />
      <Footer />
    </div>
  );
}
