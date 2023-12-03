import type { Metadata } from "next";
// import "react-creative-cursor/dist/styles.css";
import "./globals.scss";
import { Navbar } from "./Navbar";

export const metadata: Metadata = {
  title: "@_manu.codes",
  description: "Full stack software enthusiast",
  openGraph: {
    type: "profile",
    username: "@_manu.codes",
    images: "/og.png",
    gender: "Male",
    siteName: "@_manu.codes",
    locale: "en_US",
    url: "https://manu.is-a.dev",
    title: "@_manu.codes",
    description: "Full stack software enthusiast",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/pip8swz.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="/og.png" />
        <meta property="twitter:image" content="/og.png" />
      </head>
      <body className="flex flex-col sm:overflow-hidden sm:h-screen w-screen selection:bg-orange-900 selection:text-orange-100 bg-orange-50">
        <Navbar />
        <div className="p-5 sm:p-10 pt-0 w-full h-full">{children}</div>
      </body>
    </html>
  );
}
