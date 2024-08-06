"use client"
import React from 'react';
import { Parallax } from 'react-parallax';


const FarmMechanizationSection = () => {
  const backgroundImage = 'drone.jpg'; // Replace with your image URL

  return (
    <Parallax
      bgImage={backgroundImage}
      bgImageAlt="Farm"
      strength={800} // Adjust strength for parallax effect
      renderLayer={percentage => (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(120, 189, 54, 1) 100%)`,

           
            backgroundSize: 'contain',
            backgroundAttachment: 'fixed',
            opacity:0.58
          }}
        ></div>
      )}
    >
      <section className="relative py-12 lg:h-[350px] small:h-[350px] md:h-[40vh]"> {/* Reduced height */}
        {/* SVG Shape Divider (Flipped) */}
        <div className="absolute top-0 w-full overflow-hidden leading-[0] transform rotate-180">
          <svg className="block w-full h-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path className=" fill-[#ffffff] text-white" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
          </svg>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 flex flex-col items-center justify-center h-full">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 animate-fadeInLeft small:text-lg">Farm Mechanization Solutions</h2>
          <h3 className="text-white text-sm md:text-base lg:text-lg text-center mb-6 animate-fadeInUp delay-400">
          Our Farm Mechanization solutions offer farmers innovative tools and technologies to optimize operations, enhance crop productivity, and improve efficiency. Our solutions include drone services, farm equipment, solar products, and IOT devices.
          </h3>
          <a href="/ecommerce/#services" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-transparent border-2 border-white text-white font-semibold py-2 px-6 rounded hover:bg-white hover:text-black transition-all animate-fadeInUp delay-600">
            Explore
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </section>
    </Parallax>
  );
};

export default FarmMechanizationSection;
