type DiscordUser = {
  id: string;
  avatar: string | null;
};

/** ID serwera Klovy Chat (z zaproszenia discord.com/invite/rcjCTm9MHS) */
const DEFAULT_GUILD_ID = "925444405383557180";

function getDiscordBotToken(): string | undefined {
  const raw = process.env.DISCORD_BOT_TOKEN?.trim();
  if (!raw) return undefined;

  return raw.startsWith("Bot ") ? raw.slice(4).trim() : raw;
}

async function fetchDiscordJson<T>(
  url: string,
  token: string,
): Promise<{ ok: true; data: T } | { ok: false; status: number }> {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bot ${token}`,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      if (process.env.NODE_ENV === "development") {
        console.warn(`Discord API ${res.status} for ${url}`);
      }
      return { ok: false, status: res.status };
    }

    return { ok: true, data: await res.json() };
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`Discord API error for ${url}`, error);
    }
    return { ok: false, status: 0 };
  }
}

export async function fetchDiscordUser(
  userId: string,
): Promise<DiscordUser | null> {
  const token = getDiscordBotToken();
  if (!token) return null;

  const guildId = process.env.DISCORD_GUILD_ID?.trim() || DEFAULT_GUILD_ID;

  const memberResult = await fetchDiscordJson<{
    user: DiscordUser;
  }>(`https://discord.com/api/v10/guilds/${guildId}/members/${userId}`, token);

  if (memberResult.ok) {
    return memberResult.data.user;
  }

  const userResult = await fetchDiscordJson<DiscordUser>(
    `https://discord.com/api/v10/users/${userId}`,
    token,
  );

  return userResult.ok ? userResult.data : null;
}
