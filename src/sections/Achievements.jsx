import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../data/portfolioData';
import { FiAward, FiBookmark, FiTerminal } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';

// Helper to choose award icons based on tag
const getIcon = (tag) => {
  switch (tag) {
    case 'Hackathon':
      return <FiTerminal size={18} />;
    case 'Certification':
      return <FiBookmark size={18} />;
    default:
      return <FiAward size={18} />;
  }
};

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="achievements" className="py-20 md:py-32 relative bg-radial-gradient">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <SectionTitle 
          title="Achievements" 
          subtitle="Honors & Certifications" 
          align="center" 
        />

        {/* Timeline Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative max-w-3xl mx-auto flex flex-col gap-8 mt-6"
        >
          {/* Vertical central bar (timeline divider) */}
          <div className="absolute left-[20px] sm:left-[28px] top-4 bottom-4 w-[2px] bg-border-main" />

          {achievements.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="relative pl-12 sm:pl-16 flex flex-col items-start text-left"
            >
              {/* Floating icon node */}
              <div className="absolute left-0 top-0.5 h-10 w-10 sm:h-14 sm:w-14 rounded-full bg-surface-dark border-2 border-brand-primary/50 text-brand-primary flex items-center justify-center shadow-lg shadow-brand-primary/10">
                {getIcon(item.tag)}
              </div>

              {/* Achievement detail card */}
              <div className="glass p-6 rounded-2xl w-full border border-border-main">
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs px-2.5 py-0.5 rounded-full font-sans font-semibold bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
                    {item.tag}
                  </span>
                  <span className="text-xs text-text-muted font-sans font-medium">
                    {item.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold font-display text-text-main mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-text-muted text-sm sm:text-base font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
