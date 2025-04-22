import React from 'react'
import { AiOutlineHeart } from "react-icons/ai";
type ZoomImageProps = {
    src: string;
    cate_name:string;
    alt: string;
    originalPrice: number;
    maxPrice?: number;
    discountedPrice: number;
    isNew?: boolean;
    tag: string;
}

const ZoomImage = ({src,alt,cate_name,originalPrice,maxPrice,discountedPrice, isNew, tag}:ZoomImageProps) => {

    const discountPercentage = originalPrice > 0 ? Math.round(((originalPrice - discountedPrice) / originalPrice) * 100) : 0;
    const discountLabelStyle = {
        clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0 100%)', 
    }

    const formatPrice = (price: number) => `$${price.toFixed(2)}`;
    return (
        <>
            <div className='relative flex flex-col items-center'>
                <div className="absolute top-4 left-0 bg-amber-200 text-[#222] text-xs  py-0.5 px-[13px] z-10 uppercase" style={discountLabelStyle}>
					{tag}
				</div>
                <img
                    src={src}
                    alt={alt}
                    className="object-cover mb-2 max-h-[280px] lg:max-h-[300px] transition-transform duration-300 hover:scale-110 cursor-pointer"
                />            
                <div className="grid grid-rows-[auto_auto_auto] items-center justify-start gap-1 pt-2 w-full">
                    <h4 className="text-[12px] lg:text-sm font-normal text-left 
                                bg-[#222] text-gray-200 row-span-1 px-2 py-1">
                        {cate_name}
                    </h4>
                    <h3 className="text-sm lg:text-base font-normal text-left row-span-1">{alt}</h3>
                    <div className="flex flex-row gap-1 justify-center items-center">
                        {
                            (typeof maxPrice === 'number' && maxPrice > 0 && discountedPrice === 0) ? (
                                <h4 className="text-[12px] lg:text-sm font-normal text-gray-400">
                                    {formatPrice(originalPrice)} - {formatPrice(maxPrice)}
                                </h4>) 
                              
                                : discountedPrice > 0 ? (
                                    <>
                                        <h4 className="text-[12px] lg:text-sm font-normal text-gray-400 line-through">{formatPrice(originalPrice)}</h4>
                                        <h4 className="text-[12px] lg:text-sm font-normal text-[#222]">{formatPrice(discountedPrice)}</h4>
                                    </>
                                ) : (
                                    <h4 className="text-[12px] lg:text-sm font-normal text-[#222]">{formatPrice(originalPrice)}</h4>
                                )                              
                        }
                                            
                    </div>  
                </div>
            </div>            
        </>
      );
}

export default ZoomImage