// import
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell } from '@fortawesome/free-regular-svg-icons';
// import components
import MenuWithMiniProfile from "../global/menu-nav/MenuWithMiniProfile";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const EarlAccessMobileTabNav = () => {
    return (
        <>
            <div className="early-access-mobile-tab-nav">
                <MenuWithMiniProfile />
                <h1>Gogomet</h1>
                <div>
                   <span className="material-icons early-access-mobile-tab-nav-icon">notifications</span>
                   <span className="material-icons early-access-mobile-tab-nav-icon">search</span>
                </div>
            </div>
        </>
     );
}
 
export default EarlAccessMobileTabNav;