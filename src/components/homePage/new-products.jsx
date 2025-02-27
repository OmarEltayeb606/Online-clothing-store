import './new-products.css'
import FeaturedClothes from './featured-clothes'
import React, { useContext } from "react";
import { sectionsData } from "../data/data";
function NewProducts(){
    const { newClothes  } = useContext(sectionsData);

    return (
        <div id='newProductsStyleing'>
            <h2 id='newProductsStyleingH2'>New Arrivals</h2>
            <p>Summer Collection New Modern Design</p>
            <FeaturedClothes sorceOfDataForProducts={newClothes }/>
        </div>
    )
}

export default NewProducts;