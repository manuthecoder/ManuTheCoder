"use client";
import { IntroSection } from "./IntroSection";
import { Skills } from "./Skills";
import { Projects } from "./Projects";

function Awards() {
  return (
    <div className="w-full">
      <h2 className="subheading">Awards & certifications</h2>
      <div className="pl-2">
        <div className="flex flex-col gap-3 border-l-2 border-orange-300 pl-4">
          {[
            {
              issuer: "HackOR",
              name: "1st place",
              year: "Spring 2021",
            },
            {
              issuer: "AFA CyberPatriot",
              name: "Semifinal Round Qualifier",
              year: "Winter 2022",
            },
            {
              issuer: "CyberForward",
              name: "Cybersecurity Certification",
              year: "Spring 2023",
            },
            {
              issuer: "Harvard",
              name: "CS50x certification",
              year: "Summer 2023",
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

export default function Home() {
  return (
    <main
      className="p-7 sm:p-5 sm:px-12 border-2 border-black rounded-3xl bg-orange-50 mx-auto w-full h-full flex sm:items-center"
      style={{
        boxShadow: `2px 2px 0 4px black`,
      }}
    >
      <div className="flex w-full gap-10 sm:gap-20 flex-col sm:flex-row">
        <div className="w-full max-w-md flex content-center items-center">
          <div>
            <IntroSection />
          </div>
        </div>
        <div className="flex-grow flex-col sm:flex-row w-full flex gap-8">
          <div className="w-full flex flex-col gap-8">
            <Skills />
            <Awards />
          </div>
          <div className="w-full">
            <Projects />
          </div>
        </div>
      </div>
    </main>
  );
}
