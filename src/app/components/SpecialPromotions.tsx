'use client'
import React, { useEffect, useRef } from 'react';  
import Image from 'next/image';
import sp1 from '@/assets/img/special-promotion1.jpg';
import sp2 from '@/assets/img/special-promotion2.jpg';
import { gsap } from 'gsap'; 
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { section } from 'framer-motion/client';

gsap.registerPlugin(ScrollTrigger);

const SpecialPromotions = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const textRef = useRef(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const subheadingRef = useRef<HTMLHeadingElement | null>(null);
   
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {                
                trigger: sectionRef.current,
                start: "top 80%",
                end: "bottom top",
                scrub: true,markers: true,}
            });

            if (headingRef.current) {
                tl.from(headingRef.current, { y: -50, opacity: 0, duration: 0.5 }, 0);
            }

            if (subheadingRef.current) {
                tl.from(subheadingRef.current, { opacity: 0, duration: 0.7 }, 0.2);
            }

            if (buttonRef.current) {
                tl.from(buttonRef.current, { x: 50, opacity: 0, duration: 0.6 }, 0.4);
            }
        
            return () => {
                tl.kill();
            };
        }
        
    , []);



    return (
        <section 
            
            className='w-full mt-10'>
            <div 
                ref = {sectionRef}
                className='mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10'>
                {/* Block 1 */}
                <div className='relative h-full w-full'>
                    <Image src={sp1} alt="image" className="object-cover min-h-[400px]" />
                    <div className='absolute top-1/6 left-20 flex flex-col gap-2'>
                        <h3 
                            ref={textRef}
                            className='text-white text-base lg:text-2xl'>
                            Mind-Blowing Discounts
                        </h3>
                        <h2 
                            ref={headingRef}
                            className='text-white text-xl lg:text-8xl uppercase font-semibold [span]:inline-block'>
                            <span className='text-yellow-400'>50%</span> Off
                        </h2>
                        <h4 
                            ref={subheadingRef}
                            className='text-white text-base lg:text-xl [span]:inline-block'>
                            Lorem ipsum dolor sit amet consectetur!
                        </h4>
                        <button                        
                            ref={buttonRef}
                            className='bg-transparent border border-white text-white text-sm 
                                       rounded-full px-6 py-2 mt-4 w-fit cursor-pointer
                                       hover:bg-white hover:text-[#222]'>
                            Check Offers
                        </button>
                    </div>
                </div>

                {/* Block 2 */}
                <div className='relative h-full w-full'>
                    <Image src={sp2} alt="image" className="object-cover min-h-[400px]" />
                    <div className='absolute top-1/6 left-20 flex flex-col gap-2'>
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
                                       hover:bg-white hover:text-[#222]'>
                            Shop Now
                        </button>
                    </div>                
                </div>
            </div>
        </section>
    );
};

export default SpecialPromotions;
