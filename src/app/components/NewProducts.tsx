'use client'
import {useState,useEffect} from 'react';
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

			<div className='flex flex-col md:flex-row flex-wrap items-center justify-center mt-8'>
                {
                    newProducts.map((p) => (
                            p.hoverEffect == 'changeImage' && p.image2 ? 
                            (
                                <HoverChangeImage 
                                    key = {p.id}                                     
                                    src = {`/img/new-products/${p.image}`}
                                    hoverSrc={`/img/new-products/${p.image2}`} 
                                    alt = {p.name}
                                    cate_name={p.category}
                                    originalPrice={p.originalPrice ?? 0  }
                                    discountedPrice={p.discountedPrice ?? 0}
                                    isNew={p.isNew ?? false}
                                    />
                            )
                            : (
                                
                                <ZoomImage 
                                    key = {p.id} 
                                    src = {`/img/new-products/${p.image}`}                                    
                                    alt = {p.name}
                                    cate_name={p.category}
                                    originalPrice={p.originalPrice ?? 0}
                                    maxPrice = {p.maxPrice ?? 0}    
                                    discountedPrice={p.discountedPrice ?? 0}
                                    isNew={p.isNew ?? false}
                                    />
                                ) 
                        )
                    )
                }
            </div>
		</section>
  )
}

export default NewProducts