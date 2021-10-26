import React, { useContext } from "react"
import { AuthContext } from "..//../context/AuthContext"
import { useRouter } from "next/router"

import Header from '../../components/HeaderForSignUpSignin';
import SigInCard from '../../components/SigninCard';

const SigIn = () => {
  const { currentUser } = useContext(AuthContext)

  const Router = useRouter()

  if (currentUser) {
    Router.push("/profile")
    return <></>
  } else {
    return (
      <div className="sign-in-main-body">
        {/* Here will be header */}
        <Header />

        {/* Here will be sign in card */}
        <SigInCard />

        {/* Here will be footer*/}
      </div>
    );
  }
};

export default SigIn;
