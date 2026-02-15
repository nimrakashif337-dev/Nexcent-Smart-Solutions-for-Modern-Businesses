import { useState } from "react";
import { HelpCircle, ShieldCheck, TrendingUp, Settings, ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      icon: <HelpCircle size={24} />,
      question: "What services does Nexcent provide?",
      answer:
        "Nexcent provides comprehensive digital transformation solutions including automation systems, analytics dashboards, cloud-based infrastructure, and scalable SaaS platforms. Our services are designed to enhance productivity, streamline operations, and support long-term business growth across industries."
    },
    {
      icon: <ShieldCheck size={24} />,
      question: "How secure is the Nexcent platform?",
      answer:
        "Security is one of our highest priorities. Our infrastructure is built with enterprise-grade encryption, secure authentication protocols, and continuous monitoring systems. We ensure data protection, compliance standards, and proactive risk management to safeguard your organization."
    },
    {
      icon: <TrendingUp size={24} />,
      question: "Can Nexcent help improve business performance?",
      answer:
        "Yes. Through advanced analytics, automation tools, and intelligent reporting systems, Nexcent helps businesses identify opportunities, reduce inefficiencies, and increase revenue. Our data-driven insights empower leadership teams to make strategic and informed decisions."
    },
    {
      icon: <Settings size={24} />,
      question: "Is the platform customizable?",
      answer:
        "Absolutely. Our solutions are built to adapt to your business needs. We offer flexible integrations, scalable features, and tailored configurations to ensure the platform aligns perfectly with your operational requirements and long-term objectives."
    },
    {
      icon: <HelpCircle size={24} />,
      question: "Do you provide ongoing support?",
      answer:
        "Yes, we provide continuous technical support, performance monitoring, and regular updates. Our dedicated support team ensures smooth onboarding, optimization guidance, and long-term partnership to guarantee sustained success."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="px-6 md:px-20 py-24 text-center bg-white">
        <h1 className="text-5xl font-bold text-gray-800">
          Frequently Asked <span className="text-green-600">Questions</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
          Find answers to the most common questions about our services,
          platform capabilities, security standards, and business impact.
          We aim to provide clarity and transparency in every interaction.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="px-6 md:px-20 py-20">
        <div className="max-w-4xl mx-auto space-y-6">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="text-green-600">
                    {faq.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                </div>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-green-600" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed text-lg">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="px-6 md:px-20 py-24 bg-gradient-to-r from-green-600 to-green-700 text-white text-center">
        <h2 className="text-4xl font-bold">
          Still Have Questions?
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
          Our team is ready to provide detailed insights and personalized
          assistance to help you understand how Nexcent can support
          your business goals effectively.
        </p>

        <div className="mt-10">
          <button className="bg-white text-green-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300">
            Contact Our Team
          </button>
        </div>
      </section>

    </div>
  );
}




