import { AIRPORT_CODES, FlightMap } from "../maps/FlightMap";
import { SectionHead } from "./SectionHead";

export function Flights() {
  return (
    <section className="section flights">
      <SectionHead index="08" label="Flights flown" />
      <div className="map-frame">
        <FlightMap />
      </div>
      <div className="airports">
        {AIRPORT_CODES.map((code) => (
          <span className="airport" key={code}>
            {code}
          </span>
        ))}
      </div>
    </section>
  );
}
