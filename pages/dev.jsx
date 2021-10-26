/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback } from "react";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from 'react';
import { db, storage, auth } from '../firebase/clientApp';
import { v4 as uuid } from 'uuid';
import { AuthContext } from "../context/AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { sendEmailVerification } from "firebase/auth";
import AddUserInDb from "../users/AddUserInDb";

const Dev = () => {
    const user = auth.currentUser;
    const { userData } = useContext(AuthContext);
    // Logged user data
    // const [loggedUserId, setLoggedUserId] = useState('');
    // setLoggedUserId(user.email);
    console.log('User succesfully logged', userData.userId);

     db.collection("user").doc(userData.userId).set({
              name: "Los Angeles",
              state: "CA",
              country: "USA"
          })
          .then(() => {
              console.log("Document successfully written!");
          })
          .catch((error) => {
              console.error("Error writing document: ", error);
          });
        alert('User succesfully add', userData.userId);

    return (
        <>
        <h1>Hi</h1>
        </>
     );
}
 
export default Dev;