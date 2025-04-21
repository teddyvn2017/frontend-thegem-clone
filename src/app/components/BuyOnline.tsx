import React from 'react'

const BuyOnline = () => {
    return (
        <section className='w-full mt-[40px]'>
            <div className='mx-auto px-8 lg:px-16 flex flex-col items-center justify-center relative w-full'>
                <img src="/img/buy-online.jpg" alt="buy-online" className='min-h-[480px] w-full object-[35%_75%] object-cover' />
                <div className='flex-col items-center justify-center absolute top-1/6 left-[120px]'>
                    <h3 className='text-base md:text-2xl text-gray-500'>Category</h3>
                    <div className='flex flex-col text-[#222] gap-2 lg:gap-4 w-[45%]'>
                        <h2 className='text-[#222] font-semibold text-2xl lg:text-4xl leading-normal'>
                            Buy now Online! See What is Being Bought The Most.
                        </h2>
                        {/* <h2 className='text-[#222] font-semibold text-2xl lg:text-4xl'>Buy now Online! See</h2>
                        <h2 className='text-[#222] font-semibold text-2xl lg:text-4xl'>What is Being Bought</h2>
                        <h2 className='text-[#222] font-semibold text-2xl lg:text-4xl'>The Most.</h2> */}
                        <h4 className='text-base lg:text-xl text-[#222]'>Lorem ipsum dolor sit amet, consectetur adipisicing.</h4>
                        <button className='rounded-full px-8 py-2.5 bg-[#222] 
                                text-white w-fit cursor-pointer
                                hover:bg-gray-500 hover:text-gray-200 mt-2
                                '>Shop Now</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BuyOnline