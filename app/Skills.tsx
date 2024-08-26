import Image from "next/image";

export function Skills() {
  return (
    <div className="w-full">
      <h2 className="subheading">Skills</h2>
      <div className="flex items-center gap-2 flex-wrap">
        <Image
          width={40}
          height={40}
          src="/skills/ruby.png"
          alt="Ruby"
          className="rounded-md"
        />
        <Image
          width={40}
          height={40}
          src="/skills/postgres.png"
          alt="PostgreSQL"
        />
        <Image
          width={40}
          height={40}
          src="/skills/typescript.png"
          alt="Typescript"
          className="rounded-md"
        />
        <Image width={40} height={40} src="/skills/react.png" alt="React" />
        <Image width={40} height={40} src="/skills/expo.png" alt="Expo" />
        {/* <Image
          width={40}
          height={40}
          src="/skills/javascript.png"
          alt="Javascript"
          className="rounded-md"
        /> */}
        <Image width={40} height={40} src="/skills/css.png" alt="CSS" />
        <Image width={40} height={40} src="/skills/nextjs.png" alt="Next.JS" />
      </div>
    </div>
  );
}

