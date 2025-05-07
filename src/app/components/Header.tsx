'use client'

import React, {useState,useEffect } from 'react';
import MenuItem from './MenuItem';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/img/logo.svg';
import Combobox from './Combobox';
import BurgerIcon from './BurgerIcon';
import MenuMobile from './MenuMobileItems';


const Header = () => {

	const menuItems = [ // Định nghĩa trực tiếp hoặc import từ file
		{ title: 'Home', href: '/' },
		{
		  title: 'Products',
		  href: '/products',
		  subMenu: [
			{ title: 'All Products', href: '/products' },
			{ title: 'New Arrivals', href: '/products/new' },
			{ title: 'Featured', href: '/products/featured' },
			{ title: 'Sale', href: '/products/sale' },
		  ],
		},
		{ title: 'Categories', href: '/categories' },
		{ title: 'Blog', href: '/blog' },		
	  ];

	const headerRef = React.useRef<HTMLDivElement>(null);
	const [headerHeight, setHeaderHeight] = useState(0);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	}

	useEffect(() => {
		if (headerRef.current) {
			// setHeaderHeight(headerRef.current.offsetHeight);	
			const height = headerRef.current.offsetHeight;
      		setHeaderHeight(height);
      		// console.log("Chiều cao của Header:", height);
		}
	},[])

  return (
    <header 
		ref = {headerRef}
		className='w-full bg-white'>
		
		<div className='hidden lg:block mx-auto px-16'>
			<div className='border-b border-solid border-gray-200 flex flex-row justify-between items-center py-2.5'>
				<div className='flex flex-row gap-2 items-center text-sm text-gray-500'>
					<i className='bx bx-time'></i>
					<span> Working Hours: Mon - Sun / 9:00 AM - 8:00 PM</span>
				</div>
				<div className='hidden lg:flex lg:flex-row items-center gap-5 w-auto'>
					<ul className='flex flex-row gap-4 lg:gap-8 text-gray-500 text-sm'>
						<li>
							<a href="#">Contact Us</a>
						</li>
						<li>
							<a href="#">Delivery</a>
						</li>
						<li>
							<a href="#">Help</a>
						</li>
						<li>
							<a href="#">Return</a>
						</li>
					</ul>
					<div>
						<ul className='flex flex-row gap-4 text-base'>
							<li>
								<a href="#">
									<i className='bx bxl-facebook'></i>
								</a>
							</li>

							<li>
								<a href="#">
									<i className='bx bxl-twitter'></i>
								</a>
							</li>

							<li>
								<a href="#">
									<i className='bx bxl-youtube'></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			
		</div>

        <nav className='flex flex-row justify-between items-center mx-auto px-8 lg:px-16 gap-8'>
            <ul className='hidden lg:flex lg:flex-row font-semibold py-4 gap-8 text-base'>
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
			<Link href="/">
				<Image src={logo} alt="logo thegem" className='w-24 h-12 lg:w-32 lg:h-32 xl:w-40 xl:h-24' />
			</Link>
			<div className='hidden lg:flex lg:flex-row gap-6 items-center'>
				{/* item này không cần thiết, sẽ dùng với search bar, dialogue modal*/}
				{/* <input type="text" placeholder='Search' className='border-none px-4 py-2 focus:outline-none text-sm' /> */}
				<Combobox />
				<i className='bx bx-user text-2xl cursor-pointer'></i>
				<i className='bx bx-shopping-bag text-2xl cursor-pointer' ></i>
			</div>
			<BurgerIcon isOpen={isMobileMenuOpen} toggleOpen={toggleMobileMenu}/>
        </nav>

		<MenuMobile 
			isOpen={isMobileMenuOpen} 
			onClose={toggleMobileMenu} 
			headerHeight={headerHeight} 
			menuItems={menuItems}
		/> {/* Thêm component MobileMenu */}
    </header>
  )
}

export default Header