import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCheck } from 'react-icons/fi';

export default function ProjectCard({ project, index }) {
  const { title, description, tags, features, liveUrl, githubUrl, featured } = project;
  const cardRef = useRef(null);
  
  // Track tilt angles for 3D effect
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
    
    // Calculate rotation angles (limit to maximum 4 degrees tilt for text cards)
    const rX = -(mouseY / height) * 4;
    const rY = (mouseX / width) * 4;
    
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const hasLiveUrl = liveUrl && liveUrl !== '#';
  const hasGithubUrl = githubUrl && githubUrl !== '#';

  // Render bullet features list helper
  const renderFeatures = () => {
    if (!features || features.length === 0) return null;
    return (
      <div className="flex flex-col gap-2.5">
        <h4 className="text-xs font-semibold uppercase text-text-main font-sans tracking-wide">
          Key Features & Highlights:
        </h4>
        <ul className="flex flex-col gap-2">
          {features.map((feat, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-text-muted font-sans leading-relaxed">
              <span className="text-brand-primary mt-1 flex-shrink-0 bg-brand-primary/10 p-0.5 rounded-full">
                <FiCheck size={12} />
              </span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // 1. Featured Horizontal Project Layout (Image-free Dashboard Style)
  if (featured) {
    return (
      <div className="w-full perspective-container">
        <motion.div
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
          className="rounded-2xl p-[1px] bg-border-main hover:bg-gradient-to-r hover:from-brand-primary hover:to-brand-secondary transition-all duration-300 shadow-xl group cursor-pointer"
        >
          <div className="bg-card-dark rounded-[15px] p-6 sm:p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative overflow-hidden">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-primary/5 rounded-full filter blur-3xl pointer-events-none -mr-20 -mt-20"></div>
            
            {/* Left Column: Title, Description, Features */}
            <div className="lg:col-span-8 flex flex-col gap-6 relative z-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs px-3 py-1 rounded-full font-sans font-semibold bg-brand-primary/10 text-brand-primary border border-brand-primary/20 shadow-sm">
                  Featured Project
                </span>
              </div>
              
              <div className="flex flex-col gap-3">
                <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-text-main group-hover:text-brand-primary transition-colors duration-300 tracking-tight">
                  {title}
                </h3>
                <p className="text-text-muted text-base sm:text-lg font-sans leading-relaxed">
                  {description}
                </p>
              </div>

              {renderFeatures()}
            </div>

            {/* Right Column: Tech Stack & Action Links */}
            <div className="lg:col-span-4 flex flex-col gap-6 lg:border-l lg:border-border-main lg:pl-8 h-full justify-between relative z-10">
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-semibold uppercase text-text-main font-sans tracking-wide">
                  Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full font-sans font-medium bg-brand-primary/5 hover:bg-brand-primary/10 text-brand-primary border border-brand-primary/15 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 mt-6 lg:mt-auto pt-6 border-t border-border-main/50">
                {hasGithubUrl && (
                  <motion.a
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-sans font-medium text-sm border border-zinc-700/50 shadow-md transition-all duration-200"
                  >
                    <FiGithub size={18} />
                    <span>View Repository</span>
                  </motion.a>
                )}
                {hasLiveUrl && (
                  <motion.a
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary hover:brightness-110 text-white font-sans font-medium text-sm shadow-lg shadow-brand-primary/20 transition-all duration-200"
                  >
                    <FiExternalLink size={18} />
                    <span>Live Demo</span>
                  </motion.a>
                )}
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    );
  }

  // 2. Standard Vertical Project Layout (Image-free Clean Card)
  return (
    <div className="perspective-container h-full">
      <motion.div
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
        <div className="bg-card-dark rounded-[15px] p-6 sm:p-8 flex flex-col h-full justify-between gap-6 relative overflow-hidden">
          
          <div className="flex flex-col gap-4 relative z-10">
            <h3 className="text-2xl font-bold font-display text-text-main group-hover:text-brand-primary transition-colors duration-300">
              {title}
            </h3>
            <p className="text-text-muted text-sm font-sans leading-relaxed line-clamp-4">
              {description}
            </p>
            
            {renderFeatures()}
          </div>

          <div className="flex flex-col gap-4 mt-auto relative z-10">
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5 border-t border-border-main/50 pt-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2.5 py-1 rounded-full font-sans font-medium bg-brand-primary/5 text-brand-primary border border-brand-primary/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className={`grid ${hasGithubUrl && hasLiveUrl ? 'grid-cols-2' : 'grid-cols-1'} gap-2.5 pt-2`}>
              {hasGithubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-zinc-800/80 hover:bg-zinc-700/80 text-white font-sans font-medium text-xs border border-zinc-700/40 transition-colors"
                >
                  <FiGithub size={14} />
                  <span>GitHub</span>
                </a>
              )}
              {hasLiveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-brand-primary/15 hover:bg-brand-primary/20 text-brand-primary font-sans font-medium text-xs border border-brand-primary/20 transition-colors"
                >
                  <FiExternalLink size={14} />
                  <span>Demo / Website</span>
                </a>
              )}
            </div>
          </div>
          
        </div>
      </motion.div>
    </div>
  );
}
