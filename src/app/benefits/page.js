"use client";

import { Button } from "@/components/ui/button";

// Sample data for sections
const sections = [
  {
    title: "Increased Choice among Product Manufacturers",
    image: "/images/farm-management.jpg", // Replace with your agriculture image
    points: ["Efficient crop rotation plans."],
  },
  {
    title: "Access to the Latest Promotions and Offers",
    image: "/images/sustainable-agriculture.jpg", // Replace with your agriculture image
    points: [
      "Stay updated with the latest promotions and offers for your agricultural needs.",
    ],
  },
  {
    title: "Reasonable Prices",
    image: "/images/livestock-care.jpg", // Replace with your agriculture image
    points: [
      "Get access to quality products at reasonable and competitive prices.",
    ],
  },
  {
    title: "Doorstep Delivery",
    image: "/images/livestock-care.jpg", // Replace with your agriculture image
    points: [
      "Convenience at your doorstep - have your orders delivered directly to you.",
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
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full md:w-1/2">
            <img
              src={section.image}
              alt={section.title}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col items-start justify-center w-full p-8 space-y-6 bg-green-200 md:w-1/2">
            <h2 className="text-2xl text-brown-700 font-bold">
              {section.title}
            </h2>
            {section.points.map((point, pointIndex) => (
              <div key={pointIndex} className="flex items-start space-x-4">
                <SunIcon className="w-6 h-6" />
                <p>{point}</p>
              </div>
            ))}
            {/* <Button variant="outline">Learn More</Button> */}
          </div>
        </div>
      ))}
    </div>
  );
}

// function LeafIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M2 2l20 20" />
//       <path d="M6 6c6-4 14 4 8 10s-14 2-10-8z" />
//     </svg>
//   );
// }

function SunIcon(props) {
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
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}
