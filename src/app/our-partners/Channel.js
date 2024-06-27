import React from "react";

const ChannelPartners = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 w-full md:max-w-4xl">
        {" "}
        {/* Adjusted padding md:p-8 */}
        <header className="bg-green-500 text-white py-4 text-center mb-6 rounded-t-lg">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Channel Partners
          </h1>
        </header>
        <section className="p-4 md:p-6 mb-6 transform transition duration-300 hover:scale-105">
          <p className="text-gray-700 mb-4">
            Our channel partners are essential in extending our reach and impact
            by managing experience centers that serve as hubs for selling
            products and services to farmers. These centers are strategically
            located to maximize accessibility and convenience for the farming
            community.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 border-b-2 border-green-500 pb-2 mb-4">
            Experience Centers
          </h2>

          <h4 className="text-lg font-medium text-gray-700 mb-2">
            Comprehensive Agri Solutions
          </h4>
          <p className="text-gray-600 mb-4">
            Our experience centers offer a wide range of agricultural products
            and services, including seeds, fertilizers, machinery, and IoT
            devices, ensuring farmers have access to everything they need under
            one roof.
          </p>

          <h4 className="text-lg font-medium text-gray-700 mb-2">
            Field Demonstrations
          </h4>
          <p className="text-gray-600 mb-4">
            We conduct field demonstrations to showcase the effectiveness of our
            products and services, helping farmers make informed decisions.
          </p>

          <h4 className="text-lg font-medium text-gray-700 mb-2">
            Repair and Servicing
          </h4>
          <p className="text-gray-600 mb-4">
            Our centers provide repair and servicing for agricultural equipment,
            ensuring farmers can maintain their tools and machinery in optimal
            condition.
          </p>
        </section>
        <section className="p-4 md:p-6 mb-6 transform transition duration-300 hover:scale-105">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 border-b-2 border-green-500 pb-2 mb-4">
            Our Key Partners
          </h2>

          <h3 className="text-lg md:text-xl font-semibold text-green-500 mb-2">
            JK UNIVERSITY
          </h3>
          <p className="text-gray-600 mb-4">
            Kisanlink is proud to announce its strategic partnership with JKU
            University, a leading institution in agricultural education and
            research. This partnership aims to empower agri students through
            cutting-edge training programs and workshops.
          </p>

          <h4 className="text-lg font-medium text-gray-700 mb-2">
            Training Programs
          </h4>
          <p className="text-gray-600 mb-4">
            JKU University and Kisanlink have collaborated to develop
            comprehensive training programs for farmers, focusing on sustainable
            farming practices, precision agriculture, and agribusiness
            management.
          </p>

          <h4 className="text-lg font-medium text-gray-700 mb-2">
            Certification
          </h4>
          <p className="text-gray-600 mb-4">
            Participants in these training programs receive certification,
            demonstrating their proficiency and readiness to apply their skills
            in real-world scenarios. This certification not only enhances their
            credibility but also opens up new opportunities for career
            advancement.
          </p>

          <h3 className="text-lg md:text-xl font-semibold text-green-500 mb-2">
            EVERGREEN ENERGY ENTERPRISES
          </h3>
          <p className="text-gray-600 mb-4">
            Kisanlink has partnered with Evergreen Energy Enterprises to provide
            sustainable energy solutions to farmers and rural communities. This
            partnership aims to reduce carbon footprint and promote eco-friendly
            agricultural practices.
          </p>

          <h3 className="text-lg md:text-xl font-semibold text-green-500 mb-2">
            RELIANCE FOUNDATION
          </h3>
          <p className="text-gray-600 mb-4">
            Kisanlink has partnered with Reliance Foundation to support rural
            development initiatives and promote sustainable agriculture
            practices. This partnership aims to empower farmers and rural
            communities through capacity building.
          </p>
        </section>
        <section className="p-4 md:p-6 transform transition duration-300 hover:scale-105">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 border-b-2 border-green-500 pb-2 mb-4">
            Join Us in Transforming Agriculture
          </h2>
          <p className="text-gray-600 mb-4">
            We are always looking to expand our network of partners who share
            our vision of empowering the agricultural community. If you are
            interested in partnering with us, please reach out to us at{" "}
            <a
              href="mailto:info@kisanlink.in"
              className="text-blue-500 underline"
            >
              info@kisanlink.in
            </a>{" "}
            or visit our website at{" "}
            <a
              href="http://www.kisanlink.in"
              className="text-blue-500 underline"
            >
              www.kisanlink.in
            </a>
            .
          </p>
          <p className="text-gray-600">
            Together, we can make a significant impact on the agricultural
            sector, driving growth, sustainability, and prosperity for farmers
            and rural communities.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ChannelPartners;
