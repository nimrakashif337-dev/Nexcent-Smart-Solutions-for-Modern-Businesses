import productImg1 from "../assets/product1.jfif";
import productImg2 from "../assets/product2.jfif";

export default function Product() {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="px-6 md:px-20 py-24 bg-white text-center">
        <h1 className="text-5xl font-bold text-gray-800">
          Our <span className="text-green-600">Innovative Products</span>
        </h1>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
          Discover powerful digital solutions designed to simplify
          operations, enhance productivity, and accelerate growth.
        </p>
      </section>

      {/* Product Overview */}
      <section className="px-6 md:px-20 py-20 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <img
            src={productImg1}
            alt="Product Dashboard"
            className="w-full max-w-md mx-auto rounded-xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Business Management Suite
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Our all-in-one management platform integrates
              analytics, automation, and collaboration tools
              into a single seamless system.
            </p>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>✔ Real-time reporting</li>
              <li>✔ Workflow automation</li>
              <li>✔ Secure cloud storage</li>
              <li>✔ Team collaboration tools</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Second Product Section */}
      <section className="px-6 md:px-20 py-20 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Advanced Analytics Platform
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Gain actionable insights with intelligent dashboards
              that provide performance tracking and predictive analysis.
            </p>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>✔ Live performance metrics</li>
              <li>✔ AI-driven insights</li>
              <li>✔ Customizable dashboards</li>
              <li>✔ Exportable reports</li>
            </ul>
          </div>

          <img
            src={productImg2}
            alt="Analytics Product"
            loading="lazy"
            className="w-full max-w-md mx-auto rounded-xl shadow-lg"
          />

        </div>
      </section>

      {/* Green Highlight Section */}
      <section className="px-6 md:px-20 py-24 bg-green-600 text-white text-center">
        <h2 className="text-4xl font-bold">
          Built for Modern Businesses
        </h2>

        <p className="mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
          Nexcent products are designed with scalability,
          performance, and security at their core. Our solutions
          adapt to your evolving business needs while maintaining
          seamless functionality.
        </p>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-20 py-24 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Ready to Experience Nexcent?
        </h2>

        <p className="mt-6 text-gray-600 text-lg">
          Start transforming your business with our powerful
          and reliable digital solutions.
        </p>

        <button className="mt-8 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
          Get Started Today
        </button>
      </section>

    </div>
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
