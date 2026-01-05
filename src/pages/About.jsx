// import { motion } from "framer-motion";
// import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
// // import profile from "../assets/nimra.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white flex items-center px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="animate-fadeInUp">
          <p className="text-purple-400 mb-3 tracking-widest uppercase">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Professional <span className="text-purple-500">Frontend</span>
            <br />
            Solutions for Web
          </h2>

          <p className="text-gray-300 mb-8 leading-relaxed max-w-xl">
            Hi, I'm Nimra — a Frontend Developer skilled in HTML, CSS,
            JavaScript, React.js, and Tailwind CSS. I focus on creating
            modern, responsive, and user-friendly interfaces.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-10">
            <p className="flex items-center gap-2">✔ Clean UI Design</p>
            <p className="flex items-center gap-2">✔ Responsive Layouts</p>
            <p className="flex items-center gap-2">✔ React Projects</p>
            <p className="flex items-center gap-2">✔ Tailwind Styling</p>
          </div>

          <a
            href="#contact"
            className="inline-block bg-purple-600 hover:bg-purple-700 transition-all duration-300 px-7 py-3 rounded-lg font-medium shadow-lg hover:shadow-purple-500/30"
          >
            Contact Me
          </a>
        </div>

        {/* RIGHT SIDE – IMAGE KI JAGAH */}
        <div className="relative animate-fadeInRight">
          <div className="absolute -inset-1 bg-purple-600/30 blur-2xl rounded-2xl"></div>

          <div className="relative bg-black border border-purple-500/30 rounded-2xl p-10 text-center">
            <h3 className="text-4xl font-bold text-purple-500 mb-2">
              Frontend
            </h3>
            <p className="text-gray-400 mb-8">
              Passion • Creativity • Growth
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-purple-900/20 border border-purple-500/20 rounded-lg p-4 hover:scale-105 transition">
                HTML
              </div>
              <div className="bg-purple-900/20 border border-purple-500/20 rounded-lg p-4 hover:scale-105 transition">
                CSS
              </div>
              <div className="bg-purple-900/20 border border-purple-500/20 rounded-lg p-4 hover:scale-105 transition">
                JavaScript
              </div>
              <div className="bg-purple-900/20 border border-purple-500/20 rounded-lg p-4 hover:scale-105 transition">
                React
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}























// const About = () => {
//   return (
//     <div className="min-h-screen bg-black text-white px-6 py-16 md:px-20">

//       {/* PROFILE IMAGE
//       <div className="flex justify-center mb-10">
//         <motion.img
//           src={profile}
//           alt="Profile"
//           className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover border-4 border-purple-600 shadow-lg"
//           initial={{ opacity: 0, scale: 0.7 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//         />
//       </div> */}

//       {/* CONTENT */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="max-w-3xl mx-auto text-center"
//       >
//         <h1 className="text-4xl font-bold text-purple-500 mb-4">About Me</h1>

//         <p className="text-gray-300 leading-relaxed text-lg">
//           I am a Frontend Developer skilled in designing modern, clean, and
//           user-friendly interfaces. I love building websites that are fast,
//           attractive, and responsive. I always focus on writing clean code
//           and creating beautiful UI with perfect animations.
//         </p>
//       </motion.div>

//       {/* SKILLS SECTION */}
//       <div className="max-w-3xl mx-auto mt-14">
//         <h2 className="text-3xl font-semibold text-purple-400 text-center mb-6">
//           What Skills I Have
//         </h2>

//         <div className="flex justify-center gap-10 text-5xl text-purple-500">
//           <FaHtml5 className="hover:text-purple-300 transition" />
//           <FaCss3Alt className="hover:text-purple-300 transition" />
//           <FaJs className="hover:text-purple-300 transition" />
//           <FaReact className="hover:text-purple-300 transition" />
//         </div>
//       </div>

//       {/* GOALS */}
//       <div className="max-w-3xl mx-auto mt-16 text-center">
//         <h2 className="text-3xl font-semibold text-purple-400 mb-4">
//           My Goal
//         </h2>

//         <p className="text-gray-300 text-lg leading-relaxed">
//           My goal is to become a professional frontend developer, mastering
//           React.js, UI/UX, and advanced animations. I want to build real-world
//           projects, improve daily, and grow into a full-stack developer in future.
//         </p>
//       </div>

//       {/* BUTTONS */}
//       <div className="flex justify-center gap-6 mt-12">
//         <a
//           href="/contact"
//           className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold shadow-md"
//         >
//           Contact Me
//         </a>

//         <a
//           href="/cv.pdf"
//           download
//           className="px-6 py-3 border border-purple-500 text-purple-300 rounded-lg hover:bg-purple-600/20 transition"
//         >
//           Download CV
//         </a>



//       </div>
//     </div >
//   );
// };

// export default About;


































// export default function About() {
//   return (





//     <div className="min-h-screen bg-black text-white flex items-center justify-center p-10">
//       <div className="max-w-4xl bg-purple-700/20 p-10 rounded-2xl flex gap-10 items-center">
//         <img
//           src={profileImg}
//           alt="Profile"
//           className="w-52 h-52 object-cover rounded-xl shadow-lg"
//         />



//         {/* TEXT SECTION */}
//         <div className="space-y-6">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-purple-300 drop-shadow-lg">
//             About Me
//           </h1>

//           <p className="text-lg leading-relaxed text-gray-300">
//             Hi! I'm <span className="text-purple-300 font-semibold">Nimra Kashif</span>,
//             a passionate Frontend Developer who loves building beautiful,
//             responsive, and user‑friendly web interfaces. I work with
//             <span className="text-purple-300 font-semibold"> HTML, CSS, JavaScript, React.js, and TailwindCSS</span>.
//           </p>

//           <p className="text-lg leading-relaxed text-gray-300">
//             I'm currently seeking an <span className="font-semibold text-purple-300">internship</span>
//             where I can apply my skills, learn from professionals, and grow as a
//             developer.
//           </p>

//           <div className="flex gap-4 pt-4">
//             <Link to="/contact">
//               <button className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition shadow-lg font-semibold">
//                 Contact Me
//               </button>
//             </Link>





//             <button className="px-6 py-3 rounded-xl border border-purple-400 hover:bg-purple-500/20 transition font-semibold">
//               Download CV
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }







