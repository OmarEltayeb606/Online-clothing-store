import FeaturedClothes from './featured-clothes'
import './featured-products.css'
import React, { useContext } from "react";
import { sectionsData } from "../data/data";
function FeaturedProducts(){
    const { featuredClothes } = useContext(sectionsData);
    return (
        <div>
            <div id='titleOfFeaturedProducts'>
            <h2 >Featured Products</h2>
            <h4>Summer Collection New modern design</h4>
            </div>
            <FeaturedClothes sorceOfDataForProducts={featuredClothes} />
        </div>
        )};
    

export default FeaturedProducts;