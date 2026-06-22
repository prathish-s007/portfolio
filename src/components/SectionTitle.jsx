import React from 'react';
import { motion } from 'framer-motion';

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
  className = ''
}) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-12 md:mb-16 flex flex-col ${isCenter ? 'items-center text-center' : 'items-start text-left'} ${className}`}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-primary animate-pulse" />
        <span className="text-xs uppercase tracking-widest font-semibold text-brand-primary font-sans">
          {subtitle || 'Portfolio Section'}
        </span>
      </div>
      <h2 className="text-3xl md:text-5xl font-bold font-display text-gradient mb-4">
        {title}
      </h2>
      <div className={`h-1 w-20 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full`} />
    </motion.div>
  );
}
