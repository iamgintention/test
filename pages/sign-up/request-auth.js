// import
import React from "react";
import Header from '../../components/HeaderForSignUpSignin';
import OtpAuth from "../../components/OtpAuthForSignUp"

const RequestAuth = () => {
  return (
    <div className="request-auth-main-body">
      {/* Here will be basic header */}
      <Header />

      {/* Here will be RequestAuth card */}
      <OtpAuth/>

      {/* Here will be sign-up login footer */}
    </div>
  );
};

export default RequestAuth;
