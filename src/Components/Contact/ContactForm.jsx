import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="relative py-16 bg-gradient-to-b from-black via-gray-900 to-black mb-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions about properties or investment opportunities? Our
            team is ready to assist you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1  lg:grid-cols-[1fr_2fr] gap-12 relative">
          {/* LEFT COLUMN - Contact Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-black/70 backdrop-blur-md rounded-3xl p-8 border-2 border-orange-950 shadow-lg shadow-orange-500/40">
              <h3 className="text-2xl font-bold text-amber-400 mb-4">
                Contact Information
              </h3>
              <p className="text-gray-200 mb-2">
                📧 Email:{" "}
                <a
                  href="mailto:info@vastuannand.com"
                  className="text-orange-400 hover:underline"
                >
                  info@vastuannand.com
                </a>
              </p>
              <p className="text-gray-200 mb-2">
                📞 Phone:{" "}
                <a
                  href="tel:+919876543210"
                  className="text-orange-400 hover:underline"
                >
                  +91 98765 43210
                </a>
              </p>
              <p className="text-gray-200 mb-4">
                🏢 Address: 123, Real Estate Street, Mumbai, India
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 mb-6">
                {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="text-white bg-gradient-to-r from-orange-600 to-orange-500 p-3 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg flex items-center justify-center"
                    >
                      <Icon />
                    </a>
                  ),
                )}
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-inner border-2 border-orange-500">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.200446492398!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c63b0f19c9b9%3A0x8f9c88b1fdfb9d14!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1698300000000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  className="border-0"
                  allowFullScreen=""
                  loading="lazy"
                  title="Mumbai Map"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {submitted && (
              <div className="mb-8 p-4 bg-green-50 border border-green-500 rounded-lg">
                <p className="text-green-700 font-semibold text-center">
                  ✓ Thank you! We've received your message and will get back to
                  you shortly.
                </p>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="bg-black/60 backdrop-blur-md rounded-3xl p-8 md:p-12 border-1 border-orange-950 shadow-2xl shadow-orange-500/40"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name *"
                  className="w-full px-4 py-3 border-2 border-orange-950 rounded-lg focus:ring-2 focus:ring-orange-950 outline-none bg-black/30 text-white placeholder-gray-300"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address *"
                  className="w-full px-4 py-3 border-2 border-orange-950 rounded-lg focus:ring-2 focus:ring-orange-950 outline-none bg-black/30 text-white placeholder-gray-300"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number *"
                  className="w-full px-4 py-3 border-2 border-orange-950 rounded-lg focus:ring-2 focus:ring-orange-950 outline-none bg-black/30 text-white placeholder-gray-300"
                  required
                />
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-orange-950 rounded-lg focus:ring-2 focus:ring-orange-950 outline-none bg-black/30 text-white"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="buying">Buying Property</option>
                  <option value="selling">Selling Property</option>
                  <option value="renting">Renting Property</option>
                  <option value="investment">Investment Consultation</option>
                  <option value="commercial">Commercial Space</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                placeholder="Your Message *"
                className="w-full px-4 py-3 border-2 border-orange-950 rounded-lg focus:ring-2 focus:ring-orange-950 outline-none mb-6 resize-none bg-black/30 text-white placeholder-gray-300"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-800 to-orange hover:from-orange-700 hover:to-orange-600 text-black px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
