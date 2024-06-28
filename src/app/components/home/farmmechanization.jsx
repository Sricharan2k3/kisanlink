"use client"
import React from 'react';
import { Parallax } from 'react-parallax';
import 'tailwindcss/tailwind.css';
import '../../../styles/styles.css'; // Importing custom styles for animations

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
      <section className="relative py-12 h-screen md:h-[40vh]"> {/* Reduced height */}
        {/* SVG Shape Divider (Flipped) */}
        <div className="absolute top-0 w-full overflow-hidden leading-[0] transform rotate-180">
          <svg className="block w-full h-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path className="fill-current text-white" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
          </svg>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 flex flex-col items-center justify-center h-full">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 animate-fadeInLeft">Farm Mechanization Solutions</h2>
          <h3 className="text-white text-sm md:text-base lg:text-lg text-center mb-6 animate-fadeInUp delay-400">
            Our farm mechanization solutions offer farmers and growers innovative tools to optimize operations, enhance crop productivity, and improve efficiency.
            Our solutions range from supplying drone products and accessories to providing our customers with the best after-sale services.
          </h3>
          <a href="https://www.kisanlink.in/drone-solutions/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-transparent border-2 border-white text-white font-semibold py-2 px-6 rounded hover:bg-white hover:text-black transition-all animate-fadeInUp delay-600">
            Explore
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </section>
    </Parallax>
  );
};

export default FarmMechanizationSection;
