import React, { useEffect, useState } from "react";
import SVGComponent from "./svg";
import SVGComponent1 from "./svg1";
import Farmers from "./svg2";
import Output from "./svg3";
import Security from "./svg4";
import Payment from "./svg5";

const BlogsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 11.25h15M4.5 11.25c0-1.518 1.232-2.75 2.75-2.75h9.5c1.518 0 2.75 1.232 2.75 2.75v7.5H4.5v-7.5zM12 11.25v9M8.25 11.25c-.621 0-1.125-.504-1.125-1.125S7.629 9 8.25 9c.207 0 .405.06.576.17a1.125 1.125 0 001.798-.465 1.125 1.125 0 012.124 0 1.125 1.125 0 001.798.465c.171-.11.369-.17.576-.17.621 0 1.125.504 1.125 1.125s-.504 1.125-1.125 1.125M7.5 6.75c.621 0 1.125-.504 1.125-1.125S8.121 4.5 7.5 4.5 6.375 5.004 6.375 5.625 6.879 6.75 7.5 6.75zM10.5 7.5c.621 0 1.125-.504 1.125-1.125S11.121 5.25 10.5 5.25 9.375 5.754 9.375 6.375 9.879 7.5 10.5 7.5zM13.5 6.75c.621 0 1.125-.504 1.125-1.125S14.121 4.5 13.5 4.5s-1.125.504-1.125 1.125.504 1.125 1.125 1.125zM16.5 7.5c.621 0 1.125-.504 1.125-1.125S17.121 5.25 16.5 5.25 15.375 5.754 15.375 6.375 15.879 7.5 16.5 7.5z"
    />
  </svg>
);

const ServicesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 3.75h10.5M6.75 6.75h10.5M6.75 9.75h10.5M6.75 12.75h10.5M6.75 15.75h4.5m-3.375 3.75h6.75M3.75 3.75h16.5v16.5H3.75z"
    />
  </svg>
);

const navItems = [
  { name: "Farms", icon: <SVGComponent />, href: "#farms" },
  { name: "Products", icon: <BlogsIcon />, href: "#products" },
  { name: "Billing", icon: <ServicesIcon />, href: "#billing" },
  { name: "Output", icon: <Output />, href: "#outputpurchase" },
  { name: "Inventory", icon: <SVGComponent1 />, href: "#inventory" },
  { name: "Payments", icon: <Payment />, href: "#payments" },
  { name: "Farmers", icon: <Farmers />, href: "#farmers" },
  { name: "Security", icon: <Security />, href: "#datasecurity" },
];

const NavBar = ({ activeSection, handleSmoothScroll }) => {
  return (
    <nav className="fixed flex justify-center  my-5 py-2 items-center ml-64 bg-gray-700 rounded-3xl">
      <ul className="flex gap-3 py-1 px-5 ">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              onClick={handleSmoothScroll}
              className={`gap-2 items-center text-white flex transition-all ease-in-out py-3 px-3 rounded-3xl hover:bg-blue-600 cursor-pointer ${
                activeSection === item.href.substring(1) ? "bg-blue-600" : ""
              }`}
            >
              {item.icon}
              <span className="px-2 w-16">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
