import Image from "next/image";
import { SectionHead } from "./SectionHead";

/**
 * Logos are served from /public rather than each project's live favicon, so the
 * grid doesn't depend on those origins staying up (dysperse.com/favicon.ico
 * currently 404s) and doesn't refetch a third-party asset on every load.
 */
const PROJECTS = [
  {
    name: "Waypost",
    href: "https://waypost.bymanu.me?ref=bymanu.me",
    icon: "/projects/waypost.svg",
    desc: "Never have a file named asdf.png again",
    badge: "New",
  },
  {
    name: "Factsify",
    href: "https://factsify.bymanu.me?ref=bymanu.me",
    icon: "/projects/factsify.png",
    desc: "Your Spotify stats in a nutrition facts label",
  },
  {
    name: "Dysperse",
    href: "https://dysperse.com?ref=manu.bymanu.me",
    icon: "/projects/dysperse.png",
    desc: "Productivity for humans",
  },
  {
    name: "ElmasriAI",
    href: "https://elmasri.bymanu.me?ref=bymanu.me",
    icon: "/projects/elmasriai.png",
    desc: "AP physics tutoring powered by AI",
  },
];

export function Projects() {
  return (
    <section className="section projects">
      <SectionHead index="04" label="Projects" className="projects__head" />

      <div className="projects__grid">
        {PROJECTS.map((project) => (
          <a
            className="project"
            href={project.href}
            key={project.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="project__top">
              <Image
                src={project.icon}
                alt={`${project.name} logo`}
                width={26}
                height={26}
                className="project__logo"
              />
              <span className="project__name">{project.name}</span>
              {project.badge && (
                <span className="project__badge">{project.badge}</span>
              )}
              <span className="project__arrow">↗</span>
            </span>
            <span className="project__desc">{project.desc}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
