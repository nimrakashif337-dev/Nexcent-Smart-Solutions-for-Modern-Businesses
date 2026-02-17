export default function Services() {
  const services = [
    {
      title: "Business Strategy",
      icon: "📊",
      desc: "Strategic planning and execution frameworks to help businesses scale sustainably and stay competitive."
    },
    {
      title: "Digital Marketing",
      icon: "📣",
      desc: "Performance-driven campaigns that increase visibility, engagement, and measurable growth."
    },
    {
      title: "SaaS Development",
      icon: "💻",
      desc: "Modern, scalable, and secure SaaS applications built with cutting-edge technologies."
    },
    {
      title: "Performance Analytics",
      icon: "📈",
      desc: "Data insights and analytics tools to optimize performance and maximize ROI."
    },
    {
      title: "Cloud Integration",
      icon: "☁",
      desc: "Seamless cloud solutions to improve efficiency, flexibility, and scalability."
    },
    {
      title: "24/7 Support",
      icon: "🎧",
      desc: "Reliable customer support ensuring uninterrupted business operations."
    }
  ];

  return (
    <div className="bg-gray-50 transition duration-300">


      {/* Hero Section */}
      <section className="px-6 md:px-20 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-800 dark:text-white">
          Our <span className="text-green-600">Professional Services</span>
        </h1>

        <p className="mt-6 text-black max-w-2xl mx-auto">
          We deliver innovative digital solutions designed to drive growth,
          enhance performance, and transform businesses for the future.
        </p>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-20 pb-20 grid md:grid-cols-3 gap-10">

        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 text-center"
          >
            <div className="text-5xl mb-6">{service.icon}</div>

            <h2 className="text-2xl font-semibold mb-4 text-green-600">
              {service.title}
            </h2>

            <p className="text-gray-600 dark:text-gray-300">
              {service.desc}
            </p>
          </div>
        ))}

      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-20 py-20 bg-green-600 text-white text-center">
        <h2 className="text-4xl font-bold">
          Ready to Accelerate Your Business Growth?
        </h2>

        <p className="mt-6 max-w-2xl mx-auto">
          Partner with Nexcent and unlock innovative strategies that help
          your business grow faster and smarter.
        </p>

        <button className="mt-8 bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Get Started Today
        </button>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-6 md:px-20 py-24 bg-white dark:bg-gray-800 transition duration-300">

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            Why Choose <span className="text-green-600">Nexcent?</span>
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-300">
            We combine strategy, innovation, and technology to deliver
            scalable digital solutions that create measurable business impact.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 shadow-md hover:shadow-xl transition duration-300 text-center">
            <div className="text-5xl mb-6">🚀</div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Innovation-Driven Approach
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We leverage modern technologies and forward-thinking strategies
              to ensure your business stays ahead of the competition.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 shadow-md hover:shadow-xl transition duration-300 text-center">
            <div className="text-5xl mb-6">🎯</div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Results-Focused Execution
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our solutions are built with performance and measurable outcomes
              in mind — ensuring real ROI for your investment.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 shadow-md hover:shadow-xl transition duration-300 text-center">
            <div className="text-5xl mb-6">🤝</div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Long-Term Partnership
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We believe in building strong client relationships through
              transparency, collaboration, and continuous support.
            </p>
          </div>

        </div>

      </section>


    </div>
  );
}



// import serviceImg from "../assets/services.jfif";
// import teamImg from "../assets/team.jfif";
// import marketingImg from "../assets/marketing.jfif";

// export default function Services() {
//   return (
//     <div className="bg-gray-50">

//       {/* Hero Section */}
//       <section className="px-6 md:px-20 py-20 text-center bg-white">
//         <h1 className="text-5xl font-bold text-gray-800">
//           Our <span className="text-green-600">Professional Services</span>
//         </h1>
//         <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
//           At Nexcent, we provide innovative digital solutions designed
//           to help businesses scale efficiently and achieve long-term growth.
//         </p>
//       </section>

//       {/* Services Cards */}
//       <section className="px-6 md:px-20 py-20 grid md:grid-cols-3 gap-10">

