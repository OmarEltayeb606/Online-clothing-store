import'./productDetails.css'
import { useContext } from 'react';
import { sectionsData } from '../data/data';
import { useParams } from 'react-router-dom';

function ProductDetails() {
    const {featuredClothes,newClothes}=useContext(sectionsData);

    const { id } = useParams();
    const product = [...featuredClothes,...newClothes].find((product) => product.id === id);
    if (!product){return <h1>the product is not here</h1>}
    return(
        <div>
            <div id='imgsPart'>
                <img className='mainProduct' src={product.img}alt='' />
                <img src="" alt="" />
            </div>
            <div id='detailsPart'></div>
        </div>
    )
}

export default ProductDetails;