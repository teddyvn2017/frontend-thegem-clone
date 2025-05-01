'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface LettersSlideUpProps {
  text: string;
  className?: string;
}

const LettersSlideUp: React.FC<LettersSlideUpProps> = ({ text, className }) => {
  const words = text.split(' ');

  return (
    <h2 className={`overflow-hidden ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-2">
          {word.split('').map((letter, letterIndex) => {
            const delay = (wordIndex * 0.2) + (letterIndex * 0.08); // nhanh hơn

            return (
                <span key={letterIndex} className="inline-block overflow-hidden">
                    <motion.span
                    initial={{ y: '100%' }}
                    animate={{ y: '0%' }}
                    transition={{
                        duration: 0.35,
                        delay,
                        ease: [0.3, 1.7, 0.4, 1],
                    }}
                    className="inline-block"
                    >
                        {letter}
                    </motion.span>
                </span>
            );
          })}
        </span>
      ))}
    </h2>
  );
};

export default LettersSlideUp;
