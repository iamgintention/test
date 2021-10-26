/* eslint-disable @next/next/no-img-element */
import React, { useCallback } from "react"
import { useRouter } from "next/router"

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../../firebase/clientApp"

// ----------------
// Import Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/fontawesome-svg-core';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


const GoogleSignIn = () => {
  const Router = useRouter()

  const loginHandler = useCallback(async () => {
    const provider = new GoogleAuthProvider()
    // additional scopes can be added as per requirement

    try {
      await signInWithPopup(auth, provider)
      Router.push("/")
    } catch (error) {
      console.log("error")
      alert(error)
    }
  }, [Router])
  return (
    <button type="button" className="google third-party-sign-up-sign-in-btn"
      onClick={loginHandler}>
    <FontAwesomeIcon icon={faGoogle} size="lg" className="third-party-brand-icons" />
   </button>
  )
}

export default GoogleSignIn
