'use client'
import { useParams } from 'next/navigation';

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
                    <div className='flex flex-col md:flex-row gap-4 text-[#222] items-start'>
                        <div className="flex items-center border rounded-lg">
                            <button className="px-2 py-1 rounded-l cursor-pointer">-</button>
                            <input type="number" className="w-16 text-center border-l border-r focus:outline-none" value="1" />
                            <button className="px-2 py-1 rounded-r cursor-pointer">+</button>
                        </div>
                    </div>
                </div>                
            </div>
            
        </div>
    );
};

export default ProductDetail;
