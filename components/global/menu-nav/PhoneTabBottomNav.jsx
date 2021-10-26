// import
import react from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faPlay, faUsers } from "@fortawesome/free-solid-svg-icons";

const PhoneTabBottomNav = () => {
    return (
        <>
            <div className="phone-tab-bottom-nav-base-element-container">
                <div>
                    <span className="material-icons-round phone-tab-bottom-nav-icon">smart_display</span>
                    <h6>Media</h6>
                </div>
                <div>
                    <FontAwesomeIcon icon={faUsers} className="phone-tab-bottom-nav-icon"/>
                    <h6>People</h6>
                </div>
                <div>
                    <span className="material-icons-round phone-tab-bottom-nav-icon">home</span>
                    <h6>Home</h6>
                </div>
                <div>
                    <FontAwesomeIcon icon={faComments} className="phone-tab-bottom-nav-icon"/>
                    <h6>Meet</h6>
                </div>
                <div>
                    <span className="material-icons-round phone-tab-bottom-nav-icon">apps</span>
                    <h6>More</h6>
                </div>
            </div>
        </>
     );
}
 
export default PhoneTabBottomNav;