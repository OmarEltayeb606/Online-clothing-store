import'./sections.css'
import React, { useContext } from "react";
import { sectionsData } from "../data/data";

function Sections() {
    const {sections} = useContext(sectionsData);

    return (
        <div className="big-sections">
            {sections.map((section, index) => (
                <div className='sections' key={index}>
                    <img src={section.img} alt={section.title} />
                    <h3 style={{backgroundColor:section.color,color:section.fontColor}}>{section.title}</h3>
                </div>
            ))}
        </div>
    );
}

export default Sections;
