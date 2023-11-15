import React from "react";
import "./Profiles.css";

export default function Profiles(props){
    return (
        <span className="profiles" key={props.profId}>
            <img src={props.src} alt={props.title} className="location-icon" />
            <label className="actual-date">{props.title}</label>
            {!props.isLast && <label className="separator"> | </label>}
        </span>
    )
}