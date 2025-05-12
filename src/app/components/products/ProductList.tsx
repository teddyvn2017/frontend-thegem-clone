import { useEffect, useState } from "react";

type Product = {
    id: number;
    name: string;
    price: number;
};

type ProductListProps = {
  categorySlug: string;
};

export default function ProductList({ categorySlug }: ProductListProps) {
    const [products, setProducts] = useState<Product[]>([]);

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
            <div key={product.id} className="p-4 border rounded shadow">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </div>
        ))}
    </div>
  );
}
