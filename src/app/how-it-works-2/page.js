import React from "react";
import Heading from "../components/heading";
import Background from "@/utils/background";
// Card Component
const Card = ({ dancer, image, title, description, isImageLeft }) => {
  return (
    <div className="flex flex-row w-9/12 items-center con rounded-lg p-4">
      {isImageLeft && (
        <div className=" flex flex-row w-90 h-72 rounded-lg pr-16 mr-4">
          <img
            src={image}
            alt="Card Image"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="  bg-green-700 w-16 h-16 rounded-full flex flex-row">
        <p className=" align-middle text-white font-bold pl-6 text-center items-center justify-center content-center">
          {dancer}
        </p>
      </div>
      <div className="pl-8 flex-1 text-left mt-4 md:mt-0 md:ml-4">
        <h2 className="text-3xl font-semibold mb-2 text-brown-700">{title}</h2>
        <ul className="list-disc list-inside text-gray-500">
          {description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
      {!isImageLeft && (
        <div className="w-80 h-72 rounded-lg overflow-hidden ml-4">
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
const BenefitsComponent = () => {
  const cardsData = [
    {
      dancer: 1,
      image:
        "https://www.kisanlink.in/wp-content/uploads/2022/03/Onboarding-pana.svg",
      title: "Onboarding",
      description: [
        "Onboarding involves the process of integrating new companies or organizations as collaborators with Kisanlink. This process typically includes establishing agreements, setting up accounts, and providing necessary resources for effective collaboration.",
        " Onboarding may involve conducting orientation sessions, providing access to relevant documentation or resources, and facilitating communication channels between Kisanlink and the new collaborators.",
      ],
      isImageLeft: true,
    },
    {
      dancer: 2,
      image:
        "https://www.kisanlink.in/wp-content/uploads/Checking-boxes-amico-1.png",
      title: "Improved Communication",
      description: [
        "Product management on the Kisanlink mobile app involves adding and managing the various products offered by collaborators for sale to farmers.",
        "This process includes cataloging products, updating product information, managing inventory levels, and ensuring accurate pricing.",
        "Product management also involves categorizing products, optimizing product listings for searchability, and providing detailed descriptions and images to enhance user experience.",
      ],
      isImageLeft: false,
    },
    {
      dancer: 3,
      image: "https://www.kisanlink.in/wp-content/uploads/Marketing-amico.png",
      title: "Access to Technology",
      description: [
        "Kisanlink uses both digital and offline marketing to create awareness of the products and services offered by the collaborators.",
        "Marketing efforts are designed to highlight the value proposition of the products and services, address farmers' pain points, and encourage engagement with the Kisanlink platform for purchasing agricultural inputs and services",
      ],
      isImageLeft: true,
    },
    {
      dancer: 4,
      image:
        "https://www.kisanlink.in/wp-content/uploads/At-the-office-amico-1.png",
      title: "Data-Driven Decision-Making",
      description: [
        "When a farmer places an order through the Kisanlink mobile app or website, a purchase order is generated and sent to the relevant collaborator.",
        "Collaborators then fulfill the order by dispatching the requested products to the farmer's location.",
        "Payment for the order is typically handled through the Kisanlink platform, with collaborators receiving payment after the order has been successfully delivered to the farmer.",
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
      <Background title={"How It Works ?"}></Background>
      <Heading value={"For Collaborators"}></Heading>
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
      <Heading value={"For Kisansathi"}></Heading>
      <div className="font-sans text-center p-5  min-h-screen">
        <div className="flex flex-col gap-5 items-center">
          {cardData.map((card, index) => (
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

export default BenefitsComponent;
