"use client";
import React from "react";
import Heading from "../components/heading";

import Background from "../../utils/background";

const Career = () => {
  return (
    <>
      <Background title={"Careers"}></Background>
      <div className="-mt-10">
        <Heading value={"Join Us"}></Heading>
      </div>

      <div>
        <p className="text-center -mt-4 mb-20 ml-40 mr-40">
          Are you passionate about revolutionizing agriculture through
          technology? Do you want to be part of a dynamic team dedicated to
          empowering farmers and driving positive change in the agricultural
          industry? If yes, join us in making a difference that matters.
        </p>
      </div>
      <div>
        <img src="https://www.kisanlink.in/wp-content/uploads/Hiring-cuate.svg" />
      </div>
    </>
  );
};

export default Career;
