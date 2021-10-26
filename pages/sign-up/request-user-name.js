// import
import React from "react";
import Header from '../../components/HeaderForSignUpSignin';
import UserBasicInfoCard from "../../components/UserBasicInfo";

const RequestUserName = () => {
  return (
    <div className="request-user-info-main-body">
      {/* Here will be basic header */}
      <Header />

      {/* Here will be RequestUserName card */}
      <UserBasicInfoCard/>


      {/* Here will be sign-up login footer */}
    </div>
  );
};

export default RequestUserName;
