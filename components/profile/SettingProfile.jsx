/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// import * as
import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Image from 'next/image';
import DefaultAvatar from '../../public/assets/svg-files/avatars-light-mode.svg';
import DefaultOrgLogoPlaceholder from '../../public/assets/svg-files/logo-placeholder.svg';
import { useState, useEffect, useContext } from 'react';
import { db, storage, auth } from '../../firebase/clientApp';
import { v4 as uuid } from 'uuid';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { AuthContext } from "../../context/AuthContext";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";


// LightTooltip
const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 12,
  },
}));


const SettingProfile = () => {

    // Logged user data
    const { userData } = useContext(AuthContext);
   // Logged user data
      const loggedUserId = userData.userId;
    // User's store place ref
      const usersStorageRef =  db.collection('user').doc(loggedUserId);

    // 1-: Create useState variable 
      const [users_profile_cover, setUsers_profile_cover] = useState(''); // Profile cover
      const [users_profile_image, setUsers_profile_image] = useState(''); // Profile image
      const [users_first_name, setUsers_first_name] = useState(''); // Users first name
      const [users_last_name, setUsers_last_name] = useState(''); // Users last name
      const [users_email, setUsers_email] = useState(''); // Users email 
      const [users_number, setUsers_number] = useState(''); // Users number 
      const [users_birthday, setUsers_birthday ] = useState(''); // Users birthday 
      const [users_gender, setUsers_gender ] = useState(''); // Users gender 
      // Work information
      const [users_occupation, setUsers_occupation ] = useState(''); // Users occupation  
      const [users_company_name, setUsers_company_name ] = useState(''); // Users company name  
      const [users_company_logo, setUsers_company_logo] = useState(''); // Users company logo
      // Where user lived information 
      const [users_address, setUsers_address] = useState(''); // Users address 
      const [users_pin_code, setUsers_pin_code] = useState(''); // Users pin code 
      const [users_country, setUsers_country] = useState(''); // Users country 
      const [users_city, setUsers_city] = useState(''); // Users city 
      //  About
      const [users_about, setUsers_about] = useState(''); // Users_about
      const [users_marital_status, setUsers_marital_status] = useState(''); // Users marital status
      const [users_language, setUsers_language] = useState(''); // Users language

    // Function for store user's image in storage and save url in firestore in db
    function storeUserProfileImgCreateUrlIndb() {
        // Save images in storage
    const id = uuid();
        // Create reference bucket
        const userProfleCoverRef = storage.ref('user/users_profile_cover').child(id); // User profile cover
        const userProfleImageRef = storage.ref('user/users_profile_image').child(id); // User profile image
        const userCompanyLogoRef = storage.ref('user/users_company_logo').child(id); // User company logo

        // 
        if (users_profile_cover.length != 0) {  // Store the user profile cover
        const uploadTaskProfleCover = userProfleCoverRef.put(users_profile_cover);
        uploadTaskProfleCover.on(
            "state_changed",
            _snapshot => {},
            error => {
                console.log(error);
            },
            () => {
                    userProfleCoverRef
                    .getDownloadURL()
                    .then(userProfleCoverUrl => {
                // ------- Write
                    usersStorageRef
                    .update({
                    users_profile_cover_url: userProfleCoverUrl,
                })
                .then(()=>{
                    setUsers_profile_cover('');
                    console.log('====================================');
                    console.log("users_profile_cover has been storage");
                    console.log('====================================');
                })
                .catch((error)=>{
                    console.log('====================================');
                    console.log("Oh! shit we got error:" + error);
                    console.log('====================================');
                })
            });
        }
        )
        } else {
            // 
            console.log('====================================');
            console.log(users_profile_cover + "is empty");
            console.log('====================================');
        }
        // ----------------------
        if (users_profile_image.length != 0) { // Store the user profile image
        const uploadTaskProfleImage = userProfleImageRef.put(users_profile_image); 
        uploadTaskProfleImage.on(
            "state_changed",
            _snapshot => {},
            error => {
                console.log(error);
            },
            () => {
                    userProfleImageRef
                    .getDownloadURL()
                    .then(userProfleImageUrl => {
                // ------- Write
                    usersStorageRef
                    .update({
                    users_profile_image_url: userProfleImageUrl,
                })
                .then(()=>{
                    setUsers_profile_image('');
                    console.log('====================================');
                    console.log("users_profile_image has been storage");
                    console.log('====================================');
                })
                .catch((error)=>{
                    console.log('====================================');
                    console.log("Oh! shit we got error:" + error);
                    console.log('====================================');
                })
            });
        }
        )
        } else {
             // 
            console.log('====================================');
            console.log(users_profile_image + "is empty");
            console.log('====================================');
        }
        // ----------------------
        if (users_company_logo.length != 0) { // Store the user company logo
        const uploadTaskCompanyLogo = userCompanyLogoRef.put(users_company_logo); 
        uploadTaskCompanyLogo.on(
            "state_changed",
            _snapshot => {},
            error => {
                console.log(error);
            },
            () => {
                    userCompanyLogoRef
                    .getDownloadURL()
                    .then(usersCompanyLogo => {
                // ------- Write
                    usersStorageRef
                    .update({
                    users_company_logo_url: usersCompanyLogo,
                })
                .then(()=>{
                    setUsers_company_logo('');
                    console.log('====================================');
                    console.log("users_company_logo has been storage");
                    console.log('====================================');
                })
                .catch((error)=>{
                    console.log('====================================');
                    console.log("Oh! shit we got error:" + error);
                    console.log('====================================');
                })
            });
        }
        )
        } else {
             // 
            console.log('====================================');
            console.log(users_company_logo + "is empty");
            console.log('====================================');
       }
    }
    // Function for update user profile in db
    function updateUserProfile() {
        // users_first_name
        if (users_first_name.length != 0) {
            // Then save into db
            usersStorageRef
                .update({
                    users_first_name: users_first_name
                }).then(() => {
                    setUsers_first_name('');
                }).catch((error) => {
                    console.error("Error writing document: ", error);
                })
        }
        // users_last_name
        if (users_last_name.length != 0) {
            // Then save into db
            usersStorageRef
                .update({
                    users_last_name: users_last_name
                }).then(() => {
                    setUsers_last_name('');
                }).catch((error) => {
                    console.error("Error writing document: ", error);
                })
        }
        // users_email
        if (users_email.length != 0) {
            // Then save into db
            usersStorageRef
                .update({
                    users_email: users_email
                }).then(() => {
                    setUsers_email('');
                }).catch((error) => {
                    console.error("Error writing document: ", error);
                })

        }
        // users_number
        if (users_number.length != 0) {
            // Then save into db
            usersStorageRef
                .update({
                    users_number: users_number
                }).then(() => {
                    setUsers_number('');
                }).catch((error) => {
                    console.error("Error writing document: ", error);
                })
        }
        // users_birthday
        if (users_birthday.length != 0) {
            // Then save into db
            usersStorageRef
                .update({
                    users_birthday: users_birthday
                }).then(() => {
                    setUsers_birthday('');
                }).catch((error) => {
                    console.error("Error writing document: ", error);
                })
        }
        // users_gender
        if (users_gender.length != 0) {
            // Then save into db
            usersStorageRef
                .update({
                    users_gender: users_gender
                }).then(() => {
                    setUsers_gender('');
                }).catch((error) => {
                    console.error("Error writing document: ", error);
                })
        }
        // ------------- Work information ------------------
        // users_occupation
        if (users_occupation.length != 0) {
            // Then save into db
            usersStorageRef
                .update({
                    users_occupation: users_occupation
                }).then(() => {
                    setUsers_occupation('');
                }).catch((error) => {
                    console.error("Error writing document: ", error);
                })
        }
        // users_company_name
        if (users_company_name.length != 0) {
            // Then save into db
            usersStorageRef
                .update({
                    users_company_name: users_company_name
                }).then(() => {
                    setUsers_company_name('');
                }).catch((error) => {
                    console.error("Error writing document: ", error);
                })
        }
        // ---------------Where user lived information---------------
        // users_address
        if (users_address.length != 0) {
            // Then save into db
            usersStorageRef
                .update({
                    users_address: users_address
                }).then(() => {
                    setUsers_address('');
                }).catch((error) => {
                    console.error("Error writing document: ", error);
                })
        }
        // users_pin_code
        if (users_pin_code.length != 0) {
            // Then save into db
            usersStorageRef
                .update({
                    users_pin_code: users_pin_code
                }).then(() => {
                    setUsers_pin_code('');
                }).catch((error) => {
                    console.error("Error writing document: ", error);
                })
        }
        // users_country
        if (users_country.length != 0) {
            // Then save into db
            usersStorageRef
                .update({
                    users_country: users_country
                }).then(() => {
                    setUsers_country('');
                }).catch((error) => {
                    console.error("Error writing document: ", error);
                })
        }

        // users_city
        if (users_city.length != 0) {
            // Then save into db
            usersStorageRef
                .update({
                    users_city: users_city
                }).then(() => {
                    setUsers_city('');
                }).catch((error) => {
                    console.error("Error writing document: ", error);
                })
        }
        // --------------About------------------
        //  users_about
        if (users_about.length != 0) {
            // Then save into db
            usersStorageRef
                .update({
                    users_about: users_about
                }).then(() => {
                    setUsers_about('');
                }).catch((error) => {
                    console.error("Error writing document: ", error);
                })
        }
        //  users_marital_status
        if (users_marital_status.length != 0) {
            // Then save into db
            usersStorageRef
                .update({
                    users_marital_status: users_marital_status
                }).then(() => {
                    setUsers_marital_status('');
                }).catch((error) => {
                    console.error("Error writing document: ", error);
                })
        }

        //  users_language
        if (users_language.length != 0) {
            // Then save into db
            usersStorageRef
                .update({
                    users_language: users_language
                }).then(() => {
                    setUsers_language('');
                }).catch((error) => {
                    console.error("Error writing document: ", error);
                })
        } else (
            // Notification 
            alert('Data has been store')
        )
    }

    // -----------------------------THE END ------------------

    // HandleSubmit
    const handleSubmit = (event) => {
        event.preventDefault();
        // Function for store user's image in storage and save url in firestore in db
        storeUserProfileImgCreateUrlIndb();
        // Function for update user profile in db
        updateUserProfile();
}
    
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

    // ---------------- Handle edit button --------------

    // Handle edit profile cover button
    const handlEditProfileCover = () => {
        const ProfileCover = document.getElementById('ProfileCover');
        ProfileCover.click();
    }
    // Handle edit profile image button
    const handlEditProfileImage = () => {
        const ProfileImage = document.getElementById('ProfileImage');
        ProfileImage.click();
    }
    // Handle edit company logo button
    const handlEditCompanyLogo = () => {
        const CompanyLogo = document.getElementById('CompanyLogo');
        CompanyLogo.click();
    }
    // ---------------------
 // Set user cover image
    const setUserCoverImage = () => {
        if (users_profile_cover != "") {
            return (
                 <div className="visual-info-upload-art-cover visual-info-upload-art-cover-with-cover"
                 style={{ backgroundImage: "url(" + `${URL.createObjectURL(users_profile_cover)}` + ")"}}>
                    <input type="file" accept="image/*" id="ProfileCover" hidden="true"
                    onChange={(e)=>{setUsers_profile_cover(e.target.files[0])}}
                    />
                    <LightTooltip title="Add Cover Photo">
                    <div className="profile-setting-edit-button-icon">
                        <span className="material-icons-round edit-button-icon" role="button" onClick={handlEditProfileCover} >edit</span> 
                    </div>
                    </LightTooltip >
                </div>
            );
        } if (loggedUsers.users_profile_cover_url != "") {
            return (
                 <div className="visual-info-upload-art-cover visual-info-upload-art-cover-with-cover"
                 style={{ backgroundImage: "url(" + `${loggedUsers.users_profile_cover_url}` + ")"}}>
                    <input type="file" accept="image/*" id="ProfileCover" hidden="true"
                    onChange={(e)=>{setUsers_profile_cover(e.target.files[0])}}
                    />
                    <LightTooltip title="Add Cover Photo">
                    <div className="profile-setting-edit-button-icon">
                        <span className="material-icons-round edit-button-icon" role="button" onClick={handlEditProfileCover} >edit</span> 
                    </div>
                    </LightTooltip >
                </div>
            );
        } else {
        return (
             <div className="visual-info-upload-art-cover">
                    <input type="file" accept="image/*" id="ProfileCover" hidden="true"
                    onChange={(e)=>{setUsers_profile_cover(e.target.files[0])}}
                    />
                    <div>
                        <span className="material-icons-round">add_photo_alternate</span>
                        <h2>
                        <LightTooltip title="Add Photo">
                            <span role="button" onClick={handlEditProfileCover} >Upload a file</span> 
                        </LightTooltip >
                        or drag and drop</h2>
                        <h2>PNG, JPG, GIF up to 10MB</h2>
                    </div>
            </div>
        );
      }
    };

    // Set user profiles image
    const setUserProfileImage = () => {
        if (users_profile_image != "") {
            return (
                <img src={URL.createObjectURL(users_profile_image)} alt="Profile image" className="edit-user-profile"/>
            );
        } if (loggedUsers.users_profile_image_url != "") {
            return (
                <img src={loggedUsers.users_profile_image_url} alt="Profile image" className="edit-user-profile"/>
            );
        } else {
            return (
                <Image src={DefaultAvatar} layout="responsive" objectFit="cover" alt="Profile image" />
            );
        }
    };
    
    // Set user brand logo
    const setUserBrandLogo = () => {
        if (users_company_logo != "") {
            return (
                <img src={URL.createObjectURL(users_company_logo)}  className="edit-user-profile"/>
            );
        }   if (loggedUsers.users_company_logo_url != "") {
            return (
                <img src={loggedUsers.users_company_logo_url}  className="edit-user-profile"/>
            );
        } else {
            return (
                 <Image src={DefaultOrgLogoPlaceholder} layout="responsive" objectFit="cover" alt="Logo" />
            );
        }
    };

    
    return (
        <div className="profile-setting-base-container">
            <div className="profile-setting-container">
                <form onSubmit={handleSubmit}>
                    {/* visual information */}
                    <div className="visual-info-container">
                        {setUserCoverImage()}
                        <div>
                            <div className="visual-info-upload-user-avatar-container">
                                <div className="avatar">
                                    {setUserProfileImage()}
                                    <input type="file" accept="image/*" hidden="true" id="ProfileImage"
                                    onChange={(e)=>{setUsers_profile_image(e.target.files[0])}}
                                    />
                                    <LightTooltip title="Add your profile picture">
                                        <div className="profile-setting-edit-button-icon">
                                            <span className="material-icons-round"
                                            role="button" onClick={handlEditProfileImage} 
                                            >mode_edit</span>
                                        </div>
                                    </LightTooltip>
                                </div>
                                <div className="label">
                                    <h1>Profile Photo</h1>
                                    <h2>Select your best photo</h2>
                                    <h2>Accepted file type .png. Less than 1MB</h2>
                               </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    {/* Personal information */}
                    <div className="personal-info-container">
                        <h1>Personal information</h1>
                            <div>
                                <div>
                                    <span className="material-icons">account_circle</span>
                                    <input type="text" required 
                                    defaultValue={loggedUsers.users_first_name} placeholder="First Name"
                                    onChange={({target}) => setUsers_first_name(target.value)}
                                    />
                                </div>
                                <div>
                                    <input type="text" required placeholder="Last Name"
                                    defaultValue={loggedUsers.users_last_name}
                                     onChange={({target}) => setUsers_last_name(target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                            <div>
                                <span className="material-icons-round">email</span>
                                <input type="email" required placeholder="Email"
                                defaultValue={loggedUsers.users_email}
                                onChange={({target}) => setUsers_email(target.value)}
                                />
                            </div>
                            <div>
                                <span className="material-icons-round">call</span>
                                <input type="tel" required placeholder="Number"
                                defaultValue={loggedUsers.users_number}
                                onChange={({target}) => setUsers_number(target.value)}
                                />
                            </div>
                            </div>
                        <div>
                            <div id="brith-day-container">
                                <input type="date"
                                defaultValue={loggedUsers.users_birthday}
                                onChange={({target}) => setUsers_birthday(target.value)}
                                />
                            </div>
                                <div id="gender-container">
                                    <select name="gender"
                                    defaultValue={loggedUsers.users_gender}
                                    onChange={({target}) => setUsers_gender(target.value)}
                                    >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                        </div> 
                    </div>
                    <hr/>
                    {/* Work */}
                     <div className="personal-info-container">
                        <h1>Work</h1>
                            <div>
                                <div>
                                    <span className="material-icons-round">work</span>
                                    <input type="text" required placeholder="Occupation Role"
                                    defaultValue={loggedUsers.users_occupation}
                                    onChange={({target}) => setUsers_occupation(target.value)}
                                    />
                                </div>
                                <div>
                                    <span className="material-icons-round">business</span>
                                    <input type="text" required placeholder="Company name"
                                    defaultValue={loggedUsers.users_company_name}
                                    onChange={({target}) => setUsers_company_name(target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                         </div>
                        <div>
                      </div> 
                    </div>
                    <div className="org-logo-container">
                        <div className="label">
                            <h1>Upload your company or brand logo</h1>
                            <h4>PNG, JPG, GIF up to 10MB</h4>
                        </div>
                        <div>
                            <div className="logo-uploader-container">
                                <div>
                                    {setUserBrandLogo()}
                                    <input type="file" accept="image/*" hidden="true" id="CompanyLogo"
                                    onChange={(e)=>{setUsers_company_logo(e.target.files[0])}}
                                    />
                                        <LightTooltip title="Add your logo">
                                        <div>  
                                            <span className="material-icons-round"
                                            role="button" onClick={handlEditCompanyLogo} 
                                            >mode_edit</span>
                                        </div> 
                                        </LightTooltip>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    {/* Lived */}
                     <div className="personal-info-container">
                        <h1>Where you lived</h1>
                            <div>
                                <div>
                                    <span className="material-icons">location_city</span>
                                    <input type="text" required placeholder="Address"
                                    defaultValue={loggedUsers.users_address}
                                    onChange={({target}) => setUsers_address(target.value)}
                                    />
                                </div>
                                <div>
                                    <span className="material-icons">pin_drop</span>
                                    <input type="text" required placeholder="Pin code"
                                    defaultValue={loggedUsers.users_pin_code}
                                    onChange={({target}) => setUsers_pin_code(target.value)}
                                    />
                                </div>
                            </div>
                              <div>
                            <div id="gender-container">
                                <span className="material-icons-round">flag</span>
                                    <CountryDropdown
                                        value={users_country}
                                        onChange={(val) => setUsers_country(val)}/>
                                </div>
                            <div id="gender-container">
                                 <span className="material-icons-round">apartment</span>
                                <RegionDropdown
                                    defaultOptionLabel="Choose state"
                                    country={users_country}
                                    value={users_city}
                                    onChange={(val) => setUsers_city(val)}/>
                            </div>
                        </div> 
                            <div>
                        </div>
                        <div>
                    </div> 
                    </div>
                    <hr/>
                    {/* About */}
                     <div className="about-container">
                        <h1>About</h1>
                        <div className="about-element-container">
                            <textarea rows="8" cols="50" placeholder="Write about you"
                            defaultValue={loggedUsers.users_about}
                            onChange={({target}) => setUsers_about(target.value)}
                            />
                        </div>
                        <div>
                            <div className="marital-status-language-container">
                                <div>
                                    <select
                                    defaultValue={loggedUsers.users_marital_status}
                                    onChange={({target}) => setUsers_marital_status(target.value)}
                                    >
                                        <option value="single">Single</option>
                                        <option value="married">Married</option>
                                    </select>
                                </div>
                                <div>
                                    <select
                                    defaultValue={loggedUsers.users_language}
                                    onChange={({target}) => setUsers_language(target.value)}
                                    >
                                        <option value="single">English</option>
                                        <option value="married">Hindi</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Button */}
                    <div className="btn-container-for-setting-profile">
                        <button type="button" className="cancel-btn">Cancel</button>
                        <button type="submit" className="save-btn">Save</button>
                    </div>
                    {/* ---------------------- TODO ------------------ */}
                    {/* Career information */}
                    {/* Qualifications */}
                </form>
            </div>
        </div>
     );
}
 
export default SettingProfile;