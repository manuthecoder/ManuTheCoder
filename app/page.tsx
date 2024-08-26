"use client";
import { IntroSection } from "./IntroSection";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import Image from "next/image";

function Awards() {
  return (
    <div className="w-full">
      <h2 className="subheading mt-4">Awards & certifications</h2>
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
            {
              issuer: "AFA CyberPatriot",
              name: "Distinguished Silver-Tier team",
              year: "Winter 2023",
            },
            {
              issuer: "UCI ICS",
              name: "Data analytics",
              year: "Summer 2024",
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

function Experience() {
  return (
    <div>
      <h2 className="subheading">Experience</h2>
      <div className="pl-2">
        <div className="flex flex-col gap-3 border-l-2 border-orange-300 pl-4">
          {[
            {
              issuer: "City of Irvine",
              name: "Technology Tutor",
              year: "September 2022 - Present",
              image: "/experience/irvine.svg",
            },
            {
              issuer: "Hack Club Bank",
              name: "Engineer",
              year: "May 2024 - Present",
              image: "/experience/hcb.png",
            },
          ].map((item) => (
            <div key={item.name} className="relative">
              <div
                className="w-5 h-5 mt-2 border-orange-300 block border-2 bg-orange-50 rounded-full absolute"
                style={{ left: "-27px" }}
              />
              <div className="pt-0 flex items-center gap-2">
                <div>
                  <h5 className="text-xs opacity-70">{item.year}</h5>
                  <h6>
                    <b style={{ fontWeight: 600 }}>{item.issuer}</b> {item.name}
                  </h6>
                </div>
                <Image
                  src={item.image}
                  width={120}
                  style={{ width: 50, height: 50 }}
                  height={120}
                  class="ml-auto"
                />
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
      className="p-7 sm:p-5 sm:px-12 border-2 border-black rounded-3xl bg-orange-50 mx-auto w-full h-full min-h-screen flex flex-col items-center"
      style={{
        boxShadow: `2px 2px 0 4px black`,
      }}
    >
      <div className="mt-20 flex items-start sm:items-center flex-col max-w-3xl sm:text-center">
        <IntroSection />
      </div>
      <div className="flex flex-col w-full max-w-5xl my-10 sm:my-20">
        <div className="w-full max-w-md flex content-center items-center">
          <div></div>
        </div>
        <div className="flex-grow">
          <div className="flex-grow flex-col lg:flex-row w-full flex gap-8">
            <div className="w-full flex flex-col gap-8">
              <Skills />
              <Awards />
            </div>
            <div className="w-full flex flex-col gap-8">
              <Projects />
              <Experience />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

