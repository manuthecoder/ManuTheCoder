"use client";

export function IntroSection() {
  return (
    <>
      <div className="chip mb-4 bg-orange-100 hover:bg-orange-200">
        <span className="material-symbols-rounded">location_on</span>
        California, USA
      </div>
      <h1 className="text-5xl sm:text-6xl mb-2 title max-w-xl text-orange-950">
        I&apos;m Manu, a full stack software enthusiast.{" "}
      </h1>
      <p className="max-w-lg opacity-90 sm:text-xl">
        With a passion for building things, I&apos;m always looking for new
        opportunities to learn and grow.
      </p>
      <div className="gap-2 flex mt-4">
        <button
          className="bg-orange-500 btn text-orange-950 btn flex items-center gap-3 pt-3"
          onClick={() => window.open("https://linkedin.com/in/manu-codes")}
        >
          LinkedIn
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="-mt-1"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </button>
        <button
          className="bg-purple-500 text-purple-950 btn flex items-center gap-3 pt-3"
          onClick={() => window.open("//github.com/manuthecoder")}
        >
          GitHub
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="-mt-1"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </button>
      </div>
    </>
  );
}

