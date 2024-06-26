import React from 'react';

const EsteemedPartners = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-8 lg:px-16 py-10 lg:py-20">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-5xl p-4 lg:p-8 m-6 lg:m-12">
        <header className="bg-green-600 text-white p-6 text-center w-full mb-6">
          <h1 className="text-2xl lg:text-3xl font-bold mb-4">Our Esteemed Partners</h1>
          <p className="text-xs lg:text-sm">
            At Kisanlink, our mission is to empower farmers, Farmer Producer Organizations (FPOs), and Kisansathis by providing them with innovative solutions and comprehensive support. Our esteemed partners play a crucial role in helping us deliver top-notch services and solutions to agricultural communities. Together, we are transforming the agricultural landscape and fostering sustainable growth.
          </p>
        </header>

        <main className="flex flex-col items-center w-full">
          <div id="map-container" className="relative mt-5 w-full">
            <div className="flex justify-start w-full">
              <img 
                src="https://www.kisanlink.in/wp-content/uploads/india-map.jpg"
                alt="India Map"
                id="india-map"
                className="max-w-xl w-full h-auto rounded-lg"
              />
            </div>
            <div className="marker absolute bg-white bg-opacity-80 border border-green-600 rounded px-2 py-1 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-150" style={{ top: '57%', left: '46%' }}>
              JKYOG
            </div>
            <div className="marker absolute bg-white bg-opacity-80 border border-green-600 rounded px-2 py-1 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-150" style={{ top: '71%', left: '30%' }}>
              Reliance Foundation
            </div>
            <div className="marker absolute bg-white bg-opacity-80 border border-green-600 rounded px-2 py-1 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-150" style={{ top: '65%', left: '37%' }}>
              EEE
            </div>
            <div className="marker absolute bg-white bg-opacity-80 border border-green-600 rounded px-2 py-1 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-150" style={{ top: '65%', left: '47%' }}>
              Fertex
            </div>
          </div>
        </main>

        <footer className="bg-green-600 text-white p-6 text-center mt-6 w-full rounded-lg">
          <p>© 2024 Kisanlink. All rights reserved.</p>
          <a href="#" className="underline hover:text-gray-300">Privacy Policy</a> | <a href="#" className="underline hover:text-gray-300">Terms of Service</a>
        </footer>
      </div>
    </div>
  );
};

export default EsteemedPartners;
