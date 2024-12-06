import React from 'react';
import footerLogo from '../assets/footer-logo.png';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      {/* Top Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Logo and Short Description */}
        <div>
          <img src={footerLogo} alt="Logo" className="mb-5 w-40" />
          <p className="text-gray-400">
            Discover your next great read at our bookstore. Your gateway to endless stories and knowledge.
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/contactUs" className="hover:text-primary">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Legal Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service" className="hover:text-primary">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Column 4: Social Media */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} My Book Store. All rights reserved.
        </p>
        <ul className="flex gap-4 text-sm mt-4 md:mt-0">
          <li><Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
          <li><Link to="/terms-of-service" className="hover:text-primary">Terms of Service</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
