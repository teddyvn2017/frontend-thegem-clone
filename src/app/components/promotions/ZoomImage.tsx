import React from 'react'
import { AiOutlineHeart } from "react-icons/ai";
type ZoomImageProps = {
    src: string;
    cate_name:string;
    alt: string;
    originalPrice: number;
    discountedPrice: number;
    isNew?: boolean
}

const ZoomImage = ({src,alt,cate_name,originalPrice,discountedPrice,isNew}:ZoomImageProps) => {

    const discountPercentage = originalPrice > 0 ? Math.round(((originalPrice - discountedPrice) / originalPrice) * 100) : 0;
    const discountLabelStyle = {
        clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0 100%)', 
    }

    const formatPrice = (price: number) => `$${price.toFixed(2)}`;
    return (
        <>
            <div className='relative flex flex-col items-center group/image_item'>
                {discountPercentage > 0 && (
                    <div className="absolute top-2 left-2 bg-amber-200 text-black text-xs py-0.5 px-4 z-10" style={discountLabelStyle}>
                        -{discountPercentage}%
                    </div>
                )}
                {
                    isNew && (
                        <div className="absolute top-8 left-2 bg-[#899d81] text-white text-xs font-normal py-0.5 px-2 z-10" style={discountLabelStyle}>
                            NEW
                        </div>
                    )
                }
                
                {/* vòng tròn backgroudn màu đen */}
                <div className="group/heart absolute top-1 right-4 z-20 rounded-full w-8 h-8
                                                    bg-transparent flex flex-col items-center justify-center                                                   
                                                    hover:bg-[#222] transition-colors duration-300 cursor-pointer">
                    {/* hình trái tim */}
                    <AiOutlineHeart className="absolute top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                                text-normal text-[#222] group-hover/heart:text-white transition-colors 
                                                duration-300 z-30" />
                
                </div>
                <img
                    src={src}
                    alt={alt}
                    className="object-cover mb-2 max-h-[280px] lg:max-h-[300px] transition-transform duration-300 group-hover/image_item:scale-110 cursor-pointer"
                />            
                <div className="grid grid-rows-[auto_auto_auto] items-center gap-0 pt-2">
                    <h4 className="text-[12px] lg:text-sm font-normal text-center text-gray-400 row-span-1">{cate_name}</h4>
                    <h3 className="text-sm lg:text-base font-normal text-center row-span-1">{alt}</h3>
                    <div className="flex flex-row gap-1 justify-center items-center">
                        <h4 className={`text-[12px] lg:text-sm font-normal text-center text-gray-400 ${discountedPrice > 0 ? 'line-through' : ''}`}>
                            {formatPrice(originalPrice)}
                        </h4>
                        {
                            discountedPrice > 0 && (
                                <h4 className="text-[12px] lg:text-sm font-normal text-center text-[#222]">
                                    {formatPrice(discountedPrice)}
                                </h4>
                            )
                        }                       
                    </div>  
                </div>
            </div>            
        </>
      );
}

export default ZoomImage