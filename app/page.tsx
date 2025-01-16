"use client";
import { IntroSection } from "./IntroSection";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Awards } from "./Awards";
import { Experience } from "./Experience";
import { useEffect } from "react";
import Image from "next/image";
import useSWR from "swr";

function Spotify() {
  const { data, error } = useSWR(
    "https://api.dysperse.com/user/currently-playing?isManu=true",
    async (url) => {
      const response = await fetch(url);
      return response.json();
    },
    { refreshInterval: 4000 }
  );

  return (
    <div className="w-full">
      <div className="flex items-center mb-2 gap-2">
        <Image src="/spotify.svg" width={20} height={20} alt="Spotify logo" />
        <h2 className="subheading mr-auto mb-0">Currently playing</h2>
        {data?.item && (
          <div className="chip bg-red-900 text-red-50 font-medium text-xs">
            LIVE
          </div>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <a
          className="card overflow-hidden no-underline"
          href={data?.item?.external_urls?.spotify}
          target="_blank"
        >
          <div className="flex-1">
            <h3 className="card-title max-w-full font-bold flex items-center gap-x-3 gap-y-1 pr-20 flex-wrap-reverse">
              <span>
                {(data
                  ? data?.item?.name
                  : error || data?.error
                  ? "Something went wrong"
                  : !data?.item?.name
                  ? "Hang tight..."
                  : "No music!?") || "No music!?"}{" "}
              </span>
            </h3>
            <p className="card-subtitle mr-2">
              {(data
                ? data?.item?.artists?.map((artist) => artist.name).join(", ")
                : error || data?.error
                ? "Try again later"
                : !data?.item?.name
                ? "Loading..."
                : "Come back later!") || "Come back later!"}
            </p>
          </div>
          {data?.item?.album?.images?.[0]?.url && (
            <img
              src={data?.item?.album?.images?.[0]?.url}
              width={50}
              height={50}
              alt={`${data?.item?.name} album cover`}
              className="rounded-lg shrink-0 -mr-1"
            />
          )}
        </a>
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="w-full">
      <h2 className="subheading">About me</h2>
      <p>
        Hey! I&apos;m Manu, and I bring ideas to life through code. When
        I&apos;m not crafting new projects, you&apos;ll find me biking around
        town, listening to music, binge-watching Netflix, or hanging out with
        friends.
      </p>
    </div>
  );
}

function TvShows() {
  return (
    <div className="w-full">
      <h2 className="subheading">Favorite TV shows</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 flex gap-2">
        <a
          href="https://www.netflix.com/title/70281562"
          className="overflow-hidden rounded-md relative w-full"
          style={{ aspectRatio: "2480/3508" }}
        >
          <Image
            loading="lazy"
            src="/movies/brooklyn99.jpg"
            alt="Brooklyn Nine-Nine"
            fill
          />
        </a>
        <a
          href="https://www.netflix.com/title/70153373"
          className="overflow-hidden rounded-md relative w-full"
          style={{ aspectRatio: "2480/3508" }}
        >
          <Image
            loading="lazy"
            src="/movies/seinfeld.jpg"
            alt="Seinfeld"
            fill
          />
        </a>
        <a
          href="https://www.netflix.com/za/title/70136140"
          className="overflow-hidden rounded-md relative w-full"
          style={{ aspectRatio: "2480/3508" }}
        >
          <Image loading="lazy" src="/movies/friends.png" alt="Friends" fill />
        </a>
        <a
          href="https://www.netflix.com/in/title/70153404"
          className="overflow-hidden rounded-md relative w-full"
          style={{ aspectRatio: "2480/3508" }}
        >
          <Image
            loading="lazy"
            src="/movies/startrek.jpg"
            alt="Star Trek"
            fill
          />
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    if (
      process.env.NODE_ENV === "production" &&
      window.location.hostname !== "bymanu.me"
    ) {
      window.location.href = "https://bymanu.me";
    }
  }, []);
  return (
    <main
      className="p-7 max-w-5xl sm:p-5 sm:px-12 border-2 border-[#431407] rounded-3xl bg-orange-50 mx-auto w-full h-full min-h-screen flex flex-col items-center page-container"
      style={{ boxShadow: `2px 2px 0 4px #431407` }}
      onClick={() => {
        new Audio("./click.mp3").play();
      }}
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
              {/* <AboutMe /> */}
              <Skills />
              <Awards />
              <Experience />
            </div>
            <div className="w-full flex flex-col gap-8">
              <Projects />
              <Spotify />
              <TvShows />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

