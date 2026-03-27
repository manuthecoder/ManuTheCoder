"use client";
export function Awards() {
  return (
    <div className="w-full">
      <h2 className="subheading">Education & certifications</h2>
      <div className="pl-2">
        <div className="flex flex-col gap-3 border-l-2 border-orange-300 pl-4">
          {[
            {
              year: 2025,
              entries: [
                {
                  issuer: "Irvine High School",
                  name: "Expected June",
                },
              ],
            },
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
                  year: "Spring 2023",
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
          ].map((item) => (
            <div key={item.year} className="relative">
              <div
                className="w-5 h-5 mt-2 border-orange-300 block border-2 bg-orange-50 rounded-full absolute"
                style={{ left: "-27px" }}
              />
              <div className="pt-0">
                <h5 className="text-xs opacity-70">{item.year}</h5>
                {item.entries.map((entry, index) => (
                  <a
                    key={index}
                    href={entry.link}
                    target="_blank"
                    className={
                      "block " +
                      (entry.link
                        ? "hover:underline cursor-pointer"
                        : "!cursor-text")
                    }
                  >
                    <b style={{ fontWeight: 600 }}>{entry.issuer}</b>
                    &nbsp;&nbsp;
                    {entry.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
