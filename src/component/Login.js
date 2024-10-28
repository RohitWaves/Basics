// src/component/Login.js
import React, { useState } from "react";
import { setEmail, setPassword } from "../Redux/loginSlice";
import { useDispatch } from "react-redux";
import OtpModal from "./OtpModal"; // Import the OTP Modal
import { setOtp } from "../Redux/otpSlice";

const Login = () => {
    
    const [email, setEmailState] = useState("");
    const [password, setPasswordState] = useState("");
    const [isOtpModalOpen, setIsOtpModalOpen] = useState(false); // State for modal

    const dispatch = useDispatch();

    const handleEmail = (e) => setEmailState(e.target.value);
    const handlePassword = (e) => setPasswordState(e.target.value);

    const generateOtp = () => {
        return Math.floor(100000 + Math.random() * 900000).toString(); // Generates a random 6-digit number
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setEmail(email));
        dispatch(setPassword(password));
        const otp = generateOtp();
        dispatch(setOtp(otp))
        // Show the OTP modal after dispatching actions
        setIsOtpModalOpen(true);
    };

    const closeOtpModal = () => {
        setIsOtpModalOpen(false);
        // Optionally reset state or handle further actions
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" value={email} onChange={handleEmail} />
                <label htmlFor="password">Password</label>
                <input type="password" value={password} onChange={handlePassword} />
                <button type="submit">Login</button>
            </form>
            <OtpModal isOpen={isOtpModalOpen} onClose={closeOtpModal} />
        </div>
    );
};

export default Login;
