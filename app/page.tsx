"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { Awards } from "./Awards";
import { Experience } from "./Experience";
import { IntroSection } from "./IntroSection";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Analytics } from "@vercel/analytics/next";
import { USAMap, USAStateAbbreviation } from "@mirawision/usa-map-react";

function ProgressBar({ data }: { data: any }) {
  const [progress, setProgress] = useState(data?.progress_ms ?? 0);
  const base = useRef(data?.progress_ms ?? 0);
  const start = useRef(Date.now());

  const duration = data?.item?.duration_ms ?? 0;
  const isPlaying = data?.is_playing ?? false;

  useEffect(() => {
    base.current = data?.progress_ms ?? 0;
    start.current = Date.now();
    setProgress(base.current);
  }, [data]);

  useEffect(() => {
    if (!isPlaying || !duration) return;
    const id = setInterval(() => {
      setProgress(
        Math.min(base.current + (Date.now() - start.current), duration),
      );
    }, 500);
    return () => clearInterval(id);
  }, [isPlaying, duration, data]);

  const fmt = (ms: number) => {
    const s = Math.floor(ms / 1000);
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center gap-3 w-full mt-2 text-[10px] text-[#431407]/60 font-medium tabular-nums">
      <span>{fmt(progress)}</span>
      <div className="relative w-full bg-orange-200 rounded-full h-1.5 group cursor-pointer">
        <div
          style={{ width: `${(progress / duration) * 100}%` }}
          className="h-full rounded-full bg-[#431407] transition-[width] duration-500 ease-linear relative"
        />
      </div>
      <span className="-mr-1">{fmt(duration)}</span>
    </div>
  );
}

function Spotify() {
  const { data, mutate, error } = useSWR(
    "/api/currently-playing",
    async (url) => {
      const response = await fetch(url);
      return response.json();
    },
    { refreshInterval: 30 * 1000 },
  );

  return (
    <div className="w-full">
      <div className="flex items-center mb-2 gap-2">
        <h2 className="subheading mr-auto mb-0">Currently playing</h2>
        {data?.item && (
          <div
            onMouseOver={() => mutate()}
            className="chip bg-red-900 text-red-50 font-medium text-xs"
          >
            <div className="animate-pulse w-1.5 h-1.5 rounded-full bg-red-50"></div>
            LIVE
          </div>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <a
          className="card overflow-hidden no-underline block"
          href={data?.item?.external_urls?.spotify}
          target="_blank"
        >
          <div className="flex items-center">
            <div className="flex-1">
              <p
                className="card-subtitle -mb-0.5 mr-2 uppercase opacity-50 font-semibold"
                style={{ fontSize: "10px" }}
              >
                {data?.item?.album?.name || ""}
              </p>
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
              <p className="card-subtitle mr-2 -mt-0.5">
                {(data
                  ? data?.item?.artists
                      ?.map((artist: any) => artist.name)
                      .join(", ")
                  : error || data?.error
                    ? "Try again later"
                    : !data?.item?.name
                      ? "Loading..."
                      : "Come back later! You'll see what I'm listening to on Spotify here!") ||
                  "Come back later! You'll see what I'm listening to on Spotify here!"}
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
          </div>
          {data?.is_playing && <ProgressBar data={data} />}
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

function StatesVisited() {
  const states = [
    "CA",
    "WA",
    "OR",
    "NV",
    "ID",
    "AZ",
    "CO",
    "WY",
    "MT",
    "SC",
    "NC",
    "GA",
    "NY",
    "NJ",

    // todo
    "NH",
    "FL",
    "IL",
  ];

  const customStates = states.reduce((acc, state) => {
    acc[state as USAStateAbbreviation] = {
      fill: "#431407",
    };
    return acc;
  }, {});

  return (
    <div className="w-full">
      <h2 className="subheading mb-0.5">States visited</h2>
      <p class="mt-0 text-sm mb-2">
        One day, every state. And after that — the world. 😅
      </p>
      <USAMap
        customStates={customStates}
        defaultState={{
          fill: "rgb(255 237 227)",
          stroke: "#431407",
        }}
      />
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
      <Analytics />
      <div className="flex flex-col w-full my-10 sm:my-20">
        <div className="flex gap-2 flex-col sm:flex-row w-full bg-orange-100 py-5 px-5 sm:px-10 mb-10 rounded-2xl sm:rounded-full">
          <div>
            <b>Help a rising college student out!</b>
            <br />
            <span className="text-sm opacity-50">
              I&apos;d much appreciate any support as I continue to build my
              portfolio and work on exciting projects.
            </span>
          </div>
          <a
            target="_blank"
            href="https://donate.stripe.com/cNi5kD3rr6vygHPccweIw01"
            className="bg-yellow-500 btn text-yellow-950 btn flex items-center gap-3 sm:ml-auto justify-center"
          >
            Donate!
          </a>
        </div>
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
              <StatesVisited />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
