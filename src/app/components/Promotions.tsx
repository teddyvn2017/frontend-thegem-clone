import { section } from 'framer-motion/client'
import React from 'react'

const Promotions = () => {
    return (
        <section className='w-full mt-12 lg:mt-16'>
            <div className='mx-auto px-8 lg:px-16 flex flex-col items-center justify-between gap-1'>
                <h3 className='text-xl text-gray-500'>Offers this week</h3>
                <h2 className='text-2xl lg:text-3xl text-[#222] font-semibold text-center'>Discount and Promotion</h2>
            </div>
            {/* tabs promotion */}
            <div className="flex justify-center mt-10 gap-10">
                <button className="font-semibold text-base  border-b-2 border-[#222]">ON SALE</button>
                <button className="font-normal text-base text-gray-500 hover:text-gray-700">FEATURED</button>
                <button className="font-normal text-base text-gray-500 hover:text-gray-700">TOP SELLERS</button>
            </div>
                
        </section>
    )
}

export default Promotions