"use client"
import React from 'react';
import NavBarComponent from './navbar1';
import LogoComponent from './logo';
import VideoContainer from '../navbar/video';

const Header = () => {

  const redirectToLogin = () => {
    const loginUrl = 'https://admin.kisanlink.in/#/account/login';
    window.open(loginUrl, '_blank');
  };

  return (
    <div className="relative">
      {/* Header Container */}
      <div className="fixed top-0 -mt-8 left-0 w-full z-50 bg-transparent flex justify-center items-center px-4 py-2">
        <div className="flex justify-between items-center max-w-screen-2xl w-full">
          <LogoComponent />
          <NavBarComponent />
          <button
            className="ml-1 mr-1 px-4 py-2 rounded-full bg-brown-700 text-white hover:bg-blue-600 focus:outline-none"
            onClick={redirectToLogin}
          >
            FPO Login
          </button>
          <div class=" flex justify-center -ml-2 md:block">
        <a href="https://digicrop.ai">
            <button type="button" class="flex items-center justify-center w-36 text-white rounded-3xl h-8">
                
                <div>
                    <img src="./digicrop.png"></img>
                </div>
            </button>
        </a>
    </div>
        </div>
        
      </div>

      {/* Additional Button Below */}
       

    
    </div>
  );
};

export default Header;
