import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BurgerIcon = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    const lineVariants = {
        closed: { opacity: 1, rotate: 0, y: 0 ,transition: { duration: 0.2,ease: 'easeInOut' } },
        opened: (index:number) => ({
            opacity: index === 1 ? 0 : 1, 
            rotate: index === 0 ? 45 : index === 2 ? -45 : 0,
            y: index === 0 ? 8 : index === 2 ? -8 : 0, // line[0] di chuyển xuong 8, line[2] di chuyển lên 8
            transition: { duration: 0.2, ease: 'easeInOut' }
        }),
      };
    return (
        <motion.button 
            onClick={toggleOpen} 
            className="md:hidden flex flex-col items-center justify-center gap-0.5 w-8 h-8 bg-transparent border-none" 
            aria-label={isOpen ? 'Đóng menu' : 'Mở menu'}>
                {
                    [0,1,2].map((index) => (
                        <motion.div
                            key={index}
                            className="w-6 h-0.5 bg-black rounded-full my-0.5 transition-all duration-300"
                            variants={lineVariants}
                            animate={isOpen ? 'opened' : 'closed'}
                            custom={index}  
                        />  
                    ))
                }
        </motion.button>
        
    )
}

export default BurgerIcon