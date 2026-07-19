"use client";

import { useState } from "react";

type TeamAvatarProps = {
  name: string;
  avatar?: string;
};

export default function TeamAvatar({ name, avatar }: TeamAvatarProps) {
  const [failed, setFailed] = useState(false);
  const initial = name.charAt(0).toUpperCase() || "?";

  if (!avatar || failed) {
    return (
      <div
        className="w-24 h-24 rounded-full bg-primary/20 text-primary flex items-center justify-center text-3xl font-bold shrink-0"
        aria-hidden
      >
        {initial}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={avatar}
      alt={name}
      width={96}
      height={96}
      className="w-24 h-24 rounded-full object-cover shrink-0 bg-primary/10"
      onError={() => setFailed(true)}
    />
  );
}
