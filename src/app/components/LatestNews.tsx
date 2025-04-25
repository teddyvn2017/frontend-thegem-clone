import React from 'react'

const LatestNews = () => {
  return (
    <section className='w-full mt-8 lg:mt-10'>
        {/* Wrapper */}
        <div className='mx-auto px-8 lg:px-16'>
            <div className='flex flex-col items-center justify-center gap-2'>
                <h3 className='text-2xl md:text-3xl text-gray-600 font-light'>Latest News</h3>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>Latest News from Blog</h2>
            </div>
            {/* Content */}
            <div className='w-full flex flex-col md:flex md:flex-row justify-center flex-wrap items-center gap-8 mt-12'>
                {/* item */}
                <div className='relative flex flex-col items-start justify-center max-w-[280px] md:max-w-[300px] lg:max-w-[310px]'>
                    <img className='' 
                        src="/img/latest-news-1.jpg" alt="latest news 1" />
                    <p className='text-sm text-gray-500 font-light'>December 14, 2021</p>
                    <h3 className='text-base text-[#222] font-medium'>10 Suprising Health Benefits of Garlic</h3>
                    <p className='text-base text-[#222] mt-2 text-wrap'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore.</p>
                </div>

                <div className='relative flex flex-col items-start justify-center max-w-[280px] md:max-w-[300px] lg:max-w-[310px]'>
                    <img className='' 
                        src="/img/latest-news-1.jpg" alt="latest news 1" />
                    <p className='text-sm text-gray-500 font-light'>December 14, 2021</p>
                    <h3 className='text-base text-[#222] font-medium'>10 Suprising Health Benefits of Garlic</h3>
                    <p className='text-base text-[#222] mt-2 text-wrap'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore.</p>
                </div>


                <div className='relative flex flex-col items-start justify-center max-w-[280px] md:max-w-[300px] lg:max-w-[310px]'>
                    <img className='' 
                        src="/img/latest-news-1.jpg" alt="latest news 1" />
                    <p className='text-sm text-gray-500 font-light'>December 14, 2021</p>
                    <h3 className='text-base text-[#222] font-medium'>10 Suprising Health Benefits of Garlic</h3>
                    <p className='text-base text-[#222] mt-2 text-wrap'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore.</p>
                </div>


                <div className='relative flex flex-col items-start justify-center'>
                    <img className='max-w-[280px] md:max-w-[300px] lg:max-w-[310px]' 
                        src="/img/latest-news-1.jpg" alt="latest news 1" />
                    <p className='text-sm text-gray-500 font-light'>December 14, 2021</p>
                    <h3 className='text-base text-[#222] font-medium'>10 Suprising Health Benefits of Garlic</h3>
                    <p className='text-base text-[#222] mt-2 text-wrap'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore.</p>
                </div>
            </div>    
        </div>
    </section>
  )
}

export default LatestNews