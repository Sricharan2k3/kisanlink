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
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const isDropdownOpen = (id) => {
    return openDropdown === id;
  };

  return (
    <div className="min-[1100px]:border min-[1100px]:border-green max-w-fit ml-auto bg-white min-[1100px]:py-[0.75rem] min-[1100px]:px-7 flex-1 rounded-full flex-nowrap items-center min-[1100px]:gap-x-4 xl:gap-x-7 xl:py-3.5 justify-around min-[1100px]:flex 2xl:py-4 border-gray-800">
      <div className="hidden min-[1100px]:block" data-headlessui-state="" ref={dropdownRefs.technology}>
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
          <div className="absolute bg-white mt-1 p-2 rounded-lg shadow-lg">
            {/* Technology submenu content */}
            <p>Technology submenu items go here...</p>
          </div>
        )}
      </div>

      <div className="hidden min-[1100px]:block" data-headlessui-state="" ref={dropdownRefs.farmers}>
        <button
          className="focus:outline-none text-base lg:text-[0.9rem] text-black flex flex-nowrap gap-1 items-center"
          type="button"
          aria-expanded={isDropdownOpen('farmers')}
          onClick={() => handleDropdownToggle('farmers')}
          id="headlessui-popover-button-farmers"
        >
          For farmers
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3.5"
            stroke="#163e33"
            className={`transition-all duration-300 ease-in-out w-3.5 h-3.5 xl:w-4 xl:h-4 ${isDropdownOpen('farmers') ? 'transform rotate-180' : ''}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
        {isDropdownOpen('farmers') && (
          <div className="absolute bg-white mt-1 p-2 rounded-lg shadow-lg">
            {/* For farmers submenu content */}
            <p>For farmers submenu items go here...</p>
          </div>
        )}
      </div>

      <div className="hidden min-[1100px]:block" data-headlessui-state="" ref={dropdownRefs.organisations}>
        <button
          className="focus:outline-none text-base lg:text-[0.9rem] text-black flex flex-nowrap gap-1 items-center"
          type="button"
          aria-expanded={isDropdownOpen('organisations')}
          onClick={() => handleDropdownToggle('organisations')}
          id="headlessui-popover-button-organisations"
        >
          For organisations
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
         <div className="absolute bg-white mt-4  shadow-lg w-48">
         {/* For organisations submenu content */}
         <div className='flex flex-col'>
           <span className='px-2 py-1'>
             Content 1
             <hr className='border-t-2 border-gray-200 mt-1 mb-2' />
           </span>
           <span className='px-2 py-1'>Content 2
           <hr className='border-t-2 border-gray-200 mt-1 mb-2' />
           </span>
           <span className='px-2 py-1'>Content 3
           <hr className='border-t-2 border-gray-200 mt-1 mb-2' />
           </span>
           <span className='px-2 py-1'>Content 4
         
           </span>
         </div>
       </div>
       
        )}
      </div>

      <div className="hidden min-[1100px]:block" data-headlessui-state="" ref={dropdownRefs.sustainability}>
        <button
          className="focus:outline-none text-base lg:text-[0.9rem] text-black flex flex-nowrap gap-1 items-center"
          type="button"
          aria-expanded={isDropdownOpen('sustainability')}
          onClick={() => handleDropdownToggle('sustainability')}
          id="headlessui-popover-button-sustainability"
        >
          Sustainability
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
          <div className="absolute bg-white mt-1 p-2 rounded-lg shadow-lg">
            {/* Sustainability submenu content */}
            <p>Sustainability submenu items go here...</p>
          </div>
        )}
      </div>

      <div className="hidden min-[1100px]:block" data-headlessui-state="" ref={dropdownRefs.about}>
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
          <div className="absolute bg-white mt-1 p-2 rounded-lg shadow-lg">
            {/* About us submenu content */}
            <p>About us submenu items go here...</p>
          </div>
        )}
      </div>

      <div className="flex gap-2 min-[1100px]:hidden">
        <button
          aria-label="Menu"
          type="button"
          className="rounded-full p-2 md:p-3 hover:bg-gray-200 outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#193C34"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NavBarComponent;
