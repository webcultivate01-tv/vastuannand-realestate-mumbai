import React from 'react';

const BlogCategories = () => {
  const categories = ['All', 'Buying Guide', 'Investment', 'Legal', 'Luxury', 'Technology', 'Lifestyle'];

  return (
    <section className="py-8 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border-2 border-amber-500 text-gray-700 hover:bg-amber-500 hover:text-gray-900 transition-all duration-300 font-medium"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCategories;
