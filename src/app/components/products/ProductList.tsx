'use client'
import { useEffect, useState } from "react";
import HoverChangeImage from "../new_products/HoverChangeImage";
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

    return (
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
  );
}
