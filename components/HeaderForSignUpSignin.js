// gogomet.com
import { useTheme } from 'next-themes';
// Import Fontawesome
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/fontawesome-svg-core';
import {
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
// Import images here
import Image from 'next/image';
import gogometIcon from '../public/gogomet-icons.svg';

// import Swiper bundle with all modules installed
// import styles bundle
import 'swiper/css/bundle';
// import components

const HeaderForSignUpSigninIn = () => {
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

  return (
    <div>
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
              {/* <Link href="./signin">
              <button className="login-button">SIGN IN<FontAwesomeIcon icon="user" className="user-icon" size="lg"/> </button>
              </Link> */}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderForSignUpSigninIn;
