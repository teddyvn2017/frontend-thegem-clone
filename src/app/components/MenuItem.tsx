import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type MenuItemProps = {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  subMenu?: {
    title: string;
    href: string;
  }[];
};

const MenuItem: React.FC<MenuItemProps> = ({ href, children, isActive, subMenu }) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (linkRef.current) {
      const rect = linkRef.current.getBoundingClientRect();
      setDimensions({ width: rect.width, height: rect.height });
    }
  }, []);

  const pathVariants = {
    initial: { pathLength: 0 },
    hover: {
      pathLength: 1,
      transition: { duration: 0.6, ease: 'easeInOut' },
    },
  };

  const { width, height } = dimensions;

  return (
    <motion.li
        className="relative"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
    >
      {/* Anchor link chính */}
        <Link
            ref={linkRef}
            href={href}
            className="overflow-hidden px-[12px] py-[6px] inline-block group relative"
        >
            {children}
        <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            preserveAspectRatio="none">
          
            {/* Nếu isActive thì vẽ luôn border không animate */}
            {isActive ? (
                <path
                d={`M0 0 L0 ${height} L${width} ${height} L${width} 0 Z`}
                fill="none"
                stroke="black"
                strokeWidth="4"
                />
            ) : (
                    <motion.path
                        d={`M0 0 L0 ${height} L${width} ${height} L${width} 0 Z`}
                        fill="none"
                        stroke="black"
                        strokeWidth="4"
                        variants={pathVariants}
                    />
            )}
        </svg>
      </Link>

      {/* Submenu nếu có */}
      {
        subMenu && (
            <motion.ul
                className="absolute top-full left-0 bg-white shadow-md z-10 w-max min-w-[200px] 
                            pr-8 flex flex-col gap-2"
                initial={{ opacity: 0, y: 10,visibility: 'hidden' }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10,visibility: isHovered ? 'visible' : 'hidden' }}
                transition={{ duration: 0.2, ease: 'easeInOut' }} >
            {
                subMenu.map((subItem) => (
                    <li key={subItem.title}>
                        <Link
                            href={subItem.href}
                            className="block px-4 py-2 hover:text-gray-700 
                                        hover:border-l-2 hover:border-[#222] hover:transition-colors hover:duration-300
                                        border-l-2 border-transparent
                                        text-base text-[#222]  font-normal">
                            {subItem.title}
                        </Link>
                    </li>
            ))}
            </motion.ul>
      )}
    </motion.li>
  );
};

export default MenuItem;
