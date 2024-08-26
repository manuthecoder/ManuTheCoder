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
            href: "//dysperse.com?ref=manu.is-a.dev",
          },
          {
            name: "Factsify",
            status: "New",
            description:
              "Turn your Spotify listening habits into a nutrition facts label.",
            href: "https://factsify.pages.dev?ref=manu.is-a.dev",
          },
          {
            name: "Popvote",
            status: false,
            description: "Blazingly fast, real-time group decision making",
            href: "//popvote.vercel.app",
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
              <p className="card-subtitle">{project.description}</p>
            </div>
            <span className="material-symbols-rounded arrow">north_east</span>
          </a>
        ))}
      </div>
    </div>
  );
}

