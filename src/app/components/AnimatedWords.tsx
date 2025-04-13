'use client';
import { motion,useInView  } from 'framer-motion';
import { useRef, useEffect } from 'react';
const wordItem = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: [30, 0],  // Giới hạn với 2 keyframes: bắt đầu từ 30 và trở về 0
    transition: {
      delay: i * 0.2,
      type: 'spring',
      stiffness:62,  // Độ cứng của lò xo
      damping: 10,     // Độ giảm chấn giúp cho hiệu ứng mượt mà
      mass:1
    },
  }),
};

type AnimatedWordsProps = {
  text: string;
  className?: string;
  amount?: 'some' | 'all' | number; // Tỷ lệ phần tử cần hiển thị để kích hoạt (0 đến 1)
};

const AnimatedWords = ({ text, className = '', amount = 'some' }: AnimatedWordsProps) => {
    const ref = useRef(null);
    const words = text.split(/(\s+)/).filter(Boolean);  // Giữ khoảng trắng
    const isInView = useInView(ref, { amount });

    return (
        <div ref={ref} className={`inline-flex gap-2 ${className}`}>
        {words.map((word, index) => (
            <motion.span
                key={index}
                custom={index}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                variants={wordItem}
                className="inline-block"
            >
                {word}
            </motion.span>
        ))}
        </div>
  );
};

export default AnimatedWords;
