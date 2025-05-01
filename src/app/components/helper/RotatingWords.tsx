'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface RotatingWordsProps {
  words: string[];
  className?: string;
  durationPerWord?: number; // Tổng thời gian mỗi từ hiển thị (mặc định 3s)
  minWidth?: number; // Chiều rộng nhỏ nhất khi thu hẹp
}

const RotatingWords: React.FC<RotatingWordsProps> = ({
    words,
    className,
    durationPerWord = 3,
    minWidth = 120,
}) => {

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isShrinking, setIsShrinking] = useState(false);
    const [measuredWidths, setMeasuredWidths] = useState<number[]>([]);
    const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

    // Đo chiều rộng thực tế các từ
    useEffect(() => {
        const widths = wordRefs.current.map((el) => el?.offsetWidth || minWidth);
        setMeasuredWidths(widths);
    }, [words]);

  // Quản lý timer shrink/expand
    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (isShrinking) {
        timeout = setTimeout(() => {
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
            setIsShrinking(false);
        }, 1000); // thời gian co width và giảm opacity
        } else {
        timeout = setTimeout(() => {
            setIsShrinking(true);
        }, durationPerWord * 1000); // hiển thị từ trong khoảng durationPerWord giây
        }

    return () => clearTimeout(timeout);
  }, [isShrinking, words.length, durationPerWord]);

  return (
    <div
      className="relative overflow-hidden inline-block align-middle"
      style={{ minWidth: `${minWidth}px` }} // đảm bảo luôn giữ form
    >
        <motion.div
            key={currentWordIndex + (isShrinking ? '-shrinking' : '-expanding')}
            initial={{
            width: isShrinking
                ? measuredWidths[currentWordIndex] || minWidth
                : 1,
            opacity: isShrinking ? 1 : 0,
            }}
            animate={{
                width: isShrinking
                    ? 1
                    : measuredWidths[currentWordIndex] || minWidth,
                opacity: isShrinking ? 0 : 1,
            }}
            transition={{
                width: {
                    duration: isShrinking ? 1 : 0.8, // Co width chậm hơn
                    ease: [0.4, 0, 0.2, 1],
                },
                opacity: {
                    duration: isShrinking ? 0.8 : 0.6, // Opacity giảm cùng width nhưng nhanh hơn tí
                    delay: isShrinking ? 0.2 : 0, // Delay opacity giảm để width co trước 1 chút
                    ease: 'easeOut',
                },
            }}
            className="overflow-hidden whitespace-nowrap flex items-center">
                <span
                    ref={(el) => {
                        wordRefs.current[currentWordIndex] = el;
                    }}
                    className={`${className || ''} inline-block`}>
                    {words[currentWordIndex]}
                </span>
        </motion.div>
    </div>
  );
};

export default RotatingWords;
