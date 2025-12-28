import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What areas in Mumbai do you cover?",
      answer: "We specialize in properties across all major Mumbai neighborhoods including South Mumbai, Central Mumbai, North Mumbai, and suburban areas. Our local expertise spans micro-markets like Bandra, Worli, Andheri, Navi Mumbai, and many more."
    },
    {
      question: "How much do your consultation services cost?",
      answer: "Our consultation services are complimentary for prospective clients. We work on transparent commission models for property transactions. Specific pricing depends on the property type and transaction value. Contact us for a customized quote."
    },
    {
      question: "Do you help with property documentation and legal processes?",
      answer: "Yes, we provide complete documentation guidance and connect you with trusted legal advisors. We ensure all paperwork is properly reviewed to guarantee clean, secure, and legally compliant property closures."
    },
    {
      question: "Can you help if I'm looking to rent a property?",
      answer: "Absolutely! We assist with residential and commercial rentals. Whether you're a tenant looking for the perfect home or a landlord seeking reliable tenants, we handle end-to-end support including negotiation and documentation."
    },
    {
      question: "What makes Vastu Anand different from other agencies?",
      answer: "We distinguish ourselves through honest advice, verified listings, trusted networks with exclusive access to pre-launch properties, transparent dealings, and a client-first approach. Our local expertise combined with ethical practices ensures value-driven outcomes."
    },
    {
      question: "How long does a typical property transaction take?",
      answer: "Timeline varies based on property type and complexity. Residential purchases typically take 30-60 days post-agreement, while rentals can be finalized in 1-2 weeks. We'll provide specific timelines based on your specific situation."
    },
    {
      question: "Do you provide investment consultation for property portfolios?",
      answer: "Yes, we offer tailored investment consultation for both individual and commercial property portfolios. Our team analyzes market trends, ROI potential, and location growth to help you make informed investment decisions."
    },
    {
      question: "What is the best way to reach your team?",
      answer: "You can reach us via phone, email, or by filling out the contact form above. We typically respond within 24 hours. For urgent matters, please call us directly - our team is available to provide immediate assistance."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our services and property transactions
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-left font-bold text-gray-900 text-base md:text-lg">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 md:w-6 md:h-6 text-amber-500 flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
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
                <div className="px-6 py-5 md:px-8 md:py-6 bg-gradient-to-br from-amber-50 to-yellow-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8 md:p-10 border-l-4 border-amber-500">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Our friendly team is here to help. Feel free to reach out using the contact form above or call us directly.
          </p>
          <a
            href="#contact-form"
            className="inline-block bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-gray-900 px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
