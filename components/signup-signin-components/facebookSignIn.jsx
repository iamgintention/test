import React, { useCallback } from "react"
import { useRouter } from "next/router"

import { FacebookAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../../firebase/clientApp"

// ----------------
// Import Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/fontawesome-svg-core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';



const FacebookSignIn = () => {
  const Router = useRouter()

  const loginHandler = useCallback(async () => {
    const provider = new FacebookAuthProvider()

    provider.addScope("public_profile")

    // additional scopes can be added as per requirement
    try {
      const result = await signInWithPopup(auth, provider)
      console.log(result)
      Router.push("/")
    } catch (error) {
      console.log("error")
      alert(error)
    }
  }, [Router])
  return (
    <button
      className="third-party-sign-up-sign-in-btn"
      onClick={loginHandler}>
      <FontAwesomeIcon icon={faFacebook} size="lg" className="third-party-brand-icons"/>
    </button>
  )
}

export default FacebookSignIn
