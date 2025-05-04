'use client'
import { useState,useEffect} from 'react';
import ZoomImage from './promotions/ZoomImage';
import HoverChangeImage from './promotions/HoverChangeImage';

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

    const [activeTab, setActiveTab] = useState('tab-on-sale');
    const [onSaleProducts, setOnSaleProducts] = useState<Product[]>([]);
    const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
    const [topSellers, setTopSellers] =useState<Product[]>([]);
    const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
    const [imgFolder, setImgFolder] = useState('tab-on-sale');

    // Lay du lieu tu file JSON
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


    // Đọc tab đã lưu khi reload
    useEffect(() => {
        const savedTab = localStorage.getItem('activeTab');
        if (savedTab) {
            setActiveTab(savedTab);
        }
    }, []);    
    
    // Đọc tab đã lưu khi reload
    useEffect(() => {              
        switch (activeTab) {
            case 'tab-on-sale': 
                setVisibleProducts(onSaleProducts);
                setImgFolder('tab-on-sale');
                break;
            case 'tab-featured':
                setVisibleProducts(featuredProducts);
                setImgFolder('tab-featured');
                break;
            case 'tab-top-sellers':
                setVisibleProducts(topSellers);
                setImgFolder('tab-top-sellers');
                break;
        }       
    },[activeTab, onSaleProducts, featuredProducts, topSellers]);

    // const handleTabClick = (tab:string) => {
    //     setActiveTab(tab);
    //     localStorage.setItem('activeTab', tab); // lưu lại tab

    //     switch (tab) {
    //         case 'tab-on-sale': 
    //             setVisibleProducts(onSaleProducts);
    //             setImgFolder('tab-on-sale');
    //             break;
    //         case 'tab-featured':
    //             setVisibleProducts(featuredProducts);
    //             setImgFolder('tab-featured');
    //             break;
    //         case 'tab-top-sellers':
    //             setVisibleProducts(topSellers);
    //             setImgFolder('tab-top-sellers');
    //             break;
    //         default:
    //             setVisibleProducts(onSaleProducts);
    //             setImgFolder('tab-on-sale');
    //             break;
    //     }    
    //     // console.log('visibleProducts sau khi click:', visibleProducts); // Kiểm tra dữ liệu ở đây    
    // }
    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        localStorage.setItem('activeTab', tab);
    };
    return (
        <section className='w-full mt-12 lg:mt-16 clear-both'>
            <div className='mx-auto px-8 lg:px-16 flex flex-col items-center justify-between gap-1'>
                <h3 className='text-xl text-gray-500'>Offers this week</h3>
                <h2 className='text-2xl lg:text-3xl text-[#222] font-semibold text-center'>Discount and Promotion</h2>
            </div>
            {/* tabs promotion */}
            <div className="flex justify-center mt-10 gap-10">
                <button className={`text-base border-b-2 cursor-pointer
                    ${activeTab === 'tab-on-sale' ? 'border-[#222] font-semibold' : 'border-transparent'}
                    : ${activeTab !== 'tab-on-sale' ? 'text-gray-500 hover:text-gray-700' : ''} 
                    `} onClick={() => handleTabClick('tab-on-sale')} >
                        ON SALE
                </button>

                <button className={`font-light border-b-2 cursor-pointer
                    ${activeTab === 'tab-featured' ? 'border-[#222] font-semibold' : 'border-transparent'}
                    : ${activeTab !== 'tab-featured' ? 'text-gray-500 hover:text-gray-700' : ''} 
                    `} onClick={() => handleTabClick('tab-featured')} >
                        FEATURED
                </button>

                <button className={`font-light border-b-2 cursor-pointer
                    ${activeTab === 'tab-top-sellers' ? 'border-[#222] font-semibold' : 'border-transparent'}
                    : ${activeTab !== 'tab-top-sellers' ? 'text-gray-500 hover:text-gray-700' : ''} 
                    `} onClick={() => handleTabClick('tab-top-sellers')} >
                        TOP SELLERS
                </button>
               
            </div>
           
           {/* Hiển thị danh sách sản phẩm */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 
                            mt-8 mb-8 mx-auto px-8 lg:px-16 items-center justify-center">
                {
                    visibleProducts.map((product) => (
                        product.hoverEffect === 'changeImage' && product.image2 ? (
                            <HoverChangeImage key={product.id} src={`/img/${product.image}`} 
                                    hoverSrc={`/img/${imgFolder}/${product.image2}`} alt={product.name} 
                                    cate_name={product.category}
                                    originalPrice = {product.originalPrice ?? 0} 
                                    discountedPrice = {product.discountedPrice ?? 0}
                                    isNew = {product.isNew ?? false} />) 
                            : (<ZoomImage key={product.id} src={`/img/${imgFolder}/${product.image}`} 
                                    alt={product.name} cate_name={product.category}
                                    originalPrice = {product.originalPrice ?? 0} 
                                    discountedPrice = {product.discountedPrice ?? 0}
                                    isNew = {product.isNew ?? false} />)
                    ))
                }     
           </div>
        </section>
    )
}

export default Promotions