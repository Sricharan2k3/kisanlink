"use client";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "./heading";

const StatsCarousel1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const stats1 = [
    { id: 1, value: "100+", label: "Villages" },
    { id: 2, value: "150+", label: "Kisansathi (VLEs)" },
    { id: 3, value: "7000+", label: "Farmers" },
    { id: 4, value: "50+", label: "Local Partners (FPOs)" },
    { id: 5, value: "30+", label: "Collaborators" },
    { id: 6, value: "50+", label: "Brands" },
    { id: 7, value: "800+", label: "Products" },

    { id: 8, value: "2", label: "States" },
  ];

  const settings = {
    dots: false, // Disable default dots
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "26%",
    autoplay: true, // Enable auto-scrolling
    autoplaySpeed: 3000, // Auto-scroll interval in milliseconds (3 seconds)
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    arrows: false, // Disable the navigation arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          centerPadding: "15%",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: "3%",
        },
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 2,
          centerPadding: "1%",
        },
      },
    ],
  };



  const numDots1 = 5;
  const dots1 = Array.from({ length: numDots1 }, (_, i) => i);

  // Dot click handler
  const goToSlide1 = (index) => {
    const slideToGo1 = Math.floor((index / numDots1) * stats1.length);
    sliderRef.current.slickGoTo(slideToGo1);
  };

  return (
    
  
    <div className=" -mt- overflow-hidden relative bg-[#E5E8E9]">
      {/* <div className="text-center mb-12">
        <h1 className="text-lg lg:text-4xl font-bold text-brown-700">
          Our Success In Numbers
        </h1>
      </div> */}
      <Heading value={"Metrics that Matter"}></Heading>
      <Slider {...settings} ref={sliderRef}>
        {stats1.map((stat) => (
           <div key={stat.id} className="px-4">
       <div className="bg-[#faca9a] shadow-lg rounded-lg lg:p-6 text-center  small:w-36
        small:h-20 small:p-8 lg:w-[290px] lg:h-36">

                            
              <p className="text-xs lg:text-lg large:mt-2 medium:mt-4 text-green-600 small:text-xs small:-mt-4">{stat.value}</p>
              <p className="text-xs lg:text-lg lg:pt-2 pb-2 text-green-600 small:text-xs ">
                {stat.label}{" "}
              </p>
              {/* {stat.id !== 2 && stat.id !== 4 && stat.id !== 8 && (
                <div className="mb-7"></div>
              )} */}
            </div>
          </div>
        ))}
      </Slider>
      <div className="absolute bottom-25 left-0 w-full flex justify-center mt-6">
        <ul className="flex space-x-6">
          {dots1.map((dotIndex) => (
            <li
              key={dotIndex}
              onClick={() => goToSlide1(dotIndex)}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                currentSlide >= dotIndex * (stats1.length / numDots1) &&
                currentSlide < (dotIndex + 1) * (stats1.length / numDots1)
                  ? "bg-blue-100"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StatsCarousel1;






