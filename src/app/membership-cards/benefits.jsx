"use client";
import React, { useState } from "react";

const MembershipCardBenefits = () => {
  // State to keep track of which accordion item is open
  const [openItem, setOpenItem] = useState(null);

  // Function to handle accordion item click
  const handleAccordionClick = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="bg-gray-100  ">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <div className="accordion">
            {[
              {
                title:
                  "Transparency: Transactions, Financing, and Order Management",
                content: [
                  "Clear visibility and traceability of transaction details",
                  "Transparent loan terms and repayment schedules",
                  "Simplifies access to financial products",
                  "Real-time order tracking",
                  "Minimizes errors and enhances coordination",
                ],
              },
              {
                title: "Output Price Discovery and Market Intelligence",
                content: [
                  "Provides up-to-date market prices",
                  "Helps farmers sell at optimal time / rates",
                  "Analyzes market trends for better planning",
                  "Benchmarks performance over time",
                ],
              },
              {
                title:
                  "Dynamic Crop Data: Geo-location, Crop Stages, and Advisory",
                content: [
                  "Enhances precision farming",
                  "Optimizes resource use",
                  "Monitors crop growth in detail",
                  "Enables timely agricultural interventions",
                  "Offers expert, tailored advice",
                  "Manages risks like weather and pests",
                ],
              },
              {
                title: "Discount and Credits",
                content: [
                  "Reduced costs of seeds, fertilizers, etc.",
                  "Lowers costs for services like soil testing / drone input spraying",
                  "Provides benefits through various partnerships",
                  "Enhances support and resources for farmers",
                ],
              },
            ].map((item, index) => (
              <div key={index} className="accordion-item mb-4">
                <h3
                  className={`bg-gray-200 text-gray-800 p-4 rounded cursor-pointer transition-colors duration-300 ${
                    openItem === index ? "bg-gray-300" : "hover:bg-gray-300"
                  }`}
                  onClick={() => handleAccordionClick(index)}
                >
                  {item.title}
                </h3>
                {openItem === index && (
                  <div className="accordion-content bg-gray-50 p-4 rounded border-t border-gray-200">
                    <ul className="list-none pl-0">
                      {item.content.map((contentItem, idx) => (
                        <li
                          key={idx}
                          className="relative pl-6 mb-3 text-gray-600"
                        >
                          <span className="absolute left-0 text-green-500">
                            ✔
                          </span>
                          {contentItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipCardBenefits;
