import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>About Me | My Portfolio</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-4xl font-bold">Hello, Welcome to CJSquared&apos;s First Next JS App 👋</h1>
        <div>
        <Image
          src="/images/cjsquared.png"
          alt="Headshot"
          width={300}
          height={300}
        />
      </div>
        <p className="mt-4 text-lg">Aspiring Web Developer | Cybersecurity Enthusiast</p>
      </main>
    </>
  );
}
