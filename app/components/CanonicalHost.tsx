"use client";

import { useEffect } from "react";

/**
 * Keeps preview/alias deployments from being indexed as the live site by
 * bouncing them to the canonical domain in production only.
 */
const LOCAL_HOSTS = ["localhost", "127.0.0.1", "[::1]", "::1"];

export function CanonicalHost() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;

    const { hostname } = window.location;
    // Never bounce a local production build — that makes `next start`
    // impossible to test against.
    if (hostname === "bymanu.me" || LOCAL_HOSTS.includes(hostname)) return;

    window.location.href = "https://bymanu.me";
  }, []);

  return null;
}
