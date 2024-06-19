// pages/index.js

import Head from "next/head";
import React from "react";
import Heading from "../components/heading";

const Brands = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 md:px-16 flex items-center justify-center">
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
        <div className="w-full md:w-3/5 ">
          <Heading value={"AMRTI: Premium Food Brand by Kisanlink"}></Heading>
          <div className="w-full space-y-6">
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
            <div className="flex justify-center md:justify-start mt-4">
              <button
                className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
                //   onClick={() => router.push("https://www.example.com")} // Replace with your link
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v6h6M20 20v-6h-6M4 20l16-16"
                  />
                </svg>
                <div>Get it on</div>
                <br></br>
                <div>Amriti.com</div>
              </button>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-white shadow-lg">
          <img
            src="https://www.kisanlink.in/wp-content/uploads/favicon-images.jpg" // Replace with your image path
            alt="Brand Image"
            className="w-full h-full object-cover"
          />
        </div>
      </main>
    </div>
  );
};

export default Brands;
