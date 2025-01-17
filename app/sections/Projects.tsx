import Head from "next/head";
import Image from "next/image";

const projects = [
  { title: 'Event Task Scheduler', description: 'Built with React & TypeScript', link: 'https://jacobbaqleh1.github.io/event-task-scheduler/', image: '/images/eventscheduler.png' },
  { title: 'Linkzen', description: 'A place for all your project links!', link: 'https://linkzen.onrender.com/', image: '/images/linkzen.png' },
  { title: 'Krazy Kanban Board', description: 'A Krazy KanbanBoard', link: 'https://krazy-kanbanboard.onrender.com/', image: '/images/krazy.png' },
];
export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | My Portfolio</title>
      </Head>
      <main className="p-8">
        <h1 className="text-3xl mb-6">My Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="p-4 border border-gray-700 rounded-lg">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block relative group">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="rounded-lg mb-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-lg group-hover:opacity-0 transition-opacity duration-300"></div>
              </a>
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-400">{project.description}</p>
              <a href={project.link} className="text-blue-400" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}