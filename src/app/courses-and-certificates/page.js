"use client";
import React, { useState } from "react";
import Heading from "../components/heading";
import Background from "../../utils/background";
import "../../styles/global.css";

const ast = () => {
  return (
    <>
      <Background title={"Agriculture Skill Training"}></Background>
      <div>
        <Heading value={"Agriculture Skill Training"}></Heading>
      </div>

      <div className=" ">
        <p className="text-center text-black -mt-4 mb-20 small:pl-2 small:pr-2 lg:ml-40 lg:mr-40">
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

      <div className="">
        <p className="text-center text-black -mt-4 mb-12 small:pl-2 small:pr-2 lg:ml-40 lg:mr-40">
          Kisanlink is committed to nurturing the next generation of
          agricultural professionals. We offer specialized agri skill training
          programs for university students, providing them with
        </p>
      </div>
      <div className="lg:flex flex-row items-center justify-center content-center text-center">
        <div className="lg:w-1/3  ">
          <img
            className="lg:justify-center lg:items-center lg:pl-20 small:pl-12 lg:ml-8 lg:contents-center h-36 -mb-8"
            src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/skill_dev-removebg-preview.png"
          ></img>
          <Heading value={"Industry-Relevant Skills"}></Heading>
          <p className="small:pl-2 small:pr-2">
            Courses designed to equip students with the latest skills and
            techniques needed in today’s agricultural landscape.
          </p>
        </div>
        <div className="lg:w-1/3">
          <img
            className=" lg:pl-24 small:pl-12 h-36 -mb-8"
            src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/career_dev-removebg-preview.png"
          ></img>
          <Heading value={"Career Development"}></Heading>
          <p className="small:pl-2 small:pr-2">
            Guidance and support to help students transition from academic
            learning to successful careers in agriculture.
          </p>
        </div>
      </div>
      <div className="-mt-2">
        <Heading value={"FPO Training Modules"}></Heading>
      </div>

      <div>
        <p className="text-center small:pl-2 small:pr-2 -mt-4 mb-20 lg:ml-40 lg:mr-40">
          We offer training to our partner FPOs on agricultural products and
          services utilized by farmers. These modules, available both online and
          offline, are conducted by industry experts to ensure comprehensive and
          practical learning.
        </p>
      </div>
      <div>
        <div className="-mt-10">
          <Heading value={"Certification"}></Heading>
        </div>
        <p className="text-center -mt-4 lg:-mb-16  lg:ml-40 lg:mr-40">
          Candidates will be certified after clearing the training assessment.
        </p>
        // <div className="lg:flex items-center lg:-mb-12 small:mt-4 small:mb-4  justify-center lg:h-screen">
        //   <img
        //     className="w-[720px] lg:h-[540px] small:h-[300px]"
        //     src="./certi.png"
        //   ></img>
        // </div>
      </div>
    </>
  );
};

export default ast;
