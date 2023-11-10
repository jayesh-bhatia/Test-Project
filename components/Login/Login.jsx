import React from "react";
import "./Login.css"
import ShowPass from "./visibility_green_24dp.svg"


export default function Login(props) {
    
    const [rememberMe, setRememberMe] = React.useState(false);
    
    function handleRememberMeChange(e) {
        setRememberMe(e.target.checked);
    };
    
    return (
        <div className="login-form">
            <h2>Log in</h2>
            <form onSubmit={props.handleSubmit}>
                <div className="login-div">
                <input
                    type="text"
                    id="email"
                    value={props.email}
                    onChange={props.handleEmailChange}
                    placeholder="Email ID*"
                    className="textbox"
                />
                <label className="forgot-button">Forgot Email ID?</label>
                </div>
                <div className="login-div">
                <input
                    type={
                        props.password.showPassword
                            ? "text"
                            : "password"
                    }
                    id="password"
                    value={props.password.password}
                    onChange={props.handlePasswordChange}
                    placeholder="Password*"
                    className="textbox pass-text"
                />
                <img src={ShowPass} className="show-pass-btn" onClick={props.handleShowPassWord} />
                <label className="forgot-button">Forgot Password?</label>
                </div>
                <div className="login-div remember-div">
                <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                    className="remember-checkbox"
                />
                <h4 htmlFor="rememberMe" className="remember-text">Remember Me</h4>
                </div>
                <div className="login-div">
                    <button type="submit" className="login-btn">Login</button>
                </div>
                <div className="login-div acc-btn">
                    <h4 className="plain-text">Not registered yet?</h4>
                    <h4 className="forgot-button create-btn">Create an account</h4>
                </div>
            </form>
        </div>
    )
}