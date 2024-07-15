"use client";
import React from "react";
import Heading from "../components/heading";
import Component from "../products/page";
import Background from "../../utils/background";
import StickyScrollRevealDemo from "../hello/page";

const Farmersol = () => {
  return (
    <div className="small:overflow-hidden">
      <Background title={"E-Commerce"}></Background>

      <div className="">
        <Heading value={"Products"}></Heading>
      </div>

      <div className="lg:flex lg:flex-row -mt-4 mb-12">
        <div className="lg:flex lg:flex-col">
          <p className="text-justify ml-12 mt-8 mr-24  ">
            We provide Agri Inputs and the latest equipment and machinery to
            farmers at their doorstep, enabling them to improve their yield. For
            a better crop yield, farmers require agri inputs, advanced
            equipment, and machinery; we, by collaborating with innovative and
            technically proven companies, enable farmers to access these leading
            to improved crop management practices. All these products can be
            ordered through our mobile app –
            <a
              className=" text-blue-400"
              href="https://play.google.com/store/apps/details?id=com.kisanlink"
            >
              {" "}
              Download Kisanlink Now
            </a>
          </p>
        </div>
        <div className="lg:flex lg:flex-col lg:mr-16 ">
          <iframe
            width="390"
            height="220"
            src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/MOBILE-SCREEN-RECORDING.mp4"
            title="Become a Kisansathi"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="small:w-[350px] small:ml-3 "
          ></iframe>
        </div>
      </div>
      <Component></Component>

      <div className="-mt-32 -mb-4 ">
        <Heading value={"Services"}></Heading>
      </div>
      {/* <Services /> */}
      <StickyScrollRevealDemo></StickyScrollRevealDemo>
    </div>
  );
};

export default Farmersol;
