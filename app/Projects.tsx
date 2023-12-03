"use client";
import Image from "next/image";

export function Projects() {
  return (
    <div className="w-full">
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
              <h3 className="card-title font-bold flex items-center gap-x-3 gap-y-1 pr-20 flex-wrap-reverse">
                {project.name}
                {project.status && (
                  <div className="chip bg-orange-200 font-medium text-xs -ml-1">
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
