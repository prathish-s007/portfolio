import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';

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
        </div>

      </div>
    </section>
  );
}
