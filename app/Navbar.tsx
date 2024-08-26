"use client";

export function Navbar() {
  return (
    <div className="flex h-20 items-center px-6 sm:px-10 gap-7">
      <div className="grow font-extrabold text-xl">@_manu.codes</div>
      {/* <a href="https://github.com/manuthecoder" className="nav-btn">
        Github
      </a> */}
      <div
        className="nav-btn"
        onClick={() => {
          try {
            navigator.share({
              text: "Check out @_manu.codes - full stack software enthusiast",
              url: "https://manu.is-a.dev",
            });
          } catch (e) {
            navigator.clipboard.writeText("https://manu.is-a.dev");
            alert("Copied link to clipboard!");
          }
        }}
      >
        <span className="material-symbols-rounded">share</span>
      </div>
    </div>
  );
}

