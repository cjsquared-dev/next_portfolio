import Head from "next/head";
import Header from "@/ui/Header";
import Footer from "@/ui/Footer";
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
      <main className="flex flex-col items-center bg-gradient-to-b from-white via-gray-100 to-gray-200 min-h-screen">
        <Header />
        <section className="w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <About />
          <Projects />
          <Resume />
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}