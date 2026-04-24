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
              description:
                "Led the complete redesign of UI3, rewriting 32% of the codebase for an open-source fiscal sponsorship platform serving 1,000+ organizations. Shipped production features in Ruby on Rails across payment flows, onboarding, and core infrastructure.",
            },
            {
              issuer: "City of Irvine",
              name: "Technology Tutor",
              link: "https://www.cityofirvine.org/senior-services/lakeview-senior-center-facilities",
              year: "September 2022 - August 2025",
              image: "/experience/irvine.svg",
              description:
                "Provided weekly 1:1 support to seniors aged 60–85 at the Lakeview Senior Center, including Spanish-speaking residents, helping them navigate devices, apps, and everyday technology challenges.",
            },
          ].map((item) => (
            <div key={item.name} className="relative">
              <div
                className="w-5 h-5 mt-2 border-orange-300 block border-2 bg-orange-50 rounded-full absolute"
                style={{ left: "-27px" }}
              />
              <div className="pt-0 flex items-center gap-2">
                <div>
                  <div>
                    <div className="flex items-center">
                      <div>
                        <h5 className="text-xs opacity-70">{item.year}</h5>
                        <h6>
                          <b style={{ fontWeight: 600 }}>{item.issuer}</b>
                          &nbsp;&nbsp;
                          {item.name}
                        </h6>
                      </div>
                      <Image
                        src={item.image}
                        width={120}
                        style={{ width: 40, height: 40 }}
                        height={120}
                        alt={item.name}
                        className="ml-auto -mt-2"
                      />
                    </div>
                    <p className="text-sm opacity-90 mt-1">
                      {item.description}
                    </p>
                    <a
                      href={item.link}
                      target="_blank"
                      className="text-sm opacity-50"
                    >
                      Visit website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
