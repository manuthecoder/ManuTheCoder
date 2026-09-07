import Image from "next/image";
import { SectionHead } from "./SectionHead";

export function Experience() {
  return (
    <section className="section experience">
      <SectionHead index="03" label="Experience" />

      <div className="role">
        <span className="role__dates">May 2024 — Present</span>
        <div className="role__head">
          <Image
            src="/experience/hcb.png"
            alt="Hack Club Bank"
            width={34}
            height={34}
            className="role__logo role__logo--rounded"
          />
          <h3 className="role__title">
            Hack Club Bank{"  "}
            <span className="role__position">Financial Software Engineer</span>
          </h3>
        </div>
        <p className="role__body">
          Built payments infrastructure in Ruby on Rails for an open-source
          fintech platform serving 6,000+ student organizations and processing
          $480B+ in transactions. Led UI3, a full platform redesign owned end to
          end from UX research through production, rewriting ~32% of the
          codebase and driving 12% user growth in 6 months. Built core
          infrastructure improvements in Ruby on Rails while maintaining high
          code quality and mentoring contributors in an open-source environment.
        </p>
      </div>

      <div className="role">
        <span className="role__dates">September 2022 — August 2025</span>
        <div className="role__head">
          <Image
            src="/experience/irvine.svg"
            alt="City of Irvine"
            width={34}
            height={34}
            className="role__logo"
          />
          <h3 className="role__title">
            City of Irvine{"  "}
            <span className="role__position">Technology Tutor</span>
          </h3>
        </div>
        <p className="role__body">
          Provided weekly 1:1 support to seniors aged 60–85 at the Lakeview
          Senior Center, including Spanish-speaking residents, helping them
          navigate devices, apps, and everyday technology challenges.
        </p>
      </div>
    </section>
  );
}
