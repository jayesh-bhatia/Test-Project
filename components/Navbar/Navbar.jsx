import React from "react";
import LogoImg from "./Zeus-LMS-logo.svg"
import "./Navbar.css"

export default function Navbar() {
    return (
        <div className="navbar">
            <img src={LogoImg} />
        </div>
    )
}