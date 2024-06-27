"use client";

import Heading from "../components/heading";
import Background from "@/utils/background";
import { CardHoverEffectDemo } from "./cardhover";
import { DirectionAwareHoverDemo } from "./directionaware";
import { ThreeDCardDemo } from "./threedcard";

const ExperienceCenter = () => {
  return (
    // Add the return statement
    <div className="bg-white">
      <Background title={"Experience Center"} />
      <Heading value={"Kisanlink Experience Center"} />
      <CardHoverEffectDemo />
      <Heading value={"Services and Support"} />

      <DirectionAwareHoverDemo />
      <Heading value={"   Marketing and Financial Support"} />
      <ThreeDCardDemo />

      <div className="-mt-10">
        <Heading value={"Comprehensive Approach"}></Heading>
      </div>

      <div>
        <p className="text-center -mt-4 mb-10 ml-40 mr-40">
          The Kisanlink Experience Center adopts a comprehensive approach by
          integrating product sales, services, training, and marketing to
          support farmers. This holistic model ensures that farmers have access
          to the latest agricultural technologies and the knowledge to use them
          effectively, thereby improving their productivity and profitability.
        </p>
      </div>
      <div>
        <p className="text-center -mt-4 pb-4 mb-20 ml-40 mr-40">
          By providing these innovative agri-products and comprehensive support
          services, the Kisanlink Experience Center plays a crucial role in
          modernizing agriculture and enhancing the livelihoods of farmers.
        </p>
      </div>
    </div>
  );
};

export default ExperienceCenter;
