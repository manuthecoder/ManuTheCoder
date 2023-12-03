"use client";
import { IntroSection } from "./IntroSection";
import { Skills } from "./Skills";
import { Projects } from "./Projects";

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
