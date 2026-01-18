import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const propertyTypes = [
  {
    name: "Luxury Apartments",
    description: "Modern high-rise apartments with world-class amenities",
    image: "/img1.webp",
  },
  {
    name: "Premium Villas",
    description: "Spacious independent villas in gated communities",
    image: "/img3.webp",
  },
  {
    name: "Commercial Spaces",
    description: "Prime commercial properties for your business",
    image: "/img11.webp",
  },
  {
    name: "Penthouses",
    description: "Exclusive penthouses with panoramic city views",
    image: "/img5.webp",
  },
  {
    name: "Beachfront Homes",
    description: "Properties with stunning ocean views",
    image: "/img6.webp",
  },
  {
    name: "Co-Working Spaces",
    description: "Modern and flexible workspaces for entrepreneurs",
    image: "/typeProperty6.avif",
  },
  {
    name: "Townhouses",
    description: "Elegant townhouses in prime locations",
    image: "/typeProperty7.avif",
  },
  {
    name: "Lofts",
    description: "Stylish lofts with open floor plans",
    image: "/img9.webp",
  },
];

const PropertySliderAuto = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      scroll("right");
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Update current index for pagination
  const updateCurrentIndex = () => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector(".property-card");
      if (card) {
        const scrollLeft = sliderRef.current.scrollLeft;
        const cardWidth = card.offsetWidth + 24; // 24px gap
        const index = Math.round(scrollLeft / cardWidth);
        setCurrentIndex(index);
      }
    }
  };

  // Scroll by one card width
  const scroll = (direction) => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector(".property-card");
      if (card) {
        const scrollAmount = card.offsetWidth + 24;
        sliderRef.current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  // Handle dot click
  const goToSlide = (index) => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector(".property-card");
      if (card) {
        const scrollAmount = index * (card.offsetWidth + 24);
        sliderRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-r from-white via-gray-50 to-white relative overflow-hidden">
      {/* Title */}
      <div className="text-center mb-8 md:mb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative background shape */}
        <div className="absolute inset-0 flex justify-center">
          <div className="w-32 h-32 bg-orange-100/30 rounded-full blur-3xl absolute -top-10 -z-10"></div>
          <div className="w-48 h-48 bg-orange-200/20 rounded-full blur-3xl absolute -bottom-10 -z-10"></div>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 relative">
          Discover <span className="text-orange-500">Premium Properties</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 relative">
          Explore our curated collection of{" "}
          <span className="font-semibold text-gray-900">
            luxury homes, villas, penthouses
          </span>
          , and commercial spaces designed to fit your lifestyle.
        </p>

        {/* Small underline accent */}
        <div className="mt-6 flex justify-center">
          <div className="w-24 h-1 bg-orange-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Slider */}
      <div className="relative w-full">
        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 md:left-8 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 md:p-4 shadow-lg hover:scale-105 transition"
        >
          <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-gray-800" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 md:right-8 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 md:p-4 shadow-lg hover:scale-105 transition"
        >
          <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-gray-800" />
        </button>

        <div
          ref={sliderRef}
          onScroll={updateCurrentIndex}
          className="flex gap-6 overflow-x-hidden scrollbar-hide scroll-smooth py-4 px-4 md:px-8"
        >
          {propertyTypes.map((type, index) => (
            <motion.div
              key={index}
              className="property-card min-w-[30%] flex-shrink-0 bg-white rounded-2xl shadow-lg cursor-pointer overflow-hidden group hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-56 md:h-64 overflow-hidden relative">
                <img
                  src={type.image}
                  alt={type.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-4 md:p-6 text-center">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  {type.name}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {type.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-3">
          {propertyTypes.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-orange-500 w-4 h-4" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating shapes */}
      <div className="absolute top-[-100px] left-[-100px] w-80 h-80 bg-orange-100 rounded-full opacity-20 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-96 h-96 bg-orange-200 rounded-full opacity-20 blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default PropertySliderAuto;
