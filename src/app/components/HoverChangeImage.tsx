type HoverChangeImageProps = {
    src: string;
    hoverSrc: string;
    cate_name:string;    
    alt: string;
    originalPrice: number;
    discountedPrice: number;
    isNew?: boolean
  };
  
  const HoverChangeImage = ({ src, hoverSrc,cate_name, alt, originalPrice, discountedPrice,isNew }: HoverChangeImageProps) => {
    const discountPercentage = originalPrice > 0 ? Math.round(((originalPrice - discountedPrice) / originalPrice) * 100) : 0;
    const discountLabelStyle = {
        clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0 100%)',
    };

    let hasDiscount = originalPrice > 0 && discountedPrice < originalPrice;
    if (discountedPrice === 0) {
        hasDiscount = false;
    } 
    
    return (
      	<div className="relative flex flex-col items-center justify-center bg-white p-4 cursor-pointer overflow-hidden group">
			{hasDiscount && (
                    <div className="absolute top-2 left-2 bg-amber-200 text-black text-xs py-0.5 px-4 z-10" style={discountLabelStyle}>
                        -{discountPercentage}%  
                    </div>
                )}
			{	
				isNew && (
					<div className="absolute top-8 left-2 bg-[#899d81] text-white text-xs py-0.5 px-[13px] z-10" style={discountLabelStyle}>
						NEW
					</div>
				)
			}
			<img
				src={src}
				alt={alt}
				className="object-cover mb-2 max-h-[260px] lg:max-h-[280px] transition-opacity duration-600 opacity-100 group-hover:opacity-0"
			/>
			<img
				src={hoverSrc}
				alt={`${alt} Hover`}
				className="absolute top-0 left-1/2 -translate-x-1/2 object-cover mb-2 max-h-[260px] lg:max-h-[280px] transition-opacity duration-600 opacity-0 group-hover:opacity-100"
			/>
        <div className="flex flex-col items-center gap-1">
            <h4 className="text-[12px] lg:text-sm font-normal text-center text-gray-400">{cate_name}</h4>
            <h3 className="text-sm lg:text-base font-normal text-center">{alt}</h3>
            <div className="flex flex-row gap-1 justify-center items-center">
                {
                    hasDiscount ? (
                        <>
                            <h4 className="text-[12px] lg:text-sm font-normal text-center text-gray-400 line-through">{originalPrice}</h4>
                            <h4 className="text-[12px] lg:text-sm font-normal text-center text-[#222]">{discountedPrice}</h4>
                        </>   
                    ) : (
                        <h4 className="text-[12px] lg:text-sm font-normal text-center text-gray-400h">{originalPrice}</h4>
                    )
                }
            </div>  
        </div>
        
      </div>
    );
  };
  
  export default HoverChangeImage;
  