'use client'

import React from 'react';
import MenuItem from './MenuItem';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/img/logo.svg';
import Combobox from './Combobox';
import { UserCircleIcon,ShoppingBagIcon } from '@heroicons/react/20/solid';
const Header = () => {
  return (
    <header className='w-full bg-white'>
        <nav className='flex flex-row justify-between items-center mx-auto px-16 gap-8'>
            <ul className='flex flex-row font-semibold py-4 gap-8 text-base'>
				<MenuItem href="#" isActive={true}>Home</MenuItem>
				<MenuItem 
					href="#" 
					isActive = {false}
					subMenu = {
						[
							{ title: 'All Products', href: '/products' },
							{ title: 'New Arrivals', href: '/products/new' },
							{ title: 'Featured', href: '/products/featured' },
							{ title: 'Sale', href: '/products/sale' },	
						]
					}
				>

					Products
				</MenuItem>
				<MenuItem href="#" isActive={false}>Categories</MenuItem>
				<MenuItem href="#" isActive={false}>Blog</MenuItem>
            </ul>
			<Link href="">
				<Image src={logo} alt="logo thegem" />
			</Link>
			<div className='flex flex-row gap-2 items-center'>
				<input type="text" placeholder='Search' className='border-none px-4 py-2 focus:outline-none' />
				<Combobox />
				<UserCircleIcon className='w-6 h-6' />
				<ShoppingBagIcon className='w-6 h-6' />
			</div>
        </nav>
    </header>
  )
}

export default Header