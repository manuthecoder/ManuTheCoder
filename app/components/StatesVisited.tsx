import { StatesMap } from "../maps/StatesMap";
import { SectionHead } from "./SectionHead";

export function StatesVisited() {
  return (
    <section className="section states">
      <SectionHead index="07" label="States visited" />
      <div className="map-frame">
        <StatesMap />
      </div>
    </section>
  );
}
