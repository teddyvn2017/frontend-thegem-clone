'use client'
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const letter = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,  //↓ giảm đàn hồi so với trước
        damping: 14,    // ↑ tăng lực cản để giảm độ nảy
        mass: 0.8,      //// giữ ổn định
        velocity: 1, // tốc độ bắt đầu vừa phải
      },
    },
  };

const StaggerText = ({ text, className }: { text: string; className?: string }) => {
  return (
    <motion.div
      className={`flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.6 }}
    > 
      {text.split('').map((char, index) => (
        <motion.span
			key={index}
			variants={letter}
			className={className} // tùy chỉnh màu ở đây
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default StaggerText;
