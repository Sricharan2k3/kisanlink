"use client"
import React, { useState, useRef, useEffect } from 'react';

const NavBarComponent = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRefs = {
    technology: useRef(null),
    farmers: useRef(null),
    organisations: useRef(null),
    sustainability: useRef(null),
    about: useRef(null),
  };

  // Close dropdown when clicking outside of any dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      for (const key in dropdownRefs) {
        if (dropdownRefs[key].current && !dropdownRefs[key].current.contains(event.target)) {
          setOpenDropdown((prev) => (prev === key ? null : prev));
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRefs]);

  const handleDropdownToggle = (id) => {
    if (openDropdown === id) {
      setOpenDropdown(null); // Close dropdown when clicking on the same dropdown button
    } else {
      setOpenDropdown(id); // Open dropdown when clicking on a dropdown button
    }
  };

  const isDropdownOpen = (id) => {
    return openDropdown === id;
  };

  console.log(openDropdown)

  return (
    <div className="min-[1100px]:border min-[1100px]:border-green max-w-fit ml-auto bg-white min-[1100px]:py-[0.75rem] min-[1100px]:px-7 flex-1 rounded-full flex-nowrap items-center min-[1100px]:gap-x-4 xl:gap-x-7 xl:py-3.5 justify-around min-[1100px]:flex 2xl:py-4 border-gray-800 relative">
      <div className="hidden min-[1100px]:block relative" data-headlessui-state="" ref={dropdownRefs.technology}>
        <button
          className="focus:outline-none text-base lg:text-[0.9rem] text-black flex flex-nowrap gap-1 items-center"
          type="button"
          aria-expanded={isDropdownOpen('technology')}
          onClick={() => handleDropdownToggle('technology')}
          id="headlessui-popover-button-technology"
        >
          Technology
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3.5"
            stroke="#163e33"
            className={`transition-all duration-300 ease-in-out w-3.5 h-3.5 xl:w-4 xl:h-4 ${isDropdownOpen('technology') ? 'transform rotate-180' : ''}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      
        {isDropdownOpen('technology') && (
          <div className="absolute bg-white mt-4 shadow-lg w-48 rounded-xl border border-gray-200 z-50">
            {/* For technology submenu content */}
            <div className='flex flex-col py-2'>
              <a href='/navbar' className='flex flex-col px-4 py-2 hover:bg-gray-100 rounded-lg'>
                <span className='text-gray-800 font-medium'>
                  SaaS Platform
                </span>
                <hr className='border-t-2 border-gray-200 mt-1 mb-2' />
              </a>
              <a href="/membership-cards" className='flex flex-col px-4 py-2 hover:bg-gray-100 rounded-lg '  onClick={() => setOpenDropdown('technology')}>
                <span className='text-gray-800 font-medium'>
                  Membership Card 
                </span>
                <hr className='border-t-2 border-gray-200 mt-1 mb-2' />
              </a>
              <a href="technology-links" className='flex flex-col px-4 py-2 hover:bg-gray-100 rounded-lg'>
                <span className='text-gray-800 font-medium'>
                  Ecommerce
                </span>
                <hr className='border-t-2 border-gray-200 mt-1 mb-2' />
              </a>
            </div>
          </div>
        )}
      </div>

      <div className="hidden min-[1100px]:block relative" data-headlessui-state="" ref={dropdownRefs.farmers}>
        <a href="/experience-center1"> 
          <button
            className="focus:outline-none text-base lg:text-[0.9rem] text-black flex flex-nowrap gap-1 items-center"
            type="button"
            id="headlessui-popover-button-farmers"
          >
            Experience Center
          </button>
        </a>
      </div>

      <div className="hidden min-[1100px]:block relative" data-headlessui-state="" ref={dropdownRefs.organisations}>
        <button
          className="focus:outline-none text-base lg:text-[0.9rem] text-black flex flex-nowrap gap-1 items-center"
          type="button"
          aria-expanded={isDropdownOpen('organisations')}
          onClick={() => handleDropdownToggle('organisations')}
          id="headlessui-popover-button-organisations"
        >
          Skill Training
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3.5"
            stroke="#163e33"
            className={`transition-all duration-300 ease-in-out w-3.5 h-3.5 xl:w-4 xl:h-4 ${isDropdownOpen('organisations') ? 'transform rotate-180' : ''}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
        {isDropdownOpen('organisations') && (
          <div className="absolute bg-white mt-4 shadow-lg w-48 rounded-xl border border-gray-200 z-50">
            {/* For organisations submenu content */}
            <div className='flex flex-col py-2'>
              <a href='/courses-and-certificates' className='flex flex-col px-4 py-2 hover:bg-gray-100 rounded-lg'>
                <span className='text-gray-800 font-medium'>
                  Agriculture Skill Training
                </span>
                <hr className='border-t-2 border-gray-200 mt-1 mb-2' />
              </a>
              <a href='/kisanlink-academy' className='flex flex-col px-4 py-2 hover:bg-gray-100 rounded-lg'>
                <span className='text-gray-800 font-medium'>
                  Kisanlink Academy
                </span>
                <hr className='border-t-2 border-gray-200 mt-1 mb-2' />
              </a>
            </div>
          </div>
        )}
      </div>

      <div className="hidden min-[1100px]:block relative" data-headlessui-state="" ref={dropdownRefs.sustainability}>
        <button
          className="focus:outline-none text-base lg:text-[0.9rem] text-black flex flex-nowrap gap-1 items-center"
          type="button"
          aria-expanded={isDropdownOpen('sustainability')}
          onClick={() => handleDropdownToggle('sustainability')}
          id="headlessui-popover-button-sustainability"
        >
          Stakeholders
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3.5"
            stroke="#163e33"
            className={`transition-all duration-300 ease-in-out w-3.5 h-3.5 xl:w-4 xl:h-4 ${isDropdownOpen('sustainability') ? 'transform rotate-180' : ''}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
        {isDropdownOpen('sustainability') && (
          <div className="absolute bg-white mt-4 shadow-lg w-48 rounded-xl border border-gray-200 z-50">
            {/* For sustainability submenu content */}
            <div className='flex flex-col py-2'>
              <a href='/our-partners' className='flex flex-col px-4 py-2 hover:bg-gray-100 rounded-lg'>
                <span className='text-gray-800 font-medium'>
                  Partners
                </span>
                <hr className='border-t-2 border-gray-200 mt-1 mb-2' />
              </a>
              <a href="/become-a-collaborator" className='flex flex-col px-4 py-2 hover:bg-gray-100 rounded-lg'>
                <span className='text-gray-800 font-medium'>
                  Collaborators
                </span>
                <hr className='border-t-2 border-gray-200 mt-1 mb-2' />
              </a>
              <a href="become-a-kisansathi" className='flex flex-col px-4 py-2 hover:bg-gray-100 rounded-lg'>
                <span className='text-gray-800 font-medium'>
                  Kisansathi
                </span>
                <hr className='border-t-2 border-gray-200 mt-1 mb-2' />
              </a>
            </div>
          </div>
        )}
      </div>

      <div className="hidden min-[1100px]:block relative" data-headlessui-state="" ref={dropdownRefs.about}>
        <button
          className="focus:outline-none text-base lg:text-[0.9rem] text-black flex flex-nowrap gap-1 items-center"
          type="button"
          aria-expanded={isDropdownOpen('about')}
          onClick={() => handleDropdownToggle('about')}
          id="headlessui-popover-button-about"
        >
          About us
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3.5"
            stroke="#163e33"
            className={`transition-all duration-300 ease-in-out w-3.5 h-3.5 xl:w-4 xl:h-4 ${isDropdownOpen('about') ? 'transform rotate-180' : ''}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
        {isDropdownOpen('about') && (
          <div className="absolute overflow-hidden bg-white mr-12 mt-4 shadow-lg w-48 rounded-xl border border-gray-200 z-50">
            {/* For about submenu content */}
            <div className='flex flex-col py-2'>
              <a href='#' className='flex flex-col px-4 py-2 hover:bg-gray-100 rounded-lg'>
                <span className='text-gray-800 font-medium'>
                  Solutions
                </span>
                <hr className='border-t-2 border-gray-200 mt-1 mb-2' />
              </a>
              <a href="/team" className='flex flex-col px-4 py-2 hover:bg-gray-100 rounded-lg'>
                <span className='text-gray-800 font-medium'>
                  Team
                </span>
                <hr className='border-t-2 border-gray-200 mt-1 mb-2' />
              </a>
              <a href="/our-brands" className='flex flex-col px-4 py-2 hover:bg-gray-100 rounded-lg'>
                <span className='text-gray-800 font-medium'>
                  Our Brands
                </span>
                <hr className='border-t-2 border-gray-200 mt-1 mb-2' />
              </a>
              <a href="/careers" className='flex flex-col px-4 py-2 hover:bg-gray-100 rounded-lg'>
                <span className='text-gray-800 font-medium'>
                  Careers
                </span>
                <hr className='border-t-2 border-gray-200 mt-1 mb-2' />
              </a>
            </div>
          </div>
        )}
      </div>

   
    </div>
    
  );
};

export default NavBarComponent;
