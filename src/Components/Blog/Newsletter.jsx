import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-300 mb-8">
          Get the latest real estate insights and property updates delivered to
          your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none w-full sm:w-96"
          />
          <button className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
