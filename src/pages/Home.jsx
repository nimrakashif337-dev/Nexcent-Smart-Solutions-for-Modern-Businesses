export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#0b0b0b] text-white flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">

        {/* INTRO */}
        <p className="text-sm tracking-[0.3em] text-purple-400 uppercase mb-6">
          Frontend Developer
        </p>

        {/* NAME */}
        <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-10">
          Nimra <span className="text-purple-500">Kashif</span>
        </h1>

        {/* BIO LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

          {/* LEFT BIO */}
          <div>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              I’m a passionate frontend developer focused on building clean,
              modern and user-friendly web interfaces. I enjoy turning ideas
              into responsive designs using React and Tailwind CSS.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              I’m continuously learning and improving my skills, with a strong
              interest in UI design, performance and real-world usability.
            </p>

            {/* CTA */}
            <div className="mt-10 flex gap-10">
              <a
                href="#projects"
                className="text-white border-b border-white/40 pb-1 hover:border-purple-500 transition"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                className="text-purple-400 border-b border-purple-400/60 pb-1 hover:text-purple-300 transition"
              >
                View Resume
              </a>
            </div>
          </div>

          {/* RIGHT SOFT CARD */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-600/20 blur-2xl rounded-full"></div>

            <div className="relative border border-purple-500/30 rounded-2xl p-8 bg-[#0f0f0f]">
              <h3 className="text-xl font-medium mb-6 text-purple-400">
                Quick Overview
              </h3>

              <ul className="space-y-4 text-gray-400">
                <li>• Frontend Developer (React)</li>
                <li>• Clean & Responsive UI</li>
                <li>• Tailwind CSS Styling</li>
                <li>• Git & GitHub</li>
                <li>• Open for Internship / Junior Role</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}





























// import { Link } from "react-router-dom";
// export default function Home() {
//     return (
//         <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-900 text-white px-6 py-20">
//             <div className="max-w-5xl mx-auto text-center">
//                 {/* Hero Section */}
//                 <h1 className="text-5xl font-extrabold mb-6">
//                     Welcome to My Portfolio
//                 </h1>
//                 <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
//                     Hi, I'm Nimra — a Frontend Developer skilled in HTML, CSS, JavaScript, React.js, and TailwindCSS.
//                     I love creating clean, modern, and responsive web interfaces.
//                 </p>


//                 {/* Buttons */}
//                 <div className="flex justify-center gap-6 mt-8">

//                     <Link to="/about">
//                         <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-2xl text-lg font-semibold shadow-lg transition-all">
//                             About Me
//                         </button>

//                     </Link>

//                     <Link to="/contact">
//                         <button className="px-8 py-3 bg-white/20 hover:bg-white/30 rounded-2xl text-lg font-semibold shadow-lg transition-all">
//                             Contact
//                         </button>
//                     </Link>

//                 </div>


//                 {/* Skills Section */}
//                 <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8">
//                     <div className="bg-white/10 p-8 rounded-2xl shadow-xl border border-white/20">
//                         <h3 className="text-xl font-bold text-purple-300">Frontend</h3>
//                         <p className="text-gray-300 mt-2">HTML, CSS, JavaScript</p>
//                     </div>


//                     <div className="bg-white/10 p-8 rounded-2xl shadow-xl border border-white/20">
//                         <h3 className="text-xl font-bold text-purple-300">Frameworks</h3>
//                         <p className="text-gray-300 mt-2">React.js, TailwindCSS</p>
//                     </div>


//                     <div className="bg-white/10 p-8 rounded-2xl shadow-xl border border-white/20">
//                         <h3 className="text-xl font-bold text-purple-300">Goal</h3>
//                         <p className="text-gray-300 mt-2">Become a professional UI Developer</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
