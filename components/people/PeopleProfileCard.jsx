/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
// import file
import React from "react"
// Import Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/fontawesome-svg-core';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-brands-svg-icons';
import {} from '@fortawesome/free-regular-svg-icons';
// ---------
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";
import { db, storage, auth } from '../../firebase/clientApp';
// import components from mui
import Avatar from '@mui/material/Avatar';
// 
import StyledBadge from "../render-components/data-display/StyledBadge";
// import svg
import HandshakeIcon from "../../public/assets/svg-files/Handshake";

const PeopleProfileCard = () => {
    
    // Logged user data
    const { userData } = useContext(AuthContext);
    // Logged user data
    const loggedUserEmail = userData.userEmail;
    // User's store place ref
    const usersStorageRef = db.collection('user').doc(loggedUserEmail);
    
    // ---------------- Read data from database --------------
    const [users, setUsers] = useState([]);

    useEffect(() => {

    // Get all users
        db.collection('user')
        .onSnapshot(snap => {
            const usersData = snap.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }));
            setUsers(usersData);
          });
    }, []);

    console.log('====================================');
    console.log("Users data:" + users);
    console.log('====================================');


    return (
        <>
            {users.map((user) => (
            <div className="people-profile-card-base">
                <div>
                            <div className="people-profile-details-base"
                            style={{ backgroundImage: "url(" + `${user.users_profile_cover_url}` + ")"}}>
                            <div className="people-profile-img-container">
                            <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                            >
                            <Avatar src={user.users_profile_image_url} alt="user-profile"
                                style={{
                                    height: '100px', width: '100px',
                                    border: '1px solid var(--secondary_color_900)',
                                }}
                            />
                             </StyledBadge>
                        </div>
                        <div>
                            <div className="people-profile-name-occupation-container">
                                <h1>{user.users_first_name}</h1>
                                <h2>{user.users_occupation}</h2>
                            </div>
                            <div className="people-profile-organization-container">
                                <img src={user.users_company_logo_url}/>
                                <h4>{user.users_company_name}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="people-profile-user-distence-activate-info-btn-container">
                        <div>
                        <div><h1>Acivate <span>0 hour</span>ago</h1></div>
                            <div className="people-profile-distence-container"><h1>{user.users_city}</h1> <FontAwesomeIcon icon={faMapMarkerAlt} /> </div>
                        </div>
                        <button type="button"> <HandshakeIcon height={24}/> <h1>Handshake</h1></button>
                    </div>
                </div>
            </div>
            ))}
        </>
     );
}
 
export default PeopleProfileCard;