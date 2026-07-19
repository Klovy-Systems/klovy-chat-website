import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Team from "@/components/Team/Team";
import { getTeamMembers } from "@/lib/team";

export const dynamic = "force-dynamic";

export default async function TeamPage() {
  const users = await getTeamMembers();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Team users={users} />
      <Footer />
    </div>
  );
}
