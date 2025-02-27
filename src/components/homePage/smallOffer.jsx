import './smallOffer.css'
import React,{useContext} from 'react';
import { sectionsData } from '../data/data';
function SmallOffer (){
    const {smallOffer}=useContext(sectionsData)
    return (
        <div id='bigCombonentToSmallOffer'>
            {smallOffer.map((details,index)=>(
                <div key={index} id='smallCombonentToSmallOffer' 
                style={{backgroundImage:`url(${details.img})`,
                backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
                    <h2 id='bigHeadToSmallOffer'>{details.title}</h2>
                    <h5 id='bigSmallToSmallOffer'>{details.supTitle}</h5>
                </div>
            ))}
        </div>
    )
}
export default SmallOffer;