import React from 'react';
import Heading from '../components/heading';

const ContentComponent = ({ imageUrl }) => {
  return (
    <div className="p-8 mt-32">
      <Heading title={"Our Solutions to fpos"}/>
      <p className="text-center mb-16">
        At Kisanlink, we stand as a trusted consultant and ally to FPOs, providing invaluable assistance across various critical areas.
      </p>
      <div className="flex items-start">
        <div className="flex-1 mr-8">
          <h2 className="text-green-600 text-2xl mb-4">What is FPO?</h2>
          <p className="text-lg leading-relaxed">
            A Farmer Producer Organisation (FPO) is an officially registered entity governed by the Indian Companies Act. It is a collective formed by farmers who become shareholders, aiming to elevate their collective purchasing and selling strength in the market.
          </p>
        </div>
        <img src="https://www.kisanlink.in/wp-content/uploads/abaya.jpg" alt="FPO" className="w-72 h-auto" />
      </div>
    </div>
  );
};

export default ContentComponent;
