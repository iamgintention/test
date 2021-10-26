// import file
import Link from 'next/link';
// Import Fontawesome
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/fontawesome-svg-core';
import Header from './HeaderForSignUpSignin';
import { faEye, faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

const UserBasicInfo = () => {
    return (
        <div>
             {/* User basic info */}
      <div className="main-caintainer-to-sign-up-sign-in-proces">
        <div className="elements-container">
          {/* <h1 className="content-label"></h1> */}
          <div className="input-field-container">
            <div className="input-field-box input-field-box-margin">
              <input type="text"className=""placeholder="Enter your first name"/>
            </div>
            <div className="input-field-box">
              <input type="password" className="" placeholder="Enter your last name" />
            </div>
          </div>
          {/* SignUp button */}
          <button className="primary-button">Continue</button>
         </div>
      </div>
    
        </div>
     );
}
 
export default UserBasicInfo;