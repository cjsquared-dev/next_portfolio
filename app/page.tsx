import Head from "next/head";
import Footer from "@/components/Footer";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Resume from "@/sections/Resume";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <main className="flex flex-col items-center">
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