//         {[
//           "Business Strategy",
//           "Digital Marketing",
//           "SaaS Development",
//           "Performance Analytics",
//           "Cloud Integration",
//           "24/7 Support"
//         ].map((service, index) => (
//           <div
//             key={index}
//             className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition"
//           >
//             <h2 className="text-2xl font-semibold mb-4 text-green-600">
//               {service}
//             </h2>
//             <p className="text-gray-600">
//               Professional solutions tailored to boost your business performance
//               and digital transformation journey.
//             </p>
//           </div>
//         ))}

//       </section>

//       {/* Image + Text Section 1 */}
//       <section className="px-6 md:px-20 py-20 flex flex-col md:flex-row items-center gap-12 bg-white">

//         <div className="md:w-1/2">
//           <img
//             src={serviceImg}
//             alt="Business Meeting"
//             className="rounded-xl shadow-lg"
//           />
//         </div>

//         <div className="md:w-1/2">
//           <h2 className="text-4xl font-bold text-gray-800">
//             Strategy That Drives Results
//           </h2>

//           <p className="mt-6 text-gray-600">
//             We analyze your business goals and create customized strategies
//             that maximize efficiency and revenue growth.
//           </p>

//           <ul className="mt-6 space-y-3 text-gray-700">
//             <li>✔ Data-Driven Planning</li>
//             <li>✔ Market Research</li>
//             <li>✔ Competitive Analysis</li>
//             <li>✔ Growth Roadmaps</li>
//           </ul>
//         </div>

//       </section>

//       {/* Image + Text Section 2 */}
//       <section className="px-6 md:px-20 py-20 flex flex-col md:flex-row-reverse items-center gap-12 bg-gray-100">

//         <div className="md:w-1/2">
//           <img
//             src={marketingImg}
//             alt="Marketing Analytics"
//             className="rounded-xl shadow-lg"
//           />
//         </div>

//         <div className="md:w-1/2">
//           <h2 className="text-4xl font-bold text-gray-800">
//             Digital Marketing Excellence
//           </h2>

//           <p className="mt-6 text-gray-600">
//             Our marketing solutions help you reach the right audience,
//             increase conversions, and strengthen your brand presence.
//           </p>

//           <ul className="mt-6 space-y-3 text-gray-700">
//             <li>✔ SEO Optimization</li>
//             <li>✔ Social Media Campaigns</li>
//             <li>✔ Paid Advertising</li>
//             <li>✔ Performance Tracking</li>
//           </ul>
//         </div>

//       </section>

//       {/* Team Section */}
//       <section className="px-6 md:px-20 py-20 bg-white">

//         <div className="flex flex-col md:flex-row items-center gap-12">

//           {/* Left Image */}
//           <div className="md:w-1/2">
//             <img
//               src={teamImg}
//               alt="Our Team"
//               className="rounded-xl shadow-lg w-full max-w-md"
//             />
//           </div>

//           {/* Right Content */}
//           <div className="md:w-1/2">
//             <h2 className="text-4xl font-bold text-gray-800">
//               Meet Our Expert Team
//             </h2>

//             <p className="mt-6 text-gray-600">
//               Our experienced professionals are dedicated to delivering
//               innovative and scalable solutions tailored to your business needs.
//             </p>

//             <p className="mt-4 text-gray-600">
//               With years of industry expertise, our team focuses on strategy,
//               innovation, and execution to ensure measurable business growth.
//             </p>

//             <ul className="mt-6 space-y-3 text-gray-700">
//               <li>✔ Certified Industry Experts</li>
//               <li>✔ Innovative Thinkers</li>
//               <li>✔ Client-Focused Approach</li>
//               <li>✔ Proven Track Record</li>
//             </ul>

//             <button className="mt-8 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
//               Learn More About Us
//             </button>

//           </div>

//         </div>

//       </section>


//       {/* CTA Section */}
//       <section className="px-6 md:px-20 py-20 bg-green-600 text-white text-center">

//         <h2 className="text-4xl font-bold">
//           Ready to Accelerate Your Business Growth?
//         </h2>

//         <p className="mt-6">
//           Partner with Nexcent and transform your business digitally.
//         </p>

//         <button className="mt-8 bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
//           Get Started Today
//         </button>

//       </section>

//     </div>
//   );
// }

























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







