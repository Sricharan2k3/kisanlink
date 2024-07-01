"use client";
import React, { useState } from "react";
import Heading from "../components/heading";
import Background from "@/utils/background";
const KisanAcademy = () => {
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
      title: "Collaborative Course",
      description:
        "Developed in collaboration with industry experts and agricultural organizations, our courses cover essential topics such as sustainable farming practices, precision agriculture, organic farming, and agribusiness management."
        , imageUrl: "https://www.kisanlink.in/wp-content/uploads/startegy.svg",  
      },
            {
      id: 2,
      title: "Certification",
      description:
        "Learners who complete our courses receive certification, demonstrating their proficiency and readiness to apply their skills in real-world scenarios." ,
        imageUrl: "https://www.kisanlink.in/wp-content/uploads/kisanlink-certificate.png",},
    {
      id: 3,
      title: "Flexible Learning",
      description:
        "Our user-friendly platform allows learners to progress at their own pace, accommodating different learning styles and schedules." 
        ,imageUrl: "https://www.kisanlink.in/wp-content/uploads/flexible-education-web.png", },

  ];

  const leftImageUrl = "https://via.placeholder.com/150";
  const selectedCardData = cardsData.find(card => card.id === selectedCard);


  return (
    <div className="font-bold text-center p-5  pb-12 flex flex-col items-center max-w-1/2 justify-start ">
      

   
      <div className="flex flex-col w-[1080px] md:flex-row items-center justify-center">
        {/* Image on the left */}
        <div className="flex-shrink-0 mb-5 pr-16 md:mb-0 md:mr-8">
          <img
            src={selectedCardData ? selectedCardData.imageUrl : "https://www.kisanlink.in/wp-content/uploads/startegy.svg"}
            className="w-[400px] h-[250px] rounded-lg shadow-lg"
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

export default KisanAcademy;
