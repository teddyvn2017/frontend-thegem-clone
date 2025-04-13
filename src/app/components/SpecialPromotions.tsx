'use client'
import React, { useRef, useEffect } from 'react';   
import Image from 'next/image';
import sp1 from '@/assets/img/special-promotion1.jpg';
import sp2 from '@/assets/img/special-promotion2.jpg';
import { motion, useAnimate } from 'framer-motion';
import AnimatedTextChar from './AnimatedTextChar';
import AnimatedWords from './AnimatedWords';

const SpecialPromotions = () => {

    const spRef1 = useRef(null);
    const [scope, animate] = useAnimate();
    

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      };

    useEffect(() => {
        animate(
            scope.current,
            { opacity: [0,1], y: [20,0] },
            { 
                delay: 0.2,                
                duration: 0.5,                
                ease: 'easeOut',
            }
        );
    }, [animate, scope]);

return (
    <section className='w-full mt-10'>
        <motion.div
            ref={scope}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className='mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10'>

            {/* Block 1 */}     
            <div className='relative h-full w-full'>
                <Image src={sp1} alt="image" className="object-cover" />
                <div className='absolute top-1/6 left-20 flex flex-col gap-2'>
                    <AnimatedWords  className='text-white text-base lg:text-2xl'
                       text="Mind-Blowing Discounts" 
                       amount={0.5} 
                       />
                    <motion.h2 variants={itemVariants} className='text-white text-xl lg:text-6xl uppercase font-semibold'>
                        <span className='text-yellow-400'>50%</span> Off
                    </motion.h2>
                    <motion.h4 variants={itemVariants} className='text-white text-base lg:text-xl'>Lorem ipsum dolor sit amet consectetur!</motion.h4>
                    <motion.button   
                        variants={itemVariants}  
                        className='bg-transparent border border-white text-white text-sm 
                                    rounded-full px-6 py-2 mt-4 w-fit cursor-pointer
                                    hover:bg-white hover:text-[#222]'>Check Offers</motion.button>
                </div>                
            </div>

            {/* Block 2 */}
            <div className='relative h-full w-full'>
                <Image src={sp2} alt="image" className="object-cover" />
                <div className='absolute top-1/6 left-20 flex flex-col gap-2'>
                    <h3 className='text-white text-base lg:text-2xl'>More than 250 Products From</h3>
                    <h2 className='text-yellow-400 text-xl lg:text-6xl uppercase font-semibold'>
                        3.99$
                    </h2>
                    <h4 className='text-white text-base lg:text-xl'>Lorem ipsum dolor sit amet consectetur!</h4>
                    <button     
                        className='bg-transparent border border-white text-white text-sm 
                                    rounded-full px-6 py-2 mt-4 w-fit cursor-pointer
                                    hover:bg-white hover:text-[#222]
                                    '>Shop Now</button>
                </div>                
            </div>
        </motion.div>
    </section>
  )
}

export default SpecialPromotions