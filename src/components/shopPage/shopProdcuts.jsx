import './shopProducts.css'
import FeaturedClothes from './../homePage/featured-clothes'
import React ,{ useContext } from 'react';
import { sectionsData } from './../data/data';
function ShopProducts(){
    const { featuredClothes,newClothes } = useContext(sectionsData);
    return(
        <div id='shopProducts'>
            <FeaturedClothes sorceOfDataForProducts={featuredClothes} ></FeaturedClothes>
            <FeaturedClothes sorceOfDataForProducts={newClothes} ></FeaturedClothes>
        </div>
    )
}
export default ShopProducts;