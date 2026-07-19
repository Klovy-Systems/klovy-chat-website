export type TeamMember = {
  id: string;
  name: string;
  avatar: string;
  role: string;
  profile: string;
};

function discordAvatar(userId: string, avatarIndex: number) {
  return `https://cdn.discordapp.com/embed/avatars/${avatarIndex}.png`;
}

/** Statyczna lista zespołu — edytuj name i avatar w tym pliku. */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "668879650792931329",
    name: "klovy0603",
    avatar: discordAvatar("668879650792931329", 4),
    role: "Founder & CEO",
    profile: "https://discord.com/users/668879650792931329",
  },
  {
    id: "1141622151728869407",
    name: "Admin",
    avatar: discordAvatar("1141622151728869407", 2),
    role: "Administrator",
    profile: "https://discord.com/users/1141622151728869407",
  },
  {
    id: "208572267834114049",
    name: "Admin",
    avatar: discordAvatar("208572267834114049", 0),
    role: "Administrator",
    profile: "https://discord.com/users/208572267834114049",
  },
  {
    id: "1105200996021440584",
    name: "Moderator",
    avatar: discordAvatar("1105200996021440584", 1),
    role: "Moderator",
    profile: "https://discord.com/users/1105200996021440584",
  },
  {
    id: "1087829498810073269",
    name: "Moderator",
    avatar: discordAvatar("1087829498810073269", 3),
    role: "Moderator",
    profile: "https://discord.com/users/1087829498810073269",
  },
  {
    id: "690135413079408680",
    name: "Moderator",
    avatar: discordAvatar("690135413079408680", 0),
    role: "Moderator",
    profile: "https://discord.com/users/690135413079408680",
  },
];
