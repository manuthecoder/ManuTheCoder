import type { Metadata } from "next";
import {
  Instrument_Sans,
  Instrument_Serif,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-sans",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

/** Regenerate with `node scripts/generate-og.mjs`. Rendered at 2x. */
const OG_IMAGE = {
  url: "/og.png",
  width: 2400,
  height: 1260,
  alt: "Manu Gurudath — Financial Software Engineer @ HCB, bymanu.me",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bymanu.me"),
  title: "Manu G",
  description: "Full stack software enthusiast",
  openGraph: {
    type: "profile",
    username: "Manu G",
    images: [OG_IMAGE],
    gender: "Male",
    siteName: "Manu G",
    locale: "en_US",
    url: "https://bymanu.me",
    title: "Manu G",
    description: "Full stack software enthusiast",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manu G",
    description: "Full stack software enthusiast",
    images: [OG_IMAGE],
  },
  other: {
    "google-adsense-account": "ca-pub-4864410480154394",
  },
};

const PERSON_SCHEMA = {
  "@context": "https://schema.org/",
  "@type": "Person",
  name: "Manusvath Gurudath",
  url: "https://bymanu.me",
  image: "https://bymanu.me/pfp.png",
  sameAs: [
    "https://x.com/getdysperse",
    "https://instagram.com/dysperse",
    "https://github.com/manu-gurudath",
    "https://linkedin.com/in/manu-codes",
    "https://www.youtube.com/@manu-codes",
  ],
  jobTitle: "Financial Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Hack Club",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
