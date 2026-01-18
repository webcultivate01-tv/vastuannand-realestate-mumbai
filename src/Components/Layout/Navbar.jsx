import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../../constants/navigation";
import { NAVBAR_CONFIG } from "../../constants/theme";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > NAVBAR_CONFIG.scrollThreshold;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navLinks = NAV_LINKS;

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300
    ${
      scrolled
        ? "bg-white/30 shadow-lg backdrop-blur-md py-0.1"
        : "bg-transparent py-2"
    }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-amber-500">Vastu</span>
              <span className="text-gray-900"> Anand</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? "text-amber-500 font-semibold"
                    : "text-gray-900 hover:text-amber-500"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
              <button className="px-6 py-2 rounded-lg font-medium transition-all duration-300 bg-amber-500 hover:bg-amber-600 text-gray-900">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />

            {/* Slide Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className={`fixed top-0 right-0 h-screen w-[70%] z-50 md:hidden backdrop-blur-xl shadow-2xl
          ${
            scrolled
              ? "bg-gradient-to-b from-amber-500/70 to-yellow-600/70"
              : "bg-gray-900"
          }`}
            >
              {/* Header with Close Button */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <span className="text-lg font-semibold text-white">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="text-white hover:rotate-90 transition-transform duration-300"
                >
                  ✕
                </button>
              </div>

              {/* Links */}
              <div className="px-5 pt-6 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300
                ${
                  isActive(link.path)
                    ? "bg-amber-600 text-white"
                    : "text-white hover:bg-white/10"
                }`}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* CTA */}
                <button className="w-full mt-6 px-4 py-3 rounded-xl font-semibold bg-amber-500 hover:bg-amber-600 text-gray-900 transition">
                  Get Started
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
