"use client";

export function IntroSection() {
  return (
    <>
      <div className="chip mb-4 bg-orange-100 hover:bg-orange-200">
        <span className="material-symbols-rounded">location_on</span>
        California, USA
      </div>
      <h1 className="text-5xl mb-2 title max-w-md text-orange-950">
        I&apos;m Manu, a full stack software enthusiast.{" "}
      </h1>
      <p className="max-w-md opacity-90">
        With a passion for building things, I&apos;m always looking for new
        opportunities to learn and grow.
      </p>
      <div className="gap-2 flex mt-4">
        <button
          className="bg-purple-500 btn text-purple-950"
          onClick={() => window.open("https://linkedin.com/in/manu-codes")}
        >
          LinkedIn
        </button>
        <button
          className="bg-orange-500 btn text-orange-950"
          onClick={() => window.open("//github.com/manuthecoder")}
        >
          GitHub
        </button>
      </div>
    </>
  );
}
