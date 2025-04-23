'use client'
import { motion } from 'framer-motion';

const containerWords = {
    hidden: {},
    visible: {
        transition: {
        staggerChildren: 0.1, // Thời gian delay giữa các từ (có thể khác với ký tự)
        },
    },
};

const wordAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 160,
      damping: 14,
      mass: 0.8,
      velocity: 0.5,
    },
  },
};

interface StaggerWordProps {
  text: string;
  className?: string;
}

const StaggerWord: React.FC<StaggerWordProps> = ({ text, className }) => {
  return (
    <motion.div
        className={`flex flex-wrap gap-0 ${className}`}
        variants={containerWords}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.6 }}
    >
      {text.split(' ').map((word, index) => (
        <motion.span
            key={index}
            variants={wordAnimation}
            className={className}
        >
            {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default StaggerWord;