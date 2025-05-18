'use client'
import { useEffect, useState } from "react";
import HoverChangeImage from "../categories_img/HoverChangeImage";
type Product = {
    id: number;
    name: string;
    image: string;
    imageHover: string;
    originalPrice: number;
    discountedPrice: number;
    price: number;
    isNew: boolean;
    category: string;
};

type ProductListProps = {
  categorySlug: string;
};

export default function ProductList({ categorySlug }: ProductListProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [imgFolder, setImgFolder] = useState('categories/cheese-eggs');

    
    // Phân trang
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    


    useEffect(() => {
        const fetchData = async () => {
        try {
            const res = await fetch(`/data/${categorySlug}.json`);
            if (!res.ok) throw new Error("Không tìm thấy dữ liệu");
                const data = await res.json();
            setProducts(data);
        } catch (err) {
            console.error(err);
            setProducts([]);
            }
        };

        fetchData();
    }, [categorySlug]);


    // Tính toán phân trang
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const paginatedProducts = products.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {
                products.map((product) => (
                   <HoverChangeImage key={product.id} src={`/img/${imgFolder}/${product.image}`} 
                                    hoverSrc={`/img/${imgFolder}/${product.imageHover}`} alt={product.name} 
                                    cate_name={product.category}
                                    originalPrice = {product.originalPrice ?? 0} 
                                    discountedPrice = {product.discountedPrice ?? 0}
                                    isNew = {product.isNew ?? false} />)
            )}
        </div>

        {
            totalPages > 1 && (
                <div className="flex justify-center mt-12 gap-4">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`w-10 h-10 text-center cursor-pointer ${
                        currentPage === index + 1
                        ? "bg-[#222] text-white outline-2 outline-[#222]"
                        : "bg-white text-gray-700 outline-2 outline-[#222] hover:bg-[#222] hover:text-white"
                    }`}
                    >
                    {index + 1}
                    </button>
                ))}
                </div>
            )
        }
        </>
    );
}
