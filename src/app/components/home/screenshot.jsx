"use client";
import Head from "next/head";
import React from "react";

const imagesLeft = [
  {
    src: "https://www.kisanlink.in/wp-content/uploads/Group-419-1.png",
    alt: "Kisanlink App Image",
  },
];

const imagesRight = [
  {
    src: "https://www.kisanlink.in/wp-content/uploads/Academy-App-Screenshots-resized.png",
    alt: "Academy App Image",
  },
];

const Screenshot = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 md:px-2">
      <Head>
        <title>Kisanlink & Academy Apps</title>
        <meta name="description" content="Kisanlink & Academy Apps" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-8xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0 md:space-x-2">
        {/* Kisanlink App Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="text-center mb-8">
            <h1 className="text-lg lg:text-4xl font-bold text-brown-700 mb-4">
              Kisanlink App
            </h1>
            <div className="border-b-2 border-brown-700 w-100 mx-0 mb-4"></div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={imagesLeft[0].src}
              alt={imagesLeft[0].alt}
              className="w-100 h-100 object-contain" // Larger image size
            />
          </div>
          <div className="mt-6 flex space-x-4">
            <DownloadButton
              platform="App Store"
              url="https://apps.apple.com/in/app/kisanlink/id1642947613"
            />
            <DownloadButton
              platform="Google Play"
              url="https://play.google.com/store/apps/details?id=com.kisanlink"
            />
          </div>
        </div>

        {/* Academy App Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="text-center mb-8">
            <h1 className="text-lg lg:text-4xl font-bold text-brown-700 mb-4">
              Academy App
            </h1>
            <div className="border-b-2 border-brown-700 w-100 mx-auto mb-4"></div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={imagesRight[0].src}
              alt={imagesRight[0].alt}
              className="w-100 h-100 object-contain" // Larger image size
            />
          </div>
          <div className="mt-6 flex space-x-4">
            <DownloadButton
              platform="App Store"
              url=""
            />
            <DownloadButton
              platform="Google Play"
              url="https://play.google.com/store/apps/details?id=com.meherprasadverdeneni.learners"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

const DownloadButton = ({ platform, url }) => {
  const logos = {
    "App Store":
      "http://www.w3.org/2000/svg",
    "Google Play":
      "https://www.svgrepo.com/show/394180/google-play.svg",
  };

  return (
    <a
      href={url}
      
      rel="noopener noreferrer"
      className="flex items-center justify-center bg-green-500 mt-4 text-white mr-64 px-4 py-2 rounded-full shadow-lg hover:bg-green-800 transition-all duration-300 ease-in-out"
    >
      <img
        src={logos[platform]}
        alt={`${platform} Logo`}
        className="w-6 h-6 mr-2"
      />
      Download 
    </a>
  );
};

export default Screenshot;
