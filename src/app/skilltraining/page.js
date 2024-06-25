"use client";
import React from "react";
import Heading from "../components/heading";
import Background from "../../utils/background";
import { FaYoutube } from "react-icons/fa6";
import Link from "next/link";

const ast = () => {
  return (
    <>
      <Background title={"Agriculture Skill Training"}></Background>
      <div className="-mt-10">
        <Heading value={"Agriculture Skill Training"}></Heading>
      </div>

      <div>
        <p className="text-center -mt-4 mb-20 ml-40 mr-40">
          We aim to empower farmers, rural entrepreneurs, university students,
          and Farmers Producer Organizations (FPOs) with the knowledge and
          skills they need to thrive in the agricultural sector.
        </p>
      </div>
      <div className="-mt-10">
        <Heading
          value={"Agri Skill Training for University Students"}
        ></Heading>
      </div>

      <div>
        <p className="text-center -mt-4 mb-20 ml-40 mr-40">
          Kisanlink is committed to nurturing the next generation of
          agricultural professionals. We offer specialized agri skill training
          programs for university students, providing them with
        </p>
      </div>
      <div className="flex flex-row items-center justify-center content-center text-center">
        <div className="w-1/3">
          <img
            className="justify-center items-center pl-52 contents-center h-16 -mb-16"
            src="https://png.pngtree.com/png-vector/20220613/ourmid/pngtree-isolated-gray-star-icon-png-image_5064306.png"
          ></img>
          <Heading value={"Industry-Relevant Skills"}></Heading>
          <p>
            Courses designed to equip students with the latest skills and
            techniques needed in today’s agricultural landscape.
          </p>
        </div>
        <div className="w-1/3">
          <img
            className=" pl-52 h-16 -mb-16"
            src="https://png.pngtree.com/png-vector/20220613/ourmid/pngtree-isolated-gray-star-icon-png-image_5064306.png"
          ></img>
          <Heading value={"Career Development"}></Heading>
          <p>
            Guidance and support to help students transition from academic
            learning to successful careers in agriculture.
          </p>
        </div>
      </div>
      <div className="-mt-10">
        <Heading value={"FPO Training Modules"}></Heading>
      </div>

      <div>
        <p className="text-center -mt-4 mb-20 ml-40 mr-40">
          We offer training to our partner FPOs on agricultural products and
          services utilized by farmers. These modules, available both online and
          offline, are conducted by industry experts to ensure comprehensive and
          practical learning.
        </p>
      </div>

      <div className="-mt-10">
        <Heading value={"Courses"}></Heading>
      </div>
      <div className="-mt-10">
        <Heading value={"Why do we offer courses?"}></Heading>
      </div>

      <div>
        <p className="text-center -mt-4 mb-20 ml-40 mr-40">
          To enable Kisansathis to communicate well about the products and
          services offered by our collaborators and train them to become experts
          in fields of their interest to further their careers.
        </p>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 gap-4 mt-10 mx-40">
        <a
          href="https://www.youtube.com/playlist?list=PL3UDtQYVvuPsZfEIuwprDf937Fe0f7T3S"
          target="_blank"
        >
          <img
            src="https://www.kisanlink.in/wp-content/uploads/introductory-english-thumbnail.jpg"
            alt="Agriculture Image 1"
            className="w-full h-auto rounded-xl"
          />
        </a>
        <a
          href="https://www.youtube.com/playlist?list=PL3UDtQYVvuPuGG1VociCoELxx_zJWYWHS"
          target="_blank"
        >
          <img
            src="https://www.kisanlink.in/wp-content/uploads/introductory-telugu-thumbnail.jpg"
            alt="Agriculture image 2"
            className="w-full h-auto rounded-xl"
          />
        </a>
        <a
          href="https://www.youtube.com/playlist?list=PL3UDtQYVvuPuJQuSTkqEd1qOdho6x_MPH"
          target="_blank"
        >
          <img
            src="https://www.kisanlink.in/wp-content/uploads/introductory-hindi-thumbnail.jpg"
            alt="Agriculture Image 3"
            className="w-full h-auto rounded-xl"
          />
        </a>
        <a
          href="https://www.youtube.com/playlist?list=PL3UDtQYVvuPuZ1bcWlPwrx37erWB77Mn0"
          target="_blank"
        >
          <img
            src="https://www.kisanlink.in/wp-content/uploads/eng.jpg"
            alt="Agriculture Image 4"
            className="w-full h-auto rounded-xl"
          />
        </a>
        <a
          href="https://www.youtube.com/playlist?list=PL3UDtQYVvuPuGG1VociCoELxx_zJWYWHS"
          target="_blank"
        >
          <img
            src="https://www.kisanlink.in/wp-content/uploads/tel.jpg"
            alt="Agriculture Image 5"
            className="w-full h-auto rounded-xl"
          />
        </a>
        <a
          href="https://www.youtube.com/playlist?list=PL3UDtQYVvuPuGG1VociCoELxx_zJWYWHS"
          target="_blank"
        >
          <img
            src="https://www.kisanlink.in/wp-content/uploads/hin.jpg"
            alt="Agriculture Image 6"
            className="w-full h-auto rounded-xl"
          />
        </a>
        <a
          href="https://www.youtube.com/playlist?list=PL3UDtQYVvuPs9NBIGTN9mABTBpjsGFBJm"
          target="_blank"
        >
          <img
            src="https://www.kisanlink.in/wp-content/uploads/advisory-english-1.jpg"
            alt="Agriculture Image 7"
            className="w-full h-auto rounded-xl"
          />
        </a>
        <a
          href="https://www.youtube.com/playlist?list=PL3UDtQYVvuPuGG1VociCoELxx_zJWYWHS"
          target="_blank"
        >
          <img
            src="https://www.kisanlink.in/wp-content/uploads/introductory-telugu-thumbnail.jpg"
            alt="Agriculture Image 8"
            className="w-full h-auto rounded-xl"
          />
        </a>
        <a
          href="https://www.youtube.com/playlist?list=PL3UDtQYVvuPuGG1VociCoELxx_zJWYWHS"
          target="_blank"
        >
          <img
            src="https://www.kisanlink.in/wp-content/uploads/introductory-hindi-thumbnail.jpg"
            alt="Agriculture Image 9"
            className="w-full h-auto rounded-xl"
          />
        </a>
        <a
          href="https://www.youtube.com/playlist?list=PL3UDtQYVvuPuGG1VociCoELxx_zJWYWHS"
          target="_blank"
        >
          <img
            src="https://www.kisanlink.in/wp-content/uploads/mustard-english-thumbnail.jpg"
            alt="Agriculture Image 10"
            className="w-full h-auto rounded-xl"
          />
        </a>
        <a
          href="https://www.youtube.com/playlist?list=PL3UDtQYVvuPuGG1VociCoELxx_zJWYWHS"
          target="_blank"
        >
          <img
            src="https://www.kisanlink.in/wp-content/uploads/mustard-telugu-1-thumbnail.jpg"
            alt="Agriculture Image 11"
            className="w-full h-auto rounded-xl"
          />
        </a>
        <a
          href="https://www.youtube.com/playlist?list=PL3UDtQYVvuPuGG1VociCoELxx_zJWYWHS"
          target="_blank"
        >
          <img
            src="https://www.kisanlink.in/wp-content/uploads/mustard-telugu-thumbnail.jpg"
            alt="Agriculture Image 12"
            className="w-full h-auto rounded-xl"
          />
        </a>
        <a
          href="https://www.youtube.com/playlist?list=PL3UDtQYVvuPuGG1VociCoELxx_zJWYWHS"
          target="_blank"
        >
          <img
            src="https://www.kisanlink.in/wp-content/uploads/safflower-course-english.jpg"
            alt="Agriculture Image 13"
            className="w-full h-auto rounded-xl"
          />
        </a>
        <a
          href="https://www.youtube.com/playlist?list=PL3UDtQYVvuPuGG1VociCoELxx_zJWYWHS"
          target="_blank"
        >
          <img
            src="https://www.kisanlink.in/wp-content/uploads/safflower-course-hin.jpg"
            alt="Agriculture Image 14"
            className="w-full h-auto rounded-xl"
          />
        </a>
      </div>

      {/* Centered Last Image */}
      <div className="flex justify-center mt-10">
        <a></a>
        <img
          src="https://www.kisanlink.in/wp-content/uploads/safflower-course-telugu.jpg"
          alt="Agriculture Image 15"
          className="w-2/5 h-2/5 rounded-xl"
        />
      </div>

      <div className="flex justify-center mt-20">
        <div className="-mt-24 pr-8">
          <Heading value={"Agriculture Videos"}></Heading>
        </div>
        {/* YouTube Button */}
        <a
          href="https://www.youtube.com/@kisanlink" // Replace with actual video URL
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brown-400 text-white w-240 h-10 text-sm flex items-center justify-center px-4 py-2  hover:bg-brown-700"
          style={{ backgroundColor: "#5C431C" }} // Custom brown color
        >
          <div className="pr-2 size-4 pt-0.4">
            <FaYoutube />
          </div>
          Kisanlink Youtube Channel{" "}
        </a>
      </div>
      <div className="bg-white">
        <div className="mt-10 mx-40 pt-4">
          <div className="-mt-12">
            <Heading value={"Advantages Of Certification"}></Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Box 1 */}
            <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center">
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
                <p className="text-brown-700 text-2xl text-bold">
                  Become Eligible to sell course-specific products/services to
                  farmers.
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center">
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
                <p className="text-brown-700 text-2xl text-bold">
                  Learn technical information about agri products/services
                  offered by companies.
                </p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center">
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
                <p className="text-brown-700 text-2xl text-bold ">
                  Build career and get job opportunities from collaborative
                  partners.
                </p>
              </div>
            </div>

            {/* Box 4 */}
            <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center">
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
                <p className="text-brown-700 text-2xl text-bold">
                  Earn higher income on referrals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="flex justify-center mt-12 pt-12">
        <img
          src="https://www.kisanlink.in/wp-content/uploads/2022/07/agriculture-ge5750e9ae_1280-removebg-e1657976152581.png" // Replace with the actual URL of the bottom image
          alt="Bottom Image"
          className="w-full h-48 "
        />
      </div>
    </>
  );
};

export default ast;
