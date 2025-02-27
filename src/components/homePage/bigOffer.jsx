import'./bigOffer.css'
import React,{ useContext } from 'react';
import {sectionsData} from './../data/data'
function BigOffer (){
    const {bigActiveOffer}=useContext (sectionsData)
return(
    <div className="bigOffer">
        {bigActiveOffer.map((details,index)=>(
            <div key={index} id='boxOfBigOffer' style={{backgroundImage:`url(${details.img})`,
            backgroundSize:'cover'}}>
                <p id='pargraphOneOfBigOffer'>{details.text1}</p>
                <p id='pargraphTwoOfBigOffer'>{details.text2}</p>
                <h2 id='titleOfBigOffer'>{details.title}</h2>
                <button id='buttonOfBigOffer'>{details.textOfbutton}</button>
            </div>
        ))}
        {/* <p>{bigActiveOffer.text1}</p>
        <h2>{bigActiveOffer.title}</h2>
        <p>{bigActiveOffer.text2}</p>
        <img src={bigActiveOffer.img} alt={bigActiveOffer.title} />
        <button>{bigActiveOffer.textOfbutton}</button> */}
        {/* {bigActiveOffer.map((offers)=>(<div>
            <p>{offers.text1}</p>
            <h4>{offers.title}</h4></div>
        ))} */}
    </div>
)
}
export default BigOffer;