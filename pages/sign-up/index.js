// import file
import React, { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useRouter } from "next/router"

// Import Fontawesome
import {} from '@fortawesome/fontawesome-svg-core';
import Header from '../../components/HeaderForSignUpSignin';
import SignUpCard from '../../components/SignupCard';

// Toast notification
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
  const { currentUser } = useContext(AuthContext)

  const Router = useRouter()

  if (currentUser) {
    Router.push("/profile")
    return <></>
  } else {
    return (
      <div className="sign-up-main-body">
        {/* Here will be header */}
        <Header />

        {/* Here will be sign up card */}
        <SignUpCard />

        {/* Here will be footer*/}

        {/*  */}
         <ToastContainer className="ToastContainer"/>
      </div>
    );
  };
};

export default SignUp;
