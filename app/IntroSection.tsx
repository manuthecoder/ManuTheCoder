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
      <div className="gap-2 flex mt-4 flex-wrap">
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
        <button
          className="bg-green-500 text-green-950 btn flex items-center gap-3 pt-2.5"
          onClick={() =>
            window.open(
              "https://open.spotify.com/user/gas3v326ti8fyihwazgfuup6t"
            )
          }
        >
          Spotify
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 512 511.992"
            width="20"
            height="20"
            fill="currentColor"
          >
            <path
              fill-rule="nonzero"
              d="M255.998.004C114.617.004 0 114.616 0 255.998c0 141.385 114.617 255.994 255.998 255.994C397.395 511.992 512 397.387 512 255.998 512 114.624 397.395.015 255.994.015l.004-.015v.004zm117.4 369.22c-4.585 7.519-14.426 9.907-21.949 5.288-60.104-36.715-135.771-45.028-224.882-24.669-8.587 1.955-17.146-3.425-19.104-12.015-1.966-8.59 3.394-17.149 12.004-19.104 97.517-22.28 181.164-12.687 248.644 28.551 7.523 4.615 9.907 14.427 5.287 21.949zm31.335-69.704c-5.779 9.389-18.067 12.353-27.452 6.578-68.813-42.297-173.703-54.547-255.096-29.837-10.556 3.188-21.704-2.761-24.906-13.298-3.18-10.556 2.772-21.68 13.309-24.89 92.971-28.209 208.551-14.546 287.575 34.015 9.385 5.778 12.349 18.066 6.574 27.44v-.004l-.004-.004zm2.692-72.583c-82.51-49.006-218.635-53.511-297.409-29.603-12.649 3.836-26.027-3.302-29.859-15.955-3.833-12.657 3.302-26.024 15.959-29.868 90.428-27.452 240.753-22.149 335.747 34.245 11.401 6.755 15.133 21.447 8.375 32.809-6.728 11.378-21.462 15.13-32.802 8.372h-.011z"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

