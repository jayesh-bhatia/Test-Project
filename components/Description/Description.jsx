import React from "react";
import "./Description.css"

export default function Description(props){
    return (
        <div className="description">
            <label className="red-label">Expires in 5 days</label>
            <div className="general-info">
                <h1 className="header">Walk In for Designer Job Role</h1>
                <label className="date">Date & time:</label>
                <label className="actual-date">10-Jul-2021 to 11-Jul-2021</label>
                <label className="separator"> | </label>
                <label className="location">Mumbai</label>
            </div>

            <div className="actual-info">
                <label className="date">Job Roles: </label>
                <label className="actual-date">Instructional Designer</label>
            </div>
            <div className="button-div">
                <button className="view-details">View More Details</button>
            </div>
        </div>
    )
}