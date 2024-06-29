import React from "react";
import Heading from "../components/heading";

const LeftContent = () => {
  return (
    <div className="pt-10 pr-10 mr-5 items-center content-center text-lg">
      <Heading
        classname="items=center style={{ color: 'rgb(245, 245, 245)' }}"
        value="Why Become a Kisansathi"
      />
      <p className="text-lg text-center style={{ color: 'rgb(245, 245, 245)' }}">
        Agriculture is ingrained in our history and culture. By working with us,
        you will get an opportunity to earn livelihood, work from your own
        hometown and impact the lives of farmers around you.
      </p>
    </div>
  );
};

const RightImage = () => {
  return (
    <div className="ml-20 pt-16">
      <iframe
        width="480"
        height="300"
        src="https://www.youtube.com/embed/R4x78KHuGHc"
        title="Become a Kisansathi"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const CenteredVideo = () => {
  return (
    <div className="flex justify-center items-start min-h-screen">
      <div className="ml-12 w-3/4 rounded-lg flex">
        <div className="w-1/2">
          <LeftContent />
        </div>
        <div className="w-1/2">
          <RightImage />
        </div>
      </div>
    </div>
  );
};

export default CenteredVideo;
