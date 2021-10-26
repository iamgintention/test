// import file
// Import Fontawesome
import React from 'react';
import {} from '@fortawesome/fontawesome-svg-core';
import SendPasswordResetEmail from './signup-signin-components/sendPasswordResetEmail';


const ResetPassword = () => {
  return (
    <>
      <div className="main-caintainer-to-sign-up-sign-in-proces">
        <div className="sign-up-elements-container">
           <SendPasswordResetEmail/>
        </div>
      </div>
    
    </>
  
    );
}
 
export default ResetPassword;