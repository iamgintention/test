/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// import  
import React from "react";
import { useState, useEffect, useContext } from 'react';
import { db, storage, auth } from '../firebase/clientApp';
import { v4 as uuid } from 'uuid';
import { AuthContext } from "../context/AuthContext";


const AddUserInDb = () => {
    // Logged user data
      const { userData } = useContext(AuthContext);
    // Logged user data
      const loggedUserId = userData.userId;
    // User's store place ref
      const usersStorageRef =  db.collection("user").doc(loggedUserId);
      
    // Add user in db
    usersStorageRef
    .set({
        users_first_name: userData.userName,
        users_email: userData.userEmail,
        users_profile_image: userData.photoURL,
    })
    .then(() => {
        console.log("User's data successfull has been written in db");
        alert("User's data successfull has been written in db: ")
    })
    .catch((error) => {
        console.error("Error writing User's data in db: ", error);
        alert("Error writing User's data in db: ", error)
    });
      
}
 
export default AddUserInDb;