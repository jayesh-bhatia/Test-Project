import React from "react";
import "./Description.css"
import LocationImg from "../Walkin/location_on_black_24dp.svg"
import Profiles from "./Profiles/Profiles";


export default function Description(props){
      const profileDetails = props.profile.map(item => {
        return (
            <Profiles
                key={item.profId}
                src={item.src}
                title={item.title}
            />
        )
    })
    return (
        <div className="description">
            <label className="red-label">Expires in 5 days</label>
            <div className="general-info">
                <h1 className="header">{props.title}</h1>
                <label className="date">Date & time:</label>
                <label className="actual-date">{props.dateFrom} to {props.dateTo}</label>
                <label className="separator"> | </label>
                <img src={LocationImg} alt="Location" className="location-icon"/>
                <label className="location">{props.location}</label>
            </div>

            <div className="actual-info">
                <label className="date">Job Roles: </label>
                {profileDetails}
            </div>
            <div className="button-div">
                <button className="view-details">View More Details</button>
            </div>
        </div>
    )
}