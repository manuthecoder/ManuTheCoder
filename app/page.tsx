"use client";
import { IntroSection } from "./IntroSection";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Awards } from "./Awards";
import { Experience } from "./Experience";

export default function Home() {
  return (
    <main
      className="p-7 max-w-5xl sm:p-5 sm:px-12 border-2 border-[#431407] rounded-3xl bg-orange-50 mx-auto w-full h-full min-h-screen flex flex-col items-center page-container"
      style={{ boxShadow: `2px 2px 0 4px #431407` }}
      onClick={() => { new Audio('./click.mp3').play() }}
    >
      <div className="mt-20 flex items-start sm:items-center flex-col max-w-3xl sm:text-center">
        <IntroSection />
      </div>
      <div className="flex flex-col w-full my-10 sm:my-20">
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

