'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className='w-full bg-white'>
        <nav>
            <ul className='flex flex-row font-semibold mx-auto px-16 py-8 gap-8 text-base'>
                <li>
                    <a href="#" className='active px-[12px] py-1 overflow-hidden'>Home</a>
                </li>
                <li>
                    <motion.div
                        
                        className="px-[12px] py-1 relative overflow-hidden inline-block"
                        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                        >
                        Products
                        <motion.div
                            className="absolute inset-0 border-2 border-black rounded-md origin-top-left"
                            initial={{ scaleX: 0, scaleY: 0 }}
                            animate={{ scaleX: 1, scaleY: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                </li>
                <li>
                    <a href="#">Categories</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header