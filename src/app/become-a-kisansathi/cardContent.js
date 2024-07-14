import React from "react";
import Heading from "../components/heading";

const LeftContent = () => {
  return (
    <div className="lg:-mt-36 lg:mr-10 small:mt-60 items-center content-center text-sm">
      <Heading classname="items=center" value="About Kisansathi" />
      <p className="mb-4 text-center text-lg light-gray-text">
        We are an intermediary, working towards bringing together the Agri
        Companies and the farmers, by helping in generating a sale for both. We
        are skilful and tasked with educating and advising farmers on the right
        product, assisting them through the process of gaining the services,
        playing multiple roles .
      </p>
    </div>
  );
};

const RightImage = () => {
  return (
    <div className="lg:ml-16 lg:-mt-36 p-4 ">
      <img
        src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/2022/03/farmer-standing-rice-field-with-tablet-scaled.jpg"
        alt="Placeholder"
        className="w-[600px] h-[300px]"
      />
    </div>
  );
};

const CenteredVideo = () => {
  return (
    <div className="-mt-56 lg:flex justify-center items-start">
      <div className="ml-12 w-3/4 rounded-lg lg:flex">
        <div className="lg:w-1/2">
          <LeftContent />
        </div>
        <div className="lg:w-1/2">
          <RightImage />
        </div>
      </div>
    </div>
  );
};

export default CenteredVideo;
