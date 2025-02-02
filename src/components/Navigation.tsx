import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from './Logo';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Success', path: '/success' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const link = e.currentTarget;
    const rect = link.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    link.style.setProperty('--mouse-x', `${x}%`);
    link.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <nav className="nav-container" ref={navRef}>
      <div className="nav-panel max-w-3xl">
        {/* Logo - Already links to home page */}
        <Link to="/" className="logo-container">
          <Logo />
          <span className="font-semibold text-[#1e293b]">Luminious</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-menu-centered">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`nav-link-hover ${
                location.pathname === item.path 
                  ? 'text-[#1e293b] font-medium' 
                  : 'text-gray-600'
              }`}
              onMouseMove={handleMouseMove}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <Link 
            to="/contact" 
            className="nav-action-button"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : -20,
          display: isOpen ? 'block' : 'none'
        }}
        transition={{ duration: 0.2 }}
        className="mobile-menu max-w-3xl mx-auto"
      >
        <div className="p-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block nav-link-hover ${
                location.pathname === item.path 
                  ? 'text-[#1e293b] font-medium' 
                  : 'text-gray-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};