import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MenuItem {
  title: string;
  href: string;
  subMenu?: MenuItem[];
}

interface MenuMobileProps {
	isOpen: boolean;
	onClose: () => void;
	headerHeight: number;
	menuItems?: MenuItem[];
}

const MenuMobile: React.FC<MenuMobileProps> = ({ isOpen, onClose, headerHeight, menuItems }) => {
  	const menuVariants = {
		initial: { x: "100%" }, // Di chuyển từ phải qua trái
		animate: { x: "0" },
		exit: { x: "100%" },
  	};

  	const subMenuVariants = {
		opened: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: 'easeInOut' } },
		closed: { opacity: 0, height: 0, transition: { duration: 0.3, ease: 'easeInOut' } }
  	};

  	const [openedSubMenu, setOpenedSubMenu] = useState<string[]>([]);
  	const toggleSubMenu = (title: string) => {
    console.log("toggleSubmenu được gọi với title:", title);
    if (openedSubMenu.includes(title)) {
      	console.log("Trước khi lọc (đóng submenu):", [...openedSubMenu]);
      	setOpenedSubMenu(openedSubMenu.filter(item => item !== title));
      	console.log("Sau khi lọc (đóng submenu):", [...openedSubMenu.filter(item => item !== title)]);
    } else {
      	setOpenedSubMenu([...openedSubMenu, title]);
    }
  };

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
          	<ul className="list-none p-0 m-0 w-full md:hidden uppercase"> {
				menuItems?.map((item) => (
              		<li key={item.title} className="py-2">
						<div className="flex items-center justify-between">
							<a href={item.href} className="block text-lg hover:text-gray-300">
								{item.title}
							</a>
						{
							item.subMenu && (
								<button onClick={() => toggleSubMenu(item.title)} className="focus:outline-none">
									{
										openedSubMenu.includes(item.title) ? (<i className="bx bx-chevron-up text-2xl"></i>) : (<i className="bx bx-chevron-down text-2xl"></i>)
									}
								</button>
							)
						}
						</div>
						<AnimatePresence>
						{
							item.subMenu && openedSubMenu.includes(item.title) && (
								<motion.ul
									variants={subMenuVariants}
									initial="closed"
									animate="opened"
									exit="closed"
									className="list-none p-0 m-0 mt-2 pl-4"
								>
								{
									item.subMenu.map((subItem) => (
										<li key={subItem.title} className="py-2">
											<a href={subItem.href} className="block text-md hover:text-gray-300">
												{subItem.title}
											</a>
										</li>)
									)
								}
								</motion.ul>
							)
						}
						</AnimatePresence>
              		</li>
            		)
				)}
          	</ul>
        
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuMobile;