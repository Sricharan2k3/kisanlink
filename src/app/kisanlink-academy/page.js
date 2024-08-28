"use client";

import Heading from "../components/heading";
import Background from "../../utils/background";
import KisanAcademy from "./accordian";
import FPOTraining from "./accordian1";
import React, { useState } from "react";
import { FaYoutube } from "react-icons/fa6";
import Link from "next/link";

const Academy = () => {
  const [selectedCategory, setSelectedCategory] = useState("Introductory");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Filtered links based on selected category
  const filteredLinks =
    selectedCategory === "All"
      ? YouTubeLinks
      : YouTubeLinks.filter((link) => link.category === selectedCategory);
  return (
    <div className="bg-white overflow-hidden">
      {" "}
      <Background title={"Kisanlink Academy"} />
      <div className="flex flex-col items-center">
        <Heading
          value="Empowering Farmers/Kisansathis through Education"
          className="text-3xl font-bold lg:mb-4"
        />

        <div className="lg:w-2/3 text-center small:pl-2 small:pr-2 small:-mt-8 lg:mt-4 mb-8 text-lg">
          Welcome to Kisanlink Academy, where we offer a wide range of
          agricultural courses designed to empower farmers with the knowledge
          and skills they need to thrive. Accessible anytime, anywhere, our app
          provides
        </div>
        <KisanAcademy />

        <div className="-mt-10">
          <Heading value={"Courses"}></Heading>
        </div>
        <div className="lg:-mt-10 small:-mt-16">
          <Heading value={"Why do we offer courses?"}></Heading>
        </div>

        <div>
          <p className="text-center -mt-4 mb-20 lg:ml-40 small:pl-2 small:pr-2 lg:mr-40">
            To enable Kisansathis to communicate well about the products and
            services offered by our collaborators and train them to become
            experts in fields of their interest to further their careers.
          </p>
        </div>
        <div className="bg-white ">
          <div className="lg:w-full top-20 right-4 z-10">
            <div className="bg-white bg-opacity-70 backdrop-blur-lg rounded-md  p-4 lg:flex items-center justify-center">
              <p className="text-gray-600 text-sm mb-1 mt-2 mr-2">
                Filter by category:
              </p>
              <button
                onClick={() => handleCategoryClick("Introductory")}
                className={`mr-2 px-4 py-2 rounded-md ${
                  selectedCategory === "All"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-blue-400 hover:text-white"
                }`}
              >
                Introductory
              </button>
              <button
                onClick={() => handleCategoryClick("Drone")}
                className={`mr-2 px-4 py-2 rounded-md ${
                  selectedCategory === "English"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-blue-400 hover:text-white"
                }`}
              >
                Drone
              </button>

              <button
                onClick={() => handleCategoryClick("Advisory")}
                className={`mr-2 px-4 py-2 rounded-md ${
                  selectedCategory === "Telugu"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-blue-400 hover:text-white"
                }`}
              >
                Advisory
              </button>
              <button
                onClick={() => handleCategoryClick("Mustard")}
                className={`mr-2 px-4 py-2 rounded-md ${
                  selectedCategory === "Telugu"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-blue-400 hover:text-white"
                }`}
              >
                Mustard
              </button>
              <button
                onClick={() => handleCategoryClick("Safflower")}
                className={`mr-2 px-4 py-2 rounded-md ${
                  selectedCategory === "Telugu"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-blue-400 hover:text-white"
                }`}
              >
                Safflower
              </button>
              <button
                onClick={() => handleCategoryClick("Paddy")}
                className={`mr-2 px-4 small:mt-2 lg:mt-0 py-2 rounded-md ${
                  selectedCategory === "Telugu"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-blue-400 hover:text-white"
                }`}
              >
                Paddy
              </button>
              {/* Add more buttons for other categories */}
              <button
                onClick={() => handleCategoryClick("Heliot")}
                className={`mr-2 px-4 small:mt-2 lg:mt-0 py-2 rounded-md ${
                  selectedCategory === "Telugu"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-blue-400 hover:text-white"
                }`}
              >
                Heliot
              </button>
            </div>
          </div>

          {/* Render YouTube Links */}
          <div className=" bg-white lg:grid lg:grid-cols-2 gap-4 lg:mt-10 lg:mx-40">
            {filteredLinks.map((link, index) => (
              <a key={index} href={link.href} target="_blank">
                <img
                  src={link.thumbnail}
                  alt={link.alt}
                  className=" bg-white small:mt-2 lg:w-full lg:h-auto rounded-xl"
                />
              </a>
            ))}
          </div>

          {/* Bottom Image */}
          {/* <div className="flex justify-center mt-12 pt-12">
            <img
              src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/2022/07/agriculture-ge5750e9ae_1280-removebg-e1657976152581.png"
              alt="Bottom Image"
              className="w-full h-48"
            />
          </div> */}
        </div>

        <div className="flex justify-center mt-20">
          <div className="-mt-12 pr-8">
            <Heading value={"Agriculture Videos"}></Heading>
          </div>
          {/* YouTube Button */}
          <a
            href="https://www.youtube.com/@kisanlink" // Replace with actual video URL
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brown-400 text-white w-240 h-10 text-sm flex items-center justify-center px-4 -mt-2  hover:bg-brown-700"
            style={{ backgroundColor: "#5C431C" }} // Custom brown color
          >
            <div className="pr-4 size-4 pt-0.4">
              <FaYoutube />
            </div>
            Youtube{" "}
          </a>
        </div>
        <div className="-mt-12">
          <Heading value={"Advantages Of Certification"}></Heading>
        </div>
        <div className="bg-white flex -mt-8">
          {/* Left Section */}

          <div className="lg:flex-1 mt-10 mx-8">
            <div className="pt-4">
              <div className=" flex small:flex-col lg:flex-row gap-y-16">
                <div className="gap-6">
                  {/* Box 1 */}
                  <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md">
                    <div className="bg-blue-500 lg:w-16 lg:h-16 small:w-8 small:h-8 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="white"
                        className="w-16 h-16"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-brown-700 lg:text-2xl font-bold">
                        Become Eligible to sell course-specific
                        products/services to farmers.
                      </p>
                    </div>
                  </div>
                  <br></br>
                  {/* Box 2 */}
                  <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md">
                    <div className="bg-blue-500 lg:w-16 lg:h-16 small:w-8 small:h-8 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="white"
                        className="w-16 h-16"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-brown-700 lg:text-2xl font-bold">
                        Learn technical information about agri products/services
                        offered by companies.
                      </p>
                    </div>
                  </div>
                  <br></br>
                  {/* Box 3 */}
                  <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md">
                    <div className="bg-blue-500 lg:w-16 lg:h-16 small:w-8 small:h-8 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="white"
                        className="w-16 h-16"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-brown-700 lg:text-2xl font-bold">
                        Build career and get job opportunities from
                        collaborative partners.
                      </p>
                    </div>
                  </div>
                  <br></br>
                  {/* Box 4 */}
                  <div className="flex   lg:w-full items-center bg-gray-100 p-4 rounded-lg shadow-md">
                    <div className="bg-blue-500 lg:w-16 lg:h-16 small:w-8 small:h-8 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="white"
                        className="w-16 h-16"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-brown-700 lg:text-2xl font-bold">
                        Earn higher income on referrals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="flex-1 order-last lg:order-none  lg:mt-16">
            <img
              src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/kisanlink-certificate.png"
              className="w-full h-110 "
              alt="Certification Image"
            />
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>

        {/* Bottom Image */}
        <div className="flex justify-center mb-4 -mt-8">
          <img
            src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/kisanlink-certificate.png"
            alt="Bottom Image"
            className="small:w-64 small:h-36 lg:w-0 lg:h-0"
          />
        </div>

        <div className=" bg-green-600 w-full h-96">
          <img
            src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/plugins/saaspik-addons/elementor/widgets/images/left-shape.png"
            alt="shape"
            className="shape-left"
            style={{
              transform:
                "translate3d(-82.361px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
              WebkitTransform:
                "translate3d(-82.361px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
            }}
            data-parallax='{"x": -130}'
          />

          {/* <img
            src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/plugins/saaspik-addons/elementor/widgets/images/right_shape.png"
            alt="shape"
            className="shape-right"
            style={{
              transform:
                "translate3d(300.166px, -217px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
              WebkitTransform:
                "translate3d(72.166px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
            }}
            data-parallax='{"x": 130}'
          /> */}
        </div>
        <div className="-mt-64 mb-8  text-white text-center">
          <h2 className="lg:text-4xl small:text-2xl font-bold leading-tight font-serif">
            Download our Kisanlink academy app
            <br />
            to start your learning journey today!
          </h2>
        </div>
        <div className="mt-6 text-center">
          <div className="bg-white py-3 px-6 border  border-green-500 rounded-full shadow-md inline-block">
            <a href="https://play.google.com/store/apps/details?id=com.meherprasadverdeneni.learners&pcampaignid=web_share">
              {" "}
              <span className="text-green-500 font-bold">Kisanlink</span>
            </a>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />

        <Heading
          value="
Continuous Training for FPOs"
          className="text-3xl font-bold mb-4"
        />

        <div className="lg:w-2/3 text-center small:pl-2 small:pr-2 mt-4 mb-8 text-lg">
          We understand the critical role that Farmers Producer Organizations
          (FPOs) play in supporting farmers and promoting sustainable
          agriculture. We provide continuous training programs to all FPOs
          onboarded on our platform, focusing on
        </div>

        <FPOTraining />
        <div className="lg:w-2/3 text-center small:pl-2 small:pr-2 mt-4 mb-8 text-lg">
          Our continuous training programs are designed to keep FPOs up-to-date
          with industry advancements and enhance their capacity to serve their
          communities effectively.
        </div>
      </div>
    </div>
  );
};

