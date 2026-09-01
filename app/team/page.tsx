import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import TeamCarousel from "@/components/Team/TeamCarousel";
import TeamIntro from "@/components/Team/TeamIntro";
import { getTeamMembersWithAvatars } from "@/lib/team-avatars";

export const revalidate = 86400;

export default async function TeamPage() {
  const members = await getTeamMembersWithAvatars();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <TeamIntro>
        <TeamCarousel members={members} />
      </TeamIntro>
      <Footer />
    </div>
  );
}
