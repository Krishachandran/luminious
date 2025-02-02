import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Logo from './Logo';

export const Footer = () => {
  return (
    <footer className="relative py-8 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2e3136] to-[#17191c]" />
      
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.15)_0%,_transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and Company Name */}
          <Link to="/" className="flex items-center gap-3">
            <Logo />
            <span className="text-2xl font-semibold text-white">Luminious</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
              Privacy policy
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/success" className="text-gray-300 hover:text-white transition-colors">
              Success
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-5">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black/20 p-3 rounded-full hover:bg-black/30 transition-colors"
            >
              <Facebook size={22} className="text-white" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black/20 p-3 rounded-full hover:bg-black/30 transition-colors"
            >
              <Instagram size={22} className="text-white" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black/20 p-3 rounded-full hover:bg-black/30 transition-colors"
            >
              <Twitter size={22} className="text-white" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black/20 p-3 rounded-full hover:bg-black/30 transition-colors"
            >
              <Linkedin size={22} className="text-white" />
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="mt-5 pt-6 border-t-[3px] border-gray-700/50">
          <div className="text-center text-gray-400 text-sm">
            © 2025 Luminious. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};