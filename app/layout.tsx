import type { Metadata } from "next";
// import "react-creative-cursor/dist/styles.css";
import "./globals.scss";

export const metadata: Metadata = {
  title: "@_manu.codes",
  description: "Full stack software enthusiast",
};

function Navbar() {
  return (
    <div className="flex h-20 items-center px-12 gap-7">
      <div className="grow font-extrabold text-xl">@_manu.codes</div>
      <a href="https://github.com/manuthecoder" className="nav-btn">
        My work
      </a>
      <a href="https://github.com/manuthecoder" className="nav-btn">
        Github
      </a>
      <div className="nav-btn">
        <span className="material-symbols-rounded">share</span>
      </div>
    </div>
  );
}

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
      </head>
      <body className="flex flex-col overflow-hidden h-screen w-screen selection:bg-orange-900 selection:text-orange-100 bg-orange-50">
        <Navbar />
        <div className="p-10 pt-0 w-full h-full">{children}</div>
      </body>
    </html>
  );
}
