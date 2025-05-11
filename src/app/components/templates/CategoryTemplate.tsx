import { IoIosSearch } from "react-icons/io";
import CategoryFilter from "../filters/CategoryFilter";
type Props = {
    backgroundImage: string;
    title: string;
    children: React.ReactNode;
};


// const categories: Category[] = [ // Khai báo rõ ràng kiểu dữ liệu cho mảng categories
//         "All Categories",
//         "Bread, Bakery",
//         "Other",
//         "Vegetables, Fruits",
//         "Cheese, Eggs",
//         "Wine, Beer",
//         "Honey, Nuts",
// ];

export default function CategoryTemplate({ backgroundImage, title, children }: Props) {
    return (
        <div className="mx-auto px-8 lg:px-16">
            <div style={{ backgroundImage: `url(${backgroundImage})` }} 
                className="h-full min-h-[200px] lg:min-h-[300px] flex flex-col items-start justify-end 
                    px-8 xl:px-16 py-8 gap-4">
                <h2 className="text-2xl text-[#222] font-light">Always Fresh And Tasty</h2>
                <h1 className="text-4xl 2xl:text-5xl text-[#222]">{title}</h1>
            </div>

            <div className="flex flex-col gap-6 mt-8">
                <div className="flex flex-row lg:justify-between w-full">
                    <div className="relative">
                        <input type="text" placeholder="Search..." 
                            className="border border-gray-300 py-2 px-4 focus:outline-none" />
                        <IoIosSearch className="absolute top-3 right-3 text-xl" />
                    </div>
                    <div>

                    </div>
                </div>
                <div className="flex flex-row gap-16">
                    <aside className="w-1/4">
                        <CategoryFilter />
                    </aside>
                    <main className="flex-1 w-3/4">{children}</main>
                    
                </div>
            </div>
        </div>  
    );
}


