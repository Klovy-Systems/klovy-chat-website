import { fetchDiscordUser } from "@/lib/discord";
import { TEAM_MEMBERS, type TeamMember } from "@/lib/team";

export async function getTeamMembersWithAvatars(): Promise<TeamMember[]> {
  const token = process.env.DISCORD_BOT_TOKEN;
  if (!token) return TEAM_MEMBERS;

  return Promise.all(
    TEAM_MEMBERS.map(async (member) => {
      if (member.avatarHash) return member;

      const user = await fetchDiscordUser(member.id);
      if (!user?.avatar) return member;

      return { ...member, avatarHash: user.avatar };
    }),
  );
}
