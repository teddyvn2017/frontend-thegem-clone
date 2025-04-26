'use client'
import { useState }  from 'react';
import { motion, useAnimation } from 'framer-motion';
import { BiMessageSquareDetail } from "react-icons/bi";
import NewsItem from './latest_news/NewsItem';
const LatestNews = () => {

    const controls = useAnimation();
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
        controls.start(
            {
                opacity: 1,
                y:'-50%',
                transition: {
                    duration: 0.5,
                }
            }
        );
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
        controls.start(
            {
                opacity: 0,
                y:'100%',
                transition: {
                    duration: 0.5,
                }
            }
        );
    }


    return (
        <section className='w-full mt-8 lg:mt-10'>
            {/* Wrapper */}
            <div className='mx-auto px-8 lg:px-16'>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <h3 className='text-2xl md:text-3xl text-gray-600 font-light'>Latest News</h3>
                    <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>Latest News from Blog</h2>
                </div>
                {/* Content */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                                gap-10 mt-4 items-center justify-center">                
                    {/* item */}
                    <NewsItem 
                        src='/img/latest-news-1.jpg' 
                        date='14/12/2022' 
                        title='10 Suprising Health Benefits of Garlic' 
                        desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore.'/>
                    
                    <NewsItem 
                        src='/img/latest-news-2.jpg' 
                        date='14/12/2022' 
                        title='6 Essential Nutrients That you Need' 
                        desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore.'/>

                    <NewsItem 
                        src='/img/latest-news-3.jpg' 
                        date='14/12/2022' 
                        title='5 Fun Ways to Involve Kids in the Kitchen' 
                        desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore.'/>
                    
                    <NewsItem 
                        src='/img/latest-news-4.jpg' 
                        date='14/12/2022' 
                        title='10 Surprising Health Benefits of Avocado' 
                        desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore.'/>
                </div>   

                {/*View All  */}
                <div className='w-full flex items-center justify-center mt-10 lg:mt-20'>
                    <hr className="border-t border-gray-200 w-full" />
                    <button className='bg-[#222] text-white px-5 py-2 text-base rounded-full w-fit 
                                min-w-[140px] cursor-pointer hover:bg-gray-500 hover:text-gray-200 transition duration-300'>
                        View All
                    </button>   
                    <hr className="border-t border-gray-200 w-full" />
                </div>  
            </div>
        </section>
    )
}

export default LatestNews