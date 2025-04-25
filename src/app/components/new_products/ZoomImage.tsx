import React from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
// import Image from 'next/image';
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
            <div className='relative flex flex-col items-center group'>
                <div>
                    {					
                        tag?.trim() && (
                            <div className="absolute top-4 left-0 bg-amber-200 text-[#222] text-xs  py-0.5 px-[13px] z-10 uppercase" style={discountLabelStyle}>
                                {tag}
                            </div>
                        )
                    }                                    
                    <div className="absolute top-4 right-4 z-10 rounded-full w-8 h-8
                                    bg-white flex flex-col items-center justify-center
                                    opacity-0 group-hover:opacity-100
                                    hover:bg-[#222] transition-colors duration-300 cursor-pointer">
                        <AiOutlineHeart className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                                    text-normal text-[#222] hover:text-white transition-colors 
                                                    duration-300 z-20" />

                    </div>
                    <div className="absolute top-4 right-12 z-10 rounded-full w-8 h-8
                                    bg-white flex flex-col items-center justify-center
                                    opacity-0 group-hover:opacity-100
                                        hover:bg-[#222] transition-colors duration-300 cursor-pointer">
                        <BsBag className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                        text-normal z-20 text-[#222] hover:text-white transition-colors 
                                        duration-300" />
                    </div>
                </div>
                <img
                    src={src}
                    alt={alt}
                    // layout="fill"
                    className="w-full h-full max-w-[280px] object-cover mb-2 max-h-[280px] 
                                lg:max-h-[300px] transition-transform duration-300 hover:scale-110 cursor-pointer"
                />            
                <div className="grid grid-rows-[auto_auto_auto] items-center justify-start gap-1 pt-2 w-full">
                    <h4 className="text-[12px] lg:text-sm font-normal text-left 
                                bg-[#222] text-gray-200 row-span-1 px-2 py-1">
                        {cate_name}
                    </h4>
                    <h3 className="text-sm lg:text-base font-normal text-left row-span-1">{alt}</h3>
                    <div className="flex flex-row gap-1 justify-start items-center">
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