import React from 'react';
import Categories from './components/Categories'; 
import OurGuarantees from './components/OurGuarantees';
import Delivery from './components/Delivery';
export default function HomePage() {
    return (
        <>
            <Categories />
            <OurGuarantees />
            <Delivery />
        </>
    );
}