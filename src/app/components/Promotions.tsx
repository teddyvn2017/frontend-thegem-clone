'use client'
import { useState,useEffect} from 'react';
import ZoomImage from './ZoomImage';
import HoverChangeImage from './HoverChangeImage';

interface Product {
    id: number;
    name: string;
    category: string;
    originalPrice?: number;
    discountedPrice?: number;
    discountPercent?: number;
    image: string;
    image2?: string;
    hoverEffect?: string;
    hoverImage?: string;
    tag: string;
    isNew?: boolean;
}   


const Promotions = () => {

    const [activeTab, setActiveTab] = useState('on-sale');
    const [onSaleProducts, setOnSaleProducts] = useState<Product[]>([]);
    const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
    const [topSellers, setTopSellers] =useState<Product[]>([]);
    const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const rsOnSale = await fetch('/data/on_sale.json');
                const onSaleData = await rsOnSale.json();                
                setOnSaleProducts(onSaleData);

                const rsFeatured = await fetch('/data/featured.json');
                const featuredData = await rsFeatured.json();
                setFeaturedProducts(featuredData);

                const rsTopSellers = await fetch('/data/top_sellers.json');
                const topSellersData = await rsTopSellers.json();
                setTopSellers(topSellersData);

                setVisibleProducts(onSaleData);
            }
            catch (error) {
                console.error('Lỗi khi đọc file JSON:', error);
            }
        }

        fetchProducts();
    }, []);

    const handleTabClick = (tab:string) => {
        setActiveTab(tab);

        switch (tab) {
            case 'on-sale':
                setVisibleProducts(onSaleProducts);
                break;
            case 'featured':
                setVisibleProducts(featuredProducts);
                break;
            case 'top-sellers':
                setVisibleProducts(topSellers);
                break;
            default:
                setVisibleProducts(onSaleProducts);
                break;
        }    
        console.log('visibleProducts sau khi click:', visibleProducts); // Kiểm tra dữ liệu ở đây    
    }


    return (
        <section className='w-full mt-12 lg:mt-16'>
            <div className='mx-auto px-8 lg:px-16 flex flex-col items-center justify-between gap-1'>
                <h3 className='text-xl text-gray-500'>Offers this week</h3>
                <h2 className='text-2xl lg:text-3xl text-[#222] font-semibold text-center'>Discount and Promotion</h2>
            </div>
            {/* tabs promotion */}
            <div className="flex justify-center mt-10 gap-10">
                <button className={`font-semibold text-base border-b-2 cursor-pointer
                    ${activeTab === 'on-sale' ? 'border-[#222]' : 'border-transparent'}
                    : ${activeTab !== 'on-sale' ? 'text-gray-500 hover:text-gray-700' : ''} 
                    `} onClick={() => handleTabClick('on-sale')} >
                        ON SALE
                </button>

                <button className={`font-light border-b-2 cursor-pointer
                    ${activeTab === 'featured' ? 'border-[#222]' : 'border-transparent'}
                    : ${activeTab !== 'featured' ? 'text-gray-500 hover:text-gray-700' : ''} 
                    `} onClick={() => handleTabClick('featured')} >
                        FEATURED
                </button>

                <button className={`font-light border-b-2 cursor-pointer
                    ${activeTab === 'top-sellers' ? 'border-[#222]' : 'border-transparent'}
                    : ${activeTab !== 'top-sellers' ? 'text-gray-500 hover:text-gray-700' : ''} 
                    `} onClick={() => handleTabClick('top-sellers')} >
                        TOP SELLERS
                </button>
                {/* <button className="font-normal text-base text-gray-500 hover:text-gray-700">FEATURED</button>
                <button className="font-normal text-base text-gray-500 hover:text-gray-700">TOP SELLERS</button> */}
            </div>
           
           {/* Hiển thị danh sách sản phẩm */}
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-4
                           mx-auto px-8 lg:px16 items-center justify-center">
                {
                    visibleProducts.map((product) => (

                        product.hoverEffect === 'changeImage' && product.image2 ? (
                            <HoverChangeImage key={product.id} src={`/img/${product.image}`} 
                                    hoverSrc={`/img/${product.image2}`} alt={product.name} 
                                    cate_name={product.category}
                                    originalPrice = {product.originalPrice ?? 0} 
                                    discountedPrice = {product.discountedPrice ?? 0}                                                
                                    />) 
                            : (<ZoomImage key={product.id} src={`/img/${product.image}`} 
                                    alt={product.name} cate_name={product.category}
                                    originalPrice = {product.originalPrice ?? 0} 
                                    discountedPrice = {product.discountedPrice ?? 0}
                                />)
                    ))
               }     
           </div>
        </section>
    )
}

export default Promotions