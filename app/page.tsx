import Image from "next/image";
import { StyleHTMLAttributes } from "react";
import { IntroSection } from "./IntroSection";

export function Emoji({
  style = {},
  emoji,
  size,
}: {
  emoji: string;
  size: string | number;
  style?: StyleHTMLAttributes<HTMLImageElement>["style"];
}) {
  return (
    <img
      alt="Emoji"
      src={`https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/${emoji.toLowerCase()}.png`}
      width={size}
      height={size}
      style={style}
    />
  );
}

function Skills() {
  return (
    <div>
      <h2 className="subheading">Skills</h2>
      <div className="flex items-center gap-2">
        <Image
          width={40}
          height={40}
          src="/skills/typescript.png"
          alt="Typescript"
          className="rounded-md"
        />
        <Image
          width={40}
          height={40}
          src="/skills/javascript.png"
          alt="Javascript"
          className="rounded-md"
        />
        <Image width={40} height={40} src="/skills/react.png" alt="React" />
        <Image width={40} height={40} src="/skills/css.png" alt="CSS" />
        <Image width={40} height={40} src="/skills/nextjs.png" alt="Next.JS" />
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <h2 className="subheading">Projects</h2>
      <div className="flex flex-col gap-2">
        {[
          {
            name: "Dysperse",
            status: "New",
            description: "Meet the new standard for productivity.",
          },
          {
            name: "Popvote",
            status: false,
            description: "Meet the new standard for productivity.",
          },
          {
            name: "SchoolNerd",
            status: false,
            description:
              "Google classroom, but with with superpowers. Winner of HackOR 2021",
          },
        ].map((project) => (
          <div className="card" key={project.name}>
            <Image
              src={`/projects/${project.name.toLowerCase()}.png`}
              width={50}
              height={50}
              alt={`${project.name} logo`}
              className="card-logo"
            />
            <div>
              <h3 className="card-title font-bold flex items-center gap-2">
                {project.name}
                {project.status && (
                  <div className="chip bg-orange-200 font-medium text-xs">
                    {project.status}
                  </div>
                )}
              </h3>
              <p className="card-subtitle">{project.description}</p>
            </div>
            <span className="material-symbols-rounded arrow">north_east</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main
      className="p-5 px-10 border-2 border-black rounded-3xl mx-auto w-full h-full flex items-center"
      style={{
        boxShadow: `2px 2px 0 4px black`,
      }}
    >
      <div className="flex w-full">
        <div className="flex-grow w-full">
          <IntroSection />
        </div>
        <div className="flex-grow w-full flex flex-col gap-8">
          <Skills />
          <Projects />
        </div>
      </div>
    </main>
  );
}
