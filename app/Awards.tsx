"use client";
export function Awards() {
  return (
    <div className="w-full">
      <h2 className="subheading mt-4">Awards & certifications</h2>
      <div className="pl-2">
        <div className="flex flex-col gap-3 border-l-2 border-orange-300 pl-4">
          {[
            {
              issuer: "UCI ICS",
              name: "Data analytics",
              year: "Summer 2024",
            },
            {
              issuer: "AFA CyberPatriot",
              name: "Distinguished Silver-Tier team",
              year: "Winter 2023",
            },
            {
              issuer: "Harvard",
              name: "CS50x certification",
              year: "Summer 2023",
            },
            {
              issuer: "CyberForward",
              name: "Cybersecurity Certification",
              year: "Spring 2023",
            },
            {
              issuer: "AFA CyberPatriot",
              name: "Semifinal Round Qualifier",
              year: "Winter 2022",
            },
            {
              issuer: "HackOR",
              name: "1st place",
              year: "Spring 2021",
            },
          ].map((item) => (
            <div key={item.name} className="relative">
              <div
                className="w-5 h-5 mt-2 border-orange-300 block border-2 bg-orange-50 rounded-full absolute"
                style={{ left: "-27px" }}
              />
              <div className="pt-0">
                <h5 className="text-xs opacity-70">{item.year}</h5>
                <h6>
                  <b style={{ fontWeight: 600 }}>{item.issuer}</b> {item.name}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
