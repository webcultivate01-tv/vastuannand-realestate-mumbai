import React from 'react';
import { Link } from 'react-router-dom';

const BlogGrid = () => {
  const blogPosts = [
    {
      id: 1,
      title: '10 Tips for First-Time Home Buyers in Mumbai',
      excerpt: 'Navigate the Mumbai real estate market with confidence. Learn essential tips for making your first property purchase.',
      author: 'Rajesh Kumar',
      date: 'December 20, 2025',
      category: 'Buying Guide',
      image: '🏠',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Top Neighborhoods in Mumbai for Investment in 2025',
      excerpt: 'Discover the most promising areas in Mumbai for property investment and rental income opportunities.',
      author: 'Priya Sharma',
      date: 'December 15, 2025',
      category: 'Investment',
      image: '🏙️',
      readTime: '7 min read',
    },
    {
      id: 3,
      title: 'Understanding Property Documentation in India',
      excerpt: 'A comprehensive guide to all the legal documents you need when buying property in India.',
      author: 'Amit Patel',
      date: 'December 10, 2025',
      category: 'Legal',
      image: '📄',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'Luxury Penthouses: What to Look For',
      excerpt: 'Explore the key features and amenities that make a penthouse truly luxurious and worth the investment.',
      author: 'Neha Desai',
      date: 'December 5, 2025',
      category: 'Luxury',
      image: '🌆',
      readTime: '4 min read',
    },
    {
      id: 5,
      title: 'Smart Home Technology in Modern Apartments',
      excerpt: 'How modern technology is transforming residential living and adding value to your property.',
      author: 'Vikram Singh',
      date: 'November 28, 2025',
      category: 'Technology',
      image: '🏢',
      readTime: '5 min read',
    },
    {
      id: 6,
      title: 'Vastu Shastra: Principles for Your Dream Home',
      excerpt: 'Learn how ancient Vastu principles can enhance positive energy and prosperity in your new home.',
      author: 'Sunita Reddy',
      date: 'November 20, 2025',
      category: 'Lifestyle',
      image: '🧘',
      readTime: '8 min read',
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-amber-400 to-yellow-500 h-48 flex items-center justify-center text-7xl">
                {post.image}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-amber-600 transition-colors duration-300">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{post.author}</p>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-amber-600 hover:text-amber-700 font-semibold text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
