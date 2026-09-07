"use client";

/* eslint-disable @next/next/no-img-element -- album art comes from Spotify's
   CDN at request time, so it can't go through the static image optimizer. */
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { SectionHead } from "./SectionHead";

const POLL_MS = 30 * 1000;

type Playing = {
  item?: {
    name?: string;
    duration_ms?: number;
    external_urls?: { spotify?: string };
    artists?: { name: string }[];
    album?: { images?: { url: string }[] };
  };
  progress_ms?: number;
  is_playing?: boolean;
  error?: unknown;
};

const formatTime = (ms: number) => {
  const total = Math.floor(ms / 1000);
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, "0")}`;
};

/**
 * Spotify is only polled every 30s, so the playhead is interpolated locally
 * between responses to keep the bar moving in real time.
 */
function usePlayhead(data: Playing | undefined) {
  const duration = data?.item?.duration_ms ?? 0;
  const isPlaying = data?.is_playing ?? false;

  const base = useRef(data?.progress_ms ?? 0);
  const syncedAt = useRef(Date.now());
  const [progress, setProgress] = useState(data?.progress_ms ?? 0);

  useEffect(() => {
    base.current = data?.progress_ms ?? 0;
    syncedAt.current = Date.now();
    setProgress(base.current);
  }, [data]);

  useEffect(() => {
    if (!isPlaying || !duration) return;
    const id = setInterval(() => {
      setProgress(
        Math.min(base.current + (Date.now() - syncedAt.current), duration),
      );
    }, 500);
    return () => clearInterval(id);
  }, [isPlaying, duration]);

  return { progress, duration };
}

export function NowPlaying() {
  const { data, error, mutate } = useSWR<Playing>(
    "/api/currently-playing",
    (url: string) => fetch(url).then((r) => r.json()),
    { refreshInterval: POLL_MS },
  );

  const { progress, duration } = usePlayhead(data);

  const track = data?.item;
  const failed = Boolean(error || data?.error);
  const isLive = Boolean(track?.name && data?.is_playing);

  // Mirrors the design's placeholder copy while the first request is in flight.
  let title = "Hang tight...";
  let subtitle = "Loading...";

  if (track?.name) {
    title = track.name;
    subtitle =
      track.artists?.map((artist) => artist.name).join(", ") || "Unknown artist";
  } else if (failed) {
    title = "Something went wrong";
    subtitle = "Try again later";
  } else if (data) {
    title = "No music!?";
    subtitle = "Nothing playing right now";
  }

  const art = track?.album?.images?.[0]?.url;
  const href = track?.external_urls?.spotify;
  const pct = duration ? Math.min(100, (progress / duration) * 100) : 0;

  const card = (
    <>
      {art ? (
        <img className="now__art" src={art} alt={`${title} album cover`} />
      ) : (
        <span className="now__art now__art--placeholder" />
      )}
      <span className="now__meta">
        <span className="now__track">{title}</span>
        <span className="now__artist">{subtitle}</span>

        {isLive && duration > 0 && (
          <span className="now__progress">
            <span className="now__time">{formatTime(progress)}</span>
            <span className="now__bar">
              <span className="now__bar-fill" style={{ width: `${pct}%` }} />
            </span>
            <span className="now__time">{formatTime(duration)}</span>
          </span>
        )}
      </span>
    </>
  );

  return (
    <section className="section now">
      <SectionHead
        index="05"
        label="Currently playing"
        trailing={
          isLive ? (
            <span className="live-badge" title="Streaming now on Spotify">
              <span className="live-badge__dot" />
              Live
            </span>
          ) : null
        }
      />
      {href ? (
        <a
          className="now__card"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onMouseOver={() => mutate()}
        >
          {card}
        </a>
      ) : (
        <div className="now__card">{card}</div>
      )}
    </section>
  );
}
