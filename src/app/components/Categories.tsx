import React from 'react'
// import cate1_s from '@/assets/img/cate1-s.jpg';
// import cate1_m from '@/assets/img/cate1-m.jpg';
import cate1_l from '@/assets/img/cate1-l.jpg';
// import cate2_s from '@/assets/img/cate2-s.jpg';
// import cate2_m from '@/assets/img/cate2-m.jpg';
import cate2_l from '@/assets/img/cate2-l.jpg';
// import cate3_s from '@/assets/img/cate3-s.jpg';
// import cate3_m from '@/assets/img/cate3-m.jpg';
import cate3_l from '@/assets/img/cate3-l.jpg';
// import cate4_s from '@/assets/img/cate4-s.jpg';
// import cate4_m from '@/assets/img/cate4-m.jpg';
import cate4_l from '@/assets/img/cate4-l.jpg';
import Image from 'next/image';
const Categories = () => {
  return (
    // Categories
    <section className='w-full bg-white mt-2'>
        <div className='mx-auto px-8 lg:px-16 grid-cols-4 grid-rows-2 grid gap-[40px]'>
            
            {/* Ảnh 1: lớn chiếm 2 hàng, 2 cột */}
            <div className='col-span-4 lg:col-span-2 row-span-2 relative max-h-[700px]'>
                <Image src={cate1_l} alt='image' fill className='object-cover'  />
                <div className='absolute bottom-6 left-6 z-10 text-[#222]'>
                    <h4 className='text-2xl font-semibold'>Vegetables, Fruits</h4>
                    <h5 className='text-base'>20 Products</h5>
                </div>
            </div>
            {/* Ảnh 2: cao như ảnh 1, chiếm 1 cột, 2 hàng */}
            <div className='col-span-4 lg:col-span-1 row-span-2 relative max-h-[700px]'>
                <Image src={cate2_l} alt='image' fill className='object-cover' />
                <div className='absolute bottom-6 left-6 z-10 text-[#222]'>
                    <h4 className='text-2xl font-semibold'>Cheese, Eggs</h4>
                    <h5 className='text-base'>20 Products</h5>
                </div>
            </div>
            {/* Cột cuối chứa 2 ảnh chia làm 2 hàng */}
            <div className='col-span-4 lg:col-span-1 grid grid-rows-2 gap-[40px] relative max-h-[700px]'>
                <div className='relative w-full h-full'>
                    <Image src={cate3_l} alt='image' className='object-cover' />
                    <div className='absolute bottom-6 left-6 z-10 text-[#222]'>
                        <h4 className='text-2xl font-semibold'>Cheese, Eggs</h4>
                        <h5 className='text-base'>20 Products</h5>
                    </div>
                </div>
                
                <div className="relative w-full h-full">
                    <Image src={cate4_l} alt="image" className="object-cover" />
                    <div className='absolute bottom-6 left-6 z-10 text-[#222]'>
                        <h4 className='text-2xl font-semibold'>Cheese, Eggs</h4>
                        <h5 className='text-base'>20 Products</h5>
                    </div>
                </div>
            </div>  
        </div>
    </section>
  )
}

export default Categories