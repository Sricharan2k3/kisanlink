"use client";
import React, { useState } from "react";
import Heading from "../components/heading";
import Background from "../../utils/background";
const ConsultancyServicesPage = () => {
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
        "We guide and support FPOs in identifying and applying for relevant schemes crucial for their growth.",
      imageUrl:
        "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/startegy.svg",
    },
    {
      id: 2,
      title: "Scheme Application Support",
      description:
        " Create Detailed Project Reports (DPRs) and assist in scheme applications, streamlining the process for FPOs.",
      imageUrl:
        "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/financial-support-web.png",
    },
    {
      id: 3,
      title: "Financial Feasibility Analysis",
      description:
        "Evaluate the financial feasibility of new projects, aiding in informed decision-making.",
      imageUrl:
        "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/financial-analysis-web.png",
    },
    {
      id: 4,
      title: "Financial Assistance",
      description:
        "Aid in applying for loans, credits, and financial support necessary for FPO development.",
      imageUrl:
        "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/financial-assistance-web.png",
    },
    {
      id: 5,
      title: "Market Information Dissemination",
      description:
        "Utilize modern social media platforms and communication channels to share updated market information with farmers.",
      imageUrl:
        "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/ing.svg",
    },
    {
      id: 6,
      title: "Promotional Material Design",
      description:
        "Create eye-catching promotional materials to amplify brand visibility.",
      imageUrl:
        "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/ing.svg",
    },
  ];

  const leftImageUrl = "https://via.placeholder.com/150";
  const selectedCardData = cardsData.find((card) => card.id === selectedCard);

  return (
    <div className="font-sans text-center p-4 pt-30 pb-12 lg:flex lg:flex-col items-center lg:max-w-1/2 lg:justify-start ">
      <Heading value={"Strategic Consultancy Services"}></Heading>
      <div className="lg:flex flex-col lg:w-[1080px] small:w-[350px] md:flex-row items-center justify-center">
        {/* Image on the left */}
        <div className="flex-shrink-0 mb-5 pr-16 md:mb-0 md:mr-8">
          <img
            src={
              selectedCardData
                ? selectedCardData.imageUrl
                : "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/startegy.svg"
            }
            className="w-[300px] h-[300px] rounded-lg shadow-lg small:ml-12"
          />
        </div>
        {/* Accordion on the right */}
        <div className="flex flex-col space-y-4">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className={`cursor-pointer p-2 rounded-lg  border-2 border-transparent lg:w-100 small:w-80 hover:border-green-600 transition-all ${
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
      </div>
    </div>
  );
};

export default ConsultancyServicesPage;
