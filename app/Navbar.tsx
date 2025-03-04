"use client";

export function Navbar() {
  return (
    <>
      <div className="absolute  top-0 left-0 w-full flex h-20 items-center px-6 sm:px-10 gap-7">
        <div className="grow font-thin text-[#431407] text-xl">
          <span>Manu G</span>
        </div>
        <div
          className="nav-btn"
          onClick={() => {
            try {
              navigator.share({
                text: "Check out Manu G - full stack software enthusiast",
                url: "https://bymanu.me",
              });
            } catch (e) {
              navigator.clipboard.writeText("https://bymanu.me");
              alert("Copied link to clipboard!");
            }
          }}
        >
          <span className="material-symbols-rounded">share</span>
        </div>
      </div>
      <div className="h-20" />
    </>
  );
}

