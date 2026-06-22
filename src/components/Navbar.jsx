import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiSun, FiMoon } from 'react-icons/fi';
import { navLinks, personalInfo } from '../data/portfolioData';
import Button from './Button';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section tracking logic
      const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
          scrolled 
            ? 'py-3.5 glass border-b border-border-main shadow-lg shadow-black/5' 
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, '#home')}
            className="text-xl font-bold font-display tracking-tight text-text-main hover:text-brand-primary transition-colors flex items-center gap-2"
          >
            <span className="h-6 w-6 rounded-lg bg-gradient-to-tr from-brand-primary to-brand-secondary flex items-center justify-center text-xs text-white">PS</span>
            Prathish<span className="text-brand-primary">.</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`relative font-sans text-sm font-medium transition-colors cursor-pointer py-1 ${
                        isActive ? 'text-text-main' : 'text-text-muted hover:text-text-main'
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <motion.span
                          layoutId="activeNavIndicator"
                          className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="h-4 w-[1px] bg-border-main" />

            {/* Dark/Light Mode & CTA */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2.5 rounded-lg glass border-border-main text-text-main hover:text-brand-primary transition-colors cursor-pointer flex items-center justify-center"
                aria-label="Toggle visual theme"
              >
                {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
              </motion.button>

              <Button 
                variant="glass" 
                size="sm"
                onClick={(e) => handleLinkClick(e, '#contact')}
              >
                Hire Me
              </Button>
            </div>
          </div>

          {/* Mobile Right Block (Toggle & Hamburger) */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Theme Toggle Button (Mobile) */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg glass border-border-main text-text-main hover:text-brand-primary transition-colors cursor-pointer"
              aria-label="Toggle visual theme"
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-text-muted hover:text-text-main focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] bottom-0 z-40 md:hidden bg-bg-dark/95 backdrop-blur-lg border-t border-border-main"
          >
            <div className="flex flex-col items-center justify-center h-[calc(100vh-70px)] gap-6 p-6">
              <ul className="flex flex-col items-center gap-5">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className={`text-xl font-display font-medium transition-colors cursor-pointer ${
                          isActive ? 'text-brand-primary' : 'text-text-main/80 hover:text-text-main'
                        }`}
                      >
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="w-full max-w-xs h-[1px] bg-border-main my-2" />
              
              <Button 
                variant="primary" 
                className="w-full max-w-xs"
                onClick={(e) => handleLinkClick(e, '#contact')}
              >
                Hire Me
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
