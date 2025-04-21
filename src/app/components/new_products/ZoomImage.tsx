import React from 'react'

type ZoomImageProps = {
    src: string;
    cate_name:string;
    alt: string;
    originalPrice: number;
    maxPrice?: number;
    discountedPrice: number;
    isNew?: boolean
}

const ZoomImage = ({src,alt,cate_name,originalPrice,maxPrice,discountedPrice,isNew}:ZoomImageProps) => {

    const discountPercentage = originalPrice > 0 ? Math.round(((originalPrice - discountedPrice) / originalPrice) * 100) : 0;
    const discountLabelStyle = {
        clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0 100%)', 
    }

    const formatPrice = (price: number) => `$${price.toFixed(2)}`;
    return (
        <>
            <div className='relative flex flex-col items-center'>
                {discountPercentage > 0 && (
                    <div className="absolute top-2 left-0 bg-amber-200 text-black text-xs py-0.5 px-4 z-10" style={discountLabelStyle}>
                        -{discountPercentage}%
                    </div>
                )}
                {
                    isNew && (
                        <div className="absolute top-2 right-2 bg-[#899d81] text-white text-xs font-bold py-0.5 px-2 rounded-sm z-10">
                            NEW
                        </div>
                    )
                }
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