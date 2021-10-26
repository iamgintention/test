// import file
import Link from 'next/link';
// Import Fontawesome
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/fontawesome-svg-core';
import Header from './HeaderForSignUpSignin';
import { faEye, faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';


const ConfirmPassword = () => {
    return (
     <div>
      {/* Confirm Password caintainer */}
      <div className="main-caintainer-to-sign-up-sign-in-proces">
        <div className="sign-up-elements-container">
          <h1 className="content-label">Confirm</h1>
            <div className="input-field-container">
              {/* Confirm Password */}
            <div className="input-field-box">
              <FontAwesomeIcon icon={faKey} className="input-icon" size="lg" />
              <input type="text" className="" placeholder="Confirm Password"/>
            </div>
           </div>
          {/* SignUp button */}
          <button className="primary-button">Sign In</button>
         </div>
      </div>
    </div>
    );
}
 
export default ConfirmPassword;