import { useState } from "react";
import './LoginPopup.css';
import { assets } from "../../assets/assets";



const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login");

    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" id="cross_icon" />
                </div>
                <div className='login-popup-input'>
                    {currState === "Login" ? null : (
                        <input type="text" placeholder='your name' required />
                    )}
                    <input type="email" placeholder='your email' required />
                    <input type="password" placeholder='password' required />
                </div>
                <button>{currState === "signup" ? "Create account" : "login"}</button>

                <div className='login-popup-condition'>
                    <input type="checkbox" required />
                    <p>Agree to continue</p>
                </div>
                {currState === "Login" ? (
                    <p>Create a new account? <span onClick={() => setCurrState("signup")}>Click here</span></p>
                ) : (
                    <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
                )}
            </form>
        </div>
    );
};

export default LoginPopup;
