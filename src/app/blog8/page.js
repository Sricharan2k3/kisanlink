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
    "Government of India. (n.d.). Pradhan Mantri Kisan Sampada Yojana (PMKSY). Ministry of Food Processing Industries. Retrieved from https://www.mofpi.nic.in/schemes/pradhan-mantri-kisan-sampada-yojana-pmksy",
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
      <div className="container mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-brown-700 tracking-tight lg:text-5xl">
          Pradhan Mantri Kisan Sampada Yojana (PMKSY)
        </h1>
        <p className="text-muted-foreground">FEBRUARY 23, 2024</p>
      </div>
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="lg:w-2/3 lg:pr-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <article className="prose prose-gray max-w-none pl-6 pr-6 pt-2">
              <SubheadingDescription text="The Central Sector Scheme – SAMPADA (Scheme for Agro-Marine Processing and Development of Agro-Processing Clusters) was approved by the cabinet in May 2017 for the period of 2016-20 coterminous with the 14th Finance Commission cycle. The scheme has now been renamed as the “Pradhan Mantri Kisan Sampada Yojana (PMKSY)”. The continuation of the Central Sector Scheme – Pradhan Mantri Kisan SAMPADA Yojana (Scheme for Agro-Marine Processing and Development of Agro-Processing Clusters) with an allocation of Rs. 4600 crore is approved till 31.03.2026." />
              <SubheadingDescription text="It is an umbrella scheme incorporating ongoing schemes of the Ministry like Mega Food Parks, Integrated Cold Chain and Value Addition Infrastructure, Food Safety and Quality Assurance Infrastructure, etc. and also new schemes like Infrastructure for Agro-processing Clusters, Creation of Backward and Forward Linkages, Creation / Expansion of Food Processing & Preservation Capacities." />
              <SubheadingDescription
                subheading="Objective"
                text="The objective of PMKSY is to supplement agriculture, modernize processing and decrease Agri-Waste."
              />
              <SubheadingDescription
                subheading="The following schemes will be implemented under PM Kisan Sampada Yojana :"
                text=""
              />
              <ul class="list-disc list-inside">
                <li>Mega Food Parks</li>
                <li>Integrated Cold Chain and Value Addition Infrastructure</li>
                <li>
                  Creation/ Expansion of Food Processing/ Preservation
                  Capacities (Unit Scheme)
                </li>
                <li>Infrastructure for Agro-processing Clusters</li>
                <li>Creation of Backward and Forward Linkages</li>
                <li>Food Safety and Quality Assurance Infrastructure</li>
                <li>Human Resources and Institutions</li>
              </ul>
              <SubheadingDescription
                subheading="Mega Food Parks"
                text="The objectives of the scheme are –"
              />
              <ul class="list-disc list-inside">
                <li>
                  To provide modern infrastructure for food processing units in
                  the country.
                </li>
                <li>
                  To ensure value addition of agricultural produce including
                  dairy, fisheries etc.
                </li>
                <li>
                  To establish a sustainable raw material supply chain for each
                  cluster.
                </li>
                <li>To facilitate induction of the latest technology.</li>
                <li>
                  To address the need of small and micro food processing
                  enterprises by providing plug & play facilities.
                </li>
                <li>
                  To provide an institutional mechanism for producers,
                  processors, and retailers to work together to build the supply
                  chain.
                </li>
              </ul>
              <SubheadingDescription
                subheading="Integrated Cold Chain and Value Addition Infrastructure"
                text="The objective of the scheme is to arrest post-harvest losses of horticulture & non-horticulture produce by providing financial assistance in setting up integrated cold chain, preservation and value addition infrastructure facilities without any break from the farm gate to the consumer."
              />
              <SubheadingDescription
                subheading="Creation/ Expansion of Food Processing/ Preservation Capacities (Unit Scheme)"
                text="The objective of the scheme is the creation/ expansion and / or modernization of processing/preservation capacities will help in increasing the level of processing, and value addition and thereby reducing wastage."
              />
              <SubheadingDescription text="The setting up of new units and modernization/ expansion of existing units will be covered under the scheme. The processing units undertake a wide range of processing activities depending on the processing sectors which results in value addition and/or enhancing the shelf life of the processed products." />
              <SubheadingDescription
                subheading="Infrastructure for Agro-processing Clusters"
                text="The objective of the scheme is to create modern infrastructure for food processing closer to production areas."
              />
              <ul class="list-disc list-inside">
                <li>
                  To provide integrated and complete preservation infrastructure
                  facilities from the farm gate to the consumer.
                </li>
                <li>
                  To create effective backward and forward linkages by linking
                  groups of producers / farmers to the processors and markets
                  through well-equipped supply chain.
                </li>
              </ul>
              <SubheadingDescription
                subheading="Creation of Backward and Forward Linkages"
                text="The objective of the scheme is to create effective backward & forward linkages for perishable Agri Horti produce through setting up of primary processing centers / collection centers at farm gate, distribution hub and retail outlets at the front end."
              />
              <ul>
                <li>
                  To provide preservation facilities for enhancing shelf life of
                  perishable agricultural produce resulting in better
                  remunerative prices to farmers.
                </li>
              </ul>
              <SubheadingDescription
                subheading="Food Safety and Quality Assurance Infrastructure"
                text="The objective of the scheme is to establish a surveillance system for monitoring the quality and composition of food."
              />
              <ul>
                <li>
                  To analyse the samples received from processing industry and
                  other stakeholders.
                </li>
                <li>
                  To reduce the time for analysis of samples by reducing
                  transportation time of samples.
                </li>
                <li>
                  To ensure compliance of international and domestic standards
                  on food in case of exports as well as the imports.
                </li>
              </ul>
              <SubheadingDescription
                subheading="Human Resources and Institutions"
                text="The objective of the scheme is that end product/outcome/findings of R&D work should benefit food processing industry in terms of product and process development, efficient technologies, improved packaging, value addition etc. with commercial value along with standardization of various factors viz., additives, colouring agents, preservatives, pesticide residues, chemical contaminants, microbiological contaminants and naturally occurring toxic substances within permissible limits."
              />
              <SubheadingDescription
                subheading="Conclusion"
                text="In conclusion, the Pradhan Mantri Kisan Sampada Yojana (PMKSY) stands as a pivotal initiative aimed at revolutionizing the agricultural and food processing landscape of India. Through its comprehensive approach encompassing various schemes, PMKSY strives to modernize processing methods, reduce agricultural waste, enhance value addition, and ultimately uplift the agricultural sector. With its continued support and allocation of resources until 2026, PMKSY holds the promise of fostering sustainable development, boosting farmer incomes, and ensuring food security for the nation. As we move forward, the successful implementation and ongoing evolution of PMKSY will undoubtedly contribute significantly to the growth and prosperity of India’s agricultural economy."
              />
              <References />
            </article>
            <div className="p-6">
              <CommentForm />
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
            <CategoryList />
            <TagList />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
