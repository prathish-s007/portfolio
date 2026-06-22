import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 focus:ring-brand-primary/50',
  secondary: 'bg-zinc-800 hover:bg-zinc-700 text-white focus:ring-zinc-700',
  outline: 'bg-transparent border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/30 text-zinc-300 hover:text-white focus:ring-zinc-600',
  glass: 'glass hover:bg-white/10 text-white border-white/10 hover:border-white/20 shadow-xl focus:ring-brand-primary/40',
  text: 'bg-transparent text-zinc-400 hover:text-white hover:bg-zinc-950/20 focus:ring-zinc-800',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-7 py-3 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  icon: Icon,
  iconPosition = 'right',
  disabled = false,
  type = 'button',
  ...props
}) {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Handle magnetic attraction drift
  const handleMouseMove = (e) => {
    if (!buttonRef.current || disabled) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    
    // Compute distance from button center
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const x = clientX - centerX;
    const y = clientY - centerY;
    
    // Apply a scaling factor to make the attraction subtle (e.g. max 12px drift)
    setPosition({ x: x * 0.25, y: y * 0.25 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={buttonRef}
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      transition={{ 
        type: 'spring', 
        stiffness: 150, 
        damping: 15,
        mass: 0.1
      }}
      className={`
        inline-flex items-center justify-center font-medium rounded-lg 
        transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 
        focus:ring-offset-bg-dark disabled:opacity-50 disabled:pointer-events-none 
        cursor-pointer font-display select-none
        ${variants[variant]} 
        ${sizes[size]} 
        ${className}
      `}
      {...props}
    >
      {Icon && iconPosition === 'left' && (
        <span className="mr-2 inline-flex items-center justify-center"><Icon size={18} /></span>
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <span className="ml-2 inline-flex items-center justify-center"><Icon size={18} /></span>
      )}
    </motion.button>
  );
}
