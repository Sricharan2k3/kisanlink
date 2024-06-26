"use client";
import React, { useState } from "react";
import Heading from "../components/heading";
import Background from "@/utils/background";
const FPOTraining = () => {
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
      title: "Product and service knowledge",
      description:
        "Training on the latest agricultural products and services available through Kisanlink, ensuring FPOs can effectively support their member farmers."     },
            {
      id: 2,
      title: "Operational Efficiency",
      description:
        "Courses on best practices for managing FPO operations, including financial management, marketing, and supply chain logistics." },
    {
      id: 3,
      title: "Sustainability Practices",
      description:
        "Education on sustainable farming techniques that help FPOs promote eco-friendly and profitable agricultural practices among their members."  },

  ];

  const leftImageUrl = "https://via.placeholder.com/150";

  return (
    <div className="font-bold text-center p-5  pb-12 flex flex-col items-center max-w-1/2 justify-start ">
      

   
      <div className="flex flex-col w-[1080px] md:flex-row items-center justify-center">
        {/* Image on the left */}
        <div className="flex-shrink-0  mb-5 pr-16 md:mb-0 md:mr-8">
          <img
            src="https://www.kisanlink.in/wp-content/uploads/startegy.svg"
            alt="Consultancy Services"
            className="w-[300px] h-[300px] rounded-lg "
          />
        </div>
        {/* Accordion on the right */}
        <div className="flex flex-col space-y-4">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className={`cursor-pointer p-2 rounded-lg  border-2 border-transparent w-100 hover:border-green-600 transition-all ${
                selectedCard === card.id ? "border-green-600" : ""
              }`}
              onClick={() => handleCardClick(card.id)}
            >
              <div className="flex text-brown-700 justify-between items-center font-bold text-2xl">
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

export default FPOTraining;
