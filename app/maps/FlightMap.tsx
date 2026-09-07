import {
  geoCentroid,
  geoOrthographic,
  geoAlbersUsa,
  geoPath,
  type GeoPath,
  type GeoProjection,
} from "d3-geo";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { worldCountries, usStates } from "./geo";

type Coord = [number, number];

const AIRPORTS: Record<string, Coord> = {
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
  DXB: [55.364, 25.253],
  BLR: [77.706, 13.199],
  BUR: [-118.359, 34.201],
  EUG: [-123.212, 44.124],
  CHS: [-80.041, 32.899],
  LGA: [-73.873, 40.777],
  BZN: [-111.152, 45.777],
  ATL: [-84.428, 33.637],
  FRA: [8.57, 50.033],
  SJC: [-121.929, 37.363],
  HYD: [78.429, 17.24],
};

const ROUTES =
  "SNA-SFO;MCO-LAX;IAH-SNA;BTV-IAH;EWR-BTV;SNA-EWR;LAS-SNA;DEN-ONT;LGA-DEN;ONT-DEN;SFO-SNA;ONT-SEA;DXB-LAX;BLR-DXB;BUR-EUG;EUG-BUR;CHS-SNA;SEA-CHS;ONT-BZN;CHS-ATL;ATL-FRA;FRA-BLR;SNA-SJC;BLR-HYD";

const ACCENT = "#A0522D";
const LAND = "#F1EAE1";
const STROKE = "#DCD4C9";
const SPHERE = "#FBF9F6";
const LABEL_HALO = "#FFFDFA";
const LABEL_INK = "#1C1A17";

const isDomestic = (code: string) => AIRPORTS[code][0] < -50;

/**
 * Merges airport labels that would collide, averaging x and taking the
 * topmost y — e.g. the LA basin collapses to "BUR / LAX / ONT / SNA".
 * Order-sensitive: it walks the codes in first-appearance order.
 */
function clusterLabels(
  codes: string[],
  projection: GeoProjection,
  minDist: number,
) {
  const pts = codes
    .map((c) => ({ c, p: projection(AIRPORTS[c]) }))
    .filter((o): o is { c: string; p: [number, number] } => Boolean(o.p));

  const groups: { codes: string[]; x: number; y: number }[] = [];

  for (const o of pts) {
    const g = groups.find(
      (gr) => Math.hypot(gr.x - o.p[0], gr.y - o.p[1]) < minDist,
    );
    if (g) {
      g.codes.push(o.c);
      g.x = (g.x + o.p[0]) / 2;
      g.y = Math.min(g.y, o.p[1]);
    } else {
      groups.push({ codes: [o.c], x: o.p[0], y: o.p[1] });
    }
  }

  return groups.map((g) => ({
    text: g.codes.slice().sort().join(" / "),
    x: g.x,
    y: g.y,
  }));
}

function Arcs({
  list,
  path,
  delayStep,
}: {
  list: string[][];
  path: GeoPath;
  delayStep: number;
}) {
  return (
    <>
      {list.map(([a, b], i) => {
        const d = path({
          type: "LineString",
          coordinates: [AIRPORTS[a], AIRPORTS[b]],
        } as any);
        if (!d) return null;
        return (
          <path
            key={`${a}-${b}-${i}`}
            d={d}
            fill="none"
            stroke={ACCENT}
            strokeWidth={1.2}
            strokeOpacity={0.6}
            strokeLinecap="round"
            className="fm-arc"
            style={{ animationDelay: `${i * delayStep}ms` }}
          />
        );
      })}
    </>
  );
}

function Dots({
  codes,
  projection,
}: {
  codes: string[];
  projection: GeoProjection;
}) {
  return (
    <>
      {codes.map((c) => {
        const p = projection(AIRPORTS[c]);
        if (!p) return null;
        return <circle key={c} cx={p[0]} cy={p[1]} r={2.6} fill={ACCENT} />;
      })}
    </>
  );
}

