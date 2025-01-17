import Head from "next/head";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume | My Portfolio</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-3xl font-bold">My Resume</h1>
        <section className="text-left mb-4">
          <h2>Summary</h2>
          <p>
            Seasoned Cyber Security professional with a Master of Science in Information Systems from the University of Utah.
            Currently working as a Senior Security Partner at Adobe, Inc. in Lehi, UT.
            Currently studying Full Stack Web development to earn proficiencies in JavaScript, React, HTML/CSS, MERN Stack, and SQL to transition into a career in Software Engineering within the Security Industry.
          </p>
        </section>
        <section className="mb-4">
          <h2>Proficiencies</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">JavaScript</li>
            <li className="list-group-item">React</li>
            <li className="list-group-item">HTML/CSS</li>
            <li className="list-group-item">MERN Stack</li>
            <li className="list-group-item">SQL</li>
          </ul>
        </section>
        <a
          href="/resume.pdf"
          className="mt-4 px-6 py-3 bg-blue-600 rounded hover:bg-blue-500"
          download
        >
          Download Resume (PDF)
        </a>
      </main>
    </>
  );
}
