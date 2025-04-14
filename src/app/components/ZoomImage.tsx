import React from 'react'
// import 'boxicons'; 
type ZoomImageProps = {
    src: string;
    cate_name:string;
    alt: string;
    originalPrice: number;
    discountedPrice: number;
    isNew?: boolean;
    onLike?: () => void; // Optional function to handle like action
    isLiked?: boolean; // Optional prop to indicate if the item is liked
}

const ZoomImage = ({src,alt,cate_name,originalPrice,discountedPrice,isNew,onLike,isLiked}:ZoomImageProps) => {

    const discountPercentage = originalPrice > 0 ? Math.round(((originalPrice - discountedPrice) / originalPrice) * 100) : 0;
    const discountLabelStyle = {
        clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0 100%)',
    }

    return (
        <>
            <div className='relative flex flex-col items-center'>
                {discountPercentage > 0 && (
                    <div className="absolute top-2 left-2 bg-amber-200 text-black text-xs py-0.5 px-4 z-10" style={discountLabelStyle}>
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

                {/* <div className='absolute top-2 right-2 z-10'>
                    <button onClick={onLike} 
                            className="heart-button cursor-pointer focus:outline-none"
                            style={{ backgroundColor: 'transparent' }}     
                        >
                        <i className={`bx ${isLiked ? 'bxs-heart' : 'bx-heart'} bx-sm heart-icon font-light`} style={{ color: isLiked ? 'red' : '#222' }}></i>
                    </button>
                </div> */}

                <img
                    src={src}
                    alt={alt}
                    className="object-cover mb-2 max-h-[280px] lg:max-h-[300px] transition-transform duration-300 hover:scale-110 cursor-pointer"
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