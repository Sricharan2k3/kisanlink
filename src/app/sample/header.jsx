"use client"
import React from 'react';
import NavBarComponent from './navbar1';
import LogoComponent from './logo';
import VideoContainer from '../navbar/video';
import { usePathname } from 'next/navigation';




const Header = () => {
  const pathname = usePathname();
const isHomePage = pathname === '/';



  const redirectToLogin = () => {
    const loginUrl = 'https://admin.kisanlink.in/#/account/login';
    window.open(loginUrl, '_blank');
  };

  return (
    <div className="relative ">
      
      {/* Header Container */}
      <div className={`fixed top-0 left-0 w-full z-50 max-h-20 flex justify-center items-center px-4 ${isHomePage 
? 'bg-transparent' 
: 'bg-white shadow-md'}`}>
      <div className="flex justify-between items-center  max-w-screen-2xl w-full">
          <LogoComponent />
          <NavBarComponent />
          <button
            className=" small:hidden lg:block lg:ml-1 lg:-mr-4  medium:-mr-1 lg:px-4 lg:py-2 lg:rounded-full text-sm bg-background text-black hover:bg-[#faca9a] focus:outline-none"
            onClick={redirectToLogin}
          >
            FPO/Corporate Login
          </button>
          {/* <div class=" flex justify-center -ml-2 md:block">
        <a href="https://digicrop.ai">
            <button type="button" class="flex items-center justify-center w-36 text-white rounded-3xl h-8">
                
                <div>
                    <img src="./digicrop.png"></img>
                </div>
            </button>
        </a>
    </div> */}
        </div>
        
      </div>

      {/* Additional Button Below */}
       

    
    </div>
  );
};

export default Header;
