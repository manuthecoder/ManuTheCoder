/**
 * Regenerates public/og.png (1200x630).
 *
 *   node scripts/generate-og.mjs
 *
 * Renders an HTML card in headless Chrome so the OG image uses the exact same
 * fonts, palette, and flight-route data as the live site. Launches the system
 * Chrome via playwright-core, so no browser download is needed.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";
import { geoAlbersUsa, geoPath } from "d3-geo";
import { feature } from "topojson-client";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// require() rather than an import attribute — the `assert`/`with` syntax for
// JSON modules differs across Node versions.
const statesTopo = createRequire(import.meta.url)("us-atlas/states-10m.json");

// Palette, lifted from app/globals.css.
const BG = "#FBF9F6";
const INK = "#1C1A17";
const SOFT = "#8A837B";
const FAINT = "#A9A29A";
const RULE = "#E3DED6";
const ACCENT = "#A0522D";
const LAND = "#F1EAE1";
const STROKE = "#DCD4C9";

// Same source data as app/maps/FlightMap.tsx.
const AIRPORTS = {
  SNA: [-117.868, 33.676],
  SFO: [-122.379, 37.621],
  MCO: [-81.309, 28.429],
  LAX: [-118.408, 33.942],
  IAH: [-95.341, 29.99],
  BTV: [-73.153, 44.472],
  EWR: [-74.169, 40.689],
  LAS: [-115.152, 36.084],
  DEN: [-104.673, 39.862],
  ONT: [-117.601, 34.056],
  SEA: [-122.309, 47.449],
  BUR: [-118.359, 34.201],
  EUG: [-123.212, 44.124],
  CHS: [-80.041, 32.899],
  LGA: [-73.873, 40.777],
  BZN: [-111.152, 45.777],
  ATL: [-84.428, 33.637],
  SJC: [-121.929, 37.363],
};

const ROUTES =
  "SNA-SFO;MCO-LAX;IAH-SNA;BTV-IAH;EWR-BTV;SNA-EWR;LAS-SNA;DEN-ONT;LGA-DEN;ONT-DEN;SFO-SNA;ONT-SEA;BUR-EUG;EUG-BUR;CHS-SNA;SEA-CHS;ONT-BZN;CHS-ATL;SNA-SJC";

const W = 900;
const H = 560;

const states = feature(statesTopo, statesTopo.objects.states);
const projection = geoAlbersUsa().fitSize([W, H], states);
const path = geoPath(projection);

const land = states.features
  .map((f) => path(f))
  .filter(Boolean)
  .map(
    (d) =>
      `<path d="${d}" fill="${LAND}" stroke="${STROKE}" stroke-width="0.7"/>`,
  )
  .join("");

const pairs = ROUTES.split(";")
  .map((s) => s.split("-"))
  .filter(([a, b]) => AIRPORTS[a] && AIRPORTS[b]);

const arcs = pairs
  .map(([a, b]) =>
    path({ type: "LineString", coordinates: [AIRPORTS[a], AIRPORTS[b]] }),
  )
  .filter(Boolean)
  .map(
    (d) =>
      `<path d="${d}" fill="none" stroke="${ACCENT}" stroke-width="1.6" stroke-opacity="0.55" stroke-linecap="round"/>`,
  )
  .join("");

const dots = Array.from(new Set(pairs.flat()))
  .map((code) => projection(AIRPORTS[code]))
  .filter(Boolean)
  .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.4" fill="${ACCENT}"/>`)
  .join("");

const avatar = readFileSync(resolve(root, "public/pfp.png")).toString("base64");

const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Instrument+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 1200px; height: 630px; overflow: hidden; position: relative;
    background: ${BG}; color: ${INK};
    font-family: 'Instrument Sans', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  .map { position: absolute; top: 50%; right: 44px; width: 620px; transform: translateY(-52%); }
  .map svg { display: block; width: 100%; height: auto; }
  /* Keeps the type legible while the routes bleed off the right edge. */
  .veil {
    position: absolute; inset: 0;
  }
  .card { position: relative; height: 100%; padding: 58px 64px; display: flex; flex-direction: column; }
  .top { display: flex; align-items: center; justify-content: space-between; }
  .avatar { width: 52px; height: 52px; border-radius: 50%; object-fit: cover; display: block; }
  .where { font-family: 'JetBrains Mono', monospace; font-size: 13px; letter-spacing: 0.14em; text-transform: uppercase; color: ${SOFT}; }
  .mid { flex: 1; display: flex; flex-direction: column; justify-content: center; }
  h1 {
    font-family: 'Instrument Serif', Georgia, serif; font-weight: 400;
    font-size: 78px; line-height: 1.02; letter-spacing: -0.02em;
  }
  .role { margin-top: 24px; font-family: 'JetBrains Mono', monospace; font-size: 24px; letter-spacing: 0.01em; color: ${SOFT}; }
  .rule { margin-bottom: 20px; }
  .foot { display: flex; align-items: center; justify-content: space-between; font-family: 'JetBrains Mono', monospace; font-size: 14px; letter-spacing: 0.08em; }
  .stack { color: ${FAINT}; letter-spacing: 0.12em; }
</style>
</head>
<body>
  <div class="map">
    <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">${land}${arcs}${dots}</svg>
  </div>
  <div class="veil"></div>
  <div class="card">
    <div class="top">
      <img class="avatar" src="data:image/png;base64,${avatar}">
      <span class="where">California, USA</span>
    </div>
    <div class="mid">
      <h1>Hey there, I'm<br>Manu Gurudath.</h1>
      <p class="role">Financial Software Engineer @ HCB</p>
    </div>
    <div>
      <div class="rule"></div>
      <div class="foot">
        <span>bymanu.me</span>
        <span class="stack">My travel map ↑</span>
      </div>
    </div>
  </div>
</body>
</html>`;

const browser = await chromium.launch({
  channel: process.env.PW_CHANNEL || "chrome",
});
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 2,
});
await page.setContent(html, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(400);

const buffer = await page.screenshot({ type: "png" });
writeFileSync(resolve(root, "public/og.png"), buffer);
await browser.close();

console.log("wrote public/og.png (2400x1260, renders as 1200x630)");
