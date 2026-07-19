import { TEAM_MEMBERS } from "@/lib/team";
import TeamAvatar from "./TeamAvatar";

export default function TeamGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
      {TEAM_MEMBERS.map((member) => (
        <a
          key={member.id}
          href={member.profile}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center text-center p-8 rounded-2xl border border-light_border dark:border-dark_border hover:border-primary/40 hover:-translate-y-1 transition"
        >
          <div className="mb-6">
            <TeamAvatar name={member.name} avatar={member.avatar} />
          </div>

          <h3 className="text-xl font-semibold text-light_text dark:text-dark_text group-hover:text-primary transition">
            {member.name}
          </h3>
          <p className="text-sm text-primary mt-2">{member.role}</p>
        </a>
      ))}
    </div>
  );
}
