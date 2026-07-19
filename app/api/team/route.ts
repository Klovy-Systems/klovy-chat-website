import { NextResponse } from "next/server";

const TEAM = [
  { id: "668879650792931329", role: "Founder & CEO" },
  { id: "1141622151728869407", role: "Administrator" },
  { id: "208572267834114049", role: "Administrator" },
  { id: "1105200996021440584", role: "Moderator" },
  { id: "1087829498810073269", role: "Moderator" },
  { id: "690135413079408680", role: "Moderator" },
];

export async function GET() {
  const discordBotToken = process.env.DISCORD_BOT_TOKEN?.trim();

  if (!discordBotToken) {
    return NextResponse.json([]);
  }

  const results = await Promise.all(
    TEAM.map(async (user) => {
      try {
        const res = await fetch(`https://discord.com/api/v10/users/${user.id}`, {
          headers: {
            Authorization: `Bot ${discordBotToken}`,
          },
          cache: "no-store",
        });

        if (!res.ok) return null;

        const data = await res.json();

        const avatar = data.avatar
          ? `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png?size=256`
          : `https://cdn.discordapp.com/embed/avatars/${Number(data.id) % 5}.png`;

        return {
          id: data.id,
          username: data.username,
          avatar,
          role: user.role,
          profile: `https://discord.com/users/${data.id}`,
        };
      } catch {
        return null;
      }
    }),
  );

  return NextResponse.json(results.filter(Boolean));
}
