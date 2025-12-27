import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../../constants/navigation';
import { NAVBAR_CONFIG } from '../../constants/theme';

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navLinks = NAV_LINKS;

  const isActive = (path) => location.pathname === path;

  return (
    <nav
  className={`fixed w-full top-0 z-50 transition-all duration-300
    ${scrolled
      ? 'bg-white/30 shadow-lg backdrop-blur-md py-0.1'
      : 'bg-transparent py-2'
    }`}>

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
                    ? 'text-amber-500 font-semibold'
                    : 'text-gray-900 hover:text-amber-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button className="px-6 py-2 rounded-lg font-medium transition-all duration-300 bg-amber-500 hover:bg-amber-600 text-gray-900">
              Get Started
            </button>
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
      {isOpen && (
        <div className={`md:hidden backdrop-blur-md ${
          scrolled 
            ? 'bg-gradient-to-b from-amber-500/50 to-yellow-600/50' 
            : 'bg-gray-900 bg-opacity-95'
        }`}>
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? scrolled
                      ? 'bg-gray-900 text-white'
                      : 'bg-amber-600 text-white'
                    : scrolled
                      ? 'text-gray-900 hover:bg-amber-400'
                      : 'text-white hover:bg-gray-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button className={`w-full px-4 py-3 rounded-lg font-medium transition-colors duration-300 ${
              scrolled
                ? 'bg-gray-900 hover:bg-gray-800 text-white'
                : 'bg-amber-500 hover:bg-amber-600 text-gray-900'
            }`}>
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
