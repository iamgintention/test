/* eslint-disable @typescript-eslint/no-unused-vars */
// import file
import React from "react"
// Import Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/fontawesome-svg-core';
import { faPen, faCheckCircle, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';
import Avatar from '@mui/material/Avatar';
import StyledBadge from "../render-components/data-display/StyledBadge";
// import SVG files
import EmptyState from "../../public/assets/illustration/EmptyState";
// import components
import ProfileEditButton from "../global/profile/ProfileEditButton";
// ---------
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";
import { db, storage, auth } from '../../firebase/clientApp';



const ProfileCard = () => {

    // Logged user data
    const { userData } = useContext(AuthContext);
    // Logged user data
      const loggedUserId = userData.userId;
    // User's store place ref
      const usersStorageRef =  db.collection('user').doc(loggedUserId);
    
    // ---------------- Read data from database --------------
    const [loggedUsers, setLoggedUsers] = useState([]);

    useEffect(() => {

    // Get realtime updates 
        usersStorageRef
        .onSnapshot((doc) => {
        const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
        console.log(source, " data: ", doc.data());
        setLoggedUsers(doc.data());
        });
        
    }, []);
    

    return (
        <>
            <div className="profile-card-base-play-ground">
                {/* Profile container */}
                <div className="profile-container">
                    <div className="profile-banner-art-container"
                    style={{ backgroundImage: "url(" + `${loggedUsers.users_profile_cover_url}` + ")"}}>
                        <div className="banner-art-edit">
                        <FontAwesomeIcon icon={faPen} className="banner-art-edit-icon"/>
                        </div>
                    </div>
                    {/* Profile details */}
                    <div className="user-primary-info-container">
                            <div className="user-primary-img-container">
                            <div></div>
                            <img src={loggedUsers.users_profile_image_url} className="user-avatar-img"/>
                            </div>
                            {/* Profile edit button */}
                            <ProfileEditButton/>
                            <div className="user-info-container">
                            <div className="user-name-and-verified-badeg">
                                <h1>{loggedUsers.users_first_name} {loggedUsers.users_last_name}</h1>
                                <span className="material-icons user-varified-badeg">verified</span>
                            </div>
                            <div className="users-occupation">
                                <h1>{loggedUsers.users_occupation}</h1>
                            </div>
                            <div className="user-adress-contact-info">
                                <h1>{loggedUsers.users_country}</h1>
                                &#8226; 
                                <h2>{loggedUsers.users_city}</h2>
                            </div>
                            <div className="user-follower-handshaker">
                                <h1><span>0</span>Followers</h1>
                                &#8226; 
                                <h2><span>0</span>Handshakers</h2>
                            <div className="occupation-organization-brand-container">
                            <img src={loggedUsers.users_company_logo_url}  alt="logo"/>
                            <h1>{loggedUsers.users_company_name}</h1>
                        </div>
                            </div>
                        </div>
                    </div>
                    {/* Profile cards container for About card | Engagement card | Activities Overview Card | Content Overview Card*/}
                    <div className="profile-dashboard-container">
                        {/* About card */}
                        <div className="about-user-container">
                        <h1>About</h1>
                        <h5>{loggedUsers.users_about}<span>See more</span></h5>
                    
                    
                        </div>
                        {/* Engagement card */}
                        <div className="engagement-card">
                            <h1>Engagement</h1>
                            <div className="engagement-content">
                                <div className="posts-counter">
                                    <h5>0</h5>
                                    <h1>Post</h1>
                                </div>
                               <div className="engagement-content-divider"></div>
                             <div className="subscribers-counter">
                                    <h5>0</h5>
                                    <h1>Subscribers</h1>
                                </div>
                               <div className="engagement-content-divider"></div>
                             <div className="following-counter">
                                    <h5>0</h5>
                                    <h1>Following</h1>
                                </div>
                            </div>
                        </div>
                        {/* Activities Overview Card */}
                        <div className="activities-overview-card">
                            <h1>Activities</h1>
                            <div className="activities-overview-container">
                                <EmptyState height={200} className="empty-state-illustration" />
                                <hr/>
                                <h4>See all activities</h4>
                             </div>
                        </div>
                         {/* Content Overview Card */}
                        <div className="content-overview-card">
                            <h1>Content</h1>
                            <FontAwesomeIcon icon={faPlusSquare} className="add-content-btn"/>
                            <div className="content-overview-card-tap">
                                <div className="tabs-btn-container">
                                    <h5 id="tabs-btn-highlight-label-active">Video</h5>
                                    <div className="tabs-btn-highlight-line" id="tabs-btn-highlight-line-active"></div>
                                </div>
                                <div className="tabs-btn-container">
                                    <h5>Audio</h5>
                                    <div className="tabs-btn-highlight-line"></div>
                                </div>
                                <div className="tabs-btn-container">
                                    <h5>Talents</h5>
                                    <div className="tabs-btn-highlight-line"></div>
                                </div>
                                <div className="tabs-btn-container">
                                    <h5>Text</h5>
                                    <div className="tabs-btn-highlight-line"></div>
                                </div>
                            </div>
                            <div className="content-overview-container">
                                <EmptyState height={200} className="empty-state-illustration" />
                                <hr />
                                <h4>See all contents</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ProfileCard;