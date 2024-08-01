"use client";
import React, { useState } from "react";
import Heading from "../components/heading";
import Background from "../../utils/background";
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
        "Training on the latest agricultural products and services available through Kisanlink, ensuring FPOs can effectively support their member farmers."  
        ,imageUrl: "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/acad-5.png",   },
            {
      id: 2,
      title: "Operational Efficiency",
      description:
        "Courses on best practices for managing FPO operations, including financial management, marketing, and supply chain logistics."
        ,imageUrl: "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/acad-4.png", },
    {
      id: 3,
      title: "Sustainability Practices",
      description:
        "Education on sustainable farming techniques that help FPOs promote eco-friendly and profitable agricultural practices among their members."
        ,imageUrl: "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/acad-6.png",  },

  ];

  const leftImageUrl = "https://via.placeholder.com/150";
  const selectedCardData = cardsData.find(card => card.id === selectedCard);

  return (
    <div className="font-bold text-center small:ml-[600px] lg:ml-4 p-5  pb-12 lg:flex lg:flex-col items-center lg:max-w-1/2 lg:justify-start ">
      

   
      <div className="lg:flex lg:flex-row w-[1080px]  items-center justify-center">
        {/* Image on the left */}
        <div className="lg:flex-shrink-0 lg:w-[540px] lg:-ml-24 small:w-[350px] small:ml-24 small:mr-20 mb-5 lg:pr-16  lg:mr-8">
          <img
            src={selectedCardData ? selectedCardData.imageUrl : "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/acad-5.png"}
            className="w-[300px] h-[300px] rounded-lg shadow-lg"
          />
        </div>
        {/* Accordion on the right */}
        <div className="lg:flex lg:flex-col small:-ml-4 small:w-[200px] lg:w-[540px] space-y-4">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className={`cursor-pointer p-2 rounded-lg  border-2 border-transparent w-100 hover:border-green-600 transition-all ${
                selectedCard === card.id ? "border-green-600" : ""
              }`}
              onClick={() => handleCardClick(card.id)}
            >
              <div className="lg:flex text-brown-700 justify-between items-center font-bold lg:text-2xl small:text-xl">
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
                <div className="mt-3 p-4 small:w-[350px] rounded-md lg:text-left small:text-center small:ml-16 text-brown-700">
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
