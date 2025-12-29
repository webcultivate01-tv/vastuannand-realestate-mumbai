import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600">
            Have questions about properties or investment opportunities? Our
            team is ready to assist you.
          </p>
        </div>

        {/* Custom Grid: Left 1/3, Right 2/3 */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
          {/* LEFT COLUMN - Contact Details */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-gray-700 mb-2">
                📧 Email:{" "}
                <a
                  href="mailto:info@vastuannand.com"
                  className="text-amber-500"
                >
                  info@vastuannand.com
                </a>
              </p>
              <p className="text-gray-700 mb-2">
                📞 Phone:{" "}
                <a href="tel:+919876543210" className="text-amber-500">
                  +91 98765 43210
                </a>
              </p>
              <p className="text-gray-700 mb-4">
                🏢 Address: 123, Real Estate Street, Mumbai, India
              </p>

              <div className="flex gap-4 mb-6">
                <a
                  href="#"
                  className="text-white bg-amber-500 p-3 rounded-full hover:bg-amber-600 transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="text-white bg-amber-500 p-3 rounded-full hover:bg-amber-600 transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-white bg-amber-500 p-3 rounded-full hover:bg-amber-600 transition"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="#"
                  className="text-white bg-amber-500 p-3 rounded-full hover:bg-amber-600 transition"
                >
                  <FaTwitter />
                </a>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-inner">
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
          </div>

          {/* RIGHT COLUMN - Contact Form */}
          <div>
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
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name *"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address *"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                  required
                />
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none mb-6 resize-none"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
