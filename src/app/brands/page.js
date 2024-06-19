// pages/index.js
"use client";
import Head from "next/head";
import React from "react";
import Heading from "../components/heading";
import { FaSquareShareNodes } from "react-icons/fa6";
import Background from "../../utils/background";

const Brands = () => {
  return (
    <>
      <Background title={"Our Brands"}></Background>
      <div className="bg-gray-100 min-h-screen px-4 md:px-16 flex items-center justify-center">
        <Head>
          <title>Section with Image in Circle</title>
          <meta
            name="description"
            content="Section with heading, content, and an image in a circle"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col md:flex-row max-w-6xl mx-auto items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
          {/* Left Content Section */}
          <div className="w-full md:w-3/5 flex flex-col justify-start space-y-8">
            <div className=" -mt-16 -mb-12">
              <Heading value={"AMRTI: Premium Food Brand by Kisanlink"} />
            </div>
            <p className="text-gray-700 text-center md:text-center">
              Amrti is a premium food brand by Kisanlink. At Amrti, we are
              passionate about providing responsibly sourced products that
              enhance culinary experiences while nurturing health and
              well-being.
            </p>
            <p className="text-gray-700 text-center md:text-center">
              Our commitment to quality and sustainability ensures that every
              Amrti product is crafted with care, from farm to table. We partner
              with trusted farmers and producers to source the finest
              ingredients, ensuring purity and wellness.
            </p>
            <p className="text-gray-700 text-center md:text-center">
              Explore our range of premium offerings, from wholesome grains to
              indulgent treats, and discover how Amrti can enhance your culinary
              journey.
            </p>

            {/* Share Button */}
            <div className="flex justify-center md:justify-start">
              <button
                className=" mt-8 ml-4 flex flex-col items-center bg-transparent border rounded-lg text-black px-2 py-2 shadow-md hover:bg-red-400 hover:text-white transition duration-300 ease-in-out"
                // Replace the link with your desired URL
                onClick={() => (window.location.href = "https://www.amrti.com")}
              >
                <div className="flex items-center ">
                  <FaSquareShareNodes className="h-8 w-8 " />
                  <div className="flex flex-col items-center ">
                    <div className=" text-sm">Get it on</div>
                    <div className=" ml-8 text-lg">Amrti.com</div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative mt-36 flex-shrink-0 w-160 h-160 md:w-90 md:h-100 rounded-full overflow-hidden bg-white shadow-lg flex items-start">
            <img
              src="https://www.kisanlink.in/wp-content/uploads/favicon-images.jpg" // Replace with your image path
              alt="Brand Image"
              className="w-full h-full object-cover"
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default Brands;
