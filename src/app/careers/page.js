"use client";
import React from "react";
import Heading from "../components/heading";

import Background from "../../utils/background";
import CareersForm from "../form/page";

const Career = () => {
  return (
    <div className="small:overflow-hidden">
      <Background title={"Careers"}></Background>

      <Heading value={"Join Us"}></Heading>

      <div>
        <p className="text-center lg:-mt-4 lg:mb-20 lg:ml-16 small:mb-8">
          Are you passionate about revolutionizing agriculture through
          technology? Do you want to be part of a dynamic team dedicated to
          empowering farmers and driving positive change in the agricultural
          industry? If yes, join us in making a difference that matters.
        </p>
      </div>

      <div className="lg:w-full small:w-[550px] h-80 bg-green-600 pr-16 flex items-center justify-center">
        <div className="overlay-bg lg:max-width-full ">
          <div className="text-center lg:mt-96 flex small:mt-64 small:ml-48  lg:max-width-full content-end">
            <img
              src="https://www.kisanlink.in/wp-content/uploads/Hiring-cuate.svg"
              className="lg:w-80 lg:h-80 small:w-64 small:h-64 "
            />
            <h1 className="small:text-lg lg:text-4xl lg:ml-24 mt-24 font-bold text-white text-center lg:mr-64 lg:w-96 small:w-60 ">
              Open Positions
            </h1>

            <div className="bg-white py-2 mt-24 border pt-3 border-green-500 rounded-2xl shadow-md text-green-500 font-semibold cursor-pointer hover:bg-gray-500 hover:text-white transition duration-300 mr-24 w-80 h-12  ">
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
      {/* <img
        src="https://www.kisanlink.in/wp-content/uploads/2022/07/agriculture-ge5750e9ae_1280-removebg-e1657976152581.png"
        className="w-full h-48"
        alt=""
      /> */}

      <Heading value={"Kisansathi"} />
      <CareersForm />

      <Heading value={"Collaborator"} />
      <CareersForm />
    </div>
  );
};

export default Career;
