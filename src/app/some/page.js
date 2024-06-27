"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import FontAwesome icons
import Heading from "../components/heading";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("Farm Mechanisation");
  const [activeAccordion, setActiveAccordion] = useState(null);

  const tabs = [
    {
      name: "Farm Mechanisation",
      content: farmMechanisationContent,
      image: "https://www.kisanlink.in/wp-content/uploads/value.svg",
    },
    {
      name: "Market Linkage",
      content: marketLinkageContent,
      image: "https://www.kisanlink.in/wp-content/uploads/market.svg",
    },
    {
      name: "Marketing",
      content: marketingContent,
      image: "https://www.kisanlink.in/wp-content/uploads/ing.svg",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 p-8 min-h-screen">
      <Heading value={"Value Proposition"}></Heading>
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg">
        {/* Tabs */}
        <div className="flex justify-around bg-gray-200 rounded-t-lg">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`py-4 px-6 w-1/3 text-center ${
                activeTab === tab.name
                  ? "bg-green-500 text-white font-bold"
                  : "text-black"
              }`}
              onClick={() => {
                setActiveTab(tab.name);
                setActiveAccordion(null); // Reset accordions when switching tabs
              }}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex flex-col md:flex-row p-8">
          <div className="flex-1 space-y-4">
            {tabs
              .find((tab) => tab.name === activeTab)
              .content.map((item, index) => (
                <div key={index}>
                  <button
                    className="w-full text-left py-4 px-6 bg-gray-100 hover:bg-gray-200 rounded-lg transition duration-300 text-lg flex justify-between items-center"
                    onClick={() => toggleAccordion(index)}
                  >
                    {item.title}
                    {activeAccordion === index ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                      activeAccordion === index ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    <p className="p-6 text-lg">{item.content}</p>
                  </div>
                </div>
              ))}
          </div>
          <div className="hidden md:block md:flex-shrink-0 md:w-1/3 p-4">
            <img
              src={tabs.find((tab) => tab.name === activeTab).image}
              alt={activeTab}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const farmMechanisationContent = [
  {
    title: "Supply of Agricultural Machinery",
    content:
      "Access essential agricultural machinery and equipment through our comprehensive supply network, enhancing productivity.",
  },
  {
    title: "High-Quality Products",
    content:
      "Access top-tier agricultural equipment ensuring reliability and efficiency.",
  },
  {
    title: "Reasonable Pricing",
    content:
      "Competitive rates ensure affordability without compromising quality.",
  },
  {
    title: "Logistics Management",
    content: "Efficient management of supply chains for seamless operations.",
  },
  {
    title: "Maintenance and Repair Services",
    content: "Reliable support for equipment upkeep and repairs.",
  },
  {
    title: "Training Sessions",
    content:
      "Conduct training workshops empowering farmers with equipment usage and maintenance skills.",
  },
];

const marketLinkageContent = [
  {
    title: "Market Connections",
    content:
      "Facilitate connections to markets for FPO outputs, be it through direct buyer linkages or establishing food processing capabilities within the FPO itself.",
  },
  {
    title: "Efficient Food Processing Units",
    content: "Develop SOPs for streamlined unit management.",
  },
  {
    title: "Training Programs",
    content:
      "Train staff on operational and maintenance practices for efficiency.",
  },
  {
    title: "Introducing New Crop",
    content:
      "Implement buy-back models and introduce new crops for diversification and profitability.",
  },
  {
    title: "Competitive Market Prices",
    content: "Ensure competitive pricing for processed products in the market.",
  },
  {
    title: "Buyer Connections",
    content:
      "Establish connections with bulk buyers, broadening market reach for FPO products.",
  },
];

const marketingContent = [
  {
    title: "Promotional Material Design",
    content:
      "Create eye-catching promotional materials to amplify brand visibility.",
  },
  {
    title: "Market Information Dissemination",
    content:
      "Utilize modern social media platforms and communication channels to share updated market information with farmers.",
  },
];

export default TabComponent;
