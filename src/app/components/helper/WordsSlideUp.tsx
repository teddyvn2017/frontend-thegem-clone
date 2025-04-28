'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface WordsSlideUpProps {
  text: string;
  className?: string;
}

const WordsSlideUp: React.FC<WordsSlideUpProps> = ({ text, className = '' }) => {
  const words = text.split(' ');

  return (
    <div className={`inline-flex flex-wrap overflow-hidden ${className}`}>
        {words.map((word, index) => (
            <span key={index} className="inline-flex overflow-hidden">
                <motion.span
                    initial={{ y: '100%' }}
                    whileInView={{ y: 0 }}
                    transition={{
                    duration: 1,
                    delay: index * 0.06 + 0.26, // Delay thủ công như TheGem
                    ease: [0.3, 1.7, 0.4, 1],   // Cubic bezier chuẩn mềm mại
                }}
                // viewport={{ once: true, amount: 0.7 }}
                className="inline-block"
            >
                <span className="inline-block mr-1">{word}&nbsp;</span>
            </motion.span>
            </span>
        ))}
    </div>
  );
};  

export default WordsSlideUp;
