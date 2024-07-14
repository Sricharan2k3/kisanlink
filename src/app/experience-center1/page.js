"use client";

import Heading from "../components/heading";
import Background from "./background";
import { CardHoverEffectDemo } from "./cardhover";
import { DirectionAwareHoverDemo } from "./directionaware";
import { ThreeDCardDemo } from "./threedcard";

const ExperienceCenter = () => {
  return (
    // Add the return statement
    <div className="">
      <div>
        <Background title={"Experience Center"} />
      </div>

      <div className="lg:mt-[800px] lg:mb-8 small:mt-64">
        <Heading value={"Kisanlink Experience Center"} />
      </div>

      <div>
        <p className="text-center lg:-mt-4 lg:mb-10 lg:ml-40 lg:mr-40">
          The Kisanlink Experience Center adopts a comprehensive approach by
          integrating product sales, services, training, and marketing to
          support farmers. This holistic model ensures that farmers have access
          to the latest agricultural technologies and the knowledge to use them
          effectively, thereby improving their productivity and profitability.
        </p>
      </div>
      <div>
        <p className="text-center lg:-mt-4 lg:pb-4 lg:mb-4 lg:ml-40 lg:mr-40 small:mt-8">
          By providing these innovative agri-products and comprehensive support
          services, the Kisanlink Experience Center plays a crucial role in
          modernizing agriculture and enhancing the livelihoods of farmers.
        </p>
      </div>


      <CardHoverEffectDemo />
      <div className="lg:-mt-10">
        <Heading value={"Services and Support"} />
      </div>
      <DirectionAwareHoverDemo />
      <div className="">
        <Heading value={"   Marketing and Financial Support"} />
      </div>
      <ThreeDCardDemo />


    </div>
  );
};

export default ExperienceCenter;
