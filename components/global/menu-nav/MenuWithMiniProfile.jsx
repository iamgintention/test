// import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faSignOutAlt, faQuestionCircle, faCog } from '@fortawesome/free-solid-svg-icons';

import React, { useContext } from "react"

import { auth } from "../../../firebase/clientApp"
import { signOut } from "firebase/auth"


import { AuthContext } from "../../../context/AuthContext"

const MenuWithMiniProfile = () => {

    // Profile toggle
    function menuToggle() {
        const toggleMenu = document.querySelector('.global-nav-menu');
        toggleMenu.classList.toggle('active')
    }

   const { userData } = useContext(AuthContext)

  const signOutHandler = async () => {
    await signOut(auth)
  }
 
    return (
        <>
             <div className="action">
                        <div className="profile" onClick={menuToggle}>
                          <div>
                          <div className="user-activate-indicator"></div>
                          <img src={userData.userPhotoLink}/>
                          </div>
                        </div>
                        <div className="global-nav-menu">
                            {/* User profile */}
                            <div className="dropdown-user-profile-caontainer">
                              <div className="dropdown-user-profile-art-banner-caontainer"></div>
                              <div className="dropdown-user-profile-details-caontainer">
                                <div className="dropdown-user-profile-img-caontainer">
                                  <img src="https://i.pravatar.cc/45" alt="user-profile"  />
                                </div>
                                <div className="dropdown-user-identity-caontainer">
                                  <div><h1>Golira</h1><span className="material-icons dropdown-user-profile-verify-badge">verified</span></div>
                                  <div><h2>Programmer</h2></div>
                                  <div className="dropdown-user-profile-orginization-container"><h3>G-INTENTION</h3> <img src={userData.userPhotoLink} /> </div>
                                  {/* View profile button */}
                                  <button type="button" className="view-profile-btn">View Profile</button>
                                </div>
                              </div>
                            </div>
                            <hr/>
                            {/* Dropdwon global hedear menu */}
                             <div className="dropdwon-global-header-menu">
                                <div><FontAwesomeIcon icon={faCog} size="lg"  className="dropdwon-global-header-menu-icon" /><h1>Setting</h1></div>
                                <div><FontAwesomeIcon icon={faQuestionCircle} size="lg" className="dropdwon-global-header-menu-icon" /><h1>Help</h1></div>
                              <div onClick={signOutHandler}><FontAwesomeIcon icon={faSignOutAlt} size="lg"  className="dropdwon-global-header-menu-icon" flip="horizontal"/><h1>Log Out</h1></div>
                            </div>
                        </div>
              </div>
        </>
     );
}
 
export default MenuWithMiniProfile;