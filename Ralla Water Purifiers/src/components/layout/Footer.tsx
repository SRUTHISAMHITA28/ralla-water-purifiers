import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Ralla Water Purifiers</h3>
            <p className="text-blue-200 mb-4">
              Bringing clean, pure water to every Indian household with innovative and sustainable solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="YouTube" className="text-white hover:text-blue-300 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-white hover:text-blue-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-white hover:text-blue-300 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="text-white hover:text-blue-300 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-blue-200 hover:text-white transition-colors">Products</a>
              </li>
              <li>
                <a href="#about" className="text-blue-200 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#faq" className="text-blue-200 hover:text-white transition-colors">FAQs</a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-300 mt-1 mr-2 flex-shrink-0" />
                <p className="text-blue-200">
                  Registered Office Address<br />
                  6-3-630/B, Anand Nagar Colony,<br />
                  Oppo. Manoj Apartments,<br />
                  Khairatabad, Hyderabad 500004
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-300 mr-2 flex-shrink-0" />
                <a href="tel:+916303010725" className="text-blue-200 hover:text-white transition-colors">
                  +91-6303010725
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-300 mr-2 flex-shrink-0" />
                <a href="mailto:support@ralla.in" className="text-blue-200 hover:text-white transition-colors">
                  support@ralla.in
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-blue-200 mb-3">
              Subscribe to our newsletter for updates on new products and offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 flex-grow"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 mt-8 pt-6 text-center">
          <p className="text-blue-300">
            &copy; 2025 Ralla Water Purifiers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;