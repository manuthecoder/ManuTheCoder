"use client";
import Image from "next/image";
import { StyleHTMLAttributes } from "react";
import { IntroSection } from "./IntroSection";
import { Skills } from "./Skills";

function Projects() {
  return (
    <div>
      <h2 className="subheading">Projects</h2>
      <div className="flex flex-col gap-3">
        {[
          {
            name: "Dysperse",
            status: "New",
            description: "Meet the new standard for productivity.",
            href: "//dysperse.com",
          },
          {
            name: "Popvote",
            status: false,
            description: "Meet the new standard for productivity.",
            href: "//popvote.vercel.app",
          },
          {
            name: "SchoolNerd",
            status: "Deprecated",
            description:
              "Google classroom, with superpowers. Winner of HackOR 2021",
            href: "https://devpost.com/software/schoolnerd",
          },
        ].map((project) => (
          <div
            className="card"
            key={project.name}
            onClick={() => {
              if (project.href) window.open(project.href);
            }}
          >
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
        <div className="w-full flex content-center items-center">
          <div>
            <IntroSection />
          </div>
        </div>
        <div className="flex-grow w-full flex flex-col gap-8">
          <Skills />
          <Projects />
        </div>
      </div>
    </main>
  );
}
