/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useCallback } from "react";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from 'react';
import { db, storage, auth } from '../../firebase/clientApp';
import { v4 as uuid } from 'uuid';
import { AuthContext } from "../../context/AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { sendEmailVerification } from "firebase/auth";
import AddUserInDb from "../../users/AddUserInDb";
// --------------UI----------------------
// import file
// Import Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Material Icon 
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

// Toast notification
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmailPasswordAuthSignUp = () => {

  // Toast notification
  function signupError() {
    toast.error("Please enter correct info", {
      position: "top-right",
      hideProgressBar: true,
    });
  }

  const Router = useRouter()
 
  // Create a new user
  const signupHandler = useCallback( async (event) => {
      console.log("signupHandler called")
      event.preventDefault()
      const { email, password } = event.target.elements
      try {
        console.log(email.value, password.value);
        await createUserWithEmailAndPassword(auth, email.value, password.value);
        await sendEmailVerification(auth.currentUser)
        alert("We have sent verification email please verify your email");
        Router.push("/profile");
      }
      catch (error) {
      // alert(error)
      {signupError()}
      }
    },
    [Router]
  )

  // ------------------
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  
  return (
    <>
      <div>
      <form onSubmit={signupHandler}>
        <h1 className="content-label">Sign up</h1>
        <div className="input-field-container">

          <div className="input-field-box input-field-box-margin">
            <FontAwesomeIcon icon={faEnvelope} className="input-icon" size="lg" />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              id="email"
              type="email"
              placeholder="Enter email" />
          </div>

          <div className="input-field-box">
            <input
              className=""
              name="password"
              id="password"
              placeholder="●●●●●●●●"
              type={values.showPassword ? "text" : "password"}
              onChange={handlePasswordChange("password")}
              value={values.password} />
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
            {values.showPassword ? <Visibility sx={{fontSize: '5rem'}} /> : <VisibilityOff sx={{fontSize: '5rem'}} />}
            </IconButton>
          </div>
        </div>
        {/* SignUp button */}
        <button className="primary-button" type="submit">Sign Up</button>
        {/* Terms & Condition */}
        <p className="basic-terms">
          By clicking Agree & Join, you agree to the Gogomet User Agreement,
          Privacy Policy, and Cookie Policy.
        </p>
        {/* Divider */}
        <div className="divider">
          <hr />
          <p>OR</p>
          <hr />
        </div>
      </form>
      </div>
    </>
  )
}

export default EmailPasswordAuthSignUp
