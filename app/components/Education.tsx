import { SectionHead } from "./SectionHead";

type Cert = { issuer: string; name: string; href?: string };

const CERTS_2025: Cert[] = [
  {
    issuer: "California Department of Education",
    name: "State seal of Civic Engagement",
  },
  {
    issuer: "CompTIA",
    name: "A+ certification",
    href: "https://cp.certmetrics.com/comptia/en/home/dashboard",
  },
  {
    issuer: "IBM",
    name: "Artificial Intelligence Fundamentals",
    href: "https://www.credly.com/badges/7c53da36-3031-45d7-8b56-e7461a835190",
  },
  {
    issuer: "UCI ICS",
    name: "Machine Learning & AI",
    href: "http://manu-gurudath.github.io/assets/Adobe%20Scan%20Aug%201%2C%202025.pdf",
  },
  {
    issuer: "IBM",
    name: "Project Management Fundamentals",
    href: "https://www.credly.com/badges/c8a20f13-b75c-4f21-b6a3-d35d03a240ff",
  },
];

const CERTS_2024: Cert[] = [
  {
    issuer: "UCI ICS",
    name: "Data analytics",
    href: "https://manu-gurudath.github.io/assets/ICS%20Certificate.pdf",
  },
];

const CERTS_2023: Cert[] = [
  { issuer: "AFA CyberPatriot", name: "Distinguished Silver-Tier team" },
  {
    issuer: "Harvard",
    name: "CS50x certification",
    href: "https://certificates.cs50.io/e1d6b165-ce94-40ee-bbd1-8f19e1da7fe8.pdf?size=letter",
  },
  {
    issuer: "CyberForward",
    name: "Cybersecurity Certification",
    href: "https://manu-codes.pages.dev/Manu%20G.%20Certification%20of%20Completion%20(1).pdf",
  },
];

/** Entries without a credential URL render as plain text, and get no ↗. */
function CertLine({ cert }: { cert: Cert }) {
  const inner = (
    <>
      <span className="cert__issuer">{cert.issuer}</span>
      <span className="cert__name">{cert.name}</span>
      {cert.href && (
        <>
          {" "}
          <span className="cert__arrow">↗</span>
        </>
      )}
    </>
  );

  if (!cert.href) return <span className="cert">{inner}</span>;

  return (
    <a
      className="cert"
      href={cert.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {inner}
    </a>
  );
}

function Row({
  year,
  children,
}: {
  year: string;
  children: React.ReactNode;
}) {
  return (
    <div className="timeline__row">
      <span className="timeline__year">{year}</span>
      <div className="timeline__items">{children}</div>
    </div>
  );
}

export function Education() {
  return (
    <section className="section education">
      <SectionHead index="02" label="Education & certifications" />

      <div className="timeline">
        <Row year="Present">
          <div className="timeline__school">
            <h3>University of California, Riverside</h3>
            <p>{"Computer Science  •  Expected graduation 2030"}</p>
          </div>
        </Row>

        <Row year="2026">
          <div className="timeline__school">
            <h3>Irvine High School</h3>
            <p>Graduated in June</p>
          </div>
        </Row>

        <Row year="2025">
          {CERTS_2025.map((cert) => (
            <CertLine cert={cert} key={`${cert.issuer}-${cert.name}`} />
          ))}
        </Row>

        <Row year="2024">
          {CERTS_2024.map((cert) => (
            <CertLine cert={cert} key={`${cert.issuer}-${cert.name}`} />
          ))}
        </Row>

        <Row year="2023">
          {CERTS_2023.map((cert) => (
            <CertLine cert={cert} key={`${cert.issuer}-${cert.name}`} />
          ))}
        </Row>
      </div>
    </section>
  );
}
