import React from "react";
import Heading from "../components/heading";

const Card2 = (props) => {
  return (
    <div className="lg:flex lg:flex-col items-center justify-center lg:-mt-16 min-h-screen ">
      <div className="text-center mt-6 mb-8">
        <Heading
          value={
            "Process of Becoming an PoSP Kisansathi and eligibility Criteria"
          }
        ></Heading>

        <p className="text-lg">
          You just need to have three specific eligibilities to join our
          community of PoSP Kisansathi.
        </p>
      </div>
      <div className="lg:flex justify-center gap-8 small:ml-8">
        {/* Card 1 */}
        <div className="bg-white rounded-lg overflow-hidden w-72 shadow-md">
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{props.h1}</h3>
            <img
              src={props.img1}
              alt={props.altText1}
              className="w-24 h-24 object-cover mx-auto"
            />
          </div>
          <div className="p-4 text-md text-center">
            <p>You should be at least 18 years old</p>
          </div>
        </div>
        <br />
        {/* Card 2 */}
        <div className="bg-white rounded-lg overflow-hidden w-72 shadow-md">
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{props.h2}</h3>
            <img
              src={props.img2}
              alt={props.altText2}
              className="w-24 h-24 object-cover mx-auto"
            />
          </div>
          <div className="p-4 text-md text-center">
            <p>
              For your educational qualification, you should have passed at
              least Class 10
            </p>
          </div>
        </div>
        <br />
        {/* Card 3 */}
        <div className="bg-white rounded-lg overflow-hidden w-72 shadow-md">
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{props.h3}</h3>
            <img
              src={props.img3}
              alt={props.altText3}
              className="w-24 h-24 object-cover mx-auto"
            />
          </div>
          <div className="p-4 text-md text-center">
            <p className="text-md">
              Vehicle (2 wheeler or 4 wheeler to move around)
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-4 mt-1">
        {" "}
        {/* Adjusted mt-1 for a minimal gap */}
        <div className="rounded-lg lg:p-6 lg:w-3/4">
          <p className="mb-4 text-md text-center">
            Anyone who fulfills these basic criteria can enroll to become a
            Kisansathi as a PoSP. Thus, the company can provide jobs for
            freshers, jobs for fresh graduates, part-time jobs for graduates,
            jobs for college students, even retired individuals.
          </p>
          <h3 className="text-xl font-bold mb-4">Enrollment Steps:</h3>
          <ol className="list-none pl-0 mb-4">
            <li className="flex items-start mb-2">
              <svg
                className="w-5 h-5 text-red-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              If you meet the eligibility criteria, you can sign up on the App.
            </li>
            <li className="flex items-start mb-2">
              <svg
                className="w-5 h-5 text-red-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Submit your KYC details and documents.
            </li>
            <li className="flex items-start mb-2">
              <svg
                className="w-5 h-5 text-red-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Complete the introductory course of a specified duration and get
              certified to become a Kisansathi.
            </li>
            <li className="flex items-start mb-2">
              <svg
                className="w-5 h-5 text-red-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Take additional courses to sell products and services offered by
              the collaborators.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Card2;
