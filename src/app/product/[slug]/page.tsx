'use client'
import { useParams } from 'next/navigation';
import { FaTag } from "react-icons/fa6";
const ProductDetail = () => {
    const params = useParams();
    const slug = params.slug;

    return (
        <div className='mx-auto mt-10 px-8 lg:px-16'>
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-16'>
                <img 
                    className='w-full lg:w-1/2'
                    src="https://images.unsplash.com/photo-1683314573424-b0da0c795a07?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                {/* info */}
                <div className='flex flex-col gap-2.5 text-[#222] items-start'>
                    <h2 className='text-2xl'>Blue Cheese</h2>
                    <h3 className='text-base'>Impression</h3>
                    <h2 className='text-3xl'>$59.49</h2>
                    <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>                    
                    <div className='flex flex-col md:flex-row gap-4 lg:gap-x-8 text-[#222] items-start mt-4'>
                        <div className="flex items-center border rounded-lg">
                            <button className="px-2 py-1 rounded-l cursor-pointer text-xl">-</button>
                            <div className="flex items-center">
                                <div className="border-r h-4 text-gray-400"></div>  
                                    <input type="number" 
                                            className="w-16 text-center focus:outline-none appearance-none text-base" value="1" />
                                <div className="border-l h-4 text-gray-400"></div> 
                            </div>                          
                            <button className="px-2 py-1 rounded-r cursor-pointer text-xl">+</button>
                        </div>
                        <button className='bg-[#222] text-white py-2 px-8 rounded-full'>Add to cart</button>
                    </div>
                    <h3 className='text-base mt-2'>Categories:<span className='text-gray-700 pl-2'>Other</span></h3>
                    <div className="flex flex-row flex-wrap items-center gap-2 max-w-max">
                        <span className="text-gray-700">Tags:</span>
                        <div className="flex flex-row gap-8 ml-4">
                            <div className="flex items-center relative min-w-[140px] h-[34px]
                                            group cursor-pointer">
                                <div className="absolute w-full h-full border-0 bg-[#ecececff] 
                                                rounded-l-md border-l-0 rounded-r-md 
                                                group-hover:bg-[#222] transition-colors duration-300"></div>
                                <div className="absolute top-[3px] -left-[10px] border-b-0 border-r-0 
                                                w-[28px] h-[28px] border-0 bg-[#ecececff] rounded-lg -rotate-45 
                                                group-hover:bg-[#222] transition-colors duration-300"></div>
                                <div className="absolute top-[12px] left-0 w-[12px] h-[12px] bg-gray-300 rounded-full 
                                                flex items-center justify-center 
                                                group-hover:bg-white transition"> 
                                </div>
                                <p className="px-4 text-sm font-normal text-gray-500 absolute z-20 group-hover:text-white">Minerals</p>
                            </div>

                            <div className="flex items-center relative min-w-[140px] h-[34px] group cursor-pointer">
                                <div className="absolute w-full h-full border-0 bg-[#ecececff] 
                                                rounded-l-md border-l-0 rounded-r-md 
                                                group-hover:bg-[#222] transition-colors duration-300"></div>
                                <div className="absolute top-[3px] -left-[10px] border-b-0 border-r-0 
                                                w-[28px] h-[28px] border-0 bg-[#ecececff] rounded-lg -rotate-45 
                                                group-hover:bg-[#222] transition-colors duration-300"></div>
                                <div className="absolute top-[12px] left-0 w-[12px] h-[12px] bg-gray-300 rounded-full flex items-center justify-center 
                                                group-hover:bg-white transition"> 
                                </div>
                                <p className="px-4 text-sm font-normal text-gray-500 absolute z-20 group-hover:text-white">Natural</p>
                            </div>

                            <div className="flex items-center relative min-w-[140px] h-[34px] 
                                            group cursor-pointer">
                                <div className="absolute w-full h-full border-0 bg-[#ecececff] 
                                                rounded-l-md border-l-0 rounded-r-md 
                                                group-hover:bg-[#222] transition-colors duration-300"></div>
                                <div className="absolute top-[3px] -left-[10px] border-b-0 border-r-0 
                                                w-[28px] h-[28px] border-0 bg-[#ecececff] rounded-lg -rotate-45 
                                                group-hover:bg-[#222] transition-colors duration-300"></div>
                                <div className="absolute top-[12px] left-0 w-[12px] h-[12px] bg-gray-300 rounded-full flex items-center justify-center 
                                                group-hover:bg-white transition"> 
                                </div>
                                <p className="px-4 text-sm font-normal text-gray-500 absolute z-20 group-hover:text-white">Well Balanced</p>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
            
        </div>
    );
};

export default ProductDetail;
