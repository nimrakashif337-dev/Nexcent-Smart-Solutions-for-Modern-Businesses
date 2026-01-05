import React from "react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen bg-black text-white px-6 md:px-20 py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-800/20 blur-[140px] rounded-full"></div>

      {/* Heading */}
      <div className="relative z-10 mb-20">
        <p className="text-purple-400 uppercase tracking-widest text-sm">
          My Journey
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          Experience & <span className="text-purple-500">Growth</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl">
          I may be at the start of my career, but every step I take is focused on
          learning, building, and improving as a Frontend Developer.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-purple-500/30"></div>

        {/* Item 1 */}
        <div className="relative flex gap-6 mb-16">
          <div className="w-8 flex justify-center">
            <span className="w-4 h-4 bg-purple-500 rounded-full mt-2"></span>
          </div>

          <div className="bg-[#0f0f0f] border border-purple-500/30 rounded-xl p-6 md:p-8 hover:border-purple-500 transition hover:shadow-[0_0_25px_#a855f7]">
            <h3 className="text-xl font-semibold">
              Frontend Developer Intern
            </h3>
            <p className="text-purple-400 text-sm mt-1">
              Internship · Learning Phase
            </p>

            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              Focused on mastering frontend fundamentals by building real UI
              sections, understanding component-based architecture, and
              practicing modern React workflows.
            </p>

            <div className="flex flex-wrap gap-3 mt-5 text-xs">
              <span className="px-3 py-1 border border-purple-500/40 rounded-full">
                React
              </span>
              <span className="px-3 py-1 border border-purple-500/40 rounded-full">
                Tailwind CSS
              </span>
              <span className="px-3 py-1 border border-purple-500/40 rounded-full">
                JavaScript
              </span>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="relative flex gap-6 mb-16">
          <div className="w-8 flex justify-center">
            <span className="w-4 h-4 bg-purple-500 rounded-full mt-2"></span>
          </div>

          <div className="bg-[#0f0f0f] border border-purple-500/30 rounded-xl p-6 md:p-8 hover:border-purple-500 transition hover:shadow-[0_0_25px_#a855f7]">
            <h3 className="text-xl font-semibold">
              Practice & Personal Projects
            </h3>
            <p className="text-purple-400 text-sm mt-1">
              Self Learning · Portfolio Work
            </p>

            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              Built multiple UI sections and layouts to improve visual design,
              responsiveness, and clean code structure. Learned through
              continuous practice and experimentation.
            </p>

            <ul className="mt-4 text-gray-400 text-sm space-y-2">
              <li>• Portfolio website sections</li>
              <li>• Responsive layouts</li>
              <li>• Component reuse & styling</li>
            </ul>
          </div>
        </div>

        {/* Item 3 */}
        <div className="relative flex gap-6">
          <div className="w-8 flex justify-center">
            <span className="w-4 h-4 bg-purple-500 rounded-full mt-2"></span>
          </div>

          <div className="bg-[#0f0f0f] border border-purple-500/30 rounded-xl p-6 md:p-8 hover:border-purple-500 transition hover:shadow-[0_0_25px_#a855f7]">
            <h3 className="text-xl font-semibold">
              Continuous Learning
            </h3>
            <p className="text-purple-400 text-sm mt-1">
              Present · Growing Everyday
            </p>

            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              Currently focused on strengthening React concepts, improving UI/UX
              sense, and preparing myself for a junior frontend developer role.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

















// export default function Experience() {
//   return <h2>Experience Page</h2>;
// }
// export default function Experience() {
//   return (
//     <div className="min-h-screen bg-black text-white p-10">
//       <h1 className="text-4xl font-bold text-purple-400 mb-8">Experience</h1>

//       <div className="grid gap-6 max-w-3xl">
//         {/* Card 1 */}
//         <div className="bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700">
//           <h2 className="text-2xl font-semibold text-purple-300">Frontend Developer Intern</h2>
//           <p className="text-sm text-gray-400 mt-1">(Future Internship)</p>
//           <p className="text-gray-300 mt-3">
//             Seeking internship opportunities to build real‑world experience in frontend
//             development using React.js, TailwindCSS, JavaScript, and responsive UI design.
//           </p>
//         </div>

//         {/* Card 2 */}
//         <div className="bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700">
//           <h2 className="text-2xl font-semibold text-purple-300">Personal Projects</h2>
//           <p className="text-gray-300 mt-3">
//             Developed multiple portfolio projects including UI components, landing pages,
//             and responsive layouts. Gaining experience in styling, animations, state
//             management, and clean code architecture.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
