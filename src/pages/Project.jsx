import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A responsive personal portfolio built using React and Tailwind CSS to showcase skills, education and projects.",
      tech: ["React", "Tailwind", "Vite"],
      link: "#",
    },
    {
      title: "Practice React Components",
      description:
        "Hands-on practice projects focusing on React components, props, state and basic hooks.",
      tech: ["React", "JavaScript"],
      link: "#",
    },
    {
      title: "Frontend UI Practice",
      description:
        "Multiple UI sections and layouts created for practice using HTML, CSS and Tailwind.",
      tech: ["HTML", "CSS", "Tailwind"],
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-6 md:px-20 py-20"
    >
      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">
          My <span className="text-purple-500">Projects</span>
        </h2>
        <p className="text-gray-400 mt-3 max-w-xl">
          Here are some of my practice and personal projects that reflect my
          frontend learning journey.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-purple-500/30 rounded-xl p-6 hover:border-purple-500 transition duration-300 hover:shadow-[0_0_20px_#a855f7]"
          >
            <h3 className="text-xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((item, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 border border-purple-500 rounded-full text-purple-400"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Button */}
            <a
              href={project.link}
              target="_blank"
              className="inline-block text-sm px-5 py-2 border border-purple-500 rounded-md hover:bg-purple-500 hover:text-black transition"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}


































// export default function Project() {
//   return <h2>Project Page</h2>;
// }


// export default function Project() {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white px-6 py-16">
//       <div className="max-w-5xl mx-auto">

//         {/* Heading */}
//         <h1 className="text-4xl font-bold text-purple-400 mb-10 border-b border-purple-500 pb-2">
//           My Projects
//         </h1>

//         {/* Project Grid */}
//         <div className="grid md:grid-cols-2 gap-8">

//           {/* Project 1 */}
//           <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 duration-300">
//             <h2 className="text-2xl font-semibold text-purple-300">
//               Portfolio Website
//             </h2>
//             <p className="text-gray-300 mt-2">
//               A responsive personal portfolio built using React and TailwindCSS.
//             </p>
//             <button className="mt-4 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700">
//               View Project
//             </button>
//           </div>

//           {/* Project 2 */}
//           <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 duration-300">
//             <h2 className="text-2xl font-semibold text-purple-300">
//               Login Form UI
//             </h2>
//             <p className="text-gray-300 mt-2">
//               Beautiful login page with validation built using HTML, CSS and JavaScript.
//             </p>
//             <button className="mt-4 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700">
//               View Project
//             </button>
//           </div>

         
        

//         </div>
//       </div>
//     </div>
//   );
// }
