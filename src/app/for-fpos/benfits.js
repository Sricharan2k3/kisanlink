import React from "react";
import Heading from "./Heading";
import Background from "@/utils/background";
// Card Component
const Card = ({ dancer, image, title, description, isImageLeft }) => {
  return (
    <div className="flex flex-row w-9/12 items-center con rounded-lg p-2 -mt:24">
      {isImageLeft && (
        <div className=" flex flex-row w-72 h-72 rounded-lg overflow-hidden mr-4">
          <img
            src={image}
            alt="Card Image"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className=" bg-green-700 w-16 h-16 rounded-full flex flex-row">
        <p className=" align-middle text-white font-bold pl-6 text-center items-center justify-center content-center">
          {dancer}
        </p>
      </div>
      <div className="flex-1 text-left mt-4 md:mt-0 md:ml-4">
        <h2 className="text-2xl font-semibold mb-2 text-brown-700">{title}</h2>
        <ul className="list-disc list-inside text-gray-500">
          {description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
      {!isImageLeft && (
        <div className="w-72 h-72 rounded-lg overflow-hidden ml-4">
          <img
            src={image}
            alt="Card Image"
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

// Main Benefits Component
const Benefits = () => {
  const cardsData = [
    {
      dancer: 1,
      image:
        "https://www.kisanlink.in/wp-content/uploads/2022/03/Onboarding-pana.svg",
      title: "Enhanced Efficiency",
      description: [
       "By leveraging Kisanlink's tech platform, FPOs experience streamlined operations and enhanced efficiency in managing farmer databases, membership cards, and financial reporting. This translates to reduced administrative burden and optimized resource utilization."
      ],
      isImageLeft: true,
    },
    {
      dancer: 2,
      image:
      "https://www.kisanlink.in/wp-content/uploads/2022/03/Course-app-pana.svg",
      title:"Improved Communication",
      description: [
        "Kisanlink facilitates better communication channels between FPOs and their member farmers through its comprehensive database management system. This ensures timely dissemination of information, updates, and announcements."
      ],
      isImageLeft: false,
    },
    {
      dancer: 3,
      image: "https://www.kisanlink.in/wp-content/uploads/2022/03/Onboarding-pana.svg",
      title: "Access to Technology",
      description: [
        "Through Kisanlink, FPOs gain access to advanced agricultural technologies such as drone-based services for input spraying. This empowers FPOs to offer innovative solutions to their member farmers, enhancing productivity and agricultural outcomes."
      ],
      isImageLeft: true,
    },
    {
      dancer: 4,
      image:
        "https://www.kisanlink.in/wp-content/uploads/2022/03/Course-app-pana.svg",
      title: "Data-Driven Decision-Making",
      description: [
      "Kisanlink's financial reporting services provide FPOs with detailed insights into their financial performance, enabling data-driven decision-making. This helps FPOs identify areas for improvement, allocate resources effectively, and strategize for long-term sustainability."
      ],
      isImageLeft: false,
    },
  ];
  const cardData = [
    {
      dancer: 1,
      image:
        "https://www.kisanlink.in/wp-content/uploads/2022/03/Onboarding-pana.svg",
      title: "Onboarding",
      description: [
        "Onboarding rural entrepreneurs, also known as Kisansathis, is a key aspect of Kisanlink's strategy to expand its reach and impact in rural areas.",
        "The onboarding process involves identifying and recruiting motivated individuals from rural communities who are interested in becoming entrepreneurs and serving as intermediaries between Kisanlink and local farmers.",
        "Kisansathis are onboarded through various outreach efforts, including community events, word-of-mouth referrals, and targeted advertising campaigns.",
        "Once onboarded, Kisansathis undergo training and orientation to familiarize them with Kisanlink's platform, products, and services, as well as their roles and responsibilities as rural entrepreneurs.",
      ],
      isImageLeft: true,
    },
    {
      dancer: 2,
      image:
        "https://www.kisanlink.in/wp-content/uploads/2022/03/Course-app-pana.svg",
      title: "Courses",
      description: [
        "Kisanlink collaborates with industry experts, agricultural organizations, and educational institutions to develop and publish courses on relevant topics through its Academy App and social media channels.",
        "These courses cover a wide range of agricultural subjects, including sustainable farming practices and modern agricultural technologies.",
        "The courses are designed to be accessible and user-friendly, allowing farmers and rural entrepreneurs to learn at their own pace and convenience.",
      ],
      isImageLeft: false,
    },

    {
      dancer: 3,
      image:
        "https://www.kisanlink.in/wp-content/uploads/2022/03/Certification-pana.svg",
      title: "Certification",
      description: [
        "To ensure quality and professionalism, Kisansathis are required to complete the relevant courses offered through Kisanlink's Academy App and obtain certification.",
        "Certification demonstrates that Kisansathis have acquired the necessary knowledge and skills to effectively serve farmers and promote Kisanlink's products and services.",
        "Certified Kisansathis are eligible to sell products and services to farmers on behalf of Kisanlink, thereby acting as trusted intermediaries and advisors in rural communities.",
      ],
      isImageLeft: true,
    },
    {
      dancer: 4,
      image:
        "https://www.kisanlink.in/wp-content/uploads/2022/03/Ecommerce-campaign.svg",
      title: "Sales",
      description: [
        "Equipped with the skills and knowledge gained from the training modules, certified Kisansathis serve as valuable resources for farmers in choosing the right products and services to meet their needs.",
        "Kisansathis provide personalized recommendations based on their understanding of local farming practices, crop requirements, and market trends.",
      ],
      isImageLeft: false,
    },
    {
      dancer: 5,
      image:
        "https://www.kisanlink.in/wp-content/uploads/2022/03/Money-income-amico.svg",
      title: "Incentive",
      description: [
        "As an incentive for their efforts, Kisansathis receive a predetermined margin or commission for each product or service they provide to farmers.",
        "This incentive serves as a motivator for Kisansathis to actively promote Kisanlink's products and services and engage with farmers in their communities.",
      ],
      isImageLeft: true,
    },
  ];

  return (
    <>
      <Heading value={"Benefits"}></Heading>
      <div className="font-sans text-center p-5  min-h-screen">
        <div className="flex flex-col gap-5 items-center">
          {cardsData.map((card, index) => (
            <Card
              dancer={card.dancer}
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
              isImageLeft={card.isImageLeft}
            />
          ))}
        </div>
      </div>
   
    </>
  );
};

export default Benefits;