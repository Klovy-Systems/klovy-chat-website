type DiscordUser = {
  id: string;
  avatar: string | null;
};

export async function fetchDiscordUser(
  userId: string,
): Promise<DiscordUser | null> {
  const token = process.env.DISCORD_BOT_TOKEN;
  if (!token) return null;

  try {
    const res = await fetch(`https://discord.com/api/v10/users/${userId}`, {
      headers: {
        Authorization: `Bot ${token}`,
      },
      next: { revalidate: 86400 },
    });

    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}
