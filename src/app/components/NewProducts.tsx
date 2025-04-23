'use client'
import {useState,useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Autoplay  } from 'swiper/modules';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import HoverChangeImage from './new_products/HoverChangeImage';
import ZoomImage from './new_products/ZoomImage';

interface FeaturedItem {
    id: number;
    name: string;
    category: string;
    originalPrice?: number;
	maxPrice?: number;
    discountedPrice?: number;        
    image: string;
    image2?: string;
    hoverEffect?: string;
    hoverImage?: string;
    tag: string;
    isNew?: boolean;
} 

const NewProducts = () => {

	const [newProducts, setNewProducts] = useState<FeaturedItem[]>([]);
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('/data/products_everyday.json');
                const nps = await res.json();                
                setNewProducts(nps);                
            }
            catch (error) {
                console.error('Lỗi khi đọc file JSON:', error);
            }
        }
        fetchProducts();
    }, []);

  	return (
		<section className='w-full mt-12'>
			<div className='mx-auto flex flex-col items-start lg:items-center justify-center'>
				<h3 className='text-gray-400 text-base lg:text-xl mb-2'>New Products</h3>
				<h2 className='text-2xl lg:text-4xl font-semibold'>New Products Everyday</h2>
			</div>
			{/* wrapper */}

			<div className='mx-auto px-8 lg:px-16 flex flex-col md:flex-row flex-wrap items-center justify-center
                             mt-8 relative swiper-container-custom'>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                      }}
                    navigation={{
                        nextEl: '.custom-swiper-button-next',
                        prevEl: '.custom-swiper-button-prev',
                    }}
                    slidesPerView={1}                
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            
                        },
                        768: {
                            slidesPerView: 3,
                            
                        },
                        1024: {
                            slidesPerView: 4,
                            
                        },

                        1280: {
                            slidesPerView: 5,
                            
                        },
                    }}                  
                >
                    {
                        newProducts.map((p) => (
                            <SwiperSlide key={p.id}>
                                {
                                    p.hoverEffect == 'changeImage' && p.image2 ?
                                    (
                                        <HoverChangeImage
                                            key = {p.id}
                                            src = {`/img/new-products/${p.image}`}
                                            hoverSrc={`/img/new-products/${p.image2}`}
                                            alt = {p.name}
                                            cate_name={p.category}
                                            originalPrice={p.originalPrice ?? 0 }
                                            discountedPrice={p.discountedPrice ?? 0}
                                            isNew={p.isNew ?? false}
                                            tag={p.tag}
                                        />
                                    ) : (
                                        <ZoomImage
                                            key = {p.id}
                                            src = {`/img/new-products/${p.image}`}
                                            alt = {p.name}
                                            cate_name={p.category}
                                            originalPrice={p.originalPrice ?? 0}
                                            maxPrice = {p.maxPrice ?? 0}
                                            discountedPrice={p.discountedPrice ?? 0}
                                            isNew={p.isNew ?? false}
                                            tag={p.tag}
                                        />
                                    )
                                }
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className="custom-swiper-button-prev rounded-full bg-gray-300 p-2">
                        <IoChevronBack className="w-6 h-6 text-gray-800 cursor-pointer" />
                </div>
                <div className="custom-swiper-button-next rounded-full bg-gray-300 p-2">
                    <IoChevronForward className="w-6 h-6 text-gray-800 cursor-pointer" />
                </div>
            </div>
		</section>
  )
}

export default NewProducts