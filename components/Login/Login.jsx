import React from "react";
import "./Login.css"
import ShowPass from "./visibility_green_24dp.svg"

export default function Login() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState({
        password: "",
        showPassword: false,
    });
    const [rememberMe, setRememberMe] = React.useState(false);

    
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Submitted with:', { username, password });  
    };

    function handleShowPassWord () {
        setPassword({
            ...password,
            showPassword: !password.showPassword,
        });
    }

    return (
        <div className="login-form">
            <h2>Log in</h2>
            <form onSubmit={handleSubmit}>
                <div>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                    placeholder="Email ID*"
                    className="textbox"
                />
                <label className="forgot-button">Forgot Email ID?</label>
                </div>
                <div>
                <input
                    type={
                        password.showPassword
                            ? "text"
                            : "password"
                    }
                    id="password"
                    value={password.password}
                    onChange={handlePasswordChange}
                    placeholder="Password*"
                    className="textbox pass-text"
                />
                <img src={ShowPass} className="show-pass-btn" onClick={handleShowPassWord} />
                <label className="forgot-button">Forgot Password?</label>
                </div>
                <div className="remember-div">
                <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                    className="remember-checkbox"
                />
                <h4 htmlFor="rememberMe" className="remember-text">Remember Me</h4>
                </div>
                <div>
                    <button type="submit" className="login-btn">Login</button>
                </div>
                <div className="acc-btn">
                    <h4 className="plain-text">Not registered yet?</h4>
                    <h4 className="forgot-button create-btn">Create an account</h4>
                </div>
            </form>
        </div>
    )
}