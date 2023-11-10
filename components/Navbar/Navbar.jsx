import React from "react";
import LogoImg from "./Zeus-LMS-logo.svg"
import "./Navbar.css"

export default function Navbar(props) {
    return (
        <div className="navbar">
            <img src={LogoImg} />
            {props.isLoggedIn && <button
                className="round-button"
            >
                U
            </button>}
        </div>
    )
}