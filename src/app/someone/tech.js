import React, { useState } from 'react';

const Techsuppourt = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [imageSrc, setImageSrc] = useState('./default-image.png');

  const handleCardClick = (cardId) => {
    if (selectedCard === cardId) {
      setSelectedCard(null);
      setImageSrc('./default-image.png');
    } else {
      setSelectedCard(cardId);
      setImageSrc(cardImages[cardId]);
    }
  };

  const cardImages = {
    1: './Ts-1.png',
    2: './Ts-2.png',
    3: './Ts-2.png',
  };

  return (
    <div className="mt-20 px-8 font-serif text-center">
      <h1 className="text-green-600 text-2xl font-bold mb-8">Tech Support</h1>
      <div className="flex items-start">
        <div className="flex flex-col mr-8">
          <div
            className={`cursor-pointer mb-2 p-4 rounded-lg ${
              selectedCard === 1 ? 'bg-green-100' : 'bg-gray-100'
            }`}
            onClick={() => handleCardClick(1)}
          >
            <div>Maintaining Farmers Database</div>
            {selectedCard === 1 && (
              <div className="mt-2 bg-white rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  We offer robust tech platform to maintain a comprehensive database of farmers associated with the FPO. This aids in better communication and streamlined operations.
                </p>
              </div>
            )}
          </div>

          <div
            className={`cursor-pointer mb-2 p-4 rounded-lg ${
              selectedCard === 2 ? 'bg-green-100' : 'bg-gray-100'
            }`}
            onClick={() => handleCardClick(2)}
          >
            <div>Smart Membership Cards</div>
            {selectedCard === 2 && (
              <div className="mt-2 bg-white rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  We manage the issuance and tracking of farmers’ information physical cards through our tech-enabled platform. Each card is equipped with a unique QR code, serving as a gateway to a wealth of information. This QR code enables comprehensive tracing of the farmer's complete profile, including transactions and credit history.
                </p>
              </div>
            )}
          </div>

          <div
            className={`cursor-pointer mb-2 p-4 rounded-lg ${
              selectedCard === 3 ? 'bg-green-100' : 'bg-gray-100'
            }`}
            onClick={() => handleCardClick(3)}
          >
            <div>Financial Reportings</div>
            {selectedCard === 3 && (
              <div className="mt-2 bg-white rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  We provide financial reporting services to FPOs to help them track their financial performance and make informed decisions. Our tech solutions ensure accurate and timely reporting, enhancing transparency and accountability.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="flex-1 min-w-0 text-center ml-auto">
          <img
            src={imageSrc}
            alt={`Image ${selectedCard}`}
            className="ml-12 max-w-2/3 h-auto rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Techsuppourt;
