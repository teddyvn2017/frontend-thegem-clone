'use client'
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { BiMessageSquareDetail } from "react-icons/bi";

type NewsItemProps = {
	src: string;
	date: string;
	title: string;
	desc: string;
}

const NewsItem = ({src, date, title, desc}: NewsItemProps) => {

	const controls = useAnimation();
	const [isHovered, setIsHovered] = useState(false);

  	const handleMouseEnter = () => {
		setIsHovered(true);
		controls.start({opacity: 1, scale: 1,y:'-50%',transition: { duration: 0.4 }});
  	}

	const handleMouseLeave = () => {
		setIsHovered(false);
		controls.start({opacity: 0,scale: 0.8,y:'100%',transition: { duration: 0.4 }});
  	}

  	return (
    	<div className='flex flex-col items-center justify-center mt-2 mx-auto w-full'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			>
			<div className='relative w-full flex flex-col items-center justify-center overflow-hidden'>
				<motion.img 
					className='object-cover w-full cursor-pointer' 
					src={src} alt={title}
					animate = {{
						opacity: isHovered ? 0.5 : 1,
						scale: isHovered ? 1.1 : 1
					}}
					/>
				<motion.div
					initial={{opacity: 0, y:100}}
					animate={controls}
					className='absolute right-1/2 translate-x-1/2 w-10 h-10 
							top-1/2 -translate-y-1/2 bg-[#222] 
							rounded-full flex items-center justify-center z-10'>
					<BiMessageSquareDetail 
						className='absolute text-xl text-white z-20' />
				</motion.div>
			</div>
			<div className='mt-2'>
				<p className='text-sm text-gray-500 font-light'>{date}</p>
				<h3 className='text-xl md:text-base text-[#222] font-semibold'>{title}</h3>
				<p className='text-base text-[#222] mt-2 text-wrap'>
					{desc}
				</p>
			</div>
		</div>
  	)
}

export default NewsItem