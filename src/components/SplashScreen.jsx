import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen({ onComplete }) {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Full Stack Developer';

  // Typing Effect
  useEffect(() => {
    let index = 0;
    const typingDelay = 1200; // start typing after logo and name load
    let typingTimer;

    const startTyping = () => {
      typingTimer = setInterval(() => {
        if (index < fullText.length) {
          setTypedText((prev) => prev + fullText.charAt(index));
          index++;
        } else {
          clearInterval(typingTimer);
        }
      }, 70); // 70ms per character
    };

    const delayTimeout = setTimeout(startTyping, typingDelay);

    return () => {
      clearTimeout(delayTimeout);
      if (typingTimer) clearInterval(typingTimer);
    };
  }, []);

  // Cursor Blinking Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Trigger onComplete when slide-up ends (roughly 3.6 - 3.8 seconds) and handle scroll locking
  useEffect(() => {
    // Lock scroll on mount
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      onComplete();
    }, 3900); // 3.9 seconds total overlay lifespan before unmounting

    return () => {
      clearTimeout(timer);
      // Unlock scroll on unmount
      document.body.style.overflow = 'unset';
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: '-100vh' }}
      transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 3.2 }}
      className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#09090b] text-white select-none"
    >
      {/* Background glowing gradient highlights (Apple / Stripe style) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-brand-primary/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-brand-secondary/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-md w-full px-6">
        
        {/* 1. Logo "PS" - Scales in with glowing glassmorphism */}
        <motion.div
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: 'spring', 
            stiffness: 120, 
            damping: 15,
            duration: 0.8 
          }}
          className="h-20 w-20 rounded-2xl glass flex items-center justify-center shadow-2xl border-white/10 hover:border-white/20"
        >
          <span className="text-3xl font-extrabold font-display bg-gradient-to-tr from-brand-primary to-brand-secondary bg-clip-text text-transparent tracking-tighter">
            PS
          </span>
        </motion.div>

        {/* 2. Name "PRATHISH S" - Fades up */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            ease: 'easeOut',
            duration: 0.6,
            delay: 0.6
          }}
          className="text-2xl md:text-3xl font-bold font-display tracking-[0.2em] text-white uppercase text-center mt-2"
        >
          PRATHISH S
        </motion.h1>

        {/* 3. Typing Effect "Full Stack Developer" */}
        <div className="h-6 flex items-center">
          <span className="text-zinc-400 text-sm sm:text-base font-mono tracking-wide">
            {typedText}
          </span>
          <span 
            className="w-[2px] h-4 bg-brand-primary ml-1 inline-block"
            style={{ opacity: showCursor ? 1 : 0 }}
          />
        </div>

        {/* 4. Subtitle - Fades up */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            ease: 'easeOut',
            duration: 0.6,
            delay: 1.6
          }}
          className="text-zinc-500 text-xs sm:text-sm font-sans tracking-wide text-center"
        >
          Building Scalable Digital Experiences
        </motion.p>

        {/* 5. Progress Loading Bar */}
        <div className="w-48 h-[2px] bg-zinc-900 rounded-full mt-6 overflow-hidden relative border border-white/5">
          <motion.div
            initial={{ left: '-100%' }}
            animate={{ left: '0%' }}
            transition={{ 
              ease: 'easeInOut', 
              duration: 2.2, 
              delay: 0.8 
            }}
            className="absolute top-0 bottom-0 left-0 w-full bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full"
          />
        </div>

      </div>
    </motion.div>
  );
}
