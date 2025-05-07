import { AiOutlineHeart } from "react-icons/ai";
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

const formatPrice = (price: number) => `$${price.toFixed(2)}`;

return (
   	<div className="relative flex flex-col items-center bg-white cursor-pointer overflow-hidden group/image_item">
		{
			discountedPrice > 0 && (
				<div className="absolute top-2 left-2 bg-amber-200 text-black text-xs py-0.5 px-4 z-10" style={discountLabelStyle}>
					-{discountPercentage}%
				</div>
			)
		}
		{	
			isNew && (
				<div className={`absolute ${discountedPrice > 0 ? 'top-8' : 'top-2'} left-2 bg-[#899d81] text-white text-xs py-0.5 px-[13px] z-10`}
					style={discountLabelStyle}>
					NEW
				</div>
			)
		}
		<div className="absolute top-4 right-4 z-10 rounded-full w-8 h-8
						bg-transparent flex flex-col items-center justify-center group/heart                                                
						hover:bg-[#222] transition-colors duration-300 cursor-pointer">
			<AiOutlineHeart className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
										text-normal text-[#222] group-hover/heart:text-white transition-colors 
										duration-200 z-20" />
						
		</div>
		<img
			src={src}
			alt={alt}
			className="object-cover mb-2 max-h-[280px] lg:max-h-[300px] transition-opacity duration-600 opacity-100 group-hover/image_item:opacity-0"
		/>
		<img
			src={hoverSrc}
			alt={`${alt} Hover`}
			className="absolute top-0 left-1/2 -translate-x-1/2 object-cover mb-2 max-h-[280px] lg:max-h-[300px] transition-opacity duration-600 opacity-0 group-hover/image_item:opacity-100"
		/>
		<div className="grid grid-rows-[auto_auto_auto] items-center gap-1 pt-2">
			<h4 className="row-span-1 text-[12px] lg:text-sm font-normal text-center text-gray-400">{cate_name}</h4>
			<h3 className="row-span-1 text-sm lg:text-base font-normal text-center">{alt}</h3>
			<div className="row-span-1 flex flex-row gap-1 justify-center items-center">
				
				<h4 className={`text-[12px] lg:text-sm font-normal text-center text-gray-400 ${discountedPrice > 0 ? 'line-through' : ''}`}>
					{formatPrice(originalPrice)}
				</h4>
				{
					discountedPrice > 0 && (
						<h4 
							className="text-[12px] lg:text-sm font-normal text-center text-[#222]">
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
  