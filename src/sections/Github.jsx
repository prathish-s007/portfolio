import React from 'react';
import { motion } from 'framer-motion';
import { FiGitBranch, FiUsers, FiCpu, FiExternalLink } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

export default function Github() {
  const stats = [
    {
      id: 'repos',
      label: 'Repositories',
      value: '18+',
      icon: <FiGitBranch size={20} />,
      desc: 'Active projects and tools'
    },
    {
      id: 'followers',
      label: 'Followers',
      value: '12+',
      icon: <FiUsers size={20} />,
      desc: 'Developer network connects'
    },
    {
      id: 'commits',
      label: 'Contributions',
      value: '250+',
      icon: <FiCpu size={20} />,
      desc: 'Commits in the past year'
    }
  ];

  const languages = [
    { name: 'JavaScript / React', percent: 45, color: 'bg-brand-primary' },
    { name: 'Java', percent: 30, color: 'bg-brand-secondary' },
    { name: 'Python', percent: 15, color: 'bg-brand-accent' },
    { name: 'Others', percent: 10, color: 'bg-zinc-600' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
    <section id="github" className="py-20 md:py-32 relative bg-bg-dark border-b border-border-main">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <SectionTitle 
          title="GitHub Profile" 
          subtitle="My Coding Activity" 
          align="center" 
        />

        {/* Dashboard Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mt-12"
        >
          {/* 1. Statistics Cards */}
          <div className="flex flex-col gap-4 justify-between h-full">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="glass p-5 rounded-xl border border-border-main flex flex-row items-center gap-5 flex-grow"
              >
                <div className="p-4 bg-brand-primary/10 text-brand-primary rounded-lg flex-shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-2xl font-bold font-display text-text-main">
                    {stat.value}
                  </div>
                  <div className="text-xs text-text-muted font-sans font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                  <p className="text-[11px] text-text-muted font-sans mt-0.5">{stat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 2. Top Languages Card */}
          <motion.div
            variants={cardVariants}
            className="glass p-6 sm:p-8 rounded-2xl border border-border-main flex flex-col justify-between gap-6"
          >
            <div className="flex items-center justify-between border-b border-border-main pb-4">
              <h4 className="text-sm font-semibold uppercase text-text-main font-sans tracking-wider">
                Most Used Languages
              </h4>
              <a
                href="https://github.com/prathish-s007"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-brand-primary hover:underline font-sans font-medium"
              >
                View GitHub Profile
              </a>
            </div>

            <div className="flex flex-col gap-4 flex-grow justify-center">
              {languages.map((lang) => (
                <div key={lang.name} className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-xs font-sans">
                    <span className="text-text-main font-medium">{lang.name}</span>
                    <span className="text-text-muted">{lang.percent}%</span>
                  </div>

                  <div className="h-2 w-full bg-surface-dark border border-border-main rounded-full overflow-hidden">
                    <div
                      className={`h-full ${lang.color} rounded-full`}
                      style={{ width: `${lang.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
