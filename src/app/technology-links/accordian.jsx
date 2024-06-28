"use client";
import React, { useState } from "react";
import Heading from "../components/heading";

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
        "We offer robust technical support services to ensure smooth operations and effective utilization of our platform’s features. Our dedicated team is committed to assisting users with any technical queries or issues they encounter.",
      imageUrl: "https://www.kisanlink.in/wp-content/uploads/startegy.svg"
    },
    {
      id: 2,
      title: "Financial Feasibility Analysis",
      description:
        "We provide a state-of-the-art tech platform for managing a comprehensive database of farmers affiliated with the Farmers Producer Organization (FPO). This facilitates improved communication and streamlined organizational processes.",
      imageUrl: "2.png",
    },
    {
      id: 3,
      title: "Membership Cards",
      description:
        "We issue and manage farmers’ physical membership cards through our technologically advanced platform. Each card is embedded with a unique QR code, granting access to substantial information. This QR code enables seamless tracking of the farmer’s complete profile, including transaction history and credit records.",
      imageUrl: "3.jpg",
    },
    {
      id: 4,
      title: "Financial Assistance",
      description:
        "Utilizing cutting-edge technology solutions, we generate and manage detailed financial reports. This ensures transparent insights into financial matters, empowering strategic decision-making within the Farmers Producer Organization (FPO)",
      imageUrl: "4.png",
    },
  ];

  const selectedCardData = cardsData.find(card => card.id === selectedCard);

  return (
    <div className="font-sans text-center p-5 pt-32 pb-12 flex flex-col items-center max-w-1/2 justify-start">
      <video width="1080" height="1080" controls>
        <source
          src="https://www.kisanlink.in/wp-content/uploads/pitchdesk_3.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <Heading value={"Tech Support"} />
      <div className="flex flex-col w-[1080px] md:flex-row items-center justify-center">
        {/* Image on the left */}
        <div className="flex-shrink-0 mb-5 pr-16 md:mb-0 md:mr-8">
          <img
            src={selectedCardData ? selectedCardData.imageUrl : "https://www.kisanlink.in/wp-content/uploads/startegy.svg"}
            alt={selectedCardData ? selectedCardData.title : "Consultancy Services"}
            className="w-[400px] h-[400px] rounded-lg shadow-lg"
          />
        </div>
        {/* Accordion on the right */}
        <div className="flex flex-col space-y-4">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className={`cursor-pointer p-2 rounded-lg border-2 border-transparent w-100 hover:border-green-600 transition-all ${
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

