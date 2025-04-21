'use client'

import React from 'react'
import Image from 'next/image'
import sp1 from '@/assets/img/special-promotion1.jpg'
import sp2 from '@/assets/img/special-promotion2.jpg'
import { motion } from 'framer-motion'
import StaggerText from './helper/StaggerText';
import StaggerWord from './helper/StaggerWord';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

const fadeLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
}

// Animation variants
const container = {
    hidden: {},
    visible: {
    transition: {
        staggerChildren: 0.02, // delay giữa mỗi chữ
    },
  },
}

const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4, // Tăng thời gian transition của từng chữ
            ease: "easeOut",
        },
    },
};

const SpecialPromotions = () => {
  return (
    <section className='w-full mt-10'>
      <div className='mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10'>
        {/* Block 1 - "50% Off" */}
        <motion.div
          className='relative h-full w-full'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.2 }}
        >
            <Image src={sp1} alt="image" className="object-cover min-h-[400px]" />
            <div className='absolute top-[16%] left-20 flex flex-col gap-2'>
                {/* <motion.div
                    className="flex flex-wrap"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.6 }}>
                    {"Mind-Blowing Discounts".split("").map((char, index) => (
                        <motion.span
							key={index}
							variants={letter}
							className="text-white text-base lg:text-2xl">
							{char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.div> */}
				<StaggerWord text="Mind-Blowing Discounts" className="text-white text-base lg:text-2xl" />

                <div className='text-white text-xl lg:text-8xl uppercase font-semibold flex flex-row'>
                    <StaggerText text="50%" className="text-yellow-400" />
                    <StaggerText text=" Off" className="text-white"/>
                </div>

                <motion.h4
                    variants={fadeUp}
                    transition={{ duration: 0.5 }}
                    className='text-white text-base lg:text-xl'>
                    Lorem ipsum dolor sit amet consectetur!
                </motion.h4>

                <motion.button
                    variants={fadeLeft}
                    transition={{ duration: 0.5 }}
                    className='bg-transparent border border-white text-white text-sm 
                                rounded-full px-6 py-2 mt-4 w-fit cursor-pointer
                                hover:bg-white hover:text-[#222]'>
                    Check Offers
                </motion.button>
          </div>
        </motion.div>

        {/* Block 2 - vẫn giữ nguyên nếu không cần animation */}
        <div className='relative h-full w-full'>
          <Image src={sp2} alt="image" className="object-cover min-h-[400px]" />
          <div className='absolute top-[16%] left-20 flex flex-col gap-2'>
            <h3 className='text-white text-base lg:text-2xl'>
              More than 250 Products From
            </h3>
            <h2 className='text-yellow-400 text-xl lg:text-8xl uppercase font-semibold'>
              3.99$
            </h2>
            <h4 className='text-white text-base lg:text-xl'>
              Lorem ipsum dolor sit amet consectetur!
            </h4>
            <button
              className='bg-transparent border border-white text-white text-sm 
                         rounded-full px-6 py-2 mt-4 w-fit cursor-pointer
                         hover:bg-white hover:text-[#222]'
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialPromotions
