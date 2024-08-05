import SubheadingDescription from "./subheading";
import ImageComponent from "./image";
import QuoteComponent from "./quote";
import React from "react";
import CommentForm from "./comment";
import CategoryList from "./category";
import TagList from "./taglist";
import Footer from "./footer";
import Background from "../../utils/background";

const References = () => {
  const referencesList = [
    "Department of Agriculture and Cooperation. (2013). Policy and Process Guidelines for Farmer Producer Organisations. Retrieved from Ministry of Food Processing Industries.",
    "IndiaFilings. (n.d.). Scheme for Promotion of FPO. Retrieved from IndiaFilings.",
    "Press Information Bureau. (2020). Farmer Producer Organizations (FPOs) by Primary Agricultural Cooperative Societies (PACS). Retrieved from PIB.",
    "National Bank for Agriculture and Rural Development (NABARD). (n.d.). Equity Grant and Credit Guarantee Fund Scheme for Farmer Producer Companies (FPCs). Retrieved from NABARD.",
    "National Agriculture Market (e-NAM). (n.d.). Integration of FPOs. Retrieved from e-NAM.",
    "Food Corporation of India. (n.d.). Procurement Policy. Retrieved from FCI.",
    "National Cooperative Development Corporation (NCDC). (n.d.). Support for FPOs. Retrieved from NCDC.",
    "Maharashtra State Agricultural Marketing Board (MSAMB). (n.d.). Maharashtra Agri Business Network Project (MAGNET). Retrieved from MSAMB.",
    "Ministry of Agriculture & Farmers Welfare. (n.d.). Guidelines for Formation and Promotion of 10,000 FPOs. Retrieved from Agriculture Ministry.",
    "Ministry of Agriculture & Farmers Welfare. (2021). Progress Report on FPOs. Retrieved from Agriculture Ministry.",
    "Small Farmers’ Agribusiness Consortium (SFAC). (n.d.). Challenges Faced by FPOs. Retrieved from SFAC.",
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
        <h1 className="text-4xl font-extrabold text-brown-700 tracking-tight lg:text-5xl">
          Government policies and support for FPOs in India
        </h1>
        <p className="text-muted-foreground">JUNE 6, 2024</p>
      </div>
      <div className="flex flex-col lg:flex-row w-full mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="lg:w-full lg:pr-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <article className="prose prose-gray max-w-none pl-6 pr-6 pt-2">
              <SubheadingDescription text="The Indian government has been actively promoting and supporting Farmer Producer Organizations (FPOs) to enhance the livelihoods of small and marginal farmers. The government’s initiatives aim to improve the bargaining power of farmers, reduce production costs, and increase their incomes through the aggregation of agricultural produce." />

              <ImageComponent
                src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/FPO-SUPPORT-1536x453.jpg"
                alt="Farmer Producer Organizations"
              />
              <SubheadingDescription
                subheading="Central Government Support"
                text="The Central Government has launched several schemes to promote and support FPOs. The Central Sector Scheme for 'Formation and Promotion of 10,000 Farmer Producer Organizations (FPOs)' was launched in 2020 with a total budgetary outlay of Rs.6,865 crore. The scheme aims to enable farmers to enhance their bargaining power, leverage economies of scale, and reduce production costs. The scheme also provides for the handholding of each FPO for five years from its aggregation and formation, with a further committed liability of Rs.2,369.00 crore from 2024-25 to 2027-28."
              />
              <SubheadingDescription text="The Small Farmers' Agribusiness Consortium (SFAC) is the nodal agency for implementing the scheme. SFAC provides technical support, training, research, and knowledge management to FPOs, as well as creates linkages to investments, technology, and markets. The National Cooperative Development Corporation (NCDC) has also been extended to include FPOs in the list of eligible institutions that receive support under various programs." />
              <SubheadingDescription
                subheading="Key Initiatives and Impact"
                text="The government has introduced several key initiatives to support FPOs:"
              />
              <SubheadingDescription text="Equity Grant and Credit Guarantee Fund Scheme: This scheme provides equity grants to FPOs to enhance their equity base and enable them to leverage working capital from financial institutions." />
              <SubheadingDescription text="Mission for Integrated Development of Horticulture (MIDH): Under this mission, FPOs are provided financial assistance for the creation of infrastructure for post-harvest management and marketing of horticultural produce." />
              <SubheadingDescription text="National Agriculture Market (e-NAM): FPOs are integrated with e-NAM, an online trading platform that facilitates transparent and efficient marketing of agricultural commodities." />
              <SubheadingDescription
                subheading="State Government Support"
                text="State Governments have also been actively promoting and supporting FPOs. The Department of Agriculture and Cooperation (DAC) has been working with State Governments to promote FPOs and provide them with technical support, training, and financial assistance. The DAC has also been working with the Food Corporation of India (FCI) to include FPOs as procurement agencies under the Minimum Support Price (MSP) procurement policy."
              />
              <SubheadingDescription
                subheading="Case Study: Maharashtra"
                text="Maharashtra is one of the states where FPOs have shown significant progress. The state government has launched the 'Maharashtra Agri-Business Network Project (MAGNET)' to support FPOs by providing financial assistance, training, and market linkages. This initiative has helped many FPOs to become self-sustaining and profitable."
              />
              <SubheadingDescription
                subheading="Objectives and Eligibility Criteria"
                text="The objectives of the FPO scheme are to build a sustainable agriculture sector by promoting and supporting FPOs, to provide support for the promotion of FPOs through qualified Resource Institutions (RIs), to promote economically viable and self-governing FPOs, and to provide the required assistance and resources to strengthen FPOs. The eligibility criteria for FPOs include being registered under the Companies Act or various central and state cooperative society laws, being registered and administered by farmers, and focusing on activities related to agriculture and allied sectors."
              />
              <SubheadingDescription
                subheading="Impact and Challenges"
                text="The government’s initiatives have led to the registration of 7,597 FPOs in 34 States/Union territories, with a target of 10,000 FPOs. The scheme has also led to the allocation of 645 blocks for the formation and promotion of FPOs, with a further allocation of 455 blocks under consideration. However, there are challenges facing FPOs, including the need for more resources and support to strengthen their operations and increase their viability."
              />
              <SubheadingDescription
                subheading="Conclusion"
                text="In conclusion, the Indian government has been actively promoting and supporting FPOs to enhance the livelihoods of small and marginal farmers. The government’s initiatives aim to improve the bargaining power of farmers, reduce production costs, and increase their incomes through the aggregation of agricultural produce. While there are challenges facing FPOs, the government’s support and initiatives have led to significant progress in the formation and promotion of FPOs in India."
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
