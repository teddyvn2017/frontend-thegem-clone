import React from 'react'
import cate1_l from '@/assets/img/cate1-l.jpg';
import cate2_l from '@/assets/img/cate2-l.jpg';
import cate3_l from '@/assets/img/cate3-l.jpg';
import cate4_l from '@/assets/img/cate4-l.jpg';
import Image from 'next/image';
const Categories = () => {
  return (
    // Categories
    <section className='w-full bg-white lg:mt-2 mt-8'>
        <div className='mx-auto px-8 lg:px-16 grid-cols-4 grid-rows-2 grid gap-[40px]'>
            
            {/* Ảnh 1: lớn chiếm 2 hàng, 2 cột */}
            <div className='col-span-4 row-span-2 
                            md:col-span-2 md:row-span-2
                            xl:col-span-2
                            relative max-h-[700px] pt-[700px] 
                            overflow-hidden cursor-pointer'>
                <Image src={cate1_l} alt='image' fill className='object-cover transition-transform duration-300 ease-in-out hover:scale-110' />
                <div className='absolute bottom-6 left-6 z-10 text-[#222]'>
                    <h4 className='text-2xl font-semibold'>Vegetables, Fruits</h4>
                    <h5 className='text-base'>20 Products</h5>
                </div>
            </div>
            {/* Ảnh 2: cao như ảnh 1, chiếm 1 cột, 2 hàng */}
            <div className='col-span-4 md:col-span-2 md:row-span-2 xl:col-span-1 
                            row-span-2 relative min-h-[400px] max-h-[700px]
                            overflow-hidden cursor-pointer'>
                <Image src={cate2_l} alt='image' fill 
                    className='object-cover transition-transform duration-400 ease-in-out hover:scale-110' />
                <div className='absolute bottom-6 left-6 z-10 text-[#222]'>
                    <h4 className='text-2xl font-semibold'>Cheese, Eggs</h4>
                    <h5 className='text-base'>20 Products</h5>
                </div>
            </div>
            {/* Cột cuối chứa 2 ảnh chia làm 2 hàng */}
            <div className='col-span-4 
                            grid grid-rows-2 gap-[40px] 
                            md:flex md:flex-row md:gap-[40px]
                            lg:flex lg:flex-row lg:gap-[40px]
                            xl:grid xl:col-span-1 xl:row-span-2
                            relative min-h-[400px] max-h-[700px]'>
                <div className='relative w-full h-full overflow-hidden cursor-pointer'>
                    <Image src={cate3_l} alt='image' fill 
                        className='object-cover transition-transform duration-400 ease-in-out hover:scale-110' />
                    <div className='absolute bottom-6 left-6 z-10 text-[#222]'>
                        <h4 className='text-2xl font-semibold'>Cheese, Eggs</h4>
                        <h5 className='text-base'>20 Products</h5>
                    </div>
                </div>
                
                <div className='relative w-full h-full overflow-hidden cursor-pointer'>
                    <Image src={cate4_l} alt='image' fill 
                        className='object-cover transition-transform duration-400 ease-in-out hover:scale-110' />
                    <div className='absolute bottom-6 left-6 z-10 text-[#222]'>
                        <h4 className='text-2xl font-semibold'>Honey, Nuts</h4>
                        <h5 className='text-base'>20 Products</h5>
                    </div>
                </div>
            </div>  
        </div>
    </section>
  )
}

export default Categories