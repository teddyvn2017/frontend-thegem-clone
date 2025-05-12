'use client'
import { useState,useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VscSettings } from "react-icons/vsc";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import CategoryFilter from "../filters/CategoryFilter";
import CategoryPriceSlider from "@/app/components/filters/CategoryPriceSlider";

type Props = {
    backgroundImage: string;
    title: string;
    children: React.ReactNode;
};

const sort_options:string[] = [
    "Default sorting",
    "Sort by latest",
    "Sort by popularity",
    "Sort by average rating",
    "Sort by price: low to high",
    "Sort by price: high to low",
];

export default function CategoryTemplate({ backgroundImage, title, children }: Props) {
    
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(sort_options[0]);
    const dropdownVariants = {
        hidden: { opacity: 0, y: -10, transition: { duration: 0.2 } },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    };

    const cboRef = useRef<HTMLDivElement>(null);

    const handleSelect = (item:string) => {
        setSelected(item);
        setOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (cboRef.current && !cboRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    })

    return (
        <div className="mx-auto px-8 lg:px-16">
            <div style={{ backgroundImage: `url(${backgroundImage})` }} 
                className="h-full min-h-[200px] lg:min-h-[300px] flex flex-col items-start justify-end 
                    px-8 xl:px-16 py-8 gap-4">
                <h2 className="text-2xl text-[#222] font-light">Always Fresh And Tasty</h2>
                <h1 className="text-4xl 2xl:text-5xl text-[#222]">{title}</h1>
            </div>

            <div className="flex flex-col gap-6 mt-8">
                <div className="flex flex-col lg:flex-row lg:justify-between w-full gap-4">
                    <button className="lg:hidden flex flex-row items-center gap-2 border border-[#222]
                                        hover:bg-[#222] hover:text-white 
                                        rounded-full px-4 py-2 cursor-pointer
                                        transition-colors duration-300">
                        <VscSettings className="text-base"/>
                        <span className="text-base">Show filter</span>
                    </button>
                    <div className="relative w-1/4 hidden lg:block">
                        <input type="text" placeholder="Search..." 
                            className="border-b-1 border-gray-300 py-2 px-4 focus:outline-none w-full" />
                        <IoIosSearch className="absolute top-3 right-3 text-xl" />
                    </div>
                    <div>
                        <div ref={cboRef} 
                            className="relative inline-block text-base w-full lg:w-auto">
                            <button
                                onClick={() => setOpen(!open)}
                                className="flex items-center gap-2 px-4 py-2 border border-black 
                                            rounded-full cursor-pointer justify-between w-full"
                            >
                                {selected}
                                <IoIosArrowDown  className={`transition-transform ${open ? "rotate-180" : ""}`} />
                            </button>
                            <AnimatePresence>
                                {
                                    open && (
                                        <motion.div
                                            variants={dropdownVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                            className="absolute left-0 lg:-left-[60px] mt-2 w-64 bg-white shadow-lg 
                                                        rounded-lg z-50 overflow-hidden">
                                            {
                                                sort_options.map((item) => (
                                                    <div
                                                        key={item}
                                                        onClick={() => handleSelect(item)}
                                                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                                    >
                                                        {item}
                                                    </div>
                                                ))
                                            }
                                        </motion.div>)
                                }
                            </AnimatePresence>    
                        </div>   
                    </div>
                </div>
                <div className="flex flex-row gap-16">
                    <aside className="w-1/4 hidden lg:block">
                        <CategoryFilter />
                        <CategoryPriceSlider />
                    </aside>
                    <main className="flex-1 w-3/4">{children}</main>
                    
                </div>
            </div>
        </div>  
    );
}