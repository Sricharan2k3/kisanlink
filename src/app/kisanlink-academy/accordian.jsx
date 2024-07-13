"use client";
import React, { useState } from "react";
import Heading from "../components/heading";
import Background from "../../utils/background";
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
        ,imageUrl: "https://www.kisanlink.in/wp-content/uploads/Learning-languages-rafiki.jpg", },

  ];

  const leftImageUrl = "https://via.placeholder.com/150";
  const selectedCardData = cardsData.find(card => card.id === selectedCard);


  return (
    <div className="font-bold text-center lg:p-5  pb-12 flex flex-col items-center lg:max-w-1/2 justify-start ">
      

   
      <div className="lg:flex  lg:w-[1080px] lg:flex-row items-center justify-center">
        {/* Image on the left */}
        <div className="lg:flex-shrink-0 lg:w-[540px] lg:-ml-24 small:w-[350px] small:ml-20 small:mr-20 mb-5 lg:pr-16  lg:mr-8">
          <img
            src={selectedCardData ? selectedCardData.imageUrl : "https://www.kisanlink.in/wp-content/uploads/startegy.svg"}
            className="w-[400px] h-[250px] rounded-lg shadow-lg"
          />
        </div>
        {/* Accordion on the right */}
        <div className="lg:flex lg:flex-col small:w-[200px] space-y-4">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className={`cursor-pointer p-2 rounded-lg  border-2 border-transparent small:w-100 lg:w-100 hover:border-green-600 transition-all ${
                selectedCard === card.id ? "border-green-600" : ""
              }`}
              onClick={() => handleCardClick(card.id)}
            >
              <div className="lg:flex text-brown-700 justify-between items-center font-bold text-2xl">
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
                <div className="mt-3 p-4 small:w-[350px] rounded-md lg:text-left small:text-center small:ml-20 text-brown-700">
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
