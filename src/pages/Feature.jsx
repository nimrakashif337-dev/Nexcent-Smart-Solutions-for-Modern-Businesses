import img1 from "../assets/feature1.jfif";
import img2 from "../assets/feature2.jfif";
import img3 from "../assets/feature3.jfif";
import img4 from "../assets/feature4.jfif";

export default function Features() {
  return (
    <div className="bg-gray-50">

      {/* Hero */}
      <section className="px-6 md:px-20 py-24 text-center bg-white">
        <h1 className="text-5xl font-bold text-green-600">
          Advanced Business Features
        </h1>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
          Explore powerful tools designed to streamline operations,
          increase productivity, and accelerate business growth.
        </p>
      </section>

      {/* Section 1 */}
      <section className="px-6 md:px-20 py-20 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <img
            src={img1}
            alt="Automation"
            className="w-full max-w-md mx-auto rounded-xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold text-green-600">
              Smart Automation
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Automate repetitive workflows and save valuable time.
              Our intelligent automation system improves efficiency
              and reduces operational costs.
            </p>
          </div>

        </div>
      </section>

      {/* Section 2 */}
      <section className="px-6 md:px-20 py-20 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-green-600">
              Real-Time Analytics
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Access live dashboards and performance insights
              that help you make data-driven decisions instantly.
            </p>
          </div>

          <img
            src={img2}
            alt="Analytics"
            loading="lazy"
            className="w-full max-w-md mx-auto rounded-xl shadow-lg"
          />

        </div>
      </section>

      {/* Section 3 */}
      <section className="px-6 md:px-20 py-20 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <img
            src={img3}
            alt="Security"
            loading="lazy"
            className="w-full max-w-md mx-auto rounded-xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold text-green-600">
              Enterprise Security
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Secure your data with encrypted cloud infrastructure,
              advanced access control, and compliance-ready systems.
            </p>
          </div>

        </div>
      </section>


            {/* Section 4 - Green Highlight */}
      <section className="px-6 md:px-20 py-24 bg-green-600 text-white text-center">
        <h2 className="text-4xl font-bold">
          Scalable Growth Solutions
        </h2>

        <p className="mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
          Nexcent empowers businesses with scalable infrastructure
          designed to support long-term growth. Whether you're a startup
          or an enterprise, our flexible architecture adapts to your
          expanding needs without compromising performance or security.
        </p>

        <p className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
          From automation to analytics, every feature is built to
          enhance productivity, optimize workflows, and drive
          measurable business outcomes.
        </p>
      </section>


      {/* Section 5 - Light Green Professional */}
      <section className="px-6 md:px-20 py-24 bg-green-50 text-center">
        <h2 className="text-4xl font-bold text-green-600">
          Why Choose Nexcent?
        </h2>

        <p className="mt-8 max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
          Our platform combines innovation, performance, and reliability
          to deliver exceptional business solutions. We focus on user
          experience, data accuracy, and seamless integration with
          modern digital ecosystems.
        </p>

        <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
          With a dedicated support team and continuous updates,
          Nexcent ensures your business stays competitive in a
          rapidly evolving digital world.
        </p>
      </section>


    </div>
  );
}