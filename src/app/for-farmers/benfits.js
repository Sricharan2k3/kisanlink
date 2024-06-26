import React from 'react';

const Benefits = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h3 className="text-3xl font-semibold text-center mb-8">Benefits</h3>
      <div className="flex flex-wrap justify-between gap-8 max-w-4xl">
        <div className="w-full md:w-5/12 lg:w-5/12 xl:w-5/12 bg-white rounded-lg shadow-md p-6 transition-transform duration-300 ease-in-out hover:transform hover:-translate-y-1 hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Increased Choice among Product Manufacturers</h3>
          <p className="text-gray-700">Choose from a variety of product manufacturers to suit your needs.</p>
        </div>
        <div className="w-full md:w-5/12 lg:w-5/12 xl:w-5/12 bg-white rounded-lg shadow-md p-6 transition-transform duration-300 ease-in-out hover:transform hover:-translate-y-1 hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Access to the Latest Promotions and Offers</h3>
          <p className="text-gray-700">Stay updated with the latest promotions and offers for your agricultural needs.</p>
        </div>
        <div className="w-full md:w-5/12 lg:w-5/12 xl:w-5/12 bg-white rounded-lg shadow-md p-6 transition-transform duration-300 ease-in-out hover:transform hover:-translate-y-1 hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Reasonable Prices</h3>
          <p className="text-gray-700">Get access to quality products at reasonable and competitive prices.</p>
        </div>
        <div className="w-full md:w-5/12 lg:w-5/12 xl:w-5/12 bg-white rounded-lg shadow-md p-6 transition-transform duration-300 ease-in-out hover:transform hover:-translate-y-1 hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Doorstep Delivery</h3>
          <p className="text-gray-700">Convenience at your doorstep - have your orders delivered directly to you.</p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
