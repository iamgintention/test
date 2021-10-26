/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useCallback } from "react"
import { useRouter } from "next/router"
import { auth } from "../../firebase/clientApp"
import { sendPasswordResetEmail } from "firebase/auth";


// --------------UI----------------------
// import file
// Import Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-brands-svg-icons';

const SendPasswordResetEmail = () => {
  const Router = useRouter()

  const resetPasswordHandler = useCallback(
    async (event) => {
      event.preventDefault()
      const { email } = event.target.elements
      try {
        await sendPasswordResetEmail(auth, email.value)
          alert("We have send verification email");
      } catch (error) {
        console.log("error")
        alert(error)
      }
    },
    [Router]
  )
  return (
    <div>
      <form onSubmit={resetPasswordHandler}>
        <h1 className="content-label">Reset Password</h1>
          <div className="input-field-container">
            <div className="input-field-box input-field-box-margin">
          <FontAwesomeIcon icon={faEnvelope} className="input-icon" size="lg" />
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="email"
            id="email"
            type="email"
            placeholder="Enter email"/>
            </div>      
          </div>
              {/* Reset Password button */}
            <button className="primary-button" type="submit">Reset Password</button>
      </form>
    </div>
  )
}

export default SendPasswordResetEmail
