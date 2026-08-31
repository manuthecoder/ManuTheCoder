"use client";

export function Awards() {
  return (
    <div className="w-full">
      <h2 className="subheading">Education &amp; certifications</h2>
      <div className="flex flex-col gap-2 mb-5">
        {[
          {
            issuer: "University of California, Riverside",
            name: "Computer Science",
            detail: "Expected graduation 2030",
          },
          {
            issuer: "Irvine High School",
            name: "Graduating June 2026",
          },
        ].map((school: { issuer: string; name: string; detail?: string }) => (
          <div
            key={school.issuer}
            className="card !cursor-text gap-4 px-4 py-3 rounded-2xl"
          >
            <span
              className="material-symbols-rounded card-logo bg-orange-200 text-orange-900 flex items-center justify-center shrink-0"
              style={{ fontSize: 24 }}
            >
              school
            </span>
            <div className="min-w-0">
              <h3 className="leading-snug font-[600]">{school.issuer}</h3>
              <p className="text-sm leading-snug opacity-70">
                {school.name}
                {school.detail && (
                  <span className="opacity-70"> · {school.detail}</span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {[
          {
            year: 2025,
            entries: [
              {
                issuer: "CompTIA",
                name: "A+ certification",
                link: "https://cp.certmetrics.com/comptia/en/home/dashboard",
              },
              {
                issuer: "IBM",
                name: "Artificial Intelligence Fundamentals",
                link: "https://www.credly.com/badges/7c53da36-3031-45d7-8b56-e7461a835190",
              },
              {
                issuer: "UCI ICS",
                name: "Machine Learning & AI",
                link: "http://manuthecoder.github.io/assets/Adobe%20Scan%20Aug%201%2C%202025.pdf",
              },
              {
                issuer: "IBM",
                name: "Project Management Fundamentals",
                link: "https://www.credly.com/badges/c8a20f13-b75c-4f21-b6a3-d35d03a240ff",
              },
            ],
          },
          {
            year: 2024,
            entries: [
              {
                issuer: "UCI ICS",
                name: "Data analytics",
                link: "https://manuthecoder.github.io/assets/ICS%20Certificate.pdf",
              },
            ],
          },
          {
            year: 2023,
            entries: [
              {
                issuer: "AFA CyberPatriot",
                name: "Distinguished Silver-Tier team",
              },
              {
                issuer: "Harvard",
                name: "CS50x certification",
                link: "https://certificates.cs50.io/e1d6b165-ce94-40ee-bbd1-8f19e1da7fe8.pdf?size=letter",
              },
              {
                issuer: "CyberForward",
                name: "Cybersecurity Certification",
                link: "https://manu-codes.pages.dev/Manu%20G.%20Certification%20of%20Completion%20(1).pdf",
              },
            ],
          },
          // {
          //   issuer: "AFA CyberPatriot",
          //   name: "Semifinal Round Qualifier",
          //   year: "Winter 2022",
          // },
          // {
          //   issuer: "HackOR",
          //   name: "1st place",
          //   year: "Spring 2021",
          // },
        ].map(
          (group: {
            year: number;
            entries: { issuer: string; name: string; link?: string }[];
          }) => (
            <div key={group.year} className="flex gap-3">
              <h5 className="shrink-0 w-8 pt-2 text-[11px] font-[600] tracking-[0.1em] tabular-nums text-orange-900/50">
                {group.year}
              </h5>
              <div className="min-w-0 flex-1 flex flex-col gap-1 border-l-2 border-orange-200 pl-3">
                {group.entries.map((entry) => (
                  <a
                    key={entry.issuer + entry.name}
                    href={entry.link}
                    target={entry.link ? "_blank" : undefined}
                    className={
                      "block rounded-xl bg-orange-100/70 px-3 py-1.5 leading-snug transition-colors " +
                      (entry.link
                        ? "group hover:bg-orange-200/80"
                        : "!cursor-text")
                    }
                  >
                    <b style={{ fontWeight: 600 }}>{entry.issuer}</b>
                    &nbsp;&nbsp;
                    <span className="text-sm opacity-70">{entry.name}</span>
                    {entry.link && (
                      <span
                        className="material-symbols-rounded align-middle ml-1 -mt-0.5 inline-block text-orange-900 opacity-0 transition-opacity group-hover:opacity-60"
                        style={{ fontSize: 14 }}
                      >
                        north_east
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
