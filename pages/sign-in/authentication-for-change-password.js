// import
import React from "react";
import Header from '../../components/HeaderForSignUpSignin';
import OtpReceive from '../../components/OtpAuthForChangePassword';


const AuthenticationForChangePassword = () => {
    return (
        <div className="otp-authentication-for-change-password-main-body">
        {/* Here will be basic header */}
      <Header />

      {/* Here will be OtpReceive card */}
      <OtpReceive/>

      {/* Here will be sign-up login footer */}
        </div>
     );
}
 
export default AuthenticationForChangePassword;