export default Academy;

const YouTubeLinks = [
  {
    category: "Introductory",
    href: "https://www.youtube.com/playlist?list=PL3UDtQYVvuPsZfEIuwprDf937Fe0f7T3S",
    alt: "Agriculture Image 1",
    thumbnail:
      "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/introductory-english-thumbnail.jpg",
  },
  {
    category: "Introductory",
    href: "https://www.youtube.com/playlist?list=PL3UDtQYVvuPuGG1VociCoELxx_zJWYWHS",
    alt: "Agriculture image 2",
    thumbnail:
      "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/introductory-telugu-thumbnail.jpg",
  },
  {
    category: "Introductory",
    href: "https://www.youtube.com/playlist?list=PL3UDtQYVvuPuJQuSTkqEd1qOdho6x_MPH",
    alt: "Agriculture Image 3",
    thumbnail:
      "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/introductory-hindi-thumbnail.jpg",
  },
  {
    category: "Drone",
    href: "https://www.youtube.com/playlist?list=PL3UDtQYVvuPs1A9WLOUXRjfXorLw-pI-D",
    alt: "Agriculture Image 4",
    thumbnail:
      "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/eng.jpg",
  },
  {
    category: "Drone",
    href: "https://www.youtube.com/playlist?list=PL3UDtQYVvuPsUxuxzW79QM4SBYKqVlzLF",
    alt: "Agriculture Image 5",
    thumbnail:
      "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/tel.jpg",
  },
  {
    category: "Drone",
    href: "https://www.youtube.com/playlist?list=PL3UDtQYVvuPtVynCz0_8SIOaOyw9r3X0x",
    alt: "Agriculture Image 6",
    thumbnail:
      "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/hin.jpg",
  },
  {
    category: "Advisory",
    href: "https://www.youtube.com/playlist?list=PL3UDtQYVvuPs9NBIGTN9mABTBpjsGFBJm",
    alt: "Agriculture Image 7",
    thumbnail:
      "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/advisory-english-1.jpg",
  },
  {
    category: "Advisory",
    href: "https://www.youtube.com/playlist?list=PL3UDtQYVvuPt1B6ZUSSMD3Yxbly6aKnSH",
    alt: "Agriculture Image 8",
    thumbnail:
      "https://i.ytimg.com/vi/R1RgPaCU4js/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBwA_Ke8wxc6-tujGGRO_0ROPe9QA",
  },
  {
    category: "Advisory",
    href: "https://www.youtube.com/playlist?list=PL3UDtQYVvuPtTIAQ1nWgmgZt2BXJ_D1DI",
    alt: "Agriculture Image 9",
    thumbnail:
      "https://i.ytimg.com/vi/AkHoxlfdHoM/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBDGJZQzGQ0NVuP2gPxlufLLh7CfA",
  },
  {
    category: "Mustard",
    href: "https://www.youtube.com/playlist?list=PL3UDtQYVvuPukPgix5IBTcMgBW5ZqxIYK",
    alt: "Agriculture Image 10",
    thumbnail:
      "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/mustard-english-thumbnail.jpg",
  },
  {
    category: "Mustard",
    href: "https://www.youtube.com/playlist?list=PL3UDtQYVvuPuRIGSrUE8GIfYexEI-PmfA",
    alt: "Agriculture Image 11",
    thumbnail:
      "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/mustard-telugu-1-thumbnail.jpg",
  },
  {
    category: "Mustard",
    href: "https://www.youtube.com/playlist?list=PL3UDtQYVvuPui9DT79IRCyxqApq9jaj3w",
    alt: "Agriculture Image 12",
    thumbnail:
      "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/mustard-telugu-thumbnail.jpg",
  },
  {
    category: "Safflower",
    href: "https://www.youtube.com/playlist?list=PL3UDtQYVvuPv8rf9Zg5KrONUE0uzPdjGk",
    alt: "Agriculture Image 13",
    thumbnail:
      "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/safflower-course-english.jpg",
  },
  {
    category: "Safflower",
    href: "https://www.youtube.com/@kisanlink/playlists",
    alt: "Agriculture Image 14",
    thumbnail:
      "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/safflower-course-hin.jpg",
  },
  {
    category: "Paddy",
    href: "https://www.youtube.com/playlist?list=PL3UDtQYVvuPs8I6jD5qmJr4bEjrcEXbG1",
    alt: "Agriculture Image 14",
    thumbnail:
      "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/9510715-hindi.jpg",
  },
  {
    category: "Paddy",
    href: "https://www.youtube.com/playlist?list=PL3UDtQYVvuPuV9tvRingL_TlhQJdO6m_m",
    alt: "Agriculture Image 14",
    thumbnail:
      "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/9510715-telugu.jpg",
  },
  {
    category: "Paddy",
    href: "https://www.youtube.com/playlist?list=PL3UDtQYVvuPv6WavadVLwb7664Jp49u-3",
    alt: "Agriculture Image 14",
    thumbnail:
      "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/9510715.jpg",
  },
  {
    category: "Heliot",
    href: "https://www.youtube.com/@kisanlink/playlists",
    alt: "Agriculture Image 14",
    thumbnail: "./heliot.jpg",
  },
];
