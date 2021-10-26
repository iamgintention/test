// import file
import Link from 'next/link';
// Import Fontawesome
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/fontawesome-svg-core';
import Header from './HeaderForSignUpSignin';
import { faEye, faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

const OtpAuthForSignUp = () => {
    return (
        <div className="auth-main-container">
            {/* Auth info */}
            <h1 className="auth-info-heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
            {/* Auth parent caintainer */}
            <div className="auth-parent-caintainer">
                <div className="auth-first-child-caintainer">
                    {/* OTP input field box */}
            <div className="input-field-btn-container">
                <div className="input-field-box otp-input-box">
                    <input type="password" className="" placeholder="Enter OTP" />
                    <FontAwesomeIcon icon={faEye} className="input-icon" size="lg" />
                </div>
            {/* Button */}
            <button className="submit-button">Submit</button>
            </div>
        
            </div>
                 <div className="auth-second-child-caintainer"></div>
            </div>
            {/* Resend auth caintainer */}
            <div className="auth-resend-container">
                <div className="auth-resend-btn-container">
                    <p className="auth-resend-call-to-action-line resend-btn-right-margin">Didn't recieve OTP?</p>
                    <p className="otp-resend-button resend-btn-right-margin">Resend by Sms</p>
                    <p className="otp-resend-button">Resend by Call</p>
                </div>
                {/* Gogomet help desk */}
                <h4 role="button" className="help-desk-button">HelpDesk</h4>
            </div>
        </div>
     );
}
 
export default OtpAuthForSignUp;