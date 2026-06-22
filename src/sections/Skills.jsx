import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import SectionTitle from '../components/SectionTitle';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="skills" className="py-20 md:py-32 relative bg-bg-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <SectionTitle 
          title="Skills & Technologies" 
          subtitle="My Technical Capabilities" 
          align="center" 
        />

        {/* Skill Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
        >
          {skills.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              variants={cardVariants}
              className="glass glass-hover p-6 md:p-8 rounded-2xl flex flex-col gap-5 border border-border-main"
            >
              {/* Category Header */}
              <h3 className="text-lg font-bold font-display text-text-main border-b border-border-main pb-2">
                {skillGroup.category}
              </h3>
              
              {/* Premium Color-Cohesive Skills Badges */}
              <div className="flex flex-wrap gap-2.5">
                {skillGroup.items.map((skill) => (
                  <motion.span
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    className="text-xs sm:text-sm px-4 py-2 rounded-xl font-sans font-semibold bg-brand-primary/5 dark:bg-brand-primary/10 text-brand-primary dark:text-violet-300 border border-brand-primary/15 dark:border-brand-primary/25 hover:bg-brand-primary/10 dark:hover:bg-brand-primary/20 transition-colors duration-200 shadow-sm cursor-default select-none"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
