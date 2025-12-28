import React from 'react';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const features = [
    {
      icon: 'PP',
      title: 'Premium Properties',
      description: 'Carefully curated selection of luxury apartments and villas in prime Mumbai locations.',
    },
    {
      icon: 'TS',
      title: 'Trusted Service',
      description: 'Over 15 years of excellence in real estate with thousands of satisfied clients.',
    },
    {
      icon: 'BP',
      title: 'Best Pricing',
      description: 'Competitive rates and transparent pricing with no hidden charges or fees.',
    },
    {
      icon: 'S',
      title: '24/7 Support',
      description: 'Round-the-clock customer support to assist you at every step of your journey.',
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white mb-12 md:mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Why Choose Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            We provide exceptional real estate services that make your property journey seamless and rewarding.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image on Left */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative h-80 sm:h-96 md:h-[500px] lg:h-[600px] rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl order-2 lg:order-1"
          >
            <img 
              src="/img2.webp" 
              alt="Luxury Property" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </motion.div>

          {/* Features on Right */}
          <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-gray-50 to-amber-50 rounded-lg md:rounded-xl p-5 md:p-6 hover:shadow-lg transition-all duration-300 hover:translate-x-2 border-l-4 border-amber-500"
              >
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="bg-gradient-to-br from-amber-500 to-yellow-500 text-gray-900 w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center flex-shrink-0 text-xl md:text-2xl font-bold">
                    {feature.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;