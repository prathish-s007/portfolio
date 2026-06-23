import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { FiGithub, FiArrowRight } from 'react-icons/fi';

function MoreProjectsCard() {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    const rX = -(mouseY / height) * 4;
    const rY = (mouseX / width) * 4;
    
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="perspective-container h-full lg:col-start-2">
      <motion.a
        href="https://github.com/prathish-s007?tab=repositories"
        target="_blank"
        rel="noreferrer"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        animate={{ rotateX, rotateY }}
        transition={{ 
          type: 'spring', 
          stiffness: 250, 
          damping: 25 
        }}
        style={{ transformStyle: 'preserve-3d' }}
        className="rounded-2xl p-[1px] bg-border-main hover:bg-gradient-to-r hover:from-brand-primary hover:to-brand-secondary transition-all duration-300 shadow-lg group flex flex-col h-full cursor-pointer"
      >
        <div className="bg-card-dark rounded-[15px] p-6 sm:p-8 flex flex-col h-full justify-between gap-6 relative overflow-hidden text-center items-center justify-center min-h-[320px]">
          
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="flex flex-col items-center gap-4 relative z-10 my-auto">
            {/* Animated Github Icon wrapper */}
            <div className="h-16 w-16 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 shadow-inner">
              <FiGithub size={30} />
            </div>
            
            <h3 className="text-2xl font-bold font-display text-text-main group-hover:text-brand-primary transition-colors duration-300">
              For More Projects
            </h3>
            
            <p className="text-text-muted text-sm font-sans leading-relaxed max-w-[240px]">
              Explore my complete library of repositories, web applications, and experimental work on GitHub.
            </p>
          </div>

          <div className="relative z-10 w-full mt-auto">
            <span className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-sans font-semibold text-sm shadow-md group-hover:shadow-brand-primary/20 hover:brightness-110 transition-all duration-300">
              <span>Visit GitHub Repositories</span>
              <FiArrowRight className="transform group-hover:translate-x-1 transition-transform" size={16} />
            </span>
          </div>
          
        </div>
      </motion.a>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 relative bg-bg-dark border-y border-border-main">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <SectionTitle 
          title="Featured Projects" 
          subtitle="My Technical Works" 
          align="center" 
        />

        {/* Render Projects in a Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mt-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
          <MoreProjectsCard />
        </div>

      </div>
    </section>
  );
}
