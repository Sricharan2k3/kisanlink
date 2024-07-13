"use client";
import React, { useState } from "react";
import Heading from "../components/heading";
import Background from "../../utils/background";

const Techsuppourt = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardId) => {
    if (selectedCard === cardId) {
      setSelectedCard(null); // Deselect if already selected
    } else {
      setSelectedCard(cardId); // Select the clicked card
    }
  };

  const cardsData = [
    {
      id: 1,
      title: "Maintaining Farmers Database",
      description:
        "We offer robust tech platform to maintain a comprehensive database of farmers associated with the FPO. This aids in better communication and streamlined operations.",
      imageUrl:
        "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/M.png",
    },
    {
      id: 2,
      title: "Smart Membership Cards",
      description:
        "We manage the issuance and tracking of farmers’ information physical cards through our tech-enabled platform. Each card is equipped with a unique QR code, serving as a gateway to a wealth of information. This QR code enables comprehensive tracing of the farmer's complete profile, including transactions and credit history..",
      imageUrl: "https://kisanlink.vercel.app/3.jpg",
    },
    {
      id: 3,
      title: "Financial Reportings",
      description:
        "We manage and generate detailed financial reports by leveraging our advanced tech solutions. This ensures transparent financial insights for strategic decision making within the FPO..",
      imageUrl:
        "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/F.png",
    },
  ];

  const defaultImageUrl =
    "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/Websit-AI-1-scaled.jpg";
  const selectedImageUrl = selectedCard
    ? cardsData.find((card) => card.id === selectedCard).imageUrl
    : defaultImageUrl;

  return (
    <div className="font-sans text-center p-5 pt-30 pb-12 flex flex-col items-center max-w-1/2 justify-start ">
      <Heading value={"Tech Support"} />
      <div className="flex flex-col w-[1080px] md:flex-row items-center justify-center pl-20">
        {" "}
        {/* Increased left padding */}
        {/* Accordion on the left */}
        <div className="flex flex-col space-y-4 w-1/2">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className={`cursor-pointer p-4 rounded-lg border-2 border-transparent w-full hover:border-green-600 transition-all ${
                selectedCard === card.id ? "border-green-600" : ""
              }`}
              onClick={() => handleCardClick(card.id)}
            >
              <div className="flex text-brown-700 justify-between items-center font-bold text-lg">
                {card.title}
                <span
                  className={`transform transition-transform ${
                    selectedCard === card.id ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </div>
              {selectedCard === card.id && (
                <div className="mt-3 p-4 rounded-md text-left text-brown-700">
                  <p className="text-sm leading-relaxed">{card.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Image on the right */}
        <div className="flex-shrink-0 mb-5 pr-16 md:mb-0 md:ml-8">
          <img
            src={selectedImageUrl}
            alt="Consultancy Services"
            className="w-[300px] h-[280px] rounded-lg shadow-lg object-fit ml-36"
          />
        </div>
      </div>
    </div>
  );
};

export default Techsuppourt;
