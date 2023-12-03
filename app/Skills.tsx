import Image from "next/image";

export function Skills() {
  return (
    <div className="w-full">
      <h2 className="subheading">Skills</h2>
      <div className="flex items-center gap-2">
        <Image
          width={40}
          height={40}
          src="/skills/typescript.png"
          alt="Typescript"
          className="rounded-md"
        />
        <Image
          width={40}
          height={40}
          src="/skills/javascript.png"
          alt="Javascript"
          className="rounded-md"
        />
        <Image width={40} height={40} src="/skills/react.png" alt="React" />
        <Image width={40} height={40} src="/skills/css.png" alt="CSS" />
        <Image width={40} height={40} src="/skills/nextjs.png" alt="Next.JS" />
        <Image
          width={40}
          height={40}
          src="/skills/postgres.png"
          alt="PostgreSQL"
        />
      </div>
    </div>
  );
}
