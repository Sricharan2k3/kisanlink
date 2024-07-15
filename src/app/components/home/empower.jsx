"use client"
import React from 'react';
import Heading from './heading';

const Empower = () => {
  return (
    <div className="w-full px-4 flex flex-col items-center">
      {/* Heading Section */}
      {/* <div className="text-center mb-12">
        <h1 className="text-lg lg:text-4xl font-bold text-brown-700">
          Empowering Farmer Producer Organisations
        </h1>
      </div> */}
      <Heading value={"Empowering Farmer Producer Organisations"}></Heading>

      {/* Image and Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center mt-4 lg:space-x-8  mx-auto px-4 pb-4 ">
        {/* Image */}
        <div className="relative lg:w-1/3 overflow-hidden  mb-4">
          <img
            src="./newstore.png"
            alt="Abaya Krishi"
            
          />
        </div>
        
        {/* Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-justify">
          <p className="text-gray-700 text-sm lg:text-base leading-relaxed mb-10">
            Discover the power of collaboration and progress with Kisanlink, your strategic partner in fostering growth for Farmer Producer Organisations (FPOs). We understand the vitality of FPOs in amplifying farmers' influence in the market and offer comprehensive support to strengthen their capabilities.
          </p>
          <a href="/for-fpos"><button className="px-10 py-2 bg-green-700 font-semibold text-white shadow-md hover:bg-green-600 focus:bg-green-600 focus:outline-none">
            Explore More ....
          </button></a>
        </div>
      </div>
    </div>
  );
};

export default Empower;
