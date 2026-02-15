import Testimonial1 from "../assets/Testimonial1.jfif";
import Testimonial2 from "../assets/Testimonial2.jfif";
import Testimonial3 from "../assets/Testimonial3.jfif";

import { ShieldCheck, TrendingUp, Users } from "lucide-react";

export default function Testimonial() {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="px-6 md:px-20 py-24 bg-white text-center">
        <h1 className="text-5xl font-bold text-gray-800">
          What Our <span className="text-green-600">Clients Say</span>
        </h1>

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          At Nexcent, we prioritize delivering measurable results and
          exceptional customer experiences. Our clients trust us to
          provide reliable digital solutions that drive growth,
          improve efficiency, and create long-term success.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 md:px-20 py-24">
        <div className="grid md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition">
            <img
              src={Testimonial1}
              alt="testimonial 1"
              className="w-24 h-24 object-cover rounded-full mx-auto"
            />

            <h3 className="mt-6 text-xl font-semibold text-gray-800">
              Sarah Mitchell
            </h3>
            <p className="text-green-600 text-sm">
              CEO, BrightTech Solutions
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Nexcent transformed the way we manage our operations.
              Their automation tools significantly reduced manual work
              and improved overall productivity. The platform is intuitive,
              reliable, and incredibly powerful. Our team now works more
              efficiently than ever before.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition">
            <img
              src={Testimonial2}
              alt="testimonial 2"
              className="w-24 h-24 object-cover rounded-full mx-auto"
            />

            <h3 className="mt-6 text-xl font-semibold text-gray-800">
              David Anderson
            </h3>
            <p className="text-green-600 text-sm">
              Founder, NextWave Digital
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed">
              The analytics dashboard provided by Nexcent gives us
              real-time insights that help us make smarter business
              decisions. The clarity and depth of data reporting have
              allowed us to optimize strategies and increase revenue
              consistently over the past year.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition">
            <img
              src={Testimonial3}
              alt="testimonial 3"
              className="w-24 h-24 object-cover rounded-full mx-auto"
            />

            <h3 className="mt-6 text-xl font-semibold text-gray-800">
              Emily Carter
            </h3>
            <p className="text-green-600 text-sm">
              Operations Manager, CoreEdge Ltd.
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Security and reliability were our biggest concerns,
              and Nexcent exceeded expectations. Their cloud-based
              infrastructure ensures our data remains protected while
              maintaining seamless performance across all departments.
              We highly recommend their services.
            </p>
          </div>

        </div>
      </section>

      {/* Green Highlight Section */}
      <section className="px-6 md:px-20 py-24 bg-green-600 text-white text-center">
        <h2 className="text-4xl font-bold">
          Trusted by Growing Businesses Worldwide
        </h2>

        <p className="mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
          Our commitment to innovation, customer satisfaction,
          and long-term partnerships has earned us the trust of
          businesses across industries. We continue to evolve and
          improve our solutions to meet the changing demands of
          the digital world.
        </p>

        <p className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
          Join hundreds of satisfied clients who rely on Nexcent
          to power their growth and achieve sustainable success.
        </p>
      </section>


      {/* Client Success Stories Section */}
      <section className="px-6 md:px-20 py-24 bg-white text-center">
        <h2 className="text-4xl font-bold text-green-600">
          Real Success Stories from Our Clients
        </h2>

        <p className="mt-8 max-w-4xl mx-auto text-gray-900 text-lg leading-relaxed">
          Over the years, Nexcent has partnered with startups, growing
          enterprises, and established organizations to deliver impactful
          digital solutions. Our clients have experienced measurable growth
          in operational efficiency, improved decision-making through
          advanced analytics, and stronger team collaboration.
        </p>

        <p className="mt-6 max-w-4xl mx-auto text-green-600 text-lg leading-relaxed">
          We believe success is not just about implementing technology —
          it’s about building long-term partnerships that empower businesses
          to adapt, innovate, and thrive in an ever-evolving digital landscape.
        </p>

        <p className="mt-6 max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed">
          Each testimonial reflects our dedication to quality, performance,
          and customer satisfaction. We continuously refine our solutions
          based on client feedback to ensure sustainable and scalable growth.
        </p>
      </section>



      {/* Why Clients Trust Us Section */}
      <section className="px-6 md:px-20 py-28 bg-gradient-to-r from-green-600 to-green-700 text-white">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Industry Leaders Choose Nexcent
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg opacity-90">
            Delivering measurable growth, enterprise-grade security,
            and long-term strategic value for modern businesses.
          </p>
        </div>

        <div className="space-y-20">

          {/* Row 1 */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex items-start gap-6 md:w-1/2">
              <ShieldCheck size={48} className="text-white" />
              <p className="text-lg leading-relaxed opacity-95">
                Trust is earned through performance. Our enterprise-level
                infrastructure ensures data protection, reliability, and
                seamless scalability — empowering organizations to operate
                with confidence and long-term stability.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <div className="flex items-start gap-6 md:w-1/2">
              <TrendingUp size={48} className="text-white" />
              <p className="text-lg leading-relaxed opacity-95">
                We focus on measurable outcomes. Through advanced analytics,
                automation, and strategic innovation, our clients consistently
                achieve increased efficiency, improved revenue streams,
                and smarter decision-making processes.
              </p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex items-start gap-6 md:w-1/2">
              <Users size={48} className="text-white" />
              <p className="text-lg leading-relaxed opacity-95">
                Beyond technology, we build partnerships. Our dedicated
                support team works closely with every client to ensure
                long-term success, continuous optimization, and
                sustainable digital transformation.
              </p>
            </div>
          </div>

        </div>

        {/* CTA Button */}
        <div className="text-center mt-20">
          <button className="bg-white text-green-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300">
            Become Our Next Success Story
          </button>
        </div>

      </section>


    </div>
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