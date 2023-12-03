"use client";

export function Navbar() {
  return (
    <div className="flex h-20 items-center px-12 gap-7">
      <div className="grow font-extrabold text-xl">@_manu.codes</div>
      {/* <a href="https://github.com/manuthecoder" className="nav-btn">
        Github
      </a> */}
      <div
        className="nav-btn"
        onClick={() => {
          navigator.share({
            text: "Check out @_manu.codes - full stack software enthusiast",
            url: "https://manu.is-a.dev",
          });
        }}
      >
        <span className="material-symbols-rounded">share</span>
      </div>
    </div>
  );
}
