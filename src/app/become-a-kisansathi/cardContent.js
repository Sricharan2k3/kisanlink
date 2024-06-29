import React from "react";
import Heading from "../components/heading";

const LeftContent = () => {
  return (
    <div className="-mt-16 mr-10 items-center content-center text-sm">
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
    <div className="ml-16 p-4">
      <img
        src="https://www.kisanlink.in/wp-content/uploads/2022/03/farmer-standing-rice-field-with-tablet-scaled.jpg"
        alt="Placeholder"
        className="w-[600px] h-[300px]"
      />
    </div>
  );
};

const CenteredVideo = () => {
  return (
    <div className="-mt-56 flex justify-center items-start">
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
