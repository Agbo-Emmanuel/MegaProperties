import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <Link
              to="/"
              className="text-2xl font-bold flex items-center space-x-2 mb-6"
            >
              <span className="text-white italic">Mega</span>
              <span className="text-secondary">Properties</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading the way in comfortable living. We specialize in renting
              premium apartments and houses, ensuring a perfect home for
              everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-secondary transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-secondary transition-colors text-sm"
                >
                  Rentals
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-secondary transition-colors text-sm"
                >
                  Vacant Houses
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-secondary transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>123 Mega Plaza, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>contact@megaproperties.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+234 800 MEGA PROP</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe for latest updates on vacant houses.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-gray-800 border-none rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-secondary"
              />
              <button className="w-full bg-secondary text-white py-2.5 rounded-lg font-semibold hover:bg-secondary/90 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Mega Properties. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
