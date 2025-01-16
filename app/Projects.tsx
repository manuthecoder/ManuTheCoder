import Image from "next/image";

export function Projects() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <h2 className="subheading">Projects</h2>
      </div>
      <div className="flex flex-col gap-3">
        {[
          {
            name: "Dysperse",
            description: "Productivity for humans",
            href: "//dysperse.com?ref=manu.bymanu.me",
          },
          {
            name: "Factsify",
            description: "Your Spotify stats in a nutrition facts label",
            href: "https://factsify.bymanu.me?ref=bymanu.me",
          },
          {
            name: "ElmasriAI",
            status: "New",
            description: "AP physics tutoring powered by AI",
            href: "https://elmasri.bymanu.me?ref=bymanu.me",
          },
        ].map((project) => (
          <a
            className="card overflow-hidden no-underline"
            key={project.name}
            href={project.href}
            target="_blank"
          >
            <Image
              src={`/projects/${project.name.toLowerCase()}.png`}
              width={50}
              height={50}
              alt={`${project.name} logo`}
              className="card-logo shrink-0"
            />
            <div className="w-full min-w-0">
              <h3 className="card-title max-w-full font-bold flex items-center gap-x-3 gap-y-1 pr-20 flex-wrap-reverse">
                <span>{project.name}</span>
                {project.status && (
                  <div className="chip bg-orange-200 font-medium text-xs -ml-1">
                    {project.status}
                  </div>
                )}
              </h3>
              <p className="card-subtitle mr-2">{project.description}</p>
            </div>
            <span className="material-symbols-rounded text-orange-950">
              arrow_forward_ios
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

