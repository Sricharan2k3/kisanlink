
"use client"

import { Button } from "@/components/ui/button"



// Sample data for sections
const sections = [
  {
    title: "Farm Management",
    image: "/images/farm-management.jpg", // Replace with your agriculture image
    points: [
      "Efficient crop rotation plans.",
      "Automated irrigation systems.",
      "Real-time farm monitoring."
    ],
  },
  {
    title: "Sustainable Agriculture",
    image: "/images/sustainable-agriculture.jpg", // Replace with your agriculture image
    points: [
      "Eco-friendly farming techniques.",
      "Reduced carbon footprint.",
      "Use of renewable energy sources."
    ],
  },
  {
    title: "Livestock Care",
    image: "/images/livestock-care.jpg", // Replace with your agriculture image
    points: [
      "Advanced veterinary services.",
      "Nutritional feed plans.",
      "Health tracking systems."
    ],
  },
  // Add more sections as needed
];

export default function AgricultureComponent() {
  return (
    <div className="space-y-10">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
        >
          <div className="w-full md:w-1/2">
            <img src={section.image} alt={section.title} className="object-cover w-full h-full" />
          </div>
          <div className="flex flex-col items-start justify-center w-full p-8 space-y-6 bg-[#e0f2e9] md:w-1/2">
            <h2 className="text-2xl font-bold">{section.title}</h2>
            {section.points.map((point, pointIndex) => (
              <div key={pointIndex} className="flex items-start space-x-4">
                <LeafIcon className="w-8 h-8" />
                <p>{point}</p>
              </div>
            ))}
            <Button variant="outline">Learn More</Button>
   
          
          </div>
        </div>
      ))}
    </div>
  );
}

function LeafIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 2l20 20" />
      <path d="M6 6c6-4 14 4 8 10s-14 2-10-8z" />
    </svg>
  );
}
