// import
import React from "react";
import Header from '../../components/HeaderForSignUpSignin';
import ChangePasswordComponent from "../../components/ChangePasswordCard";



const ChangePassword = () => {
    return (
     <div className="change-password-main-body">
     {/* Here will be basic header */}
      <Header />

        {/* Here will be ChangePassword card */}
        <ChangePasswordComponent/>

      {/* Here will be sign-up login footer */}
     </div>
     );
}
 
export default ChangePassword;