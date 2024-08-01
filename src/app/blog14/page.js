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
    "Government of India. (n.d.). Market Access Initiative Scheme. Directorate General of Foreign Trade. Retrieved from [insert link here]",
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
          Market Access Initiative (MAI) Scheme
        </h1>
        <p className="text-muted-foreground">NOVEMBER 14, 2023</p>
      </div>
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="lg:w-2/3 lg:pr-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <article className="prose prose-gray max-w-none pl-6 pr-6 pt-2">
              <SubheadingDescription text="The primary goal of the Market Access Initiative Scheme is to promote India’s exports by providing financial assistance to exporters and industry associations. By facilitating market access and addressing barriers, the scheme aims to enhance the global competitiveness of Indian products and services. Export promotion Scheme is envisaged to act as a catalyst to promote India’s exports on a sustained basis. Assistance would be provided to export Promotion Organizations/Trade Promotion Organizations/ Exporters etc., for enhancement of exports through accessing new markets or through increasing the share in the existing markets." />
              <QuoteComponent quote="These endeavors will encompass aiding micro, small, and medium enterprises in venturing into the export market, fostering innovation, enhancing trade and market intelligence, cultivating relevant skill sets, and addressing necessary interventions for exploring new international markets." />
              <SubheadingDescription
                subheading="Administering Authority"
                text="The Ministry of Commerce and Industry, Government of India, oversees the implementation of the MAI Scheme. The Directorate General of Foreign Trade (DGFT) is responsible for formulating policies and guidelines for its effective execution."
              />
              <SubheadingDescription
                subheading="Key Components"
                text="The scheme encompasses various components, including:"
              />
              <ul className="list-disc list-inside">
                <li>
                  Market Studies: Funding for conducting market research studies
                  to identify potential export markets and understand trade
                  dynamics.
                </li>
                <li>
                  Marketing Development Assistance (MDA): Financial support for
                  exporters participating in trade fairs, exhibitions, and
                  buyer-seller meets abroad to promote their products.
                </li>
                <li>
                  Export Promotion Events: Assistance for organizing seminars,
                  workshops, and conferences to create awareness about export
                  opportunities and address challenges faced by exporters.
                </li>
              </ul>
              <SubheadingDescription
                subheading="Eligibility Criteria"
                text="To avail benefits under the MAI Scheme, exporters, export promotion councils, industry associations, and other recognized bodies are eligible to apply. The specific eligibility criteria may vary based on the component for which assistance is sought."
              />
              <SubheadingDescription
                subheading="Eligible Activities"
                text="The following activities will be eligible for financial assistance under the Scheme:"
              />
              <ul className="list-disc list-inside">
                <li>Marketing Projects Abroad</li>
                <li>Capacity Building</li>
                <li>Support for Statutory Compliances</li>
                <li>Studies</li>
                <li>Project Development</li>
                <li>Developing Foreign Trade Facilitation Web Portal</li>
                <li>Support for Cottage and Handicraft Units</li>
              </ul>
              <SubheadingDescription
                subheading="Eligible Agencies"
                text="The program is available for the following organizations and agencies:"
              />
              <ul className="list-disc list-inside">
                <li>Departments of Central Government</li>
                <li>Organisation of Central/State Governments</li>
                <li>Indian Missions abroad</li>
                <li>Export Promotion Councils</li>
                <li>Registered Trade Promotion Organisation</li>
                <li>Commodity Boards</li>
                <li>
                  Apex Trade Bodies recognized under Foreign Trade Policy of
                  Govt of India
                </li>
                <li>Recognized Industrial & Artisan Clusters</li>
                <li>
                  Individual Exporters (only for statutory compliance etc.)
                </li>
                <li>
                  National Level Institutions (e.g. IITs, IIMs, NIDs, NIFT
                  etc.)/Research Institutions/Universities/Recognized
                  laboratories
                </li>
              </ul>
              <SubheadingDescription
                subheading="Scheme Validity"
                text="MAI is valid from 01.04.2021 to 31.03.2026."
              />
              <SubheadingDescription
                subheading="Financial Assistance"
                text="The scheme provides financial assistance in the form of grants or reimbursements for eligible expenses. The quantum of assistance is determined based on the nature of the activity and the category of the applicant."
              />
              <SubheadingDescription
                subheading="Activities Eligible for Support"
                text="A suggestive list of activities eligible for support under the Scheme is provided as follows:"
              />
              <ul className="list-disc list-inside">
                <li>
                  Enhancing exporters’ capabilities in Standards and
                  Regulations, Export Packaging, Export-oriented Skill
                  Development, and Training
                </li>
                <li>
                  Conducting Marketing, Branding, Publicity Campaigns, and
                  Cataloguing
                </li>
                <li>
                  Advocating for traditional Indian products and services such
                  as AYUSH, Yoga, Geographical Indication (GI) products, crafts,
                  artisanal products (including toys), tribal products, etc.
                </li>
                <li>
                  Promoting e-Business Tools, Communication Technology, and
                  developing Web Portals to facilitate trade and meet standards
                </li>
                <li>
                  Conducting Export Market Research and supporting Product
                  Development
                </li>
                <li>
                  Organizing or participating in Fairs, Exhibitions, and
                  Buyer-Seller Meets Abroad (Physical/Virtual/Hybrid)
                </li>
                <li>
                  Arranging Reverse Buyer-Seller Meets – RBSM [Made in India
                  Shows] – (Physical/Virtual/Hybrid)
                </li>
                <li>
                  Conducting RBSM Specials and Shopping Festivals, facilitating
                  visits to centers of production/excellence
                </li>
                <li>
                  Displaying artisanal, GI, and other traditional Indian
                  products at International Departmental Stores/shopping areas,
                  International Airports, etc.
                </li>
                <li>
                  Reimbursing exporters for expenses related to statutory
                  compliances
                </li>
                <li>
                  Building capacity, providing training, and addressing all
                  incidental matters related to the development of districts as
                  export hubs
                </li>
                <li>
                  Considering any other components deemed appropriate within the
                  framework of the Scheme, to be determined by the Empowered
                  Committee.
                </li>
              </ul>
              <SubheadingDescription
                subheading="Review, Physical Verification of Projects and Monitoring & Evaluation"
                text="The Empowered Committee (E.C.) will oversee project implementation, providing guidance for optimal resource utilization through monitoring and evaluation (M&E). M&E will be conducted in collaboration with reputable institutions like IIFT, NCAER, ICRIER, IIMS, IITs, etc. The EC will issue instructions/guidelines for Scheme administration, periodically reviewing implementation to ensure timely achievement of objectives."
              />
              <QuoteComponent quote=" The Committee may authorize external agencies for annual physical project verification to uphold financial discipline principles. "></QuoteComponent>
              <p>
                Eligible agencies must submit prescribed reports and information
                as required.
              </p>
              <SubheadingDescription
                subheading="Funding and Level of Assistance"
                text="Support under the scheme for Export Promotion Councils (EPCs) and trade bodies will operate on a cost-sharing basis. The maximum funding will be 65% of the actual cost, with priority sectors eligible for higher support at 90% of the actual cost."
              />
              <SubheadingDescription
                subheading="Release of Assistance"
                text="Grant-in-aid is disbursed in two installments. The first installment, amounting to 50% of the approved sum, is provided upfront. The release of the second installment is contingent upon the timely submission, within 60 days of the event/activity’s completion, of outcome reports, utilization certificates (UC), and Chartered Accountant (CA) certified audit statements, which should include details such as funding sources."
              />
              <SubheadingDescription
                subheading="Application Process"
                text="Interested parties must submit their proposals to the concerned nodal agencies as per the guidelines provided by the DGFT. The application should include details such as the proposed activity, estimated budget, and expected outcomes. To seek assistance under the Scheme, the eligible agency must submit comprehensive proposals, adhering to the prescribed formats, to the E&MDA Division. These proposals should be forwarded through the relevant Commodity/Territorial Division/Line Ministries. This requirement is applicable to all proposals, including those related to Market & Research Studies."
              />
              <SubheadingDescription
                subheading="Evaluation and Approval"
                text="Audit: Payments disbursed to the agency under the Scheme are subject to inspection by the sanctioning authority and audits conducted by both the Comptroller and Auditor General of India and the internal audit performed by the Principal Accounts Office of the Department of Commerce, Ministry of Commerce & Industry. Additionally, other audit methods deemed appropriate by the Government of India may be employed."
              />
              <SubheadingDescription
                subheading="Physical Verification"
                text="The Government of India will conduct physical verification and other necessary inquiries as considered suitable for the projects approved under the Scheme."
              />
              <SubheadingDescription
                subheading="Exemption from Investigation"
                text="Any organization, exporter, trader, or company benefiting from the Scheme’s provisions must not be under investigation, charged, prosecuted, debarred, or blacklisted under the Foreign Trade Policy of India or any other laws related to export and import business."
              />
              <QuoteComponent quote="Proposals undergo a thorough evaluation by the relevant authorities to ensure alignment with the scheme’s objectives. Approved proposals receive financial assistance as per the sanctioned amount." />
              <SubheadingDescription
                subheading="Monitoring and Reporting"
                text="Beneficiaries are required to submit periodic reports on the progress and outcomes of the approved activities. This monitoring ensures transparency and accountability in the utilization of funds."
              />
              <SubheadingDescription subheading="Benefits of the Market Access Initiative Scheme" />
              <ul className="list-disc list-inside">
                <li>
                  Global Market Exposure: The scheme provides a platform for
                  Indian exporters to showcase their products and services on
                  the international stage, fostering global exposure.
                </li>
                <li>
                  Financial Support: Financial assistance eases the burden on
                  exporters, making it more feasible for them to explore and
                  enter new markets.
                </li>
                <li>
                  Market Intelligence: Market studies funded under the scheme
                  equip exporters with valuable insights into global market
                  trends, consumer behaviour, and competitive landscapes.
                </li>
                <li>
                  Capacity Building: Participation in export promotion events
                  and seminars contributes to the skill development and capacity
                  building of exporters, enhancing their competitiveness.
                </li>
              </ul>

              <SubheadingDescription
                subheading="Conclusion"
                text="The Market Access Initiative Scheme stands as a beacon for Indian exporters, offering a pathway to overcome challenges and tap into new horizons. By providing financial support and facilitating strategic initiatives, the scheme plays a pivotal role in promoting a culture of export-led growth. As businesses navigate the complexities of international trade, the MAI Scheme emerges as a valuable ally, unlocking doors to diverse markets and opportunities. Embracing this initiative is not just a strategic move for individual enterprises but a collective step towards strengthening India’s position in the global marketplace."
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
