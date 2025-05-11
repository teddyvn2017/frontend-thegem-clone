'use client';
import React from 'react';
// import { useLocation, Link } from 'react-router-dom';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const categories = [
	{ name: 'Show All', slug: '' },
	{ name: 'Bread, Bakery', slug: 'bread-bakery' },
	{ name: 'Cheese, Eggs', slug: 'cheese-eggs' },
	{ name: 'Honey, Nuts', slug: 'honey-nuts' },
	{ name: 'Other', slug: 'other' },
	{ name: 'Vegetables, Fruit', slug: 'vegetables-fruit' },
	{ name: 'Winner, Beer', slug: 'winner-beer' },
]
const CategoryFilter = () => {

	const pathname = usePathname()
	const currentSlug = pathname.split('/').pop()

	return (
		<div className=''>
			<h3 className='text-xl font-semibold mb-4'>Filter By Category</h3>
			<ul className='flex flex-col gap-2 text-base text-[#222]'>
				{
					categories.map((cat, index) => {
						const isActive = currentSlug === cat.slug || (cat.slug === '' && pathname  === '/categories');
						const bgHighLight = isActive ? 'bg-[#222] text-white px-4 py-0.5 rounded-full' : 'px-4 py-0.5';

						return (
							<li key={index} className='flex justify-between items-center'>
								<Link href={`/categories/${cat.slug}`} className='hover:text-[#f06f42] transition-colors duration-300'>
									{cat.name}
								</Link>
								{cat.slug && <span className={bgHighLight}>20</span>}
							</li>
						)
					} )
				}
			</ul>
		</div>
	)
}

export default CategoryFilter