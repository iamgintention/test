// import file
import Link from 'next/link';
// Import Fontawesome
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/fontawesome-svg-core';
import Header from './HeaderForSignUpSignin';
import { faEye, faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';


const ChangePasswordCard = () => {
    return (
     <div>
     {/* User basic info */}
      <div className="main-caintainer-to-sign-up-sign-in-proces">
        <div className="elements-container">
          {/* <h1 className="content-label"></h1> */}
          <div className="input-field-container">
              <div className="input-field-box input-field-box-margin">
                <FontAwesomeIcon icon={faKey} className="input-icon" size="lg" />
                <input type="password" className="" placeholder="Password" />
                 <FontAwesomeIcon icon={faEye} className="input-icon" size="lg" />
            </div>
              <div className="input-field-box">
                <FontAwesomeIcon icon={faKey} className="input-icon" size="lg" />
              <input type="password" className="" placeholder="Confirm Password"/>
            </div>
          </div>
          {/* SignUp button */}
          <button className="primary-button">Continue</button>
         </div>
      </div>
    
        </div>
  );
}
 
export default ChangePasswordCard;