export type TeamMember = {
  id: string;
  /** Nick wyświetlany na stronie */
  name: string;
  /** Opcjonalnie: /team/nick.webp albo pełny URL — bez tego pokaże się inicjał */
  avatar?: string;
  role: string;
  profile: string;
};

/** Uzupełnij name każdej osoby. Opcjonalnie dodaj zdjęcia do public/team/ */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "668879650792931329",
    name: "klovy0603",
    role: "Founder & CEO",
    profile: "https://discord.com/users/668879650792931329",
  },
  {
    id: "1141622151728869407",
    name: "MaksiK023",
    role: "Administrator",
    profile: "https://discord.com/users/1141622151728869407",
  },
  {
    id: "208572267834114049",
    name: "HeXer69",
    role: "Administrator",
    profile: "https://discord.com/users/208572267834114049",
  },
  {
    id: "1105200996021440584",
    name: "R00trix",
    role: "Moderator",
    profile: "https://discord.com/users/1105200996021440584",
  },
  {
    id: "1087829498810073269",
    name: "Bebasowy",
    role: "Moderator",
    profile: "https://discord.com/users/1087829498810073269",
  },
  {
    id: "690135413079408680",
    name: "Zayden",
    role: "Moderator",
    profile: "https://discord.com/users/690135413079408680",
  },
];
