import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

type MenuItemProps = {
    href: string;
    children: React.ReactNode;
    isActive: boolean;
};

const MenuItem: React.FC<MenuItemProps> = ({ href, children, isActive }) => {
    const linkRef = useRef<HTMLAnchorElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });// khoi tao kich thuoc mac dinh

  // lấy kích thước chính xác của thẻ a
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
        transition: {
            duration: 0.6,
            ease: 'easeInOut',
        },
        },
    };

    const { width, height } = dimensions;
    return (
        <li className="relative">
            <motion.a
                ref={linkRef}
                href={href}
                className="relative overflow-hidden px-[12px] py-[6px] inline-block"
                initial="initial"
                whileHover="hover">
                    {children}
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    width={width}
                    height={height}
                    viewBox={`0 0 ${width} ${height}`}
                    preserveAspectRatio="none"
                    >
                <motion.path
                    d={`M0 0 L0 ${height} L${width} ${height} L${width} 0 Z`} // di chuyển ngược chiều kim đồng hồ
                    fill="none"
                    stroke="black"
                    strokeWidth="6"
                    variants={isActive ? undefined : pathVariants} // Chỉ animate khi không active
                />
                </svg>
            </motion.a>
        </li>
    );
};

export default MenuItem;
