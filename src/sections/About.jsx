import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import SectionTitle from '../components/SectionTitle';

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 15,
        delay: custom * 0.1 
      }
    })
  };

  return (
    <section id="about" className="py-20 md:py-32 relative bg-radial-gradient">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <SectionTitle 
          title="About Me" 
          subtitle="My Journey" 
          align="center" 
        />

        {/* Layout Grid */}
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 mt-6">
          
          {/* Left Column: 2x2 Animated Statistics Cards */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            {/* Stat Card 1 */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              custom={1}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 rounded-2xl glass text-center border border-border-main flex flex-col justify-center min-h-[140px]"
            >
              <div className="text-3xl md:text-4xl font-extrabold font-display text-brand-primary">3+</div>
              <div className="text-text-muted text-[11px] uppercase font-semibold font-sans tracking-wider mt-2">
                Major Projects
              </div>
            </motion.div>
            
            {/* Stat Card 2 */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              custom={2}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 rounded-2xl glass text-center border border-border-main flex flex-col justify-center min-h-[140px]"
            >
              <div className="text-3xl md:text-4xl font-extrabold font-display text-brand-primary">2</div>
              <div className="text-text-muted text-[11px] uppercase font-semibold font-sans tracking-wider mt-2">
                Hackathon Wins
              </div>
            </motion.div>

            {/* Stat Card 3 */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              custom={3}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 rounded-2xl glass text-center border border-border-main flex flex-col justify-center min-h-[140px]"
            >
              <div className="text-2xl md:text-3xl font-extrabold font-display text-gradient-purple">React</div>
              <div className="text-text-muted text-[11px] uppercase font-semibold font-sans tracking-wider mt-2">
                Developer
              </div>
            </motion.div>

            {/* Stat Card 4 */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              custom={4}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 rounded-2xl glass text-center border border-border-main flex flex-col justify-center min-h-[140px]"
            >
              <div className="text-2xl md:text-3xl font-extrabold font-display text-gradient-rainbow">Full Stack</div>
              <div className="text-text-muted text-[11px] uppercase font-semibold font-sans tracking-wider mt-2">
                Enthusiast
              </div>
            </motion.div>
          </div>

          {/* Right Column: Bio Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex flex-col gap-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold font-display text-text-main leading-snug">
              Creating digital experiences that connect, inspire, and <span className="text-brand-primary">scale</span>.
            </h3>
            
            <p className="text-text-muted text-base md:text-lg font-sans leading-relaxed">
              {personalInfo.about}
            </p>

            <p className="text-text-muted text-base md:text-lg font-sans leading-relaxed">
              I specialize in constructing pixel-perfect layouts, designing database architectures, and deploying smooth front-end environments that solve real-world problems.
            </p>

            {/* Engineering Principles */}
            <div className="border-t border-border-main pt-6 mt-2">
              <h4 className="text-sm font-semibold uppercase text-text-main font-sans tracking-wider mb-3">Technical Stack Focus</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Java', 'Python', 'MongoDB', 'MySQL', 'Full Stack Development', 'Problem Solving'].map((f) => (
                  <span key={f} className="text-xs px-3 py-1 bg-surface-dark border border-border-main text-text-muted rounded-lg font-sans font-medium">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          
        </div>
        
      </div>
    </section>
  );
}
