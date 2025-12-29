import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What areas in Mumbai do you cover?",
      answer:
        "We specialize in properties across major Mumbai neighborhoods including South, Central, North, and suburban areas. Our local expertise spans micro-markets like Bandra, Worli, Andheri, Navi Mumbai, and more.",
    },
    {
      question: "How much do your consultation services cost?",
      answer:
        "Our consultation services are complimentary for prospective clients. We work on transparent commission models for property transactions. Contact us for a customized quote.",
    },
    {
      question: "Do you help with property documentation and legal processes?",
      answer:
        "Yes, we provide complete documentation guidance and connect you with trusted legal advisors to ensure all paperwork is properly reviewed and legally compliant.",
    },
    {
      question: "Can you help if I'm looking to rent a property?",
      answer:
        "Absolutely! We assist with residential and commercial rentals, handling end-to-end support including negotiation and documentation.",
    },
    {
      question: "What makes Vastu Anand different from other agencies?",
      answer:
        "We stand out through honest advice, verified listings, exclusive pre-launch access, and a client-first approach, ensuring value-driven outcomes.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our services and property
            transactions
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* LEFT SIDE – FAQ */}
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50"
                >
                  <h3 className="text-left font-semibold text-gray-900 text-base md:text-lg">
                    {faq.question}
                  </h3>

                  <svg
                    className={`w-6 h-6 text-amber-500 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>

                {openIndex === index && (
                  <div className="px-6 py-5 bg-gradient-to-br from-amber-50 to-yellow-50 border-t">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}

            {/* CTA Box */}
          </div>

          {/* RIGHT SIDE – IMAGE */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/FAQ.webp"
                alt="Real Estate"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Decorative Badge */}
            <div className="absolute -bottom-6 -left-6 bg-amber-500 text-white px-6 py-4 rounded-xl shadow-lg">
              <p className="font-bold text-lg">Trusted Property Experts</p>
              <p className="text-sm opacity-90">1000+ Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
