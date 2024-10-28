import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const OtpModal = ({ isOpen, onClose }) => {

    const [otp, setOtp] = useState("");

    const storedotp = useSelector((state) => state.otp.otp);

    const navigate = useNavigate();
    const handleChange = (e) => {
        setOtp(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted OTP:", otp);
        if (otp === storedotp) {
            navigate("/dashboard")
        } else {
            alert("Incorrect otp")
        }
        // Handle OTP verification logic here
        onClose(); // Close the modal after submission
    };


    if (!isOpen) return null;
    return (
        <div>
            <h2>Enter OTP</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={otp}
                    onChange={handleChange}
                    placeholder="Enter Your Otp"
                    maxLength="6"
                    required
                />
                <button>Submit</button>
            </form>
            <button onClick={onClose}>Close</button>
        </div>
    )
}

export default OtpModal;