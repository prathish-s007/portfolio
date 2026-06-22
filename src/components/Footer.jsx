import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Footer() {
  const currentYear = 2026; // Set exact copyright year as requested

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
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
    <footer className="relative border-t border-border-main bg-bg-dark/90 backdrop-blur-sm py-12 overflow-hidden">
      {/* Subtle top-centered radial light glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-brand-primary/5 rounded-full blur-[60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        
        {/* Left Side: PS Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="text-xl font-bold font-display tracking-tight text-text-main hover:text-brand-primary transition-colors flex items-center gap-2"
          >
            <span className="h-6 w-6 rounded-lg bg-gradient-to-tr from-brand-primary to-brand-secondary flex items-center justify-center text-xs text-white">PS</span>
            Prathish<span className="text-brand-primary">.</span>
          </a>
          <p className="text-text-muted text-xs font-sans">
            © {currentYear} Prathish S. All Rights Reserved.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-sans font-medium text-text-muted">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-text-main transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Side: Social Media Channels */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 text-text-muted hover:text-text-main hover:bg-surface-dark border border-border-main rounded-xl transition-all duration-200"
            aria-label="GitHub Profile"
          >
            <FiGithub size={18} />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 text-text-muted hover:text-text-main hover:bg-surface-dark border border-border-main rounded-xl transition-all duration-200"
            aria-label="LinkedIn Profile"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.socials.email}`}
            className="p-2.5 text-text-muted hover:text-text-main hover:bg-surface-dark border border-border-main rounded-xl transition-all duration-200"
            aria-label="Send Email"
          >
            <FiMail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
