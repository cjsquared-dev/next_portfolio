import Head from "next/head";

const projects = [
  { title: "Candidate Search App", description: "Built with React & TypeScript", link: "#" },
  { title: "Login API", description: "Node.js, Express, PostgreSQL", link: "#" },
  { title: "Hostel Management", description: "Next.js, Tailwind CSS", link: "#" },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | My Portfolio</title>
      </Head>
      <main className="p-8 bg-gray-900 text-white">
        <h1 className="text-3xl font-bold mb-6">My Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="p-4 border border-gray-700 rounded-lg">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-400">{project.description}</p>
              <a href={project.link} className="text-blue-400">View Project</a>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
