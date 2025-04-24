import Head from "next/head";
import Image from "next/image";
import githubLogo from "public/images/githubLogo.png";
import linkedinLogo from "public/images/linkedinLogo.png";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume | My Portfolio</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen text-black">
        <section className="text-left mb-4 py-8">
          <h2 className="text-center py-8">Experience Summary</h2>
          <p>
            I am a full stack developer with a passion for learning how to build web applications. I have experience with JavaScript, React, Node.js, and SQL. I am also experienced with cyber security and have experience with penetration testing.
          </p>
        </section>
        <section className="flex flex-col items-center mb-8">
          <h3 className="text-lg font-semibold mb-4">Connect with Me</h3>
          <div className="flex gap-6">
            {/* GitHub Link */}
            <a
              href="https://github.com/cjsquared-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Image
                src={githubLogo}
                alt="GitHub Logo"
                className="w-10 h-10 transition-transform duration-300 group-hover:scale-125 group-hover:brightness-150"
              />
            </a>

            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/christopherjohnson1006/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Image
                src={linkedinLogo}
                alt="LinkedIn Logo"
                className="w-10 h-10 transition-transform duration-300 group-hover:scale-125 group-hover:brightness-150"
              />
            </a>
          </div>
        </section>
        <section className="mb-4 w-full py-8">
          <h2 className="text-center mb-4">Developer Skills</h2>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <div className="flex-1 p-4 border border-gray-300 rounded-lg">
              <h3 className="text-center mb-2">Front-End Development</h3>
              <ul className="list-disc list-inside">
                <li>JavaScript</li>
                <li>React</li>
                <li>HTML/CSS</li>
                <li>Next.JS</li>
              </ul>
            </div>
            <div className="flex-1 p-4 border border-gray-300 rounded-lg">
              <h3 className="text-center mb-2">Back-End Development</h3>
              <ul className="list-disc list-inside">
                <li>Node.js</li>
                <li>Express</li>
                <li>SQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </section>
        <a
          href="/assets/resume.pdf"
          download
          className="bg-primary-color text-white px-6 py-3 rounded-lg hover:bg-secondary-color transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Resume"
          title="Download Resume"
        >
          Download Resume (PDF)
        </a>
      </main>
    </>
  );
}