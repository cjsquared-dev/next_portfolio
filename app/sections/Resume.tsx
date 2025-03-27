import Head from "next/head";

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
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
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