import Head from "next/head";
// import Image from "next/image";

const projects = [
  { title: 'Event Task Scheduler', description: 'Built with React & TypeScript', link: 'https://jacobbaqleh1.github.io/event-task-scheduler/' },
  { title: 'Linkzen', description: 'A place for all your project links!', link: 'https://linkzen.onrender.com/' },
  { title: 'Krazy Kanban Board', description: 'A Krazy KanbanBoard', link: 'https://krazy-kanbanboard.onrender.com/' },
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
