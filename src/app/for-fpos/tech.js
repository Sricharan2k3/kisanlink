import React, { useState, useEffect } from 'react';
import Heading from './Heading';

const defaultImg = "https://www.kisanlink.in/wp-content/uploads/Websit-AI-1-scaled.jpg"; // Default image URL

const Techsuppourt = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [imageSrc, setImageSrc] = useState(defaultImg); // Initialize with default image

  useEffect(() => {
    preloadImages();
  }, []);

  const preloadImages = () => {
    const imageUrls = Object.values(cardImages);
    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  };

  const handleCardClick = (cardId) => {
    if (selectedCard === cardId) {
      setSelectedCard(null);
      setImageSrc(defaultImg); // Reset to default image
    } else {
      setSelectedCard(cardId);
      setImageSrc(cardImages[cardId]);
    }
  };

  const cardImages = {
    1: 'https://www.kisanlink.in/wp-content/uploads/M.png',
    2: 'https://www.kisanlink.in/wp-content/uploads/S.png',
    3: 'https://www.kisanlink.in/wp-content/uploads/F.png',
  };

  return (
    <div className=" font-serif text-center p-4 lg:mx-32">
      <Heading value={"Tech Support"}></Heading>
      <div className="flex flex-col lg:flex-row items-start">
        <div className="flex flex-col mr-8 max-w-md">
          <div
            className={`cursor-pointer mb-2 p-4 rounded-lg ${
              selectedCard === 1 ? 'bg-white-100' : 'bg-gray-100'
            }`}
            onClick={() => handleCardClick(1)}
          >
            <div>Maintaining Farmers Database</div>
            {selectedCard === 1 && (
              <div className="mt-2 p-4">
                <p className="text-sm">
                  We offer a robust tech platform to maintain a comprehensive database of farmers associated with the FPO. This aids in better communication and streamlined operations.
                </p>
              </div>
            )}
          </div>

          <div
            className={`cursor-pointer mb-2 p-4 rounded-lg ${
              selectedCard === 2 ? 'bg-white-100' : 'bg-gray-100'
            }`}
            onClick={() => handleCardClick(2)}
          >
            <div>Smart Membership Cards</div>
            {selectedCard === 2 && (
              <div className="mt-2 p-4">
                <p className="text-sm">
                  We manage the issuance and tracking of farmers’ information through physical cards via our tech-enabled platform. Each card is equipped with a unique QR code, serving as a gateway to a wealth of information. This QR code enables comprehensive tracing of the farmer's complete profile, including transactions and credit history.
                </p>
              </div>
            )}
          </div>

          <div
            className={`cursor-pointer mb-2 p-4 rounded-lg ${
              selectedCard === 3 ? 'bg-white-100' : 'bg-gray-100'
            }`}
            onClick={() => handleCardClick(3)}
          >
            <div>Financial Reportings</div>
            {selectedCard === 3 && (
              <div className="mt-2 p-4">
                <p className="text-sm">
                  We provide financial reporting services to FPOs to help them track their financial performance and make informed decisions. Our tech solutions ensure accurate and timely reporting, enhancing transparency and accountability.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="flex-1 min-w-0 text-center ml-auto lg:ml-20"> {/* Adjusted ml-auto to lg:ml-20 */}
          <img
            src={imageSrc}
            alt={`Image ${selectedCard}`}
            className="w-80 h-auto rounded-md shadow-md ml-auto" // Added ml-auto to move image to the right
          />
        </div>
      </div>
    </div>
  );
};

export default Techsuppourt;
