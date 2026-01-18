import React from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS, CONTACT_INFO } from "../../constants/navigation";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = NAV_LINKS;

  return (
    <footer className="bg-gray-900 text-gray-300 relative">
      {/* Decorative Gradient Top */}
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-amber-400 via-red-500 to-pink-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold text-white mb-4">
              <span className="text-amber-400">Vastu</span> Anand
            </h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner in finding the perfect property in Mumbai.
              Excellence in real estate services since 2010.
            </p>
            <p className="text-gray-400 mb-6">
              Whether buying, selling, or investing, we provide personalized
              guidance and expert insights.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              {/* Facebook */}
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2c0-2 1-3 3-3h2v3h-2c-.5 0-1 .5-1 1v1h3l-1 3h-2v7A10 10 0 0022 12z" />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
                aria-label="Twitter"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3 .8 5 5 0 002-2.7 10 10 0 01-3.2 1.2 5 5 0 00-8.5 4.6A14.2 14.2 0 012 4.5a5 5 0 001.5 6.6 5 5 0 01-2.3-.6v.1a5 5 0 004 4.9 5 5 0 01-2.2.1 5 5 0 004.6 3.5 10 10 0 01-7 2 14 14 0 007.5 2c9 0 14-7.5 14-14v-.6A10 10 0 0023 3z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.2c3.2 0 3.6.01 4.9.07 1.2.05 2 .24 2.5.41.6.21 1 .47 1.5.97.5.5.76.9.97 1.5.17.5.36 1.3.41 2.5.06 1.3.07 1.7.07 4.9s-.01 3.6-.07 4.9c-.05 1.2-.24 2-.41 2.5-.21.6-.47 1-.97 1.5-.5.5-.9.76-1.5.97-.5.17-1.3.36-2.5.41-1.3.06-1.7.07-4.9.07s-3.6-.01-4.9-.07c-1.2-.05-2-.24-2.5-.41-.6-.21-1-.47-1.5-.97-.5-.5-.76-.9-.97-1.5-.17-.5-.36-1.3-.41-2.5C2.21 15.6 2.2 15.2 2.2 12s.01-3.6.07-4.9c.05-1.2.24-2 .41-2.5.21-.6.47-1 .97-1.5.5-.5.9-.76 1.5-.97.5-.17 1.3-.36 2.5-.41C8.4 2.21 8.8 2.2 12 2.2zm0 2.1c-3.1 0-3.5.01-4.7.07-1.1.05-1.7.23-2.1.38-.5.16-.9.36-1.3.8-.4.4-.64.8-.8 1.3-.15.4-.33 1-.38 2.1-.06 1.2-.07 1.6-.07 4.7s.01 3.5.07 4.7c.05 1.1.23 1.7.38 2.1.16.5.36.9.8 1.3.4.4.8.64 1.3.8.4.15 1 .33 2.1.38 1.2.06 1.6.07 4.7.07s3.5-.01 4.7-.07c1.1-.05 1.7-.23 2.1-.38.5-.16.9-.36 1.3-.8.4-.4.64-.8.8-1.3.15-.4.33-1 .38-2.1.06-1.2.07-1.6.07-4.7s-.01-3.5-.07-4.7c-.05-1.1-.23-1.7-.38-2.1-.16-.5-.36-.9-.8-1.3-.4-.4-.8-.64-1.3-.8-.4-.15-1-.33-2.1-.38-1.2-.06-1.6-.07-4.7-.07zm0 3.2a6.6 6.6 0 110 13.2 6.6 6.6 0 010-13.2zm0 2.2a4.4 4.4 0 100 8.8 4.4 4.4 0 000-8.8zm5.4-.6a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 0H4C1.8 0 0 1.8 0 4v16c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm-11.5 20H5v-9h3.5v9zm-1.8-10.3c-1.1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.7 1.8-1.8 1.8zm13.3 10.3h-3.5v-4.5c0-1.1-.4-1.9-1.4-1.9s-1.6.9-1.6 1.9v4.5h-3.5v-9h3.5v1.3c.5-.9 1.5-1.3 2.4-1.3 2.2 0 3 1.5 3 3.5v5.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-amber-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 flex-shrink-0 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>{CONTACT_INFO.email}</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 flex-shrink-0 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>{CONTACT_INFO.phone}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 md:mt-16 text-center">
          <h4 className="text-white font-semibold mb-4">
            Subscribe to our Newsletter
          </h4>
          <p className="text-gray-400 mb-4">
            Get updates about new properties and offers directly in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row justify-center gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:border-amber-400 w-full sm:w-auto"
            />
            <button className="bg-amber-400 text-gray-900 px-6 py-2 rounded-md font-semibold hover:bg-amber-500 transition">
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
          <p>
            &copy; {currentYear} Vastu Anand Real Estate. All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            Designed & Developed by{" "}
            <span className="text-amber-400 font-semibold">Tejas Mehar</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
