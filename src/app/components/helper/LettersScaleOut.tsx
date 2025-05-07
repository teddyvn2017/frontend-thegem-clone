import { motion } from 'framer-motion';
import React from 'react';

type LettersScaleOutProps = {
  text: string;
  className?: string;
};

const LettersScaleOut: React.FC<LettersScaleOutProps> = ({ text, className }) => {
  const words = text.split(' ');

  return (
    <>
        {
            words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-1.5">
                {word.split('').map((letter, letterIndex) => {
                    const delay = (wordIndex * 0.3) + (letterIndex * 0.1);
                    return (
                        <motion.span
                            key={letterIndex}
                            className="inline-flex"
                            initial={{ scale: 1.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                            duration: 0.3, 
                            delay,
                            ease: [0.3, 4, 0.4, 1], // giống cubic-bezier trong CSS
                            }}>
                            {letter}
                        </motion.span>
                    );            
                }
            )}
            </span>
        ))}
    </>
  );
};

export default LettersScaleOut;