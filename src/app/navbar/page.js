"use client";
import React, { useEffect, useState } from "react";
import { FarmsDemo } from "../components/farms";
import { BentoGridFirst } from "../components/grid1";
import SVGComponent from "./svg";
import SVGComponent1 from "./svg1";
import Farmers from "./svg2";
import Output from "./svg3";
import Security from "./svg4";
import Payment from "./svg5";
import { ProductsDemo } from "../components/products";
import { BillingDemo } from "../components/billing";
import { PaymentsDemo } from "../components/payments";
import { FarmersDemo } from "../components/farmers";
import { OutputDemo } from "../components/output";
import { SecurityDemo } from "../components/security";
import InventoryManagementComponent from "../components/inventory";
import VideoContainer from "./video";

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

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("farms");
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const videoElement = document.querySelector(".video-container");
      const sections = document.querySelectorAll(".content-section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Check if the video component is out of view
      if (videoElement) {
        const videoBottom =
          videoElement.getBoundingClientRect().bottom + window.scrollY;
        console.log(videoBottom);
        setShowNavbar(window.scrollY >= videoBottom - 100);
      }

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  return (
    <div>
      <div className="flex flex-col items-center bg-white">
        <div className="w-full overflow-hidden lg:h-screen video-container bg-white">
          <VideoContainer />
        </div>

        {showNavbar && (
          <div className="w-full">
            <nav className="hidden lg:block fixed top-0 left-1/2 transform -translate-x-1/2 py-1 items-center bg-gray-700 rounded-3xl mt-24">
              <ul className="flex gap-3">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={`gap-2 items-center text-white flex transition-all ease-in-out py-3 px-3 rounded-3xl hover:bg-blue-600 cursor-pointer ${
                        activeSection === item.href.substring(1)
                          ? "bg-blue-600"
                          : ""
                      }`}
                    >
                      {item.icon}
                      <span className="px-2">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="lg:hidden fixed top-20  w-full ml-4 rounded-full pr-8 py-1  ">
              <select
                className="w-full bg-gray-700 text-white py-2 px-3 rounded-3xl"
                onChange={(e) => {
                  window.location.href = e.target.value;
                }}
                value={activeSection ? `#${activeSection}` : ""}
              >
                <option value="" disabled>
                  Select a section
                </option>
                {navItems.map((item) => (
                  <option key={item.name} value={item.href}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        <div
          className="lg:mt-4 lg:flex lg:flex-col items-center lg:w-full content-section"
          id="farms"
        >
          <div className="text-center lg:mt-36">
            <h1 className="text-lg lg:text-4xl font-bold text-brown-700">
              Farms
            </h1>
            <div className="text-2xl -mb-24 text-brown-700 font-bold mt-4">
              Efficient farm management
            </div>
          </div>

          <div className="lg:flex lg:flex-col items-center mt-8">
            <div className="lg:flex lg:flex-row">
              <div className="flex small:pl-2 large:pr-0 small:pr-2 flex-col mt-[96px]">
                <img
                  width={600}
                  src="./Farm1.png"
                  alt="Farm 1"
                  className="rounded-xl lg:h-[320px] small:h-[300px] small:w-full"
                />
                <div className="lg:mt-4 small:mt-8"></div>
                <img
                  width={600}
                  src="./Farm2.png"
                  alt="Farm 2"
                  className="rounded-xl lg:h-[320px] small:h-[300px] small:w-full"
                />
              </div>

              <div className="lg:flex lg:flex-col ml-4 ">
                {/* Content Sections */}
                <div className=" ml-1">
                  <FarmsDemo />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-center w-full content-section"
          id="products"
        >
          <div className="text-center  mt-16 pt-2">
            <h1 className="text-lg lg:text-4xl font-bold text-brown-700">
              Products
            </h1>
            <div className="text-2xl -mb-24 text-brown-700 font-bold mt-4">
              All products in one place
            </div>
          </div>

          <div className="flex flex-col items-center mt-8">
            <div className="flex flex-row">
              <div className="flex flex-col mt-[96px]">
                <img
                  width={600}
                  src="./product1.png"
                  alt="Farm 1"
                  className="rounded-xl h-[320px]"
                />
                <div className="mt-4"></div>
                <img
                  width={600}
                  src="./product2.png"
                  alt="Farm 2"
                  className="rounded-xl h-[320px]"
                />
              </div>

              <div className="flex flex-col ml-4 ">
                {/* Content Sections */}
                <div className=" ml-1">
                  <ProductsDemo />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col items-center w-full content-section"
          id="billing"
        >
          <div className="text-center  mt-16 pt-2">
            <h1 className="text-lg lg:text-4xl font-bold text-brown-700">
              Billing
            </h1>
            <div className="text-2xl -mb-24 text-brown-700 font-bold mt-4">
              Streamline your billing process
            </div>
          </div>

          <div className="flex flex-col items-center mt-8">
            <div className="flex flex-row">
              <div className="flex flex-col mt-[96px]">
                <img
                  width={600}
                  src="./billing1.png"
                  alt="Farm 1"
                  className="rounded-xl h-[320px]"
                />
                <div className="mt-4"></div>
                <img
                  width={600}
                  src="./billing2.png"
                  alt="Farm 2"
                  className="rounded-xl h-[320px] "
                />
              </div>

              <div className="flex flex-col ml-4 ">
                {/* Content Sections */}
                <div className=" ml-1">
                  <BillingDemo />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col items-center w-full content-section"
          id="outputpurchase"
        >
          <div className="text-center  mt-16 pt-2">
            <h1 className="text-lg lg:text-4xl font-bold text-brown-700">
              Output Purchase
            </h1>
            <div className="text-2xl -mb-24 text-brown-700 font-bold mt-4">
              Avail Output purchase services
            </div>
          </div>

          <div className="flex flex-col items-center mt-8">
            <div className="flex flex-row">
              <div className="flex flex-col mt-[96px]">
                <img
                  width={600}
                  src="./output1.png"
                  alt="Farm 1"
                  className="rounded-xl h-[320px]"
                />
                <div className="mt-4"></div>
                <img
                  width={600}
                  src="./pic.png"
                  alt="Farm 2"
                  className="rounded-xl h-[320px]"
                />
              </div>

              <div className="flex flex-col ml-4 ">
                {/* Content Sections */}
                <div className="n ml-1">
                  <OutputDemo />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col items-center w-full content-section"
          id="inventory"
        >
          <div className="text-center  mt-16 pt-2">
            <h1 className="text-lg lg:text-4xl font-bold text-brown-700">
              Inventory
            </h1>
            <div className="text-2xl mb-2 text-brown-700 font-bold mt-4">
              Gain control of your inventory and effortlessly manage all your
              items
            </div>
          </div>

          <div className="flex flex-col items-center mt-8">
            <div className="flex flex-row">
              <div className="flex flex-col mt-56">
                <img
                  width={600}
                  src="./Inventory.png"
                  alt="Farm 1"
                  className="rounded-xl h-[320px]"
                />
                {/* <div className="mt-4"></div>
                <img
                  width={600}
                  src="./Farm2.png"
                  alt="Farm 2"
                  className="rounded-xl"
                />
                <div className="mt-4"></div>
                <img
                  width={600}
                  src="./Farm2.png"
                  alt="Farm 2"
                  className="rounded-xl"
                /> */}
              </div>

              <div className="flex flex-col ml-4 ">
                {/* Content Sections */}
                <div id="inventory" className="content-section ml-1">
                  <InventoryManagementComponent />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col items-center w-full content-section"
          id="payments"
        >
          <div className="text-center  mt-16 pt-2">
            <h1 className="text-lg lg:text-4xl font-bold text-brown-700">
              Payments
            </h1>
            <div className="text-2xl -mb-24 text-brown-700 font-bold mt-4">
              Effortless Payment Management
            </div>
          </div>

          <div className="flex flex-col items-center mt-8">
            <div className="flex flex-row">
              <div className="flex flex-col mt-[96px]">
                <img
                  width={600}
                  src="./payment1.png"
                  alt="Farm 1"
                  className="rounded-xl h-[320px]"
                />
                <div className="mt-4"></div>
                <img
                  width={600}
                  src="./payment2.png"
                  alt="Farm 2"
                  className="rounded-xl h-[320px]"
                />
              </div>

              <div className="flex flex-col ml-4 ">
                {/* Content Sections */}
                <div className=" ml-1">
                  <PaymentsDemo />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col items-center w-full content-section"
          id="farmers"
        >
          <div className="text-center  mt-16 pt-2">
            <h1 className="text-lg lg:text-4xl font-bold text-brown-700">
              Farmers
            </h1>
            <div className="text-2xl -mb-24 text-brown-700 font-bold mt-4">
              Centralize all farmer details at one place
            </div>
          </div>

          <div className="flex flex-col items-center mt-8">
            <div className="flex flex-row">
              <div className="flex flex-col mt-[96px]">
                <img
                  width={600}
                  src="./farmer1.png"
                  alt="Farm 1"
                  className="rounded-xl h-[320px]"
                />
                <div className="mt-4"></div>
                <img
                  width={600}
                  src="./farmer2.png"
                  alt="Farm 2"
                  className="rounded-xl h-[320px]"
                />
              </div>

              <div className="flex flex-col ml-4 ">
                {/* Content Sections */}
                <div className=" ml-1">
                  <FarmersDemo />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col items-center w-full content-section"
          id="datasecurity"
        >
          <div className="text-center  mt-16 pt-2">
            <h1 className="text-lg lg:text-4xl font-bold text-brown-700">
              Data Security
            </h1>
            <div className="text-2xl -mb-24 text-brown-700 font-bold mt-4">
              Excellent data security features & support
            </div>
          </div>

          <div className="flex flex-col items-center mt-8">
            <div className="flex flex-row">
              <div className="flex flex-col mt-[96px]">
                <img
                  width={600}
                  src="./security1.png"
                  alt="Farm 1"
                  className="rounded-xl h-[320px]"
                />
                <div className="mt-4"></div>
                <img
                  width={600}
                  src="./sec.png"
                  alt="Farm 2"
                  className="rounded-xl h-[320px]"
                />
              </div>

              <div className="flex flex-col ml-4 ">
                {/* Content Sections */}
                <div className=" ml-1">
                  <SecurityDemo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
