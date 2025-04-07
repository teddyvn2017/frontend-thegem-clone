import React from 'react'

const Header = () => {
  return (
    <header className='w-full bg-white'>
        <nav>
            <ul className='flex flex-row font-semibold mx-auto px-16 py-8 gap-8 text-base'>
                <li>
                    <a href="#" className='active px-[12px] py-1'>Home</a>
                </li>
                <li>
                    <a href="#">Products</a>
                </li>
                <li>
                    <a href="#">Categories</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header