// export default function Education() {
//   return <h2>Education Page</h2>;
// }

export default function Education() {
  return (
    <section
      id="education"
      className="bg-black text-white py-20 px-6 md:px-16"
    >
      {/* Heading */}
      <p className="text-sm tracking-widest text-gray-400 mb-4">
        MY EDUCATION
      </p>

      <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-purple-700">
        Frontend <br /> Development
      </h2>

      {/* Education Grid */}
      <div className="grid md:grid-cols-3 gap-12">
        {/* Card 1 */}
        <div>
          <h3 className="text-xl font-semibold mb-2">
            FA IT in Computer
          </h3>
          <p className="text-gray-400 text-sm mb-1">
            Aspire College
          </p>
          <p className="text-gray-500 text-sm">
            2023 – 2025
          </p>
        </div>

        {/* Card 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Frontend Development
          </h3>
          <p className="text-gray-400 text-sm mb-1">
            Self Learning & Practice
          </p>
          <p className="text-gray-500 text-sm">
            HTML, CSS, JavaScript, React, Tailwind
          </p>
        </div>

        {/* Card 3 */}
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Practice & Portfolio Projects
          </h3>
          <p className="text-gray-400 text-sm mb-1">
            Personal Work
          </p>
          <p className="text-gray-500 text-sm">
            Portfolio website & UI practice
          </p>
        </div>
      </div>
    </section>
  );
}

