import SubheadingDescription from "../blog1/subheading";
import ImageComponent from "../blog1/image";
import QuoteComponent from "../blog1/quote";
import React from "react";
import CommentForm from "../blog1/comment";
import CategoryList from "../blog1/category";
import TagList from "../blog1/taglist";
import Footer from "../blog1/footer";
import Background from "../../utils/background";

const References = () => {
  const referencesList = [
    "Economic Times. (2024). AgriSURE fund launched by Union Minister Shivraj Singh Chouhan: Here’s all you need to know about the initiative. Retrieved from https://economictimes.indiatimes.com/news/economy/agriculture/agrisure-fund-launched-by-union-minister-shivraj-singh-chouhan-heres-all-you-need-to-know-about-the-initiative/articleshow/113023200.cms",
    "NABARD. (2024). NABARD announces ₹750 crore ‘Agri SURE’ fund to promote innovation in agriculture. Retrieved from https://www.thehindu.com/business/nabard-announces-750-crore-agri-sure-fund-to-promote-innovation-in-agriculture/article68396955.ece",
    "Inc42. (2024). Govt Debuts INR 750 Cr AgriSURE Fund To Back Agritech Startups. Retrieved from https://inc42.com/buzz/centre-launches-inr-750-cr-agrisure-fund-to-back-agritech-startups/",
  ];

  return (
    <div className="mt-4">
      <h2 className="text-xl text-center font-bold mb-4">References</h2>
      <ul className="space-y-2">
        {referencesList.map((ref, index) => (
          <li key={index} className="text-md">
            {ref}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Component() {
  return (
    <>
      <Background title={"Blogs"} />
      <div className="container mt-16 w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-brown-700 tracking-tight mb-2 lg:text-5xl">
          Transforming Agriculture: The Launch of the AgriSURE Fund and Krishi
          Nivesh Portal
        </h1>
        <p className="text-muted-foreground">SEPTEMBER 4, 2024</p>
      </div>
      <div className="flex flex-col lg:flex-row w-full mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="lg:w-full lg:pr-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <article className="prose prose-gray max-w-none pl-6 pr-6 pt-2">
              <SubheadingDescription text="The Indian agricultural landscape is poised for a significant transformation with the recent launch of the AgriSURE Fund and the Krishi Nivesh Portal by Union Minister Shivraj Singh Chouhan. These initiatives, aimed at fostering innovation and enhancing investment in agriculture, reflect the government's commitment to empowering farmers and promoting sustainable agritech solutions." />

              <SubheadingDescription
                subheading="AgriSURE Fund: A Catalyst for Innovation"
                text="The AgriSURE Fund, officially launched on September 3, 2024, is a ₹750 crore (approximately $90 million) initiative designed to support technology-driven startups and rural enterprises. This fund is structured as a Category-II Alternative Investment Fund (AIF) registered with the Securities and Exchange Board of India (SEBI). It aims to provide equity and debt funding to approximately 85 startups, with individual investments capped at ₹25 crore each."
              />
              <br></br>
              <ul className="list-disc space-y-4 list-inside">
                <li>
                  Financial Contributions: The fund comprises ₹250 crore from
                  the Government of India, ₹250 crore from the National Bank for
                  Agriculture and Rural Development (NABARD), and ₹250 crore
                  mobilized from banks, insurance companies, and private
                  investors.
                </li>
                <li>
                  Focus Areas: It targets high-risk, high-impact activities
                  across the agricultural value chain, including enhancing farm
                  produce value chains, creating rural infrastructure, and
                  supporting Farmer Producer Organizations (FPOs).
                </li>
                <li>
                  Support for Innovation: The fund will encourage the
                  development of IT-based solutions, machinery rental services,
                  and other innovative approaches to address farmers'
                  challenges, thereby fostering a sustainable agricultural
                  ecosystem.
                </li>
              </ul>
              <br></br>
              <img
                src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/AGRISURE-ILLUSTRATION.png"
                alt="Farmer Producer Organizations"
                className="ml-[500px] w-[400px] h-[400px]"
              />
              <br></br>
              <SubheadingDescription
                subheading="Eligibility Criteria for AgriSURE Fund"
                text=""
              />
              <br />
              <ul className="list-disc space-y-4 list-inside">
                <li>
                  Sector Focus: Startups must operate within the agriculture or
                  allied sectors. This includes businesses that enhance the
                  agricultural value chain, such as precision farming,
                  post-harvest management, agri-fintech, and sustainable farming
                  practices.
                </li>
                <li>
                  Innovation and Technology: Eligible startups should
                  demonstrate a clear value proposition that leverages
                  technology to address challenges in agriculture.
                </li>
                <li>
                  Business Model Viability: Startups need to present scalable
                  business models with the potential for high impact.
                </li>
                <li>
                  Funding Amount: Each startup can receive funding of up to ₹25
                  crore.
                </li>
                <li>
                  Operational Stage: The fund is particularly aimed at
                  early-stage companies, ideally with a working prototype or
                  proof of concept.
                </li>
                <li>
                  Alignment with Fund Objectives: Startups must align their
                  goals with the fund's objectives, such as reducing
                  post-harvest losses and improving supply chain efficiency.
                </li>
              </ul>

              <SubheadingDescription
                subheading="Krishi Nivesh Portal: Centralizing Agricultural Investment"
                text="Alongside the AgriSURE Fund, the Krishi Nivesh Portal was also launched to centralize investment opportunities and information related to agribusinesses. This integrated platform aims to enhance farmers' and agritech startups' access to resources, ultimately boosting their income and productivity."
              />
              <ul className="list-disc space-y-4 list-inside">
                <li>
                  Enhance Visibility: Providing a one-stop solution for
                  agribusinesses to showcase their investment needs and
                  opportunities facilitates better connections between investors
                  and agricultural entrepreneurs.
                </li>
                <li>
                  Promote Modernization: The portal aligns with the government's
                  vision of modernizing agriculture through technological
                  advancements and innovative practices.
                </li>
              </ul>

              <SubheadingDescription
                subheading="Conclusion"
                text="The launch of the AgriSURE Fund and the Krishi Nivesh Portal marks a pivotal moment in India's agricultural sector. As the government continues to invest in agritech solutions, the future of Indian agriculture looks promising, with the potential for increased productivity and improved livelihoods for farmers across the nation."
              />

              <References />
            </article>
            <div className="p-6">
              <CommentForm />
            </div>
          </div>
        </div>
        {/* <div className="lg:w-1/3 mt-8 lg:mt-0">
          <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
            <CategoryList />
            <TagList />
            <Footer />
          </div>
        </div> */}
      </div>
    </>
  );
}
