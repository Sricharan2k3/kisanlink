"use client";
import React, { useState } from "react";
import Heading from "../components/heading";
import Background from "@/utils/background";

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
      title: "Scheme Applications",
      description:
        "We offer robust technical support services to ensure smooth operations and effective utilization of our platform’s features. Our dedicated team is committed to assisting users with any technical queries or issues they encounter.",
      imageUrl: "https://www.kisanlink.in/wp-content/uploads/M.png"
    },
    {
      id: 2,
      title: "Financial Feasibility Analysis",
      description:
        "We provide a state-of-the-art tech platform for managing a comprehensive database of farmers affiliated with the Farmers Producer Organization (FPO). This facilitates improved communication and streamlined organizational processes.",
      imageUrl: "https://www.kisanlink.in/wp-content/uploads/S.png"
    },
    {
      id: 3,
      title: "Financial Feasibility Analysis",
      description:
        "We issue and manage farmers’ physical membership cards through our technologically advanced platform. Each card is embedded with a unique QR code, granting access to substantial information. This QR code enables seamless tracking of the farmer’s complete profile, including transaction history and credit records.",
      imageUrl: "https://www.kisanlink.in/wp-content/uploads/F.png"
    }
  ];

  const defaultImageUrl = "https://www.kisanlink.in/wp-content/uploads/Websit-AI-1-scaled.jpg";
  const selectedImageUrl = selectedCard ? cardsData.find(card => card.id === selectedCard).imageUrl : defaultImageUrl;

  return (
    <div className="font-sans text-center p-5 pt-30 pb-12 flex flex-col items-center max-w-1/2 justify-start ">
      <Heading value={"Tech Support"} />
      <div className="flex flex-col w-[1080px] md:flex-row items-center justify-center pl-20"> {/* Increased left padding */}
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