function Labels({
  codes,
  projection,
  minDist,
}: {
  codes: string[];
  projection: GeoProjection;
  minDist: number;
}) {
  return (
    <>
      {clusterLabels(codes, projection, minDist).map((l) => (
        <text
          key={l.text}
          className="fm-label"
          x={l.x}
          y={l.y - 10}
          textAnchor="middle"
          stroke={LABEL_HALO}
          fill={LABEL_INK}
        >
          {l.text}
        </text>
      ))}
    </>
  );
}

export function FlightMap() {
  const routes = ROUTES.split(/[;\n]+/)
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) =>
      s
        .split(/[-–>→,]+/)
        .map((p) => p.trim().toUpperCase())
        .filter(Boolean),
    )
    .filter((p) => p.length === 2 && AIRPORTS[p[0]] && AIRPORTS[p[1]]);

  const dom = routes.filter(([a, b]) => isDomestic(a) && isDomestic(b));
  const intl = routes.filter(([a, b]) => !isDomestic(a) || !isDomestic(b));

  // Domestic — Albers USA
  const w1 = 960;
  const h1 = 560;
  const pUS = geoAlbersUsa().fitSize([w1, h1], usStates as any);
  const pathUS = geoPath(pUS);
  const usLand = usStates.features
    .map((f) => pathUS(f as any))
    .filter((d): d is string => Boolean(d));
  const domCodes = Array.from(new Set(dom.flat()));

  // International — orthographic globe centred on the routes
  const w2 = 960;
  const h2 = 430;
  const intlCodes = Array.from(new Set(intl.flat()));
  const intlGeo = {
    type: "FeatureCollection",
    features: [
      ...intlCodes.map((c) => ({
        type: "Feature",
        geometry: { type: "Point", coordinates: AIRPORTS[c] },
        properties: {},
      })),
      ...intl.map(([a, b]) => ({
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [AIRPORTS[a], AIRPORTS[b]],
        },
        properties: {},
      })),
    ],
  };

  const c0 = geoCentroid(intlGeo as any);
  const pW = geoOrthographic().rotate([-c0[0], -c0[1]]);
  pW.fitExtent(
    [
      [20, 20],
      [w2 - 20, h2 - 20],
    ],
    { type: "Sphere" } as any,
  );
  const pathW = geoPath(pW);
  const spherePath = pathW({ type: "Sphere" } as any);
  const worldLand = worldCountries.features
    .map((f) => pathW(f as any))
    .filter((d): d is string => Boolean(d));

  // Each map draws its own arcs when it scrolls into view, so the globe isn't
  // already finished by the time you reach it.
  return (
    <div className="flight-map">
      <RevealOnScroll className="fm-reveal">
        <div className="map__caption">Domestic</div>
        <svg
          viewBox={`0 0 ${w1} ${h1}`}
          width="100%"
          role="img"
          aria-label="Map of domestic flight routes"
        >
          {usLand.map((d, i) => (
            <path key={i} d={d} fill={LAND} stroke={STROKE} strokeWidth={0.7} />
          ))}
          <Arcs list={dom} path={pathUS} delayStep={90} />
          <Dots codes={domCodes} projection={pUS} />
          <Labels codes={domCodes} projection={pUS} minDist={30} />
        </svg>
      </RevealOnScroll>

      {intl.length > 0 && (
        <RevealOnScroll className="fm-reveal map__intl">
          <div className="map__caption">International</div>
          <svg
            viewBox={`0 0 ${w2} ${h2}`}
            width="100%"
            role="img"
            aria-label="Map of international flight routes"
          >
            {spherePath && (
              <path
                d={spherePath}
                fill={SPHERE}
                stroke={STROKE}
                strokeWidth={0.8}
              />
            )}
            {worldLand.map((d, i) => (
              <path key={i} d={d} fill={LAND} stroke={STROKE} strokeWidth={0.6} />
            ))}
            <Arcs list={intl} path={pathW} delayStep={220} />
            <Dots codes={intlCodes} projection={pW} />
            <Labels codes={intlCodes} projection={pW} minDist={26} />
          </svg>
        </RevealOnScroll>
      )}
    </div>
  );
}
