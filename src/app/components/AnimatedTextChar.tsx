'use client';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05, // điều này tạo hiệu ứng stagger giữa các ký tự
    },
  },
};

const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
        duration: 0.1,
        // repeat: Infinity,  
        // repeatType: 'loop',     
        ease: 'easeOut',
        },
    },
};

type AnimatedTextCharProps = {
  text: string;
  className?: string;
};

const AnimatedTextChar = ({ text, className = '' }: AnimatedTextCharProps) => {
  return (
    <motion.div
      className={`flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={item}
          className={char === ' ' ? 'inline-block w-[0.5ch]' : ''}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextChar;
