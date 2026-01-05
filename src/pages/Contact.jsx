export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0b0b0b] text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-sm tracking-[0.3em] text-purple-400 uppercase mb-3">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold">
            Let’s <span className="text-purple-500">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-lg">
            Have a project idea, internship opportunity, or just want to say hi?
            Feel free to reach out.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-14">

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Get in Touch
            </h3>

            <p className="text-gray-400 leading-relaxed">
              I’m open to frontend internships, learning opportunities, and
              collaborations. I usually respond within 24 hours.
            </p>

            <div className="space-y-4 text-gray-300">
              <p>
                <span className="text-purple-400 font-medium">Email:</span><br />
                nimrakashif337@gmail.com
              </p>

              <p>
                <span className="text-purple-400 font-medium">Location:</span><br />
                Okara, Pakistan
              </p>

              <p>
                <span className="text-purple-400 font-medium">GitHub:</span><br />
                github.com/nimrakashif337-dev
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="bg-[#111] border border-purple-500/20 rounded-xl p-8 space-y-6"
          >
            <div>
              <label className="text-sm text-gray-400">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-2 px-4 py-3 bg-transparent border border-gray-700 rounded-md
                focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-3 bg-transparent border border-gray-700 rounded-md
                focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full mt-2 px-4 py-3 bg-transparent border border-gray-700 rounded-md
                focus:outline-none focus:border-purple-500 resize-none"
              ></textarea>
            </div>

            <button
              type="button"
              className="px-6 py-3 border border-purple-500 text-purple-400 rounded-md
              hover:bg-purple-600 hover:text-black transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
