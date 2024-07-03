"use client"
import React from 'react';
import NavBarComponent from './navbar1';
import LogoComponent from './logo';

const Header = () => {

  const redirectToLogin = () => {
    // Replace '/login' with the actual login page route
    const loginUrl = 'https://admin.kisanlink.in/#/account/login';
    window.open(loginUrl, '_blank');
  };

  return (
    <div className="flex justify-center items-center px-4 bg-green-200">
      <div className="flex justify-between items-center max-w-screen-2xl w-full">
        <LogoComponent />
        <NavBarComponent />
        <button
          className="ml-6 mr-3 px-4 py-2 rounded-full bg-green-500 text-white hover:bg-blue-600 focus:outline-none"
          onClick={redirectToLogin}
        >
          FPO Login
        </button>
      </div>
      <div class=" flex justify-center md:block">
        <a href="https://digicrop.ai">
            <button type="button" class="flex items-center justify-center w-36 text-white rounded-3xl h-8">
                
                <div>
                    <img src="./digicrop.png"></img>
                </div>
            </button>
        </a>
    </div>
    </div>
  );
};

export default Header;
