"use client";
import React from "react";
import Heading from "../components/heading";
import Benfits from "./benfits"
import Services from "./services"

import Background from "../../utils/background";

const Farmersol = () => {
  return (
    <>
      <Background title={"For Farmers"}></Background>
      <div className="-mt-10">
        <Heading value={"Our Solutions To Farmers"}></Heading>
      </div>

      <div>
        <p className="text-center -mt-4 mb-20 ml-40 mr-40">
          We serve as the single point of contact for farmers seeking various
          agricultural services. Our streamlined approach with a unified
          platform that brings together collaborating companies and their
          training modules, ensures effective knowledge dissemination to farmers
          via our Kisansathis.
        </p>
      </div>
      <div className="-mt-10">
        <Heading value={"Products"}></Heading>
      </div>

      <div>
        <p className="text-center -mt-4 mb-20 ml-40 mr-40">
          We provide Agri Inputs and the latest equipment and machinery to
          farmers at their doorstep, enabling them to improve their yield. For a
          better crop yield, farmers require agri inputs, advanced equipment,
          and machinery; we, by collaborating with innovative and technically
          proven companies, enable farmers to access these leading to improved
          crop management practices. All these products can be ordered through
          our mobile app – download now Kisanlink
        </p>
      </div>
      <Benfits/>
      <Services/>
    </>
  );
};

export default Farmersol;