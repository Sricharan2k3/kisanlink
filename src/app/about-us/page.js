"use client";
import React from "react";
import Heading from "../components/heading";

import Background from "../../utils/background";
import ImageCarousel from "./carousel";
const images = [
  "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/Innovation-150x150.png",
  "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/Inclusion-150x150.png",
  "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/impact-150x150.png",
  "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/Integrity-150x150.png",
];
const about = () => {
  return (
    <>
      <Background title={"About Us"}></Background>
      <div>
        <Heading value={"What we do ?"}></Heading>
      </div>

      <div>
        <p className="text-center lg:-mt-4 lg:mb-20 small:pl-2 small:pr-2 lg:ml-40 lg:mr-40">
          At Kisanlink, we are passionate about leveraging technology to empower
          farmers and revolutionize agriculture. With a deep understanding of
          the challenges faced by farmers and a commitment to innovation, we
          strive to create solutions that make farming more efficient,
          sustainable, and profitable.
        </p>
      </div>
      <div className="lg:-mt-10">
        <Heading value={"Our Mission"}></Heading>
      </div>

      <div>
        <p className="text-center lg:-mt-4 lg:mb-20 small:pl-2 small:pr-2 lg:ml-40 lg:mr-40">
          Our mission is to connect farmers with the latest advancements in
          agritech, providing them with the tools and knowledge they need to
          thrive in today's ever-changing agricultural landscape.
        </p>
      </div>
      <div className="lg:-mt-10">
        <Heading value={"Our Vision"}></Heading>
      </div>

      <div>
        <p className="text-center  lg:-mt-4 lg:mb-20 small:pl-2 small:pr-2 lg:ml-40 lg:mr-40">
          We envision a world where every farmer is empowered with cutting-edge
          agritech solutions for a sustainable and prosperous agricultural
          ecosystem.
        </p>
      </div>
      <div className="lg:-mt-10">
        <Heading value={"Our Values"}></Heading>
      </div>

      <div>
        <p className="text-center lg:-mt-4 lg:mb-20 lg:ml-40 lg:mr-40">
          Innovation, Inclusion, Integrity, Impact
        </p>
      </div>
      <div className=" items-center lg:w-4/5 lg:pl-96 lg:mb-2 small:m-8">
        <ImageCarousel images={images}></ImageCarousel>
      </div>
    </>
  );
};

export default about;
