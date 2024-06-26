"use client";
import Background from "../../utils/background";
import React from "react";

const KisanlinkExperienceCenter = () => {
  return (
    <>
      <Background title={"Experience Centre"}></Background>
      <div className="bg-gray-100 font-sans text-gray-700 p-8">
        <div className="container mx-auto px-4 md:px-16 py-8">
          <h1 className="text-4xl text-brown-700 font-bold text-center mb-8">
            Kisanlink Experience Center
          </h1>
          <p className="text-lg mb-8 text-center">
            The Kisanlink Experience Center supports farmers with innovative
            agri-products through a variety of means:
          </p>

          <h4 className="text-2xl text-brown-700 font-semibold text-center mb-6">
            Key Products and Technologies
          </h4>
          <div className="flex flex-wrap justify-center -mx-4">
            {[
              {
                title: "Agricultural Drones",
                description:
                  "These are used for various agricultural applications such as spraying pesticides and monitoring crop health, which enhances efficiency and reduces manual labor.",
              },
              {
                title: "IoT Devices",
                description:
                  "These include motor pump starters and devices for poultry and dairy farms, which help in automating and optimizing farm operations.",
              },
              {
                title: "Seed Sowing Machines",
                description:
                  "These machines improve the precision and efficiency of planting seeds, leading to better crop yields.",
              },
              {
                title: "Sprayers and Insect Traps",
                description:
                  "These tools help in the effective application of pesticides and management of pests, ensuring healthier crops.",
              },
              {
                title: "Irrigation Parts",
                description:
                  "These components are crucial for efficient water management, which is vital for crop growth.",
              },
              {
                title: "Animal Feed and Solar Fences",
                description:
                  "These products support livestock management and farm security, respectively.",
              },
            ].map((product, index) => (
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8" key={index}>
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                  <h2 className="text-xl font-bold text-brown-700 mb-4">
                    {product.title}
                  </h2>
                  <p>{product.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h4 className="text-2xl text-brown-700 font-semibold text-center mb-6">
            Services and Support
          </h4>
          <div className="flex flex-wrap justify-center -mx-4">
            {[
              {
                title: "Drone Spraying Services",
                description:
                  "The center partners with companies like DRÓGO, MARUT, and VYOMIK to provide drone spraying services, which are more efficient and cover larger areas compared to traditional methods.",
              },
              {
                title: "Rental Tools",
                description:
                  "Farmers can rent various agricultural tools such as power weeders, tillers, brush cutters, battery sprayers, hand transplanters, and electric weeders, making advanced equipment accessible without the need for large capital investments.",
              },
            ].map((service, index) => (
              <div className="w-full md:w-1/2 px-4 mb-8" key={index}>
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                  <h2 className="text-xl font-bold text-brown-700 mb-4">
                    {service.title}
                  </h2>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h4 className="text-2xl text-brown-700 font-semibold text-center mb-6">
            Training and Workshops
          </h4>
          <div className="flex flex-wrap justify-center -mx-4">
            {[
              {
                title: "Skill Training",
                description:
                  "The center offers training and workshops for farmers, entrepreneurs, and Farmer Producer Organizations (FPOs) on the use of these innovative products and technologies. This includes agriculture workshops, skill development training, SHG workshops, collaborator workshops, organic farming workshops, and FPO training workshops.",
              },
              {
                title: "Field Demonstrations",
                description:
                  "These practical demonstrations help farmers understand the application and benefits of new technologies and products in real-world scenarios.",
              },
            ].map((workshop, index) => (
              <div className="w-full md:w-1/2 px-4 mb-8" key={index}>
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                  <h2 className="text-xl font-bold text-brown-700 mb-4">
                    {workshop.title}
                  </h2>
                  <p>{workshop.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h4 className="text-2xl text-brown-700 font-semibold text-center mb-6">
            Marketing and Financial Support
          </h4>
          <div className="flex flex-wrap justify-center -mx-4">
            {[
              {
                title: "Marketing Support",
                description:
                  "The center provides brand space for promoting agricultural products and services, distributes marketing materials like flyers and pamphlets, and showcases promotional videos on TVs and projectors at the center.",
              },
            ].map((support, index) => (
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8" key={index}>
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                  <h2 className="text-xl font-bold text-brown-700 mb-4">
                    {support.title}
                  </h2>
                  <p>{support.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h4 className="text-2xl text-brown-700 font-semibold text-center mb-6">
            Comprehensive Approach
          </h4>
          <p className="text-lg text-center mb-8">
            The Kisanlink Experience Center adopts a comprehensive approach by
            integrating product sales, services, training, and marketing to
            support farmers. This holistic model ensures that farmers have
            access to the latest agricultural technologies and the knowledge to
            use them effectively, thereby improving their productivity and
            profitability.
          </p>
          <p className="text-lg text-center">
            By providing these innovative agri-products and comprehensive
            support services, the Kisanlink Experience Center plays a crucial
            role in modernizing agriculture and enhancing the livelihoods of
            farmers.
          </p>
        </div>
      </div>
    </>
  );
};

export default KisanlinkExperienceCenter;
