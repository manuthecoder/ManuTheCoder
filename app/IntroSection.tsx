"use client";

import { orange } from "@radix-ui/colors";
import { Emoji } from "./page";

export function IntroSection() {
  return (
    <>
      <div className="chip mb-4 bg-orange-100 hover:bg-orange-200">
        <span className="material-symbols-rounded">location_on</span>
        California, USA
      </div>
      <h1 className="text-5xl mb-2">
        I&apos;m Manu, a full stack software enthusiast.{" "}
      </h1>
      <p className="max-w-md">
        With a passion for building things, I&apos;m always looking for new
        opportunities to learn and grow.
      </p>
      <div className="gap-2 flex mt-4">
        <button
          className="bg-purple-500 btn"
          onClick={() => window.open("https://linkedin.com/in/manu-codes")}
        >
          LinkedIn
        </button>
        <button
          className="bg-orange-500 btn"
          onClick={() => window.open("//github.com/manuthecoder")}
        >
          GitHub
        </button>
      </div>
    </>
  );
}
