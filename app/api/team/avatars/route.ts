import { getTeamMembersWithAvatars } from "@/lib/team-avatars";

export const dynamic = "force-dynamic";

export async function GET() {
  const members = await getTeamMembersWithAvatars();
  return Response.json(members);
}
