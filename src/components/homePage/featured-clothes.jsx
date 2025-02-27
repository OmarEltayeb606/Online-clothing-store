
import './featured-clothes.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';

function FeaturedClothes({sorceOfDataForProducts}){

    return (
        <div id="pageOfProducts">
            {sorceOfDataForProducts.map((products, index) =>(
                <div key={index} id="outSiderProductImageBox" >
                <img id="ProductImage" src={products.img} alt={products.title} />
                <div id="productsInfo">
                <h4>{products.Manufacturer}</h4>
                <h2>{products.title}</h2>
                {Array.from({length:5}).map((_,starIndex)=>(
                    <FontAwesomeIcon 
                    id="starsIcons"
                    key={starIndex}
                    icon={faStar}
                    style={{ color: starIndex < products.stars ? "#FFD43B" : "#ccc" }} 
                    />
                ))}
                <h3 id="featuredClothePrice">{products.price}</h3>
                <Link to={`/ProductDetails/${products.id}`}><FontAwesomeIcon icon={faCartShopping}  id="cartIcon"/></Link>
                </div>
                </div>
                ))}
        </div>
    );
}
export default FeaturedClothes;


