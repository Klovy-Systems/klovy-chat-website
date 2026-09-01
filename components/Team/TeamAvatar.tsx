"use client";

import { useEffect, useState } from "react";
import { getDiscordAvatarUrl } from "@/lib/team";

type TeamAvatarProps = {
  userId: string;
  name: string;
  avatarHash?: string;
};

export default function TeamAvatar({ userId, name, avatarHash }: TeamAvatarProps) {
  const [failed, setFailed] = useState(false);
  const avatarUrl = getDiscordAvatarUrl(userId, avatarHash);
  const initial = name.charAt(0).toUpperCase() || "?";

  useEffect(() => {
    setFailed(false);
  }, [avatarUrl]);

  if (failed) {
    return (
      <div
        className="w-28 h-28 rounded-full bg-primary/20 text-primary flex items-center justify-center text-3xl font-bold shrink-0"
        aria-hidden
      >
        {initial}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={avatarUrl}
      alt={name}
      width={112}
      height={112}
      className="w-28 h-28 rounded-full object-cover shrink-0 bg-primary/10"
      onError={() => setFailed(true)}
      referrerPolicy="no-referrer"
    />
  );
}
