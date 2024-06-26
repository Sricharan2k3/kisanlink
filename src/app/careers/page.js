"use client";
import React from "react";
import Heading from "../components/heading";

import Background from "../../utils/background";
import CareersForm from "../form/page";

const Career = () => {
  return (
    <>
      <Background title={"Careers"}></Background>

      <Heading value={"Join Us"}></Heading>

      <div>
        <p className="text-center -mt-4 mb-20 ml-40 mr-40">
          Are you passionate about revolutionizing agriculture through
          technology? Do you want to be part of a dynamic team dedicated to
          empowering farmers and driving positive change in the agricultural
          industry? If yes, join us in making a difference that matters.
        </p>
      </div>

      <div className="max-width-full h-80 bg-green-600 pr-16 flex items-center justify-center">
        <div className="overlay-bg max-width-full ">
          <div className="text-center mt-96 flex  max-width-full content-end">
            <img
              src="https://www.kisanlink.in/wp-content/uploads/Hiring-cuate.svg"
              className="w-80 h-80 "
            />
            <h1 className="text-lg lg:text-4xl ml-32 mt-32 font-bold text-white text-center mr-80 w-96 ">
              Open Positions
            </h1>

            <div className="bg-white py-2 mt-32 border border-green-500 rounded-2xl shadow-md text-green-500 font-semibold cursor-pointer hover:bg-gray-500 hover:text-white transition duration-300 mr-80 w-80 h-12 ">
              Become a Kisansathi
            </div>
          </div>

          <img
            src="https://www.kisanlink.in/wp-content/plugins/saaspik-addons/elementor/widgets/images/ellipse.png"
            alt="bg"
          />
        </div>
        <div className="scroll-circle">
          <img
            src="https://www.kisanlink.in/wp-content/plugins/saaspik-addons/elementor/widgets/images/circle13.png"
            alt="circle"
            style={{
              transform:
                "translate3d(0px, -107.794px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
              WebkitTransform:
                "translate3d(0px, -107.794px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
            }}
          />
        </div>
      </div>
      <img
        src="https://www.kisanlink.in/wp-content/uploads/2022/07/agriculture-ge5750e9ae_1280-removebg-e1657976152581.png"
        className="w-full h-48"
        alt=""
      />

      <Heading value={"Kisansathi"} />
      <CareersForm />

      <Heading value={"Collaborator"} />
      <CareersForm />
    </>
  );
};

export default Career;
