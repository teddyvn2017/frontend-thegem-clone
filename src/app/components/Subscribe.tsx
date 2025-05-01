'use client'
import React from 'react'
import RotatingWords from './helper/RotatingWords';
import LettersSlideUp from './helper/LettersSlideUp';
import LettersScaleOut from './helper/LettersScaleOut';

const Subscribe = () => {
  return (
    <section className='mt-10'>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch justify-center mx-auto 
            px-8 lg:px-16 min-h-[380px] md:min-h-[400px] lg:min-h-[520px] 2xl:min-h-[640px]'>
            {/* Block 1 */}
            <div className='h-full bg-[#ffe6b1] lg:w-[40%] px-8 py-8 min-h-[400px] lg:min-h-[640px] flex flex-col items-center justify-center'>

                <div className='flex flex-col gap-2'>
                    {/* Content */}              
                        <h4 className='text-base text-[#222] font-light'>Newsletter</h4>
                        <h2 className='text-3xl md:text-4xl font-semibold text-[#222]'>Keep up to Date</h2>
                        <h2 className='text-3xl md:text-4xl font-semibold text-[#222]'>With Our Special</h2>
                        
                        <h2 className='text-3xl md:text-4xl font-semibold text-[#222]'>
                           
                            <RotatingWords
                                words={['Offers', 'Sales', 'Events', 'News']}
                                className="text-primary" // tuỳ chỉnh class
                                durationPerWord={3} // Mỗi từ hiển thị 3 giây
                            />

                        </h2>
                        <p className='mt-4 text-base max-w-[320px]'>Subscribe to our newsletter and get 10% off your first purchase</p>
                        <input type="text" placeholder='Email address' 
                            className='px-4 py-2 border-0 border-b-1 border-[#222] bg-transparent text-base
                                    focus:outline-none focus:ring-0 focus:border-black' />
                        <button className='bg-[#222] text-white px-4 py-2 rounded-full w-fit text-sm mt-4'>
                            Subscribe Now
                        </button>
                </div>
            </div>

            {/* Block 2 */}
            <div className='relative lg:w-[60%]'>
                <img src="/img/subscribe.jpg" className='w-full h-full min-h-[360px] object-cover object-center'
                    alt="subscribe" />
                <div className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex flex-col gap-2 z-10 w-fit md:w-max'>
                    <LettersSlideUp text="30% OFF" className="text-3xl md:text-5xl 2xl:text-8xl font-semibold text-[#222] text-center" />
                    {/* <h2 className='text-3xl md:text-5xl 2xl:text-8xl font-semibold text-[#222] text-center'>30% OFF</h2> */}
                    <div className='flex flex-col gap-2 text-2xl text-[#222] text-center mt-2 flex-wrap'>
                        <h3 className='text-wrap max-w-[400px]  '>
                            <LettersScaleOut text="Enjoy 30% off Your First Order when You Join our Mailing List!"                                
                                className='' />                            
                        </h3>
                        
                        {/* <h3 className='text-wrap w-fit'>
                            <LettersScaleOut text="when You Join our Mailing List!" className='' />  
                        </h3> */}
                    </div>
                </div>
            </div>
        </div>
    </section>    
    )
}

export default Subscribe