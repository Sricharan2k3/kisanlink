"use client"
import React, { useState } from 'react';

const NavBarComponent = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  const isDropdownOpen = (id) => {
    return openDropdown === id;
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  // Handle clicking outside of any dropdown to close
  const handleClickOutside = (event) => {
    if (!event.target.closest('.dropdown-container')) {
      closeDropdown();
    }
  };

  // Attach click event listener on mount
  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Redirect function for FPO Login
  const redirectToLogin = () => {
    // Replace '/login' with the actual login page route
    const loginUrl = 'https://admin.kisanlink.in/#/account/login';
    window.open(loginUrl, '_blank');
  };

  return (
    <div className="flex justify-center">
      <div className="min-[1100px]:border min-[1100px]:border-green max-w-fit ml-auto bg-white min-[1100px]:py-[0.75rem] min-[1100px]:px-7 flex-1 rounded-full flex-nowrap items-center min-[1100px]:gap-x-4 xl:gap-x-7 xl:py-3.5 justify-around min-[1100px]:flex 2xl:py-4 border-gray-800 relative">
        <Dropdown
          title="Technology"
          isOpen={isDropdownOpen('technology')}
          onClick={() => handleDropdownToggle('technology')}
          links={[
            { label: 'SaaS Platform', href: '/navbar' },
            { label: 'Membership Card', href: '/membership-cards' },
            { label: 'Ecommerce', href: '/technology-links' },
          ]}
        />

        <Dropdown
          title="Experience Center"
          onClick={() => handleDropdownToggle('experience')}
          isOpen={isDropdownOpen('experience')}
          links={[{ label: 'Experience Center', href: '/experience-center1' }]}
        />

        <Dropdown
          title="Skill Training"
          isOpen={isDropdownOpen('organisations')}
          onClick={() => handleDropdownToggle('organisations')}
          links={[
            { label: 'Agriculture Skill Training', href: '/courses-and-certificates' },
            { label: 'Kisanlink Academy', href: '/kisanlink-academy' },
          ]}
        />

        <Dropdown
          title="Stakeholders"
          isOpen={isDropdownOpen('sustainability')}
          onClick={() => handleDropdownToggle('sustainability')}
          links={[
            { label: 'Partners', href: '/our-partners' },
            { label: 'Collaborators', href: '/become-a-collaborator' },
            { label: 'Kisansathi', href: '/become-a-kisansathi' },
          ]}
        />

        <Dropdown
          title="About Us"
          isOpen={isDropdownOpen('about')}
          onClick={() => handleDropdownToggle('about')}
          links={[
            { label: 'Solutions', href: '#' },
            { label: 'Team', href: '/team' },
            { label: 'Our Brands', href: '/our-brands' },
            { label: 'Careers', href: '/careers' },
          ]}
        />

        {/* Placeholder for Contact dropdown */}
        <Dropdown
          title="Contact Us"
          isOpen={isDropdownOpen('contact')}
          onClick={() => handleDropdownToggle('contact')}
          links={[
            { label: 'Information', href: '/contact-information' },
            { label: 'Partnership', href: '/partnership-inquiry' },
          ]}
        />
      </div>

      <button
        className="ml-16 px-4 py-2 rounded-full bg-green-500 text-white hover:bg-blue-600 focus:outline-none"
        onClick={redirectToLogin}
      >
        FPO Login
      </button>
    </div>
  );
};

const Dropdown = ({ title, isOpen, onClick, links }) => {
  return (
    <div className="hidden min-[1100px]:block relative dropdown-container">
      <button
        className={`dropdown-button focus:outline-none text-base lg:text-[0.9rem] text-black flex flex-nowrap gap-1 items-center ${isOpen ? 'active' : ''}`}
        onClick={onClick}
      >
        {title}
        <svg
          className={`dropdown-icon transition-all duration-300 ease-in-out w-3.5 h-3.5 xl:w-4 xl:h-4 ${isOpen ? 'transform rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3.5"
          stroke="#163e33"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute bg-white mt-4 shadow-lg w-48 rounded-xl border border-gray-200 z-50 dropdown-menu">
          {/* Dropdown menu links */}
          {links.map((link, index) => (
            <a key={index} href={link.href} className="flex flex-col px-4 py-2 hover:bg-gray-100 rounded-lg">
              <span className="text-gray-800 font-medium">{link.label}</span>
              <hr className="border-t-2 border-gray-200 mt-1 mb-2" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBarComponent;
