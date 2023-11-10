import React from "react";
import "./Description.css"

export default function Description(props){
    return (
        <div className="description">
            <label className="red-label">Expires in 5 days</label>
            <div className="general-info">
                <h1 className="header">{props.title}</h1>
                <label className="date">Date & time:</label>
                <label className="actual-date">{props.dateFrom} to {props.dateTo}</label>
                <label className="separator"> | </label>
                <label className="location">{props.location}</label>
            </div>

            <div className="actual-info">
                <label className="date">Job Roles: </label>
                <label className="actual-date">{props.profile}</label>
            </div>
            <div className="button-div">
                <button className="view-details">View More Details</button>
            </div>
        </div>
    )
}