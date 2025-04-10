import React from 'react'
import { motion, AnimatePresence, animate } from 'framer-motion';
import { exit } from 'process';

interface MenuItem {
	label: string;
	href: string;
	subMenu?: MenuItem[];
}

// khai báo giao tiếp
interface MenuMobileProps {
    isOpen: boolean,
    onClose: () => void,
	headerHeight: number;
	menuItems?: MenuItem[];
}
const MenuMobile: React.FC<MenuMobileProps> = ({isOpen, onClose, headerHeight}) => {

	const menuVariants =  {
		initial: {x:"100%"},
		animate: {x:"0"},
		exit: {x:"100%"}
	}

  	return (
		<AnimatePresence>
			{
				isOpen && (
					<motion.div 
						className={`fixed top-${headerHeight} left-0 w-full h-screen bg-white z-50 px-8 py-8`}
						variants={menuVariants}
						initial="initial"
						animate="animate"
						exit="exit"
						transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
					>

						{/* Nút đóng menu
						<button onClick={onClose} className="text-gray-400 hover:text-white mb-4 focus:outline-none">
							Đóng
						</button> */}

						<ul className="list-none p-0 m-0 w-full md:hidden uppercase">
							<li className="py-2">
								<a href="#" className="block text-lg hover:text-gray-300">Home</a>
							</li>
							<li className="py-2">
								<a href="#" className="block text-lg hover:text-gray-300">Products</a>


							</li>
							<li className="py-2">
								<a href="#" className="block text-lg hover:text-gray-300">Categories</a>
							</li>
							<li className="py-2">
								<a href="#" className="block text-lg hover:text-gray-300">Blog</a>
							</li>
						</ul>
					</motion.div>
				)
			}
		</AnimatePresence>
  	)
}

export default MenuMobile