import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Login from "./components/Login/Login"
import Footer from "./components/Footer/Footer"
import UsersData from "./UserDetails.json"
import Walkin from "./components/Walkin/Walkin"

export default function App() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState({
        password: "",
        showPassword: false,
    });
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    function handleEmailChange(e) {
        setEmail(e.target.value);
    };
    
    function handlePasswordChange(e) {
        setPassword({
            ...password,
            password: e.target.value
        });
    };

    function handleShowPassWord () {
        setPassword({
            ...password,
            showPassword: !password.showPassword,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const user = UsersData.find(u => u.email === email && u.password === password.password);
        if (user) {
            setIsLoggedIn(prevState => !prevState)
        } else {
            console.log('Login failed');
        }
    };

    return (
        <div>
            <Navbar 
                isLoggedIn={isLoggedIn} 
            />
            {isLoggedIn ? <Walkin /> : <Login 
                email={email} 
                handleEmailChange={handleEmailChange}
                password={password}
                handleShowPassWord={handleShowPassWord}
                handlePasswordChange={handlePasswordChange}
                handleSubmit={handleSubmit}
            />}
            {!isLoggedIn && <Footer />}
        </div>
    )
}