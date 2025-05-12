// app/category/[slug]/page.tsx
import { notFound } from "next/navigation";
import CategoryTemplate from "@/app/components/templates/CategoryTemplate";
import ProductList from "@/app/components/products/ProductList";
type Category = {
  category_slug: string;
  title: string;
  image: string;
};

export default async function CategoryPage({ params }: { params: { slug: string } }) {
	const res = await fetch("http://localhost:3000/data/categories.json"); // chỉnh URL tùy vị trí file

	if (!res.ok) {
  		console.error("Failed to fetch categories:", res.status, res.statusText);
	}
	
	const categories: Category[] = await res.json();

	const category = categories.find((cat) => cat.category_slug === params.slug);

	if (!category) return notFound();

	return (
		<>
			<CategoryTemplate
				backgroundImage={category.image}
				title={category.title}
			>
			{/* children nằm trong phần main của layout */}
			<div><ProductList categorySlug={params.slug} /></div>
			</CategoryTemplate>
			
		</>
  	);
}
