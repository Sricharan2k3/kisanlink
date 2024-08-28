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
    "Indian Council of Agricultural Research (ICAR). (2021). Strategies for Sustainable Oil Palm Cultivation. ICAR Publications.",
    "National Mission on Oilseeds and Oil Palm (NMOOP). (2019). Annual Report: Enhancing Oil Palm Cultivation in India. Ministry of Agriculture & Farmers Welfare.",
    "Ministry of Agriculture & Farmers Welfare, Government of India. (2020). National Mission on Oilseeds and Oil Palm: Policy Guidelines. Government Printing Office. Retrieved from https://nmeo.dac.gov.in/",
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
          National Mission on Edible Oils – Oil Palm (NMEO-OP)
        </h1>
        <p className="text-muted-foreground">JANUARY 5, 2024</p>
      </div>
      <div className="flex flex-col lg:flex-row w-full mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="lg:w-full lg:pr-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <article className="prose prose-gray max-w-none pl-6 pr-6 pt-2">
              <SubheadingDescription
                subheading="Introduction"
                text="Given the rising local demand for edible oils, the considerable shortfall, and the financial strain caused by imports, the imperative to expand oil palm cultivation becomes a matter of national significance, requiring no exaggerated emphasis. Thus, to serve this national interest, the National Mission on Edible Oils – Oil Palm (NMEO-OP) has been introduced. Its aim is to bolster the production of edible oilseeds and increase oil availability within the country by expanding the cultivation of oil palm, augmenting CPO (Crude Palm Oil) output, and alleviating the burden of importing edible oils."
              />
              <ImageComponent
                src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/GetPaidStock.com-6596dbb61f9b5-1536x615.png"
                alt="Sustainable agriculture"
              />
              <SubheadingDescription
                subheading="Objectives"
                text="Approximately 9 million tons of palm oil are brought in annually, representing roughly 56% of the entire imports of edible oils. Under NMEO-Oil Palm, the set objective for oil palm cultivation expansion by 2025-26 is as follows:"
              />
              <ul className="list-disc list-inside">
                <li>
                  Elevate the oil palm acreage to 1 million hectares from the
                  350,000 hectares noted in 2019-20, aiming for an additional
                  650,000 hectares. Among these, the target for general states
                  stands at 322,000 hectares and 328,000 hectares for
                  Northeastern states, with an envisioned Fresh Fruit Bunch
                  (FFB) production of 66.00 lakh tons.
                </li>
                <li>
                  Increase Crude Palm Oil production from 0.27 lakh tons in
                  2019-20 to 11.20 lakh tons by 2025-26 and further to 28 lakh
                  tons by 2028-29.
                </li>
                <li>
                  Enhance consumer awareness to sustain a consumption rate of
                  19.00 kg per person per annum until 2025-26.
                </li>
              </ul>
              <SubheadingDescription
                subheading="Area of Operation"
                text="The implementation of NMEO-OP will be carried out in different States based on the IIOPR Report or State recommendations. NMEO-GC, led by the Hon’ble Agriculture Minister, will have the authority to consider additional promising States or districts after consulting with ICAR/IIOPR, aside from the areas already identified in the IIOPR Report of 2020. For NMEO-OP, the potential states and districts include Andhra Pradesh, Chhattisgarh, Goa, Gujarat, Maharashtra, Madhya Pradesh, Mizoram, Karnataka, Kerala, Odisha, Tamil Nadu, Telangana, Arunachal Pradesh, Assam, Bihar, Manipur, Meghalaya, Nagaland, Tripura, Uttar Pradesh, West Bengal, and the Andaman & Nicobar Islands."
              />
              <SubheadingDescription
                subheading="Assistance will be provided for the following components:"
                text=""
              />
              <ul className="list-disc list-inside">
                <li>Area Expansion</li>
                <li>Planting Material</li>
                <li>Maintenance</li>
                <li>Intercropping</li>
                <li>
                  Drip irrigation/ Pump-set/ Borewell/ Water harvesting
                  structure
                </li>
                <li>Harvesting Tools</li>
                <li>Custom Hiring Center</li>
                <li>Seed Gardens</li>
                <li>Seed Nursery</li>
                <li>Oil Palm Processing Mill</li>
                <li>Replanting of Oil Palm garden</li>
                <li>Half moon terrace</li>
                <li>Fencing</li>
              </ul>
              <SubheadingDescription subheading="Eligibility:The scheme is open to all" />
              <SubheadingDescription
                subheading="Benefits"
                text="The scheme targets to provide the following benefits:"
              />
              <ul className="list-disc list-inside">
                <li>Enhance production and productivity of oil palm</li>
                <li>Promotion and extension of improved technologies.</li>
                <li>Provision of quality planting material</li>
                <li>Support for nutrient management and pest management</li>
                <li>
                  Provision of various components for Interventions covering
                  farm implements/ machines, capacity building of farmers,
                  water-carrying pipes, Fertigation, harvesting technology, etc.
                </li>
              </ul>
              <SubheadingDescription subheading="Application Process" text="" />
              <ul>
                <li>
                  Step 01: Interested beneficiaries can get in touch with the
                  District Agriculture Officer / Block Agriculture Officer to
                  apply for the scheme.
                </li>
                <li>
                  Step 02: SLSC will finalize the entrepreneur’s proposals
                  received from the districts. The allocation of funds to the
                  States would be made based on their Annual Action Plan (AAP).
                </li>
                <li>
                  Step 03: The state government shall sanction and release funds
                  to the district.
                </li>
                <li>
                  Step 04: The district agriculture department will allocate
                  funds to individual beneficiaries
                </li>
              </ul>
              <SubheadingDescription subheading="Documents Required" text="" />
              <ul className="list-decimal list-inside">
                <li>ID Proof</li>
                <li>Land documents</li>
                <li>Bank details</li>
                <li>Photographs</li>
              </ul>
              <SubheadingDescription text="The specific documents for availing the program’s benefits may vary depending on the type of intervention and the state. It is recommended to consult with the relevant authorities for detailed information on documents to be submitted." />
              <SubheadingDescription
                subheading="Subsidy pattern under NMEO-OP"
                text="The new program applies to all States/Union Territories, with a funding distribution of 60:40 between the Government of India and the State for the rest of India and 90:10 for North Eastern States. By 2025-26, the Mission aims to include an extra 6.5 lakh hectares for Oil Palm cultivation. The Indian government has significantly raised subsidies for ongoing components and necessary inputs in Oil Palm cultivation, effective immediately, also extending coverage to farmers already engaged in this cultivation."
              />
              <ImageComponent
                src="https://lh7-us.googleusercontent.com/lAqGgOSKSTIy6mS5JTJLGHh6TxpmZZr0JY3mdRzqiNRhnueWOap8Sh3PetTmzGOvIfPn5WgUddw8ubRv7UNWn-HH0wamW6uSHGfkB9UwM2Z7X3FCTgkunQzulZLiM_eXAVKh0ssIC5FmhZx4hTETD3EBPjOSNLphGnO3EgDOxwXV4H2i_e-jpEPl-kQ9bg"
                alt="Sustainable agriculture"
              />
              <SubheadingDescription
                subheading="Conclusion"
                text="India’s National Mission on Edible Oils – Oil Palm signifies a pivotal step towards achieving self-sufficiency in edible oil production. Through a strategic approach encompassing policy support, financial incentives, and technological advancements, the mission aims to propel the country towards food security, economic prosperity, and sustainable agricultural practices. As the mission progresses, it holds the promise of transforming the agricultural landscape while fortifying India’s position as a key player in the global edible oils market."
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
