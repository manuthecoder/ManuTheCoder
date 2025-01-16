"use client";
import Image from "next/image";

export function Experience() {
  return (
    <div>
      <h2 className="subheading">Experience</h2>
      <div className="pl-2">
        <div className="flex flex-col gap-3 border-l-2 border-orange-300 pl-4">
          {[
            {
              issuer: "Hack Club Bank",
              name: "Engineer",
              link: "https://hackclub.com/fiscal-sponsorship/",
              year: "May 2024 - Present",
              image: "/experience/hcb.png",
            },
            {
              issuer: "City of Irvine",
              name: "Technology Tutor",
              link: "https://www.cityofirvine.org/senior-services/lakeview-senior-center-facilities",
              year: "September 2022 - Present",
              image: "/experience/irvine.svg",
            },
          ].map((item) => (
            <div key={item.name} className="relative">
              <div
                className="w-5 h-5 mt-2 border-orange-300 block border-2 bg-orange-50 rounded-full absolute"
                style={{ left: "-27px" }}
              />
              <div className="pt-0 flex items-center gap-2">
                <div>
                  <h5 className="text-xs opacity-70">{item.year}</h5>
                  <div>
                    <h6>
                      <b style={{ fontWeight: 600 }}>{item.issuer}</b>{" "}
                      {item.name}
                    </h6>
                    <a
                      href={item.link}
                      target="_blank"
                      className="text-xs opacity-50 block"
                    >
                      Visit website
                    </a>
                  </div>
                </div>
                <Image
                  src={item.image}
                  width={120}
                  style={{ width: 50, height: 50 }}
                  height={120}
                  alt={item.name}
                  className="ml-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
