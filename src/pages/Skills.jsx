export default function Skills() {
  const mainSkills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "React", level: 70 },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-[#0b0b0b] text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-16">
          <p className="text-sm tracking-[0.3em] text-purple-400 uppercase mb-3">
            My Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold">
            Technical <span className="text-purple-500">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mt-5 text-lg">
            Core frontend technologies I use while building modern and
            responsive user interfaces.
          </p>
        </div>

        {/* MAIN SKILLS (SMALLER CIRCLES) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {mainSkills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <div className="relative w-24 h-24">
                <svg className="w-full h-full rotate-[-90deg]">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#1f1f1f"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#a855f7"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={2 * Math.PI * 40}
                    strokeDashoffset={
                      2 * Math.PI * 40 -
                      (skill.level / 100) * (2 * Math.PI * 40)
                    }
                    strokeLinecap="round"
                  />
                </svg>

                <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
                  {skill.level}%
                </span>
              </div>

              <p className="text-gray-300 font-medium">
                {skill.name}
              </p>
            </div>
          ))}
        </div>

        {/* CONTEXT API – STRONG SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              React <span className="text-purple-500">Context API</span>
            </h3>

            <p className="text-gray-400 leading-relaxed mb-4">
              I use the React Context API to manage global state and avoid
              unnecessary props drilling. It helps keep components clean,
              reusable, and easy to maintain.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I have implemented context in small-scale projects such as theme
              handling, user data sharing, and UI state management.
            </p>
          </div>

          {/* SUPPORTING SKILLS */}
          <div className="flex flex-wrap gap-4">
            {["Tailwind CSS", "Git & GitHub", "Responsive Design"].map(
              (skill, i) => (
                <span
                  key={i}
                  className="px-5 py-2 border border-purple-500/40 rounded-full text-sm text-gray-300
                  hover:bg-purple-600 hover:text-black transition"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

























// export default function Skills() {
//   const skills = [
//     { name: "HTML", level: 95 },
//     { name: "CSS", level: 90 },
//     { name: "JavaScript", level: 85 },
//     { name: "React", level: 88 },
//     { name: "Tailwind CSS", level: 92 },
//     { name: "Git & GitHub", level: 80 },
//     { name: "UI Design", level: 78 },
//     { name: "Responsive Design", level: 90 },
//   ];

//   return (
//     <section
//       id="skills"
//       className="min-h-screen bg-black text-white px-6 py-20"
//     >
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

//         {/* LEFT CONTENT */}
//         <div className="animate-fadeInUp">
//           <p className="text-purple-400 tracking-widest uppercase mb-3">
//             My Skills
//           </p>

//           <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
//             Let’s Explore <br />
//             <span className="text-purple-500">Skills & Experience</span>
//           </h2>

//           <p className="text-gray-400 mb-10 max-w-lg">
//             I specialize in frontend development with a strong focus on
//             modern UI design, performance, and responsive layouts.
//           </p>

//           <a
//             href="#projects"
//             className="inline-block bg-purple-600 hover:bg-purple-700 transition-all px-7 py-3 rounded-lg font-medium shadow-lg hover:shadow-purple-500/30"
//           >
//             View Projects
//           </a>
//         </div>

//         {/* RIGHT SKILLS GRID */}
//         <div className="grid grid-cols-2 gap-6 animate-fadeInRight">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="bg-[#111] border border-purple-500/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300"
//             >
//               <h3 className="text-lg font-semibold mb-4 text-purple-400">
//                 {skill.name}
//               </h3>

//               <div className="w-full bg-black rounded-full h-2 mb-3 overflow-hidden">
//                 <div
//                   className="h-full bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full animate-skillBar"
//                   style={{ width: `${skill.level}%` }}
//                 />
//               </div>

//               <p className="text-sm text-gray-400">{skill.level}%</p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }



















// export default function Skills() {
//   return <h2>Skills Page</h2>;
// }
// export default function Skills() {
//   return (
//     <div className="min-h-screen bg-black text-white p-10">
//       <h1 className="text-4xl font-bold text-purple-400 mb-8">Skills</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
//         {/* Skill Card */}
//         <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700 shadow-xl hover:scale-105 transition">
//           <h2 className="text-xl font-semibold text-purple-300">HTML</h2>
//           <p className="text-gray-400 mt-2">Semantic structure, clean layouts</p>
//         </div>

//         <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700 shadow-xl hover:scale-105 transition">
//           <h2 className="text-xl font-semibold text-purple-300">CSS</h2>
//           <p className="text-gray-400 mt-2">Flexbox, Grid, Responsive UI</p>
//         </div>

//         <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700 shadow-xl hover:scale-105 transition">
//           <h2 className="text-xl font-semibold text-purple-300">JavaScript</h2>
//           <p className="text-gray-400 mt-2">Logic building, DOM handling</p>
//         </div>

//         <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700 shadow-xl hover:scale-105 transition">
//           <h2 className="text-xl font-semibold text-purple-300">React.js</h2>
//           <p className="text-gray-400 mt-2">Components, props, hooks</p>
//         </div>

//         <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700 shadow-xl hover:scale-105 transition">
//           <h2 className="text-xl font-semibold text-purple-300">TailwindCSS</h2>
//           <p className="text-gray-400 mt-2">Modern UI, animations, utility classes</p>
//         </div>

//         {/* <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700 shadow-xl hover:scale-105 transition">
//           <h2 className="text-xl font-semibold text-purple-300">Git & GitHub</h2>
//           <p className="text-gray-400 mt-2">Version control, repo handling</p>
//         </div> */}
//       </div>
//     </div>
//   );
// }