import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
import SplashScreen from './components/SplashScreen';

// Main single-page scroll layout containing all section components
function MainLayout({ theme, toggleTheme }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor scroll height for progress bars and top-links
  useEffect(() => {
    const handleScroll = () => {
      // 1. Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }

      // 2. Determine Back to Top visibility
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative min-h-screen bg-bg-dark text-text-main overflow-x-hidden cursor-glow">
      {/* Scroll Progress Bar at the top of the viewport */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent z-100 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleBackToTop}
            className="fixed bottom-6 right-6 z-40 p-3.5 bg-brand-primary text-white rounded-full shadow-lg shadow-brand-primary/20 hover:bg-brand-secondary transition-all cursor-pointer flex items-center justify-center border border-white/10"
            aria-label="Scroll back to top"
          >
            <FiArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Navigation Header */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Resume />
        <Contact />
      </main>

      {/* Footer Area */}
      <Footer />
    </div>
  );
}

// Router root wrapper for scalable production routing & theme config
export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [theme, setTheme] = useState('light');

  // Track cursor position window-wide for radial spotlight effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Toggle class list on the root document element for seamless variable swapping
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      {/* Splash Screen overlay on initial load */}
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen key="splash" onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {/* Main App navigation routing */}
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              <MainLayout theme={theme} toggleTheme={toggleTheme} />
            } 
          />
        </Routes>
      </Router>
    </>
  );
}
