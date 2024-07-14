import React from "react";
import Heading from "../components/heading";

const ContentComponent = ({ imageUrl }) => {
  return (
    <div className="lg:p-8 lg:mt-25  lg:mx-32 small:ml-2 small:mr-2">
      <Heading value={"Our Solutions to FPOs"} />
      <p className="text-center text-lg mb-16">
        At Kisanlink, we stand as a trusted consultant and ally to FPOs,
        providing invaluable assistance across various critical areas.
      </p>
      <div className="flex flex-col lg:flex-row items-start">
        <div className="flex-1 mb-4 lg:mb-0 lg:mr-8">
          <h2 className="text-green-600 text-3xl mb-4">What is FPO?</h2>
          <p className="text-lg leading-relaxed">
            A Farmer Producer Organisation (FPO) is an officially registered
            entity governed by the Indian Companies Act. It is a collective
            formed by farmers who become shareholders, aiming to elevate their
            collective purchasing and selling strength in the market.
          </p>
        </div>
        <img src="./newstore.png" alt="FPO" className="w-80 h-52 small:ml-2" />
      </div>
    </div>
  );
};

export default ContentComponent;
