import React from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: "/first-time-home-buyers-mumbai",
    title: "10 Tips for First-Time Home Buyers in Mumbai",
    excerpt:
      "From budgeting and pre-approvals to site visits and negotiation, here are practical steps to avoid costly mistakes in Mumbai’s fast-moving market. We cover paperwork readiness, builder due diligence, and how to compare carpet vs. built-up area so you buy with confidence.",
    author: "Rajesh Kumar",
    date: "December 20, 2025",
    category: "Buying Guide",
    imageUrl: "/hero1.webp",
    readTime: "8 min read",
  },
  {
    id: "/mumbaiInvestment",
    title: "Top Neighborhoods in Mumbai for Investment in 2025",
    excerpt:
      "We break down rent yields, infrastructure pipelines, and absorption trends across Bandra, Powai, Thane, and Navi Mumbai. Learn what to expect on entry price, tenant demand, and 3–5 year outlook so you can pick the right micro-market.",
    author: "Priya Sharma",
    date: "December 15, 2025",
    category: "Investment",
    imageUrl: "/img2.webp",
    readTime: "9 min read",
  },
  {
    id: "/propertydocumentation",
    title: "Understanding Property Documentation in India",
    excerpt:
      "Registration, sale deed, title search, and encumbrance checks—this guide explains every critical document, how to verify them, and common red flags buyers overlook. Includes a quick checklist you can reuse before you sign.",
    author: "Amit Patel",
    date: "December 10, 2025",
    category: "Legal",
    imageUrl: "/img10.webp",
    readTime: "7 min read",
  },
  // {
  //   id: 4,
  //   title: "Luxury Penthouses: What to Look For",
  //   excerpt:
  //     "Skyline views, private decks, amenity stacks, and privacy are non-negotiable—here is how to evaluate penthouse layouts, MEP quality, elevators, and service access before you commit to a crore-plus purchase.",
  //   author: "Neha Desai",
  //   date: "December 5, 2025",
  //   category: "Luxury",
  //   imageUrl: "/img5.webp",
  //   readTime: "6 min read",
  // },
  // {
  //   id: 5,
  //   title: "Smart Home Technology in Modern Apartments",
  //   excerpt:
  //     "From energy dashboards and climate zoning to security stacks and interoperable hubs, see which smart features add real resale value. We also cover practical retrofit tips for Mumbai apartments without heavy renovations.",
  //   author: "Vikram Singh",
  //   date: "November 28, 2025",
  //   category: "Technology",
  //   imageUrl: "/img11.webp",
  //   readTime: "8 min read",
  // },
  // {
  //   id: 6,
  //   title: "Vastu Shastra: Principles for Your Dream Home",
  //   excerpt:
  //     "Key Vastu zones, entrance orientation, kitchen and bedroom placement, and how to adapt principles in high-rise apartments. Simple fixes and remedies you can implement without structural changes.",
  //   author: "Sunita Reddy",
  //   date: "November 20, 2025",
  //   category: "Lifestyle",
  //   imageUrl: "/img6.webp",
  //   readTime: "9 min read",
  // },
];

const BlogGrid = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 bg-gray-200">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                  <span className="px-3 py-1 bg-white/90 text-gray-900 text-xs font-semibold rounded-full">
                    {post.readTime}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-amber-600 transition-colors duration-300">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-700 mb-4 line-clamp-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-9 h-9 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {post.author}
                      </p>
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
