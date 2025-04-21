import React from 'react'
import Image from 'next/image';
import delivery from '@/assets/img/delivery.jpg';

const Delivery = () => {
    return (
        <section className='w-full mt-12'>
            <div className='mx-auto flex flex-col items-start lg:items-center justify-center gap-4
                            lg:flex-row 
                            lg:relative'>
                <Image src={delivery} alt="Delivery" 
                        className='max-h-[400px] min-h-[240px] px-8 lg:px-16 z-0 object-cover w-full' />
                <div className='flex flex-col items-start justify-center
                                pl-8 md:w-1/2 h-full
                                lg:absolute lg:right-0 lg:top-0                                 
                                bg-white z-10'>
                    <h3 className='text-gray-400 text-xl md:text-base pb-2'>Delivery</h3>
                    <div className='flex flex-col items-start justify-center lg:gap-4 gap-2'>
                        <h2 className='text-3xl xl:text-4xl font-semibold text-[#222]'>Just One Click Away!</h2>
                        <h2 className='text-3xl xl:text-4xl font-semibold text-[#222]'>Shop from your Own</h2>
                        <h2 className='text-3xl xl:text-4xl font-semibold text-[#222]'>Home.</h2>
                    </div>
                    <h4 className='text-base text-[#222] mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing.</h4>
                    <button className='btn-primary mt-4 rounded-full px-8 py-2.5 bg-[#222] text-white'>Read more</button>
                </div>
                
            </div>
        </section>
    )
}

export default Delivery