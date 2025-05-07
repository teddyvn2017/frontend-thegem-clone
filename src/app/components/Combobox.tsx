import React from 'react';
import {useState,useEffect } from 'react'
import { ChevronUpIcon,MagnifyingGlassIcon  } from '@heroicons/react/20/solid';
const Combobox = () => {

    type Category = string;
    const [isOpen, setIsOpen] = useState(false);
    const categories: Category[] = [ // Khai báo rõ ràng kiểu dữ liệu cho mảng categories
        "All Categories",
        "Bread, Bakery",
        "Other",
        "Vegetables, Fruits",
        "Cheese, Eggs",
        "Wine, Beer",
        "Honey, Nuts",
    ];

    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const toggleOpen = (): void => setIsOpen(!isOpen); // Khai báo rõ ràng kiểu trả về của hàm
    const selectCategory = (category: Category): void => { // Thêm chú thích kiểu dữ liệu cho tham số category
        setSelectedCategory(category);
        setIsOpen(false);
    };

    const wrapperRef = React.useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    },[]);

    return (
        <div
            ref={wrapperRef}  
            className="relative w-64 flex flex-row gap-1 justify-center items-center">
            <div
                
                className="bg-white border-none w-full py-2 text-left cursor-pointer focus:outline-none sm:text-sm"
                onClick={toggleOpen} >
                <div className="flex items-center justify-between">
                    <span>{selectedCategory}</span>
                    <ChevronUpIcon className={`h-5 w-5 text-gray-400 transition transform ${isOpen ? '-rotate-180' : ''}`} aria-hidden="true" />
                </div>
                {/* Dropdown Panel */}
                <div
                    className="absolute z-10 w-full rounded-md bg-white shadow-lg focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    style={{ top: '100%' }} // mở xuống dưới
                    >
                    
                        {isOpen && (
                            categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => selectCategory(category)}
                                    className={`text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 focus:outline-none 
                                                focus:bg-gray-100 focus:text-gray-900 cursor-pointer ${
                                    selectedCategory === category ? 'font-semibold' : ''
                                    }`}
                                    role="menuitem"
                                >
                                    {category}
                                </button>
                            ))
                        )}  
                </div>                
            </div>
            {/* Icon Tìm kiếm (tùy chọn) */}
            <div className="items-center pointer-events-none">
                {/* <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                <i className='bx bx-search text-2xl text-gray-400 mt-1 fon' aria-hidden="true"></i>
            </div>
        </div>        
    )
}

export default Combobox