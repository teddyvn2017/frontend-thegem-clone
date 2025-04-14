'use client'
import React, { useEffect, useRef } from 'react';  
import Image from 'next/image';
import sp1 from '@/assets/img/special-promotion1.jpg';
import sp2 from '@/assets/img/special-promotion2.jpg';
import { gsap } from 'gsap'; 
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const SpecialPromotions = () => {

    const textRef = useRef(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const subheadingRef = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        // Áp dụng hiệu ứng spring cho chữ "Mind-Blowing Discounts"
        if (textRef.current) {
            gsap.from(textRef.current, {
                y: 50,
                opacity: 0,
                ease: "back.out(1.7)",
                duration: 1,
            });
        }
    
        // Kích hoạt hiệu ứng cho phần "50% Off" và "Lorem ipsum" với stagger effect khi cuộn xuống
        if (headingRef.current && subheadingRef.current) {
            gsap.from([headingRef.current, subheadingRef.current], {
                opacity: 0,
                y: 30,
                stagger: 0.3, // Tạo hiệu ứng stagger giữa các phần tử
                ease: "power3.out",
                duration: 1,
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 80%", // Khi top của phần tử cách 80% viewport
                    end: "bottom top",
                    scrub: true, // Hiệu ứng mượt mà khi cuộn
                    once: false, // Chạy chỉ 1 lần
                },
          });
        }
    
        // Kích hoạt hiệu ứng cho button "Check Offers"
        if (buttonRef.current) {
            gsap.from(buttonRef.current, {
                opacity: 0,
                y: 20,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                trigger: buttonRef.current,
                start: "top 80%", // Khi top của phần tử cách 80% viewport
                end: "bottom top",
                scrub: true,// Hiệu ứng mượt mà khi cuộn
                once: false,
                },
            });
        }
      }, []);

  return (
    <section className='w-full mt-10'>
        <div className='mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10'>
            <div className='relative h-full w-full'>
                <Image src={sp1} alt="image" className="object-cover" />
                <div className='absolute top-1/6 left-20 flex flex-col gap-2'>
                    <h3 
                        ref = {textRef}
                        className='text-white text-base lg:text-2xl'>Mind-Blowing Discounts</h3>
                    <h2 
                        ref={headingRef}
                        className='text-white text-xl lg:text-6xl uppercase font-semibold'>
                        <span className='text-yellow-400'>50%</span> Off
                    </h2>
                    <h4 
                        ref={subheadingRef}
                        className='text-white text-base lg:text-xl'>Lorem ipsum dolor sit amet consectetur!</h4>
                    <button                        
                        ref={buttonRef}
                        className='bg-transparent border border-white text-white text-sm 
                                    rounded-full px-6 py-2 mt-4 w-fit cursor-pointer
                                    hover:bg-white hover:text-[#222]
                                    '>Check Offers</button>
                </div>
                
            </div>
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
                                    hover:bg-white hover:text-[#222]'>Shop Now</button>
                </div>                
            </div>
        </div>
    </section>
  )
}

export default SpecialPromotions