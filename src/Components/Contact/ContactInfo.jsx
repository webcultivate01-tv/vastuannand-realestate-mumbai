import React from 'react';
import { CONTACT_INFO } from '../../constants/navigation';

const ContactInfo = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Phone */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-amber-500">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-white"
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
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Phone</h3>
            <p className="text-gray-600 text-center text-lg font-semibold">{CONTACT_INFO.phone}</p>
            <p className="text-gray-500 text-center text-sm mt-2">Available Monday - Sunday<br/>9:00 AM - 8:00 PM</p>
          </div>

          {/* Email */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-amber-500">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-white"
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
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Email</h3>
            <p className="text-gray-600 text-center text-lg font-semibold break-all">{CONTACT_INFO.email}</p>
            <p className="text-gray-500 text-center text-sm mt-2">We respond within<br/>24 hours</p>
          </div>

          {/* Location */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-amber-500">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-white"
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
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Location</h3>
            <p className="text-gray-600 text-center text-lg font-semibold">{CONTACT_INFO.address}</p>
            <p className="text-gray-500 text-center text-sm mt-2">Visit our office for<br/>in-person consultation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
