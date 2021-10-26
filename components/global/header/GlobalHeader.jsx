// Import
import Link from 'next/link';
import Image from 'next/image';
import gogometIcon from '../../../public/gogomet-icons.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faHome, faPlay, faComment, faCommentAlt, faUsers, faBell, faMoon, faTh, faThLarge, faSun, faSignOutAlt, faQuestionCircle, faCog, faEdit, faInbox, faMicrophone, faSearch, faUser, faComments } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from 'next-themes';
import { useState } from 'react';

import React, { useContext } from "react"

import { auth } from "../../../firebase/clientApp"
import { signOut } from "firebase/auth"

import AuthRoute from "../../../HOC/authRoute"

import { AuthContext } from "../../../context/AuthContext"

import MenuWithMiniProfile from "../menu-nav/MenuWithMiniProfile";



// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const GlobalHeader = () => {
  
    // Write the code for theme
  const { systemTheme, theme, setTheme } = useTheme();

  const ThemeChanger = () => {
    const currentTheme = theme === 'system' ? 'systemTheme' : theme;
    console.log(currentTheme);

    if (currentTheme === 'dark') {
      return (
        <button
          type="button"
          onClick={() => setTheme('light')}
          className="dark-light-mode-toggle"
        >
          <FontAwesomeIcon icon={faSun} size="lg" vertical-align="middle" />
        </button>
      );
    } else {
      return (
        <button
          type="button"
          onClick={() => setTheme('dark')}
          className="dark-light-mode-toggle"
        >
          <FontAwesomeIcon
            type="button"
            icon={faMoon}
            size="lg"
            vertical-align="middle"
          />
        </button>
      );
    }
  };
  // ----------------------------END HERE---------------------

    return (
        <>
            {/* Main header base*/}
            <div className="global-header">
                <div className="global-header-main-div">
                <div className="global-header-left-container">
                        {/* Logo */}
                    <Image src={gogometIcon} alt="Logo" className="nav-g-header-logo-icon" />
                    {/* Search bar */}
                    <div className="nav-search-bar">
                        <span className="material-icons-round header-nav-icon">search</span>
                        <input
                        placeholder="Search"
                        />
                        <span className="material-icons-round header-nav-icon">mic</span>
                </div>
                </div>
                </div>
                <div className="global-header-main-div">
                <div className="global-header-right-container">
                  <ul>
                      <li><ThemeChanger/></li>
                      <li><MenuWithMiniProfile/></li>
                        <li><span className="material-icons-round  header-nav-icon">notifications</span><span className="nav-menu-label">Notification</span></li>
                        <li><span className="material-icons-round header-nav-icon">apps</span><span className="nav-menu-label">More</span></li>
                        <li><FontAwesomeIcon icon={faComments} className="header-nav-icon"/><span className="nav-menu-label">Meet</span></li>
                        <li><span className="material-icons-round play-icon">smart_display</span><span className="nav-menu-label">Media</span></li>
                        <li><FontAwesomeIcon icon={faUsers} className="header-nav-icon"/><span className="nav-menu-label">People</span></li>
                        <li><span className="material-icons-round header-nav-icon">home</span>   <span className="nav-menu-label">Home</span></li>
                    </ul>
                </div>
                </div>
            </div>
        </>
     );
}
 
export default GlobalHeader;