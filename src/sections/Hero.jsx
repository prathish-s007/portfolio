import React from 'react';
import { motion as m } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import Button from '../components/Button';
import Hero3DVisual from '../components/Hero3DVisual';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[calc(100vh-80px)] flex items-center justify-center py-16 md:py-24 overflow-hidden bg-radial-gradient">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <m.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start gap-4 sm:gap-6 text-left"
          >
            {/* Greeting badge */}
            <m.div 
              variants={itemVariants} 
              className="flex items-center gap-2 px-3 py-1.5 rounded-full glass border-brand-primary/10 text-brand-primary text-xs uppercase tracking-widest font-semibold font-sans"
            >
              <span className="h-2 w-2 rounded-full bg-brand-primary animate-ping" />
              <span>Open to collaboration</span>
            </m.div>

            {/* Name */}
            <m.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight font-display text-text-main"
            >
              Hi, I'm <span className="text-gradient-purple">{personalInfo.name}</span>
            </m.h1>

            {/* Role */}
            <m.h2 
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight font-display text-text-muted leading-tight"
            >
              {personalInfo.title}
            </m.h2>

            {/* Short Introduction */}
            <m.p 
              variants={itemVariants}
              className="text-text-muted text-base sm:text-lg md:text-xl font-sans max-w-xl leading-relaxed"
            >
              {personalInfo.subtitle}
            </m.p>

            {/* Action Buttons */}
            <m.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 mt-2 w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="md"
                icon={FiArrowRight}
                onClick={() => handleScrollToSection('projects')}
              >
                View Projects
              </Button>
              
              <a href="/PRATHISH_S_RESUME.pdf" download="PRATHISH_S_RESUME.pdf">
                <Button
                  variant="outline"
                  size="md"
                  icon={FiDownload}
                  iconPosition="left"
                >
                  Download Resume
                </Button>
              </a>
            </m.div>

            {/* Social Links */}
            <m.div 
              variants={itemVariants}
              className="flex items-center gap-4 mt-4"
            >
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-card-dark text-text-muted hover:text-brand-primary rounded-xl border border-border-main shadow-sm hover:shadow-brand-primary/10 transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <FiGithub size={20} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-card-dark text-text-muted hover:text-brand-primary rounded-xl border border-border-main shadow-sm hover:shadow-brand-primary/10 transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.socials.email}`}
                className="p-3 bg-card-dark text-text-muted hover:text-brand-primary rounded-xl border border-border-main shadow-sm hover:shadow-brand-primary/10 transition-all duration-200"
                aria-label="Email Address"
              >
                <FiMail size={20} />
              </a>
            </m.div>
          </m.div>

          {/* Right Column: 3D Visual Rendering */}
          <m.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="lg:col-span-5 w-full flex items-center justify-center relative"
          >
            <Hero3DVisual />
          </m.div>
          
        </div>
      </div>

    </section>
  );
}
