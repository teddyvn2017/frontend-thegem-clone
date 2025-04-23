'use client'
import React from 'react'
import { useState,useEffect} from 'react';
// import HoverChangeImage from './HoverChangeImage';
import HoverChangeImage from './promotions/HoverChangeImage';
interface FeaturedItem {
    id: number;
    name: string;
    category: string;
    originalPrice?: number;
    discountedPrice?: number;        
    image: string;
    image2?: string;
    hoverEffect?: string;
    hoverImage?: string;
    tag: string;
    isNew?: boolean;
} 

const FeaturedItems = () => {

    const [featuredItems, setFeaturedItems] = useState<FeaturedItem[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('/data/featured_items.json');
                const fti = await res.json();                
                setFeaturedItems(fti);               
            }
            catch (error) {
                console.error('Lỗi khi đọc file JSON:', error);
            }
        }

        fetchProducts();
    }, []);
    return (
        <section className='w-full mt-8 bg-white'>
            <div className='flex flex-col xl:flex-row mx-auto px-8 lg:px-16 gap-8'>
                <div className='flex flex-col lg:flex lg:flex-row items-center justify-center flex-1/2'>
                    <div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
                                    xl:grid-cols-2 gap-4 mt-4 items-center justify-center">
                        {
                            featuredItems.map((item) => (
                                <HoverChangeImage key={item.id} src={`/img/${item.image}`} 
                                        hoverSrc={`/img/${item.image2}`} alt={item.name} 
                                        cate_name={item.category}
                                        originalPrice = {item.originalPrice ?? 0} 
                                        discountedPrice = {item.discountedPrice ?? 0}
                                        isNew = {item.isNew ?? false}    
                                        />) 
                            )
                        }
                    </div>      
                </div>
                <div className='flex flex-col items-center justify-center flex-1/2'>
                    <img src="./img/woman.jpg" alt="woman" className='w-full h-full object-cover' />
                </div>
            </div>
        </section>
    )
}

export default FeaturedItems