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
      <main className="flex flex-col items-center gradient-bg min-h-screen">
        <Header />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
