import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFileText, FiDownload, FiMaximize2, FiCalendar, FiX, FiCheck, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { personalInfo } from '../data/portfolioData';

// Mini Resume component to show inside the preview card and full-screen view
function ResumeContent() {
  return (
    <div className="bg-white text-zinc-900 p-6 sm:p-8 rounded-xl shadow-2xl font-sans text-left max-w-2xl mx-auto border border-zinc-200">
      {/* Header */}
      <div className="border-b border-zinc-300 pb-4 mb-4">
        <h3 className="text-3xl font-bold font-display tracking-tight text-zinc-800">
          PRATHISH S
        </h3>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-zinc-600 mt-2 font-medium">
          <span className="flex items-center gap-1"><FiPhone size={12} /> +91 9043781317</span>
          <span className="flex items-center gap-1"><FiMail size={12} /> prathishs286@gmail.com</span>
          <span className="flex items-center gap-1"><FiLinkedin size={12} /> linkedin.com/in/prathish-s-</span>
          <span>Krishnagiri, Tamilnadu, India</span>
        </div>
      </div>

      {/* Objective */}
      <div className="mb-4">
        <h4 className="text-xs uppercase font-extrabold tracking-wider text-zinc-500 border-b border-zinc-200 pb-1 mb-2">
          Career Objective
        </h4>
        <p className="text-xs text-zinc-700 leading-relaxed font-sans">
          Aspiring software developer with strong interest in full stack development, aiming to apply programming skills, problem-solving abilities, and real-world project experience to build efficient and scalable solutions.
        </p>
      </div>

      {/* Education */}
      <div className="mb-4">
        <h4 className="text-xs uppercase font-extrabold tracking-wider text-zinc-500 border-b border-zinc-200 pb-1 mb-2">
          Education
        </h4>
        <div className="flex flex-col gap-2.5">
          <div>
            <div className="flex justify-between items-start flex-wrap text-xs font-semibold text-zinc-800">
              <span>B.TECH - INFORMATION TECHNOLOGY</span>
              <span>2026 Current</span>
            </div>
            <div className="text-[11px] text-zinc-600 font-sans">
              KONGU ENGINEERING COLLEGE - ERODE | CGPA: 8.30 (till 3rd sem)
            </div>
          </div>
          <div>
            <div className="flex justify-between items-start flex-wrap text-xs font-semibold text-zinc-800">
              <span>HIGHER SECONDARY (12th)</span>
              <span>2024</span>
            </div>
            <div className="text-[11px] text-zinc-600 font-sans">
              ADHIYAMAN MATRIC SCHOOL | Percentage - 89.8%
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="mb-4">
        <h4 className="text-xs uppercase font-extrabold tracking-wider text-zinc-500 border-b border-zinc-200 pb-1 mb-2">
          Projects
        </h4>
        <div className="flex flex-col gap-3">
          <div>
            <h5 className="text-xs font-bold text-zinc-800 font-display">Campaign Management System</h5>
            <p className="text-[11px] text-zinc-600 leading-relaxed font-sans mt-0.5">
              It is a social awareness campaign platform to amplify important social causes through interactive engagement. Implemented community challenges, survey, and educational modules to help organizations track measurable participation.
            </p>
          </div>
          <div>
            <h5 className="text-xs font-bold text-zinc-800 font-display">Smart Tourism Assistant</h5>
            <p className="text-[11px] text-zinc-600 leading-relaxed font-sans mt-0.5">
              Developed a Smart Tourism Assistant web application to provide tourists with centralized access to attractions, services, and local vendors. Implemented location-based recommendations and vendor management features.
            </p>
          </div>
          <div>
            <h5 className="text-xs font-bold text-zinc-800 font-display">College Chatbot</h5>
            <p className="text-[11px] text-zinc-600 leading-relaxed font-sans mt-0.5">
              Developed a web-based AI chatbot for Kongu Engineering College with quick-access dropdowns, multilingual support (English-Tamil), and direct navigation to institutional resources.
            </p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-xs uppercase font-extrabold tracking-wider text-zinc-500 border-b border-zinc-200 pb-1 mb-2">
            Skills
          </h4>
          <ul className="flex flex-col gap-1 text-[11px] text-zinc-700 font-sans list-disc pl-4">
            <li>Programming: C, Java, Python</li>
            <li>Frontend: HTML, CSS, React JS</li>
            <li>Database: MySQL, MongoDB</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase font-extrabold tracking-wider text-zinc-500 border-b border-zinc-200 pb-1 mb-2">
            Soft Skills
          </h4>
          <ul className="flex flex-col gap-1 text-[11px] text-zinc-700 font-sans list-disc pl-4">
            <li>Problem solving</li>
            <li>Teamwork & Collaboration</li>
            <li>Communication</li>
          </ul>
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h4 className="text-xs uppercase font-extrabold tracking-wider text-zinc-500 border-b border-zinc-200 pb-1 mb-2">
          Achievements
        </h4>
        <ul className="flex flex-col gap-2 text-[11px] text-zinc-700 font-sans pl-2 list-none">
          <li className="flex items-start gap-1.5">
            <span className="text-brand-primary mt-0.5 flex-shrink-0"><FiCheck size={12} /></span>
            <span>Won 1st Prize at MEDONOVA Hackathon by designing and implementing Campaign Management System (2025).</span>
          </li>
          <li className="flex items-start gap-1.5">
            <span className="text-brand-primary mt-0.5 flex-shrink-0"><FiCheck size={12} /></span>
            <span>Secured 2nd Place in College Hackathon for developing College Chatbot (2025).</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function Resume() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const lastUpdated = 'June 2026';

  const handlePrint = () => {
    // Basic triggers printing action or simulates download
    window.print();
  };

  return (
    <section id="resume" className="py-20 md:py-32 relative bg-radial-gradient border-b border-border-main">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <SectionTitle 
          title="Curriculum Vitae" 
          subtitle="My Resume" 
          align="center" 
        />

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-6">
          
          {/* Left Column: Details, Download Action */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-start gap-6"
          >
            {/* File Info Card */}
            <div className="glass p-6 rounded-2xl border border-border-main flex items-center gap-4 w-full">
              <div className="p-4 bg-brand-primary/10 text-brand-primary rounded-xl">
                <FiFileText size={32} />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-text-main">
                  PRATHISH_S_RESUME.pdf
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-text-muted font-sans mt-1">
                  <FiCalendar size={12} />
                  <span>Last updated: {lastUpdated}</span>
                </div>
              </div>
            </div>

            <p className="text-text-muted text-base md:text-lg font-sans leading-relaxed">
              Read my educational timeline, project accomplishments, coding abilities, and hackathon milestones compiled in a single page layout. You can preview it in fullscreen or download the direct document.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <a href="/PRATHISH_S_RESUME.pdf" download="PRATHISH_S_RESUME.pdf">
                <Button
                  variant="primary"
                  size="md"
                  icon={FiDownload}
                >
                  Download Resume
                </Button>
              </a>
              
              <Button
                variant="outline"
                size="md"
                icon={FiMaximize2}
                onClick={() => setIsModalOpen(true)}
              >
                Open Preview
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Miniature scrollable resume card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex justify-center w-full"
          >
            <div className="relative group max-w-md w-full rounded-2xl p-[1px] bg-border-main hover:bg-gradient-to-r hover:from-brand-primary hover:to-brand-secondary transition-all duration-300 shadow-2xl">
              <div className="bg-[#18181b]/35 dark:bg-[#121214]/50 rounded-[15px] p-4 flex flex-col justify-between items-center min-h-[360px] relative overflow-hidden">
                {/* Visual miniature overlay */}
                <div className="w-full max-h-[300px] overflow-hidden select-none opacity-40 group-hover:opacity-75 transition-opacity duration-300 pointer-events-none scale-[0.8] origin-top border border-zinc-200 rounded-lg">
                  <ResumeContent />
                </div>
                
                {/* Blur card gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-dark/40 to-bg-dark z-10 flex flex-col justify-end p-6 items-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsModalOpen(true)}
                    className="p-3 bg-brand-primary text-white rounded-full shadow-lg hover:bg-brand-secondary transition-all duration-200 cursor-pointer flex items-center justify-center"
                    aria-label="Expand resume modal"
                  >
                    <FiMaximize2 size={20} />
                  </motion.div>
                  <span className="text-xs text-text-main font-semibold font-sans tracking-wide mt-2">
                    Hover to preview / Click to maximize
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>

      </div>

      {/* Fullscreen Overlay Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 bg-[#09090b]/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-bg-dark rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl border border-border-main max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-4 border-b border-border-main flex items-center justify-between bg-surface-dark">
                <span className="text-sm font-semibold text-text-main font-sans flex items-center gap-2">
                  <FiFileText className="text-brand-primary" /> Resume Fullscreen Preview
                </span>
                <div className="flex items-center gap-2">
                  <a href="/PRATHISH_S_RESUME.pdf" download="PRATHISH_S_RESUME.pdf">
                    <Button
                      variant="glass"
                      size="sm"
                      icon={FiDownload}
                    >
                      Download
                    </Button>
                  </a>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 text-text-muted hover:text-text-main hover:bg-surface-dark rounded-lg cursor-pointer"
                    aria-label="Close modal"
                  >
                    <FiX size={20} />
                  </button>
                </div>
              </div>

              {/* Modal scrollable contents */}
              <div className="p-6 overflow-y-auto bg-surface-dark/40 flex-grow">
                <ResumeContent />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
