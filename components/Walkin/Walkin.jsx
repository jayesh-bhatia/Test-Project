import React from "react";
import "./Walkin.css";
import Description from "../Description/Description";
import JobDetails from "../../JobDetails.json"

const jobDetails = JobDetails.map(item => {
    return (
        <Description
            key={item.id}
            title={item.title}
            dateFrom={item.dateFrom}
            dateTo={item.dateTo}
            location={item.location}
            profile={item.profile}
        />
    )
})

export default function Walkin(props){
    return (
        <div>
            {jobDetails}
        </div>
    )
}