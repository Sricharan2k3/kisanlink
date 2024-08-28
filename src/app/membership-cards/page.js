"use client";
import Background from "../../utils/background";
import Heading from "../components/heading";
import MembershipCardBenefits from "./benefits";
import TermsAndConditions from "./membership";
import VideoContainer from "./video";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const SmartCard = () => {
  const usagePoints = [
    "Smart Membership card is linked with Kisanlink Platform (Mobile App and ERP solution)",
    "All the data in the card is secure and stored in the AWS database",
    "The FPO or Kisansathi will register the farmer on the Kisanlink mobile app",
    "The farmer, then, becomes eligible for the Kisanlink smart membership card",
  ];

  const farmerUseCases = [
    "Farmer Data",
    "Farm Data - Geo tag, Crop Data, Sowing Date, Geo location and Soil test report",
    "Orders - Current order and Completed orders (Products, Services, Output Procurement)",
    "Credit History (Interest calculation, Total Credit due)",
  ];

  return (
    <>
      <VideoContainer />
      <div className="container mx-auto px-4 py-8">
        <Heading value="Kisanlink Smart Membership Card" />
        <p className="text-center mb-12 max-w-4xl mx-auto">
          Kisanlink issues and manages farmers' physical membership cards
          through a technologically advanced platform. Each card is embedded
          with a unique QR code, granting access to substantial information.
          This QR code enables seamless tracking of the farmer's complete
          profile, including transaction history and credit records.
        </p>

        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 mb-12">
          <div className="flex-1 max-w-sm mx-auto md:max-w-md lg:max-w-lg">
            <img
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/35a.jpg"
              alt="Farmer with Smart Card"
            />
          </div>
          <div className="flex-1 max-w-sm mx-auto md:max-w-md lg:max-w-lg">
            <img
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/nfc-membershsip-card-MOCKUP.jpg"
              alt="Smart Card Front"
            />
          </div>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <Heading value={"Usage of Membership Card"} />
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {usagePoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 flex-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-12">
          <CardHeader>
            <Heading value={"Farmers can use the card for the following"} />
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {farmerUseCases.map((useCase, index) => (
                <li
                  key={index}
                  className="flex items-center bg-gray-100 p-2 pt-4 pb-4 rounded-lg"
                >
                  <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>{useCase}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Heading value="Membership Card Benefits" />
        <MembershipCardBenefits />

        <Heading value="Customer Support" />
        <p className="text-center mb-12 max-w-4xl mx-auto">
          24/7 customer support will be accessible to all farmers through a
          dedicated helpline number to address any doubts or queries.
        </p>

        <TermsAndConditions />
      </div>
    </>
  );
};

export default SmartCard;
