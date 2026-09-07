import { FlightMap } from "../maps/FlightMap";
import { SectionHead } from "./SectionHead";

export function Flights() {
  return (
    <section className="section flights">
      <SectionHead index="08" label="Flights flown" />
      <div className="map-frame">
        <FlightMap />
      </div>
    </section>
  );
}
