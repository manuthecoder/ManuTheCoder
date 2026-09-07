import { Analytics } from "@vercel/analytics/next";
import { CanonicalHost } from "./components/CanonicalHost";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Flights } from "./components/Flights";
import { Footer } from "./components/Footer";
import { Masthead } from "./components/Masthead";
import { NowPlaying } from "./components/NowPlaying";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { StatesVisited } from "./components/StatesVisited";
import { TvShows } from "./components/TvShows";

export default function Home() {
  return (
    <main className="page">
      <div className="shell">
        <Masthead />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <NowPlaying />
        <TvShows />
        <StatesVisited />
        <Flights />
        <Footer />
      </div>
      <CanonicalHost />
      <Analytics />
    </main>
  );
}
