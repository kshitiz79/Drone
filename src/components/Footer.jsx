import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-8">
          {/* Quick Links */}
          <div className="flex flex-col items-center mb-8 md:mb-0"> 
            <h4 className="text-lg font-semibold mb-4 text-center">Quick Links</h4>
            <ul className="space-y-2 text-center">
              <li>
                <Link to="/buy-drones" className="hover:text-white transition">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link to="/drone-jobs" className="hover:text-white transition">
                  Jobs
                </Link>
              </li>
              <li>
                <Link to="/drone-training" className="hover:text-white transition">
                  Training
                </Link>
              </li>
              <li>
                <Link to="/drone-services" className="hover:text-white transition">
                  DaaS
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          {/* Vendor Portal */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4 text-center">Vendor Portal</h4>
            <ul className="space-y-2 text-center">
              <li>
                <Link to="/vendor-onboard" className="hover:text-white transition">
                  Join as Vendor
                </Link>
              </li>
            </ul>
          </div>
          {/* Legal */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4 text-center">Legal</h4>
            <ul className="space-y-2 text-center">
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:text-white transition">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          {/* Social Media & Contact */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center space-x-4 mb-4">
              <a href="#" className="hover:text-white transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaInstagram />
              </a>
            </div>
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p>Email: Support@droneplanet.in</p>
            <p>Phone: +91 9266 157 763</p>
            <p>Address: Plot No 251, Udyog Vihar, Phase IV, Gurgaon-122015</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; Drone Planet {currentYear}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
