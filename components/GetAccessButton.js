// import
import React from "react";
import Link from 'next/link';

const GetAccessButton = () => {
  return (
    <div className="get-early-access-caintainer">
      {/* Get early access */}
      <Link href="./sign-up">
        <button className="get-early-access-button">Get early access</button>
      </Link>

      {/* Get-the-link */}
      <div className="get-the-link-container">
        <div className="input-container">
          {/* number-input-box */}
          <div className="number-input-box-to-get-download-caintainer">
            {/* Country picker*/}
            <div className="country-picker">
              <div className="country-picker-indicator">
                {/* Flag */}

                <img src=".\IN.svg" alt="Picture of the India Flag" />

                <p>+91</p>
              </div>
            </div>
          </div>

          {/* number-input-box */}
          <div className="number-input-box"></div>
        </div>

        {/* Button to get download link via message */}
        <button className="get-link-btn">Get the link</button>
      </div>
    </div>
  );
};

export default GetAccessButton;
