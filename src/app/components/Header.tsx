'use client'

import React from 'react';
// import { motion } from 'framer-motion';
import MenuItem from './MenuItem';
const Header = () => {
  return (
    <header className='w-full bg-white'>
        <nav>
            <ul className='flex flex-row font-semibold mx-auto px-16 py-8 gap-8 text-base'>
              <MenuItem href="#" isActive={true}>Home</MenuItem>
              <MenuItem href="#" isActive={false}>Products</MenuItem>
              <MenuItem href="#" isActive={false}>Categories</MenuItem>  
            </ul>
        </nav>
    </header>
  )
}

export default Header