"use client";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../heading";

const StatsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const stats = [
    { id: 1, value: "100+", label: "Villages" },
    { id: 2, value: "150+", label: "Kisansathi (Village Level-Entrepreneurs)" },
    { id: 3, value: "7000+", label: "Farmers" },
    { id: 4, value: "50+", label: "Local Partners (FPO's and Retailers)" },
    { id: 5, value: "30+", label: "Collaborators" },
    { id: 6, value: "50+", label: "Brands" },
    { id: 7, value: "800+", label: "Products" },
    { id: 8, value: "1200+", label: "Farm Mechanization Services In Acres" },
    { id: 9, value: "100+", label: "Product Orders" },
    { id: 10, value: "40+", label: "Procurement In Tons" },
    { id: 11, value: "10+", label: "Other Services" },
    { id: 12, value: "2", label: "States" },
  ];

  const settings = {
    dots: false, // Disable default dots
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "21%",
    autoplay: true, // Enable auto-scrolling
    autoplaySpeed: 3000, // Auto-scroll interval in milliseconds (3 seconds)
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    arrows: false, // Disable the navigation arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          centerPadding: "15%",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: "10%",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "5%",
        },
      },
    ],
  };

  // Adjust the number of dots
  const numDots = 12;
  const dots = Array.from({ length: numDots }, (_, i) => i);

  // Dot click handler
  const goToSlide = (index) => {
    const slideToGo = Math.floor((index / numDots) * stats.length);
    sliderRef.current.slickGoTo(slideToGo);
  };

  return (
    <div className=" overflow-hidden relative py-8 bg-gray-lightest">
      {/* <div className="text-center mb-12">
        <h1 className="text-lg lg:text-4xl font-bold text-brown-700">
          Our Success In Numbers
        </h1>
      </div> */}
      <Heading value={"Our Success In Numbers"}></Heading>
      <Slider {...settings} ref={sliderRef}>
        {stats.map((stat) => (
          <div key={stat.id} className="px-4">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center card">
              <br></br>
              <br></br>
              <p className="text-xs lg:text-3xl text-green-700">{stat.value}</p>
              <p className="text-xs lg:text-3xl pb-10 text-green-700">
                {stat.label}{" "}
              </p>
              {stat.id !== 2 && stat.id !== 4 && stat.id !== 8 && (
                <div className="mb-9"></div>
              )}
            </div>
          </div>
        ))}
      </Slider>
      <div className="absolute bottom-25 left-0 w-full flex justify-center mt-6">
        <ul className="flex space-x-6">
          {dots.map((dotIndex) => (
            <li
              key={dotIndex}
              onClick={() => goToSlide(dotIndex)}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                currentSlide >= dotIndex * (stats.length / numDots) &&
                currentSlide < (dotIndex + 1) * (stats.length / numDots)
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

export default StatsCarousel;






