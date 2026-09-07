import Image from "next/image";
import { SectionHead } from "./SectionHead";

const SKILLS = [
  { name: "Ruby", icon: "/skills/ruby.png" },
  { name: "PostgreSQL", icon: "/skills/postgres.png" },
  { name: "Typescript", icon: "/skills/typescript.png" },
  { name: "React", icon: "/skills/react.png" },
  { name: "Expo", icon: "/skills/expo.png" },
  { name: "CSS", icon: "/skills/css.png" },
  { name: "Next.JS", icon: "/skills/nextjs.png" },
];

export function Skills() {
  return (
    <section className="section skills">
      <SectionHead index="01" label="Skills" />
      <div className="skills__list">
        {SKILLS.map((skill) => (
          <span className="skill" key={skill.name}>
            <Image src={skill.icon} alt={skill.name} width={17} height={17} />
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}
