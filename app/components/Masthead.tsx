"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SITE = "https://bymanu.me";

/** Matches the design's clock: Pacific time, refreshed every 20s. */
function useLocalTime() {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setLocalTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "America/Los_Angeles",
          hour: "numeric",
          minute: "2-digit",
        }).format(new Date()) + " PT",
      );

    tick();
    const id = setInterval(tick, 20000);
    return () => clearInterval(id);
  }, []);

  return localTime;
}

export function Masthead() {
  const localTime = useLocalTime();

  const share = async () => {
    const payload = {
      text: "Check out Manu G - full stack software enthusiast",
      url: SITE,
    };

    if (navigator.share) {
      try {
        await navigator.share(payload);
        return;
      } catch {
        // Dismissed, or the share sheet refused — fall through to the copy path.
      }
    }

    try {
      await navigator.clipboard.writeText(SITE);
      alert("Copied link to clipboard!");
    } catch {
      window.open(SITE, "_blank");
    }
  };

  return (
    <header className="masthead">
      <div className="masthead__top rise" style={{ animationDelay: "0ms" }}>
        <Image
          src="/pfp.png"
          alt="Manu Gurudath"
          width={32}
          height={32}
          className="masthead__avatar"
          priority
        />
        <span className="masthead__where">
          California, USA <span className="masthead__where-sep">/</span>{" "}
          {localTime}
        </span>
      </div>

      <h1 className="masthead__title rise" style={{ animationDelay: "80ms" }}>
        Hey there, I&apos;m <br />
        Manu Gurudath.
      </h1>

      <p className="masthead__blurb rise" style={{ animationDelay: "180ms" }}>
        With a passion for building things, I&apos;m always looking for new
        opportunities to learn and grow.
      </p>

      <p className="masthead__role rise" style={{ animationDelay: "260ms" }}>
        Financial Software Engineer @ HCB
      </p>

      <div className="masthead__links rise" style={{ animationDelay: "340ms" }}>
        <a
          className="masthead__link"
          href="https://www.linkedin.com/in/manugurudath/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="masthead__link"
          href="https://github.com/manuthecoder"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <button
          type="button"
          className="masthead__link masthead__link--ghost"
          onClick={share}
        >
          Share
        </button>
      </div>
    </header>
  );
}
