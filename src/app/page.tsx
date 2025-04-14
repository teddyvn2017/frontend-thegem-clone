import React from 'react';
import Categories from './components/Categories'; 
import OurGuarantees from './components/OurGuarantees';
import Delivery from './components/Delivery';
import Promotions from './components/Promotions';
import SpecialPromotions from './components/SpecialPromotions';
import FeaturedItems from './components/FeaturedItems';
export default function HomePage() {
    return (
        <>
            <Categories />
            <OurGuarantees />
            <Delivery />
            <Promotions />
            <SpecialPromotions />
            <FeaturedItems />
        </>
    );
}