import React from "react";
import Heading from "./Heading";

const ContentComponent = ({ imageUrl }) => {
  return (
    <div className="p-8 mt-25 mx-8 lg:mx-32">
      <Heading value={"Our Solutions to FPOs"} />
      <p className="text-center text-sm mb-16">
        At Kisanlink, we stand as a trusted consultant and ally to FPOs,
        providing invaluable assistance across various critical areas.
      </p>
      <div className="flex flex-col lg:flex-row items-start">
        <div className="flex-1 mb-4 lg:mb-0 lg:mr-8">
          <h2 className="text-green-600 text-2xl mb-4">What is FPO?</h2>
          <p className="text-sm leading-relaxed">
            A Farmer Producer Organisation (FPO) is an officially registered
            entity governed by the Indian Companies Act. It is a collective
            formed by farmers who become shareholders, aiming to elevate their
            collective purchasing and selling strength in the market.
          </p>
        </div>
        <img
          src="https://www.kisanlink.in/wp-content/uploads/updated-store.jpg"
          alt="FPO"
          className="w-80 h-auto"
        />
      </div>
    </div>
  );
};

export default ContentComponent;
