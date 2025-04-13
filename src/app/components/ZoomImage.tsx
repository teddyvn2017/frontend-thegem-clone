import React from 'react'

type ZoomImageProps = {
    src: string;
    cate_name:string;
    alt: string;
    originalPrice: number;
    discountedPrice: number;    
}

const ZoomImage = ({src,alt,cate_name,originalPrice,discountedPrice}:ZoomImageProps) => {
    return (
        <>
            <div className='flex flex-col items-center'>
                <img
                    src={src}
                    alt={alt}
                    className="object-cover mb-2 max-h-[260px] lg:max-h-[280px] transition-transform duration-300 hover:scale-110 cursor-pointer"
                />            
                <div className="flex flex-col items-center gap-0">
                    <h4 className="text-[12px] lg:text-sm font-normal text-center text-gray-400">{cate_name}</h4>
                    <h3 className="text-sm lg:text-base font-normal text-center">{alt}</h3>
                    <div className="flex flex-row gap-1 justify-center items-center">
                        <h4 className="text-[12px] lg:text-sm font-normal text-center text-gray-400 line-through">{originalPrice}</h4>
                        <h4 className="text-[12px] lg:text-sm font-normal text-center text-[#222]">{discountedPrice}</h4>
                    </div>  
                </div>
            </div>            
        </>
      );
}

export default ZoomImage    