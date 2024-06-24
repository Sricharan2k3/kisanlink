import React, { useState } from "react";

const A = () => {
  const [activeTab, setActiveTab] = useState("London");
  const [activePanel, setActivePanel] = useState(null);

  const togglePanel = (panelIndex) => {
    setActivePanel(activePanel === panelIndex ? null : panelIndex);
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen p-4">
      <div className="tab flex border border-gray-300 bg-gray-200">
        <button
          className={`tablinks flex-1 text-black p-4 text-center text-lg ${
            activeTab === "London" ? "bg-green-500 text-white font-semibold" : ""
          }`}
          onClick={() => setActiveTab("London")}
          id="defaultOpen"
        >
          Farm Mechanisation
        </button>
        <button
          className={`tablinks flex-1 text-black p-4 text-center text-lg ${
            activeTab === "Paris" ? "bg-green-500 text-white font-semibold" : ""
          }`}
          onClick={() => setActiveTab("Paris")}
        >
          Market Linkage
        </button>
        <button
          className={`tablinks flex-1 text-black p-4 text-center text-lg ${
            activeTab === "Tokyo" ? "bg-green-500 text-white font-semibold" : ""
          }`}
          onClick={() => setActiveTab("Tokyo")}
        >
          Marketing
        </button>
      </div>

      <div className={`tabcontent ${activeTab === "London" ? "flex" : "hidden"}`}>
        <div className="flex-1">
          {[
            "Supply of Agricultural Machinery",
            "High-Quality Products",
            "Reasonable Pricing",
            "Logistics Management",
            "Maintenance and Repair Services",
            "Training Sessions",
          ].map((title, index) => (
            <div key={index}>
              <button
                className="accordion font-semibold text-lg py-4 px-6 w-full text-left"
                onClick={() => togglePanel(index)}
              >
                {title}
              </button>
              <div
                className={`panel px-6 py-2 bg-white overflow-hidden transition-max-height duration-200 ${
                  activePanel === index ? "max-h-full" : "max-h-0"
                }`}
              >
                <p>
                  {index === 0 && "Access essential agricultural machinery and equipment through our comprehensive supply network, enhancing productivity."}
                  {index === 1 && "Access top-tier agricultural equipment ensuring reliability and efficiency."}
                  {index === 2 && "Competitive rates ensure affordability without compromising quality."}
                  {index === 3 && "Efficient management of supply chains for seamless operations."}
                  {index === 4 && "Reliable support for equipment upkeep and repairs."}
                  {index === 5 && "Conduct training workshops empowering farmers with equipment usage and maintenance skills."}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:block">
          <img src="https://www.kisanlink.in/wp-content/uploads/value.svg" alt="Value" />
        </div>
      </div>

      <div className={`tabcontent ${activeTab === "Paris" ? "flex" : "hidden"}`}>
        <div className="flex-1">
          {[
            "Market Connections",
            "Efficient Food Processing Units",
            "Training Programs",
            "Introducing New Crop",
            "Competitive Market Prices",
            "Buyer Connections",
          ].map((title, index) => (
            <div key={index}>
              <button
                className="accordion font-semibold text-lg py-4 px-6 w-full text-left"
                onClick={() => togglePanel(index)}
              >
                {title}
              </button>
              <div
                className={`panel px-6 py-2 bg-white overflow-hidden transition-max-height duration-200 ${
                  activePanel === index ? "max-h-full" : "max-h-0"
                }`}
              >
                <p>
                  {index === 0 && "Facilitate connections to markets for FPO outputs, be it through direct buyer linkages or establishing food processing capabilities within the FPO itself."}
                  {index === 1 && "Develop SOPs for streamlined unit management."}
                  {index === 2 && "Train staff on operational and maintenance practices for efficiency."}
                  {index === 3 && "Implement buy-back models and introduce new crops for diversification and profitability."}
                  {index === 4 && "Ensure competitive pricing for processed products in the market."}
                  {index === 5 && "Establish connections with bulk buyers, broadening market reach for FPO products."}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:block">
          <img src="https://www.kisanlink.in/wp-content/uploads/market.svg" alt="Market" />
        </div>
      </div>

      <div className={`tabcontent ${activeTab === "Tokyo" ? "flex" : "hidden"}`}>
        <div className="flex-1">
          {["Promotional Material Design", "Market Information Dissemination"].map((title, index) => (
            <div key={index}>
              <button
                className="accordion font-semibold text-lg py-4 px-6 w-full text-left"
                onClick={() => togglePanel(index)}
              >
                {title}
              </button>
              <div
                className={`panel px-6 py-2 bg-white overflow-hidden transition-max-height duration-200 ${
                  activePanel === index ? "max-h-full" : "max-h-0"
                }`}
              >
                <p>
                  {index === 0 && "Create eye-catching promotional materials to amplify brand visibility."}
                  {index === 1 && "Utilize modern social media platforms and communication channels to share updated market information with farmers."}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:block">
          <img src="https://www.kisanlink.in/wp-content/uploads/ing.svg" alt="Marketing" />
        </div>
      </div>
    </div>
  );
};

export default A;
