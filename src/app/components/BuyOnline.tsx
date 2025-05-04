'use client'
import React from 'react';
import { motion } from 'framer-motion'; 
import MaskRevealWord from './helper/MaskRevealWord';
import WordsSlideUp from './helper/WordsSlideUp';

const BuyOnline = () => {
    return (
        <section className='w-full mt-[40px]'>
            <div className='mx-auto px-8 lg:px-16 flex flex-col items-center justify-center relative w-full'>
                <img src="/img/buy-online.jpg" alt="buy-online" className='min-h-[480px] w-full object-[35%_75%] object-cover' />
                <div className='flex-col items-center justify-center absolute top-1/2 -translate-y-1/2 left-1/5 lg:left-[120px]'>
                    <motion.h3 
                        className='text-base md:text-2xl text-gray-500'>
                            <MaskRevealWord  text="Category" />
                    </motion.h3>
                    <div className='flex flex-col text-[#222] gap-2 lg:gap-4 w-[80%] lg:w-[45%]'>
                        <motion.h2 className='text-[#222] font-semibold text-2xl lg:text-4xl leading-normal'>                           
                            <WordsSlideUp text='Buy now Online! See What is Being Bought The Most.' className='' />
                        </motion.h2>                       
                        <motion.h4 className='text-base lg:text-xl text-[#222]'>
                            <MaskRevealWord  text="Lorem ipsum dolor sit amet, consectetur adipisicing." />
                        </motion.h4>
                        <motion.button
                            className='rounded-full px-8 py-2.5 bg-[#222] 
                                text-white w-fit cursor-pointer
                                hover:bg-gray-500 hover:text-gray-200 mt-2'
                            initial={{ x:140, opacity:0 }}      
                            animate={{ x:0, opacity:1 }}
                            transition={{duration:1,ease: 'easeOut'}}>
                                    Shop Now
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BuyOnline    