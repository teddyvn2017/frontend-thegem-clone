import React from 'react'   
import Image from 'next/image';
import sp1 from '@/assets/img/special-promotion1.jpg';
import sp2 from '@/assets/img/special-promotion2.jpg';
const SpecialPromotions = () => {
  return (
    <section className='w-full mt-10'>
        <div className='mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10'>
            <div className='relative h-full w-full'>
                <Image src={sp1} alt="image" className="object-cover" />
                <div className='absolute top-1/6 left-20 flex flex-col gap-2'>
                    <h3 className='text-white text-base lg:text-2xl'>Mind-Blowing Discounts</h3>
                    <h2 className='text-white text-xl lg:text-6xl uppercase font-semibold'>
                        <span className='text-yellow-400'>50%</span> Off
                    </h2>
                    <h4 className='text-white text-base lg:text-xl'>Lorem ipsum dolor sit amet consectetur!</h4>
                    <button     
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
                                    hover:bg-white hover:text-[#222]
                                    '>Shop Now</button>
                </div>                
            </div>
        </div>
    </section>
  )
}

export default SpecialPromotions