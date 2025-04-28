import React from 'react';
import Image from 'next/image';
import { RiFacebookLine, RiInstagramLine, RiTwitterLine, RiVisaFill } from "react-icons/ri";
import { FaCcMastercard, FaCcPaypal  } from "react-icons/fa";
import logo_trang from '@/assets/img/logo_trang.svg';
const Footer = () => {
  	return (
    	<footer className='w-full mt-10 lg:mt-30 bg-[#222]'>
			<div className='px-8 lg:px-16 py-8'>				
				<div className='flex flex-col md:flex-row gap-8 md:gap-16 flex-wrap'>
					{/* Logo */}

					<div className='flex flex-col gap-4 min-w-[220px] text-white text-sm'>
						<Image 
							className='max-w-[180px] max-h-[50px] text-white'
							src={logo_trang} alt="logo" />

						<ul>
							<li>Phone: +1 916-875-2235</li>
							<li>Email: 6Bk9L@example.com</li>
						</ul>						
					</div>

					{/* Information */}
					<div className='flex flex-col gap-4 	min-w-[220px]'>
						<h3 className='text-white font-semibold text-xl'>Information</h3>
						<ul className='flex flex-col gap-2 text-white list-disc text-base pl-4'>
							<li className='hover:text-gray-300 transition-colors duration-300'>
								<a href="#">About Us</a>
							</li>
							<li className='hover:text-gray-300 transition-colors duration-300'>
								<a href="#">Careers</a>
							</li>
							<li className='hover:text-gray-300 transition-colors duration-300'>
								<a href="#">Delivery Inforamtion</a>
							</li>
							<li className='hover:text-gray-300 transition-colors duration-300'>
								<a href="#">Online Stores</a>
							</li>
							<li className='hover:text-gray-300 transition-colors duration-300'>
								<a href="#">Store Locations</a>
							</li>
						</ul>
					</div>

					<div className='flex flex-col gap-4 min-w-[220px]'>
						<h3 className='text-white font-semibold text-xl'>Categories</h3>
						<ul className='flex flex-col gap-2 text-white list-disc text-sm pl-4'>
							<li className='hover:text-gray-300 transition-colors duration-300'>
								<a href="#">Bread, Bakery</a>
							</li>
							<li className='hover:text-gray-300 transition-colors duration-300'>
								<a href="#">Cheese, Eggs</a>
							</li>
							<li className='hover:text-gray-300 transition-colors duration-300'>
								<a href="#">Honey, Nuts</a>
							</li>
							<li className='hover:text-gray-300 transition-colors duration-300'>
								<a href="#">Vegetables, Fruits</a>
							</li>
							<li className='hover:text-gray-300 transition-colors duration-300'>
								<a href="#">Wine, Beer</a>
							</li>
						</ul>
					</div>

					<div className='flex flex-col gap-4 min-w-[220px]'>
						<h3 className='text-white font-semibold text-xl'>Customer Service</h3>
						<ul className='flex flex-col gap-2 text-white list-disc text-sm pl-4'>
							<li className='hover:text-gray-300 transition-colors duration-300'>
								<a href="#">Shipping & Delivery</a>
							</li>
							<li className='hover:text-gray-300 transition-colors duration-300'>
								<a href="#">Help & Contact Us</a>
							</li>
							<li className='hover:text-gray-300 transition-colors duration-300'>
								<a href="#">Returns & Refunds</a>
							</li>
							<li className='hover:text-gray-300 transition-colors duration-300'>
								<a href="#">My Account</a>
							</li>
							<li className='hover:text-gray-300 transition-colors duration-300'>
								<a href="#">Order Tracking</a>
							</li>
						</ul>
					</div>

					<div className='flex flex-col gap-4 min-w-[220px]'>
						<h3 className='text-white font-semibold text-xl'>Payment</h3>
						<div className='flex flex-row gap-4'>
							<RiVisaFill className='text-2xl text-white'/>
							<FaCcMastercard  className='text-2xl text-white'/>
							<FaCcPaypal  className='text-2xl text-white'/>
						</div>
					</div>	
				</div>				
			</div>
			<div className='py-8 px-8 lg:px-16'>
				<div className='border-t border-[#333]'>
					<div className='flex flex-col md:flex-row justify-between items-center py-4 gap-4'>
						<p className='text-sm text-[#999]'>© 2023 Thegem. All rights reserved.</p>
						<div className='flex flex-row gap-4'>
							<a href="#">
								<RiFacebookLine className='text-xl text-white'/>
							</a>
							<a href="#">
								<RiTwitterLine className='text-xl text-white'/>
							</a>
							<a href="#">
								<RiInstagramLine className='text-xl text-white'/>
							</a>
						</div>
					</div>		
				</div>
			</div>
		</footer>
  	)
}

export default Footer