import React from "react";
import "./Profiles.css";
import InstructionalDesigner from "./images/Instructional Designer.svg"
import SoftwareQualityEngineer from "./images/Software Quality Engineer.svg"
import Designer from "./images/Instructional Designer.svg"

export default function Profiles(props){
    console.log(props)
    return (
        <span className="profiles" key={props.profId}>
            <img src={`./images/${props.title}.svg`} alt={props.title} className="location-icon" />
            <label className="actual-date">{props.title}</label>
        </span>
    )
}