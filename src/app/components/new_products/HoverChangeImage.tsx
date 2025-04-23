import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import Image from 'next/image';

type HoverChangeImageProps = {
    src: string;
    hoverSrc: string;
    cate_name:string;    
    alt: string;
    originalPrice: number;
    discountedPrice: number;
    isNew?: boolean;
	tag?:string;
  };
  
  const HoverChangeImage = ({ src, hoverSrc,cate_name, alt, originalPrice, discountedPrice,isNew,tag }: HoverChangeImageProps) => {
    const discountPercentage = originalPrice > 0 ? Math.round(((originalPrice - discountedPrice) / originalPrice) * 100) : 0;
    const discountLabelStyle = {
        clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0 100%)',
      };

	const formatPrice = (price: number) => `$${price.toFixed(2)}`;
	// console.log('tag:', JSON.stringify(tag));  
    return (
      	<div className="relative flex flex-col items-center bg-white cursor-pointer overflow-hidden group">
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
													text-normal z-10 text-[#222] hover:text-white transition-colors duration-300" />

					</div>
				<div className="absolute top-4 right-12 z-10 rounded-full w-8 h-8
								bg-white flex flex-col items-center justify-center
								opacity-0 group-hover:opacity-100
									hover:bg-[#222] transition-colors duration-300 cursor-pointer">
					<BsBag className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
												text-normal z-10 text-[#222] hover:text-white transition-colors duration-300" />

				</div>
			</div>
			
			<img	
				src={src}
				alt={alt}								
				className="w-full object-cover mb-2 max-h-[280px] lg:max-h-[300px] 
							transition-opacity duration-600 opacity-100 group-hover:opacity-0"
			/>
			<img
				src={hoverSrc}
				alt={`${alt} Hover`}
				className="w-full absolute top-0 left-1/2 -translate-x-1/2 object-cover mb-2 max-h-[280px] lg:max-h-[300px] transition-opacity duration-600 opacity-0 group-hover:opacity-100"
			/>


			<div className="grid grid-rows-[auto_auto_auto] items-center justify-start gap-1 pt-2 w-full">
				<h4 className="text-[12px] lg:text-sm font-normal text-left 
									bg-[#222] text-gray-200 row-span-1 px-2 py-1">
					{cate_name}	
				</h4>
				<h3 className="row-span-1 text-sm lg:text-base font-normal text-left">{alt}</h3>
				<div className="row-span-1 flex flex-row gap-1 justify-start items-center">
					
					<h4 className={`text-[12px] lg:text-sm font-normal text-center text-gray-400 ${discountedPrice > 0 ? 'line-through' : ''}`}>
						{formatPrice(originalPrice)}
					</h4>
					{
						discountedPrice > 0 && (
							<h4 
								className="text-[12px] lg:text-sm font-normal text-left text-[#222]">
									{formatPrice(discountedPrice)}
							</h4>
						)
					}
				</div>  
			</div>
        
      	</div>
    );
  };
  
  export default HoverChangeImage;
  