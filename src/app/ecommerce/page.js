"use client";
import React from "react";
import Heading from "../components/heading";
import Component from "../products/page";
import Background from "../../utils/background";
import StickyScrollRevealDemo from "../hello/page";

const Farmersol = () => {
  return (
    <>
      <Background title={"Ecommerce"}></Background>

      <div className="">
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
          our mobile app –
          <a
            className=" text-blue-400"
            href="https://play.google.com/store/apps/details?id=com.kisanlink"
          >
            {" "}
            download now Kisanlink
          </a>
        </p>
      </div>
      <Component></Component>

      <div className="-mt-32 -mb-4 ">
        <Heading value={"Services"}></Heading>
      </div>
      {/* <Services /> */}
      <StickyScrollRevealDemo></StickyScrollRevealDemo>
    </>
  );
};

export default Farmersol;
