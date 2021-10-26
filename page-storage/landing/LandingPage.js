// gogomet.com
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useState } from 'react';
// One-Tap Signin with Google 
import { useGoogleOneTapLogin } from "react-google-one-tap-login";

// Import Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/fontawesome-svg-core';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
import {faFacebook,faInstagram,faLinkedin,faTwitter,faYoutube,} from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

// Import images here
import Image from 'next/image';
import gogometIcon from '../../public/gogomet-icons.svg';

// import Swiper 
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// import components
import ButtonForAccess from '../../components/GetAccessButton';
// import SVG files
import gintentionLogo from '../../public/g-intention.svg';

// Write just code from here
function LandingPage() {
  // Google one tap Signup / Signin 
    if (typeof window !== "undefined") {
      // ---
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [name, setName] = useState("");
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [email, setEmail] = useState("");
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [profilePicture, setProfilePicture] = useState("");

      // eslint-disable-next-line react-hooks/rules-of-hooks
      useGoogleOneTapLogin({
        onSuccess: (response) => {
          // When successfull Signin
          setName(response.given_name);
          setEmail(response.email);
          setProfilePicture(response.picture);

        },
        onError: (error) =>  console.log(error),
        googleAccountConfigs: {
          client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        },
      });
    
  };
  
  
  
  
  // This is for smooth scrolling
  const swiper = new Swiper('.swiper', {
    speed: 1000,
    mousewheel: {
      invert: true,
    },
    // autoplay: {
    //   delay: 5000,
    // },
    parallax: true,
    // Optional parameters
    direction: 'vertical',
    // loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

  // ----------------------------END HERE---------------------

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
    <div className="body-container">
      <head>
        <title>Gogomet</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <main>
        {/* Header */}
        <header className="header-component">
          <div className="header-container">
            <div className="header-left-grid">
              <div className="logo-caintainer">
                {/* Logo & label */}
             <div  className="gogomet-icon-container">
                <Image src={gogometIcon} layout="responsive" objectFit="cover" alt="Logo" className="gogomet-icon" />
            </div>
                <h1 className="header-gogomet-label">Gogomet</h1>
              </div>
            </div>
            <div className="header-right-grid">
              <div className="header-menu-container">
                {/* Dark/Lite Mode Button */}
                {ThemeChanger()}

                {/* Select-language-button  */}
                <button className="select-language-button">
                  {' '}
                  <FontAwesomeIcon
                    icon="globe-americas"
                    size="1x"
                    className="icon-styles select-language-button-icon"
                  />{' '}
                  ENGLISH
                </button>
                {/* Login-button */}
                <Link href="./sign-in">
                  <button className="login-button">
                    SIGN IN
                    <FontAwesomeIcon
                      icon="user"
                      className="user-icon"
                      size="lg"
                    />{' '}
                  </button>
                </Link>
               
              </div>
            </div>
          </div>
        </header>

        {/* <!-- Slider main container --> */}
        <div className="swiper">
          {/* <!-- Additional required wrapper --> */}
          <div className="swiper-wrapper">
            {/* <!-- Slides --> */}

            {/* Slide - 1 */}
            <div className="swiper-slide slide-1">
              {/* Main Component */}
              <div className="main-component">
                <div className="container">
                  {/* Copywriting Content */}
                  <div className="left-main-container-grid">
                    {/*Tag-line */}
                    <h1 className="call-to-action-line">As creator</h1>
                    {/* Slogans */}
                    <h5>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      nat
                    </h5>
                    <h5>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      nat
                    </h5>

                    {/* Get access button */}
                    <ButtonForAccess />
                  </div>

                  <div className="right-main-container-grid product-mockup-container">
                    {/* Product mockup whould be here */}
                    <img
                      src=".\assets\mockups\content-mockup\img-mockup-1.png"
                      className="img-mockup-1"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Slide - 2 */}
            <div className="swiper-slide slide-2">
              {/* Main Component */}
              <div className="main-component">
                <div className="container">
                  {/* Copywriting Content */}
                  <div className="left-main-container-grid product-mockup-container">
                    {/* Product mockup whould be here */}
                    <img
                      src=".\assets\mockups\content-mockup\img-mockup-2.png"
                      className="img-mockup-2"
                    />
                  </div>

                  <div className="right-main-container-grid">
                    {/*Tag-line */}
                    <h1 className="call-to-action-line">As creator</h1>
                    {/* Slogans */}
                    <h5>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      nat
                    </h5>
                    <h5>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      nat
                    </h5>

                    {/* Get access button */}
                    <ButtonForAccess />
                  </div>
                </div>
              </div>
            </div>

            {/* Slide - 3 */}
            <div className="swiper-slide slide-3">
              {/* Main Component */}
              <div className="main-component">
                <div className="container">
                  {/* Copywriting Content */}
                  <div className="left-main-container-grid">
                    {/*Tag-line */}
                    <h1 className="call-to-action-line">As creator</h1>
                    {/* Slogans */}
                    <h5>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      nat
                    </h5>
                    <h5>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      nat
                    </h5>

                    {/* Get access button */}
                    <ButtonForAccess />
                  </div>

                  <div className="right-main-container-grid product-mockup-container">
                    {/* Product mockup whould be here */}
                    <img
                      src=".\assets\mockups\content-mockup\img-mockup-3.png"
                      className="img-mockup-3"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Slide - 4 */}
            <div className="swiper-slide slide-4">
              {/* Main Component */}
              <div className="main-component">
                <div className="container">
                  {/* Copywriting Content */}
                  <div className="left-main-container-grid product-mockup-container">
                    {/* Product mockup whould be here */}
                    <img
                      src=".\assets\mockups\content-mockup\img-mockup-4.png"
                      className="img-mockup-4"
                    />
                    {/* <Image src={producMock} alt="Picture of the product" className="product-mock"/> */}
                  </div>

                  <div className="right-main-container-grid">
                    {/*Tag-line */}
                    <h1 className="call-to-action-line">As creator</h1>
                    {/* Slogans */}
                    <h5>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      nat
                    </h5>
                    <h5>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      nat
                    </h5>

                    {/* Get access button */}
                    <ButtonForAccess />
                  </div>
                </div>
              </div>
            </div>

            {/* Slide - 5 */}
            <div className="swiper-slide slide-5">
              {/* Main Component */}
              <div className="main-component">
                <div className="container">
                  {/* Copywriting Content */}
                  <div className="left-main-container-grid">
                    {/*Tag-line */}
                    <h1 className="call-to-action-line">As creator</h1>
                    {/* Slogans */}
                    <h5>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      nat
                    </h5>
                    <h5>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      nat
                    </h5>

                    {/* Get access button */}
                    <ButtonForAccess />
                  </div>

                  <div className="right-main-container-grid product-mockup-container">
                    {/* Product mockup whould be here */}
                    <img
                      src=".\assets\mockups\content-mockup\img-mockup-5.png"
                      className="img-mockup-5"
                    />
                    {/* <Image src={producMock} alt="Picture of the product" className="product-mock"/> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Slide - 6 */}
            <div className="swiper-slide slide-6">
              {/* Main Component */}
              <div className="main-component">
                <div className="container">
                  {/* Copywriting Content */}
                  <div className="left-main-container-grid product-mockup-container">
                    {/* Product mockup whould be here */}
                    <img
                      src=".\assets\mockups\content-mockup\img-mockup-6.png"
                      className="img-mockup-6"
                    />
                    {/* <Image src={producMock} alt="Picture of the product" className="product-mock"/> */}
                  </div>

                  <div className="right-main-container-grid">
                    {/*Tag-line */}
                    <h1 className="call-to-action-line">As creator</h1>
                    {/* Slogans */}
                    <h5>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      nat
                    </h5>
                    <h5>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      nat
                    </h5>

                    {/* Get access button */}
                    <ButtonForAccess />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- If we need pagination --> */}
          <div className="swiper-pagination"></div>
        </div>

        {/* Footer */}
        <footer className="footer-component">
          <div className="footer-parent">
            <div className="footer-container">
              <div className="footer-left-grid">
                {/* Call to action to download */}
                <div className="call-to-download-opations">
                  <div claasName="store-download-container">
                    {/* gogomet-labe and download badges  */}
                    <h4 className="gogomet-label">Gogomet</h4>
                    {/* badges */}
                    <dv className="store-download-badges">
                      <img
                        src="./googleplay.svg"
                        alt="Picture of the google play"
                        className="googleplay-badge store-download-badges-logo"
                      />
                      <img
                        src="./appstore.svg"
                        alt="Picture of the google play"
                        claasName="appstore store-download-badges-logo"
                        id="appstore"
                      />
                    </dv>
                  </div>

                  {/* QR code to hit the link */}
                  <div className="qrcode-container">
                    <h6>Get by scan</h6>
                    <img
                      alt=""
                      src="./qr-code.svg"
                      className="qr-code-symbol"
                    />
                   
                  </div>
                </div>
              </div>

              <div className="footer-right-grid">
                {/* Footer-menu-caintainer */}
                <div className="footer-menu-parent-caintainer">
                  {/* footer-menu-col-1 */}
                  <div className="footer-menu-col-1">
                    {/* Category Label */}
                    <h5 className="category-footer-label">Resources</h5>
                    {/* Navigation item */}
                    <div className="navigation-menu">
                      <div className="item-container navigation-menu-style">
                        <ul>
                          <li>Blog</li>
                          <li>Guide</li>
                        </ul>
                      </div>

                      <div className="navigation-menu-style">
                        <ul>
                          <li>Knowledge</li>
                          <li>Creator</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* footer-menu-col-2 */}
                  <div className="footer-menu-col-2">
                    {/* Category Label */}
                    <h5 className="category-footer-label">Get in touch</h5>
                    {/* Navigation item */}
                    <div className="navigation-menu">
                      <div className="item-container navigation-menu-style">
                        <ul>
                          <li>Contact</li>
                          <li>Press</li>
                        </ul>
                      </div>

                      <div className="navigation-menu-style">
                        <ul>
                          <li>Jobs</li>
                          <li>Item</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* footer-menu-col-3 */}
                  <div className="footer-menu-col-3">
                    {/* Category Label */}
                    <h5 className="category-footer-label">Legal</h5>
                    {/* Navigation item */}
                    <div className="navigation-menu">
                      <div className="item-container navigation-menu-style">
                        <ul>
                          <li>Company</li>
                          <li>Item</li>
                        </ul>
                      </div>

                      <div className="navigation-menu-style">
                        <ul>
                          <li>Item</li>
                          <li>Item</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="bottom-divider" />

            {/* Footer Bottom Caintainer */}
            <div className="footer-bottom-container">
              {/* Brand social icons */}
              <div className="left-footer-bottom-container-grid">
                <div className="social-brand-icon-container">
                  {/* icons */}
                  <FontAwesomeIcon
                    icon={faInstagram}
                    alt=""
                    src="./#"
                    className="social-brand-icon"
                  />
                  <FontAwesomeIcon
                    icon={faFacebook}
                    alt=""
                    src="./#"
                    className="social-brand-icon"
                  />
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    alt=""
                    src="./#"
                    className="social-brand-icon"
                  />
                  <FontAwesomeIcon
                    icon={faYoutube}
                    alt=""
                    src="./#"
                    className="social-brand-icon"
                  />
                  <FontAwesomeIcon
                    icon={faTwitter}
                    alt=""
                    src="./#"
                    className="social-brand-icon"
                  />
                </div>
              </div>
              <div className="center-footer-bottom-container-grid">
                {/* Copywrite */}
                <div className="copywrite-caintainer">
                  <FontAwesomeIcon
                    icon={faCopyright}
                    alt=""
                    src="./#"
                    className="fa-copyright"
                  />
                  <p className="copywrite-year">2021</p>
                  <Link href="https://www.g-intention.com/">
                   <div className="gintention-logo"><Image src={gintentionLogo} layout="responsive" objectFit="cover" alt="Logo" /> </div> 
                  </Link>
                </div>
              </div>
              {/* privacy-terms-condition  */}
              <div className="right-footer-bottom-container-grid">
                <div className="right-footer-bottom-container-menu">
                  {/* <p className="privacy_margin">Privacy</p> */}
                  <p>Terms & Condition</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
export default LandingPage;
