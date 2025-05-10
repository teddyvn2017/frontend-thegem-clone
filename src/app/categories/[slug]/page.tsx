import { notFound } from "next/navigation";

interface Props {
  	params: { slug: string };
}

const validSlugs = ["vegetable-fruits", "electronics", "fashion"]; // hoặc fetch từ API

export default function CategoryPage({ params }: Props) {
	const { slug } = params;

	if (!validSlugs.includes(slug)) {
		return notFound(); // Hiện trang 404 nếu slug không hợp lệ
	}

	switch (slug) {
		case "vegetable-fruits":
		return <div><h1>Rau củ quả</h1></div>;
		case "electronics":
		return <div><h1>Điện tử</h1></div>;
		case "fashion":
		return <div><h1>Thời trang</h1></div>;
		default:
		return notFound();
	}
}
