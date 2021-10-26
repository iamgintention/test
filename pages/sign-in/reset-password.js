// import
import React from "react";
import Header from '../../components/HeaderForSignUpSignin';
import ResetPasswordCard from '../../components/ResetPassword';

const ResetPassword = () => {
  return (
    <div className="reset-password-main-body">
      {/* Here will be basic header */}
      <Header />

      {/* Here will be ResetPassword card */}
      <ResetPasswordCard/>

      {/* Here will be sign-up login footer */}
    </div>
  );
};

export default ResetPassword;
