'use client'
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import React, { useState } from 'react';
import { TiStarFullOutline } from "react-icons/ti";
import { FaStarHalf } from "react-icons/fa";
import { motion } from 'framer-motion';
import ZoomImage from '../../components/new_products/ZoomImage';
import HoverChangeImage from '../../components/new_products/HoverChangeImage';
import Link from 'next/link';

interface Product {
    id: number;
    name: string;
    category: string;
    originalPrice?: number;
    discountedPrice?: number;
    discountPercent?: number;
    image: string;
    imageHover?: string;
    hoverEffect?: string;
    hoverImage?: string;
    tag: string;
    isNew?: boolean;
    slug:string;
    
} 

const ProductDetail = () => {
    const params = useParams();
    const slug = params.slug;
    const [activeTab, setActiveTab] = useState('description');
    const [quantity, setQuantity] = useState(1);
    const [alsoLike, setAlsoLike] = useState<Product[]>([]);
    const [imgFolder, setImgFolder] = useState('tab-on-sale');

    const tabs = [
        { id: 'description', label: 'DESCRIPTION' },
        { id: 'additional-info', label: 'ADDITIONAL INFO' },
        { id: 'reviews', label: 'REVIEWS' },
    ];


    useEffect(() => {
        fetch('/data/on_sale.json')
        .then((res) => res.json())
        .then((data) => setAlsoLike(data.slice(0, 6))) // Lấy 4 phần tử đầu tiên
        .catch((err) => console.error('Lỗi khi load JSON:', err));
    }, []);
    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = parseInt(event.target.value, 10);
        setQuantity(newQuantity);
    }

    const handleTabClick = (tab:string) => {
        setActiveTab(tab);
    }

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    
    const handleIncrement = () => {
        setQuantity(quantity + 1);
    }


    return (
        <div className='mx-auto mt-10 px-8 lg:px-16'>
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-16'>
                <img 
                    className='w-full lg:w-1/2'
                    src="https://images.unsplash.com/photo-1683314573424-b0da0c795a07?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                {/* detail's product */}
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
                                            className="w-16 text-center focus:outline-none appearance-none text-base" 
                                            onChange={handleQuantityChange}
                                            value={quantity} />
                                <div className="border-l h-4 text-gray-400"></div> 
                            </div>                          
                            <button className="px-2 py-1 rounded-r cursor-pointer text-xl">+</button>
                        </div>
                        <button className='bg-[#222] text-white py-2 px-8 rounded-full'>Add to cart</button>
                    </div>
                    {/* category */}
                    <h3 className='text-base mt-2'>Categories:<span className='text-gray-700 pl-2'>Other</span></h3>
                    {/* tags */}
                    <div className="flex flex-row flex-wrap items-center gap-2 max-w-max">
                        <span className="text-gray-700">Tags:</span>
                        <div className="flex flex-row gap-8 ml-4">
                            <div className="flex items-center relative min-w-[140px] h-[34px]
                                            group cursor-pointer">
                                <div className="absolute w-full h-full border-0 bg-[#ecececff] 
                                                rounded-l-md border-l-0 rounded-r-md 
                                                group-hover:bg-[#222] transition-colors duration-300"></div>
                                <div className="absolute top-[3px] -left-[10px] 0 border-r-0 
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
                    {/* social */}
                    <div className='flex flex-row gap-4 mt-4 cursor-pointer'>
                        <FaFacebookF className='hover:text-[#3b5998] transition-colors duration-300'/>
                        <FaTwitter className='hover:text-[#1da1f2] transition-colors duration-300'/>
                        <FaInstagram className='hover:text-[#c13584] transition-colors duration-300' />
                    </div>
                </div>                
            </div>
            {/* information */}
            <div className="border-b border-gray-200 mt-14">
                <nav className="relative flex space-x-6 justify-center border-b border-gray-200">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative py-4 px-1 text-sm font-medium focus:outline-none cursor-pointer ${
                                activeTab === tab.id
                                ? 'text-[#222]'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                        {tab.label}

                        {activeTab === tab.id && (
                            <motion.div
                                layoutId="tab-underline"
                                className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-[#222]"
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            />
                        )}
                        </button>
                    ))}
                </nav>
            </div>
            {activeTab === 'description' && (
                <div className="p-4 mt-4 flex flex-col md:flex-row gap-4 md:gap-8">
                    <img src = "/img/orange.jpg" alt="product" className="w-1/4" />
                    <p className='w-2/4 text-base lg:text-sm leading-7'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud sit amet exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste adipisicing elit, sed do eiusmod tempor incididunt
                    </p>
                    <table className="border-collapse w-1/4 text-base lg:text-sm">
                        <tbody>
                            <tr className="border-gray-300">
                                <td className="pb-2 px-4">Energy</td>
                                <td className="py-2 px-4 text-right">356 kcal</td>
                            </tr>
                            <tr className="border-gray-300">
                                <td className="py-2 px-4">Fat</td>
                                <td className="py-2 px-4 text-right">1.5g</td>
                            </tr>
                            <tr className="border-gray-300">
                                <td className="py-2 px-4">Carbohydrate</td>
                                <td className="py-2 px-4 text-right">72.0g</td>
                            </tr>
                            <tr className="border-gray-300">
                                <td className="py-2 px-4">Fibre</td>
                                <td className="py-2 px-4 text-right">3.0g</td>
                            </tr>
                            <tr className="border-gray-300">
                                <td className="py-2 px-4">Protein:</td>
                                <td className="py-2 px-4 text-right">12.0g</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4">Salt:</td>
                                <td className="py-2 px-4 text-right">&lt;0.01g</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}

            {activeTab === 'additional-info' && (
                <div className="p-4 mt-4">
                    <table className="border-collapse w-1/2 text-base lg:text-sm">
                        <tbody>
                            <tr className="border-gray-300">
                                <td className="pb-2 px-4 font-bold">Brand</td>
                                <td className="py-2 px-4 text-left">Lia Botelli</td>
                            </tr>
                            <tr className="border-gray-300">
                                <td className="py-2 px-4 font-bold">Lifestyle & Dietary</td>
                                <td className="py-2 px-4 text-left">Cholesterol Free, Fat Free, Low Carb, No Lactose</td>
                            </tr>
                            <tr className="border-gray-300">
                                <td className="py-2 px-4 font-bold">Origin</td>
                                <td className="py-2 px-4 text-left">72.0g</td>
                            </tr>                            
                        </tbody>
                    </table>
                </div>
                )}

            {activeTab === 'reviews' && (
                <div className="p-4 mt-4 flex flex-col lg:flex-row gap-8">
                    <div className='w-full lg:w-1/2'>
                        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
                        <div className='mt-4 flex flex-col'>
                            <div className='flex flex-col py-2'>
                                <h4 className='font-bold text-sm text-[#222]'>Steve</h4>
                                <div className='flex flex-row items-center gap-2 mt-2 text-yellow-400 text-xs'>
                                    <TiStarFullOutline />
                                    <TiStarFullOutline />
                                    <TiStarFullOutline />
                                    <TiStarFullOutline />
                                    <FaStarHalf />
                                </div>
                                <p className='text-xs mt-2 text-gray-400 leading-5  '>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste adipisicing elit, sed do eiusmod tempor incididunt
                                </p>
                            </div>
                            <div className='flex flex-col py-2'>
                                <h4 className='font-bold text-sm text-[#222]'>John</h4>
                                <div className='flex flex-row items-center gap-2 mt-2 text-yellow-400 text-xs'>
                                    <TiStarFullOutline />
                                    <TiStarFullOutline />
                                    <TiStarFullOutline />
                                    <TiStarFullOutline />
                                </div>
                                <p className='text-xs mt-2 text-gray-400 leading-5  '>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste adipisicing elit, sed do eiusmod tempor incididunt
                                </p>
                            </div>

                            <div className='flex flex-col py-2'>
                                <h4 className='font-bold text-sm text-[#222]'>Branca</h4>
                                <div className='flex flex-row items-center gap-2 mt-2 text-yellow-400 text-xs'>
                                    <TiStarFullOutline />
                                    <TiStarFullOutline />
                                    <TiStarFullOutline />
                                    <TiStarFullOutline />
                                </div>
                                <p className='text-xs mt-2 text-gray-400 leading-5  '>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste adipisicing elit, sed do eiusmod tempor incididunt
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* form submit review */}
                    <div className='w-full lg:w-1/2'>
                        <h2 className='text-xl uppercase font-light'>Add a review</h2>
                        <div className='mt-4'>
                            <ul className='flex flex-col items-start gap-4'>
                                <li className='text-gray-600 text-base lg:text-sm'>
                                    Your rating *
                                </li>
                                <li className='flex flex-row items-center gap-2 text-gray-600'>
                                    <TiStarFullOutline />
                                    <TiStarFullOutline />
                                    <TiStarFullOutline />
                                    <TiStarFullOutline />
                                    <TiStarFullOutline />
                                </li>
                            </ul>
                            <ul className='mt-4 flex flex-col items-start gap-4'>
                                <li className='text-gray-600 text-base lg:text-sm'>
                                    Your review *
                                </li>
                                <li className='w-full lg:w-3/4'>
                                    <textarea 
                                        className='w-full border border-gray-300 p-2 h-[80px] lg:h-[100px]'
                                        name="customer_review" id="customer_review"></textarea>
                                </li>
                            </ul>
                            <ul className='mt-4 flex flex-col items-start gap-4'>
                                <li className='text-gray-600 text-base lg:text-sm'>
                                    Name *
                                </li>
                                <li className='w-full lg:w-3/4'>
                                    <input 
                                        className='w-full border border-gray-300 py-1'
                                        type="text" name="full_name" id="full_name" />
                                </li>
                            </ul>
                            <ul className='mt-4 flex flex-col items-start gap-4'>
                                <li className='text-gray-600 text-base lg:text-sm'>
                                    Email
                                </li>
                                <li className='w-full lg:w-3/4'>
                                    <input 
                                        className='w-full border border-gray-300 py-1'
                                        type="email" name="email" id="email" />
                                </li>
                            </ul>

                            <ul className='mt-4 flex flex-row items-center gap-2'>
                                <li>
                                   <input 
                                        className='w-5 h-5  bg-gray-300 border-gray-300 rounded'
                                        type="checkbox" name="save_my_name" id="save_my_name" />
                                </li>
                                <li className='w-full text-sm text-gray-700'>
                                    Save my name, email, and website in this browser for the next time I comment.
                                </li>
                            </ul> 

                             <ul className='mt-6 flex flex-row items-center gap-2'>
                                <li>
                                    <button 
                                        className='bg-[#222] text-white py-2 px-6 
                                        hover:bg-[#333] hover:text-white transition-colors duration-300  
                                        font-semibold text-sm rounded-full'>Submit Review</button>
                                </li>
                                
                            </ul>                           
                        </div>
                        
                    </div>
                </div>
            )}

            {/* You may also like */}
            <div>
                <h2 className='text-2xl font-bold text-[#222] text-center mt-10'>You May Also Like</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 
                            gap-x-8 gap-y-12
                            mt-8 mb-8 mx-auto px-8 lg:px-16 items-center justify-center">
                {
                    alsoLike.map((product) => {

                        const imageProps = {
                            src: `/img/tab-on-sale/${product.image}`,
                            alt: product.name,
                            cate_name: product.category,
                            originalPrice: product.originalPrice ?? 0,
                            discountedPrice: product.discountedPrice ?? 0,
                            isNew: product.isNew ?? false,
                            slug: product.slug
                        };

                        return (
                            <Link href={`/product/${product.slug}`} key={product.id}>
                            {
                                product.hoverEffect === 'changeImage' && product.imageHover
                                ? <HoverChangeImage {...imageProps} hoverSrc={`/img/tab-on-sale/${product.imageHover}`} />
                                : <ZoomImage {...imageProps} />
                            }
                            </Link>
                        );
                    })
                }     
                </div>
            </div>
            <div>
                <h2 className='text-2xl font-bold text-[#222] text-center mt-10'>Related Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 
                            gap-x-8 gap-y-12
                            mt-8 mb-8 mx-auto px-8 lg:px-16 items-center justify-center">
                {
                    alsoLike.map((product) => {

                        const imageProps = {
                            src: `/img/tab-on-sale/${product.image}`,
                            alt: product.name,
                            cate_name: product.category,
                            originalPrice: product.originalPrice ?? 0,
                            discountedPrice: product.discountedPrice ?? 0,
                            isNew: product.isNew ?? false,
                            slug: product.slug
                        };

                        return (
                            <Link href={`/product/${product.slug}`} key={product.id}>
                            {
                                product.hoverEffect === 'changeImage' && product.imageHover
                                ? <HoverChangeImage {...imageProps} hoverSrc={`/img/tab-on-sale/${product.imageHover}`} />
                                : <ZoomImage {...imageProps} />
                            }
                            </Link>
                        );
                    })
                }     
                </div>
            </div>
        </div>


    );
};

export default ProductDetail;
