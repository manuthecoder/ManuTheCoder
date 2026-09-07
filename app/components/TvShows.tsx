import Image from "next/image";
import { SectionHead } from "./SectionHead";

const SHOWS = [
  {
    title: "Brooklyn Nine-Nine",
    href: "https://www.netflix.com/title/70281562",
    poster: "/movies/brooklyn99.jpg",
  },
  {
    title: "Seinfeld",
    href: "https://www.netflix.com/title/70153373",
    poster: "/movies/seinfeld.jpg",
  },
  {
    title: "Friends",
    href: "https://www.netflix.com/za/title/70136140",
    poster: "/movies/friends.png",
  },
  {
    title: "Star Trek",
    href: "https://www.netflix.com/in/title/70153404",
    poster: "/movies/startrek.jpg",
  },
];

export function TvShows() {
  return (
    <section className="section shows">
      <SectionHead index="06" label="Favorite TV shows" />
      <div className="shows__grid">
        {SHOWS.map((show) => (
          <a
            className="show"
            href={show.href}
            key={show.title}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={show.poster}
              alt={show.title}
              width={220}
              height={330}
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
