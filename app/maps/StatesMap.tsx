import { geoAlbersUsa, geoPath } from "d3-geo";
import { FIPS_TO_AB, usStates } from "./geo";

const VISITED =
  "WA,OR,CA,NV,ID,MT,WY,CO,AZ,TX,IL,FL,GA,SC,NY,PA,NJ,DE,MA,VT,NH,CT,RI";

const FILL = "#A0522D";
const EMPTY = "#FBF9F6";
const LINE = "#D8D1C7";

const W = 900;
const H = 560;

export function StatesMap() {
  const visited = new Set(
    VISITED.split(/[,\s]+/)
      .map((s) => s.toUpperCase())
      .filter(Boolean),
  );

  const projection = geoAlbersUsa().fitSize([W, H], usStates as any);
  const path = geoPath(projection);

  const states = usStates.features
    .map((f) => {
      const ab = FIPS_TO_AB[String(f.id)];
      const d = path(f as any);
      if (!d) return null;
      return { ab, d, on: visited.has(ab) };
    })
    .filter((s): s is { ab: string; d: string; on: boolean } => s !== null);

  return (
    <div className="states-map">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        role="img"
        aria-label="Map of United States with visited states shaded"
      >
        {states.map((s, i) => (
          <path
            key={s.ab || i}
            d={s.d}
            fill={s.on ? FILL : EMPTY}
            fillOpacity={s.on ? 0.85 : 1}
            stroke={LINE}
            strokeWidth={0.9}
          >
            <title>{s.ab || ""}</title>
          </path>
        ))}
      </svg>
    </div>
  );
}
