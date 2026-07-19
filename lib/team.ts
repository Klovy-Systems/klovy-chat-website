export type TeamMember = {
  id: string;
  username: string;
  avatar: string;
  role: string;
  profile: string;
};

/** Statyczna lista zespołu — edytuj username i avatar w tym pliku. */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "668879650792931329",
    username: "klovy0603",
    avatar: "https://cdn.discordapp.com/embed/avatars/4.png",
    role: "Founder & CEO",
    profile: "https://discord.com/users/668879650792931329",
  },
  {
    id: "1141622151728869407",
    username: "Administrator",
    avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
    role: "Administrator",
    profile: "https://discord.com/users/1141622151728869407",
  },
  {
    id: "208572267834114049",
    username: "Administrator",
    avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
    role: "Administrator",
    profile: "https://discord.com/users/208572267834114049",
  },
  {
    id: "1105200996021440584",
    username: "Moderator",
    avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
    role: "Moderator",
    profile: "https://discord.com/users/1105200996021440584",
  },
  {
    id: "1087829498810073269",
    username: "Moderator",
    avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
    role: "Moderator",
    profile: "https://discord.com/users/1087829498810073269",
  },
  {
    id: "690135413079408680",
    username: "Moderator",
    avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
    role: "Moderator",
    profile: "https://discord.com/users/690135413079408680",
  },
];
