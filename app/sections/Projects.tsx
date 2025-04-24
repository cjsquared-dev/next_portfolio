import Head from "next/head";
import Image from "next/image";

const projects = [
  { title: 'Event Task Manager', description: 'Built with React & TypeScript', link: 'https://task-manager-chi-pearl.vercel.app/', image: '/images/TaskManager.png' },
  { title: 'Linkzen', description: 'A place for all your project links!', link: 'https://linkzen.onrender.com/', image: '/images/linkzen.png' },
  { title: 'Krazy Kanban Board', description: 'A Krazy KanbanBoard', link: 'https://krazy-kanbanboard.onrender.com/', image: '/images/krazy.png' },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | My Portfolio</title>
      </Head>
      <main className="p-8 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">My Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-primary-color transition-colors duration-300">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                  <span className="inline-block mt-4 text-primary-color font-medium group-hover:underline">
                    View Project →
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}