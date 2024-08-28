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
    "Ministry of Food Processing Industries, Government of India. (n.d.). Official PMFME Scheme Portal. Retrieved from https://www.pmfme.mofpi.gov.in/",
    "PIB India. (2020, July 29). Cabinet approves PM Formalisation of Micro Food Processing Enterprises Scheme. Press Information Bureau, Government of India. Retrieved from https://pib.gov.in/PressReleseDetailm.aspx?PRID=1660312",
    "NABARD. (n.d.). PM Formalization of Micro Food Processing Enterprises Scheme (PMFME). NABARD Official Website. Retrieved from https://www.nabard.org/schemes.aspx?cid=498&id=24&catid=23",
    "Ministry of Food Processing Industries, Government of India. (n.d.). Guidelines for the Scheme of Pradhan Mantri Formalisation of Micro Food Processing Enterprises (PM FME) [PDF document]. Retrieved from https://mofpi.nic.in/sites/default/files/PMFME_Guidelines.pdf",
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
          Pradhan Mantri Formalisation of Micro Food Processing Enterprises
          Scheme
        </h1>
        <p className="text-muted-foreground">NOVEMBER 28, 2023</p>
      </div>
      <div className="flex flex-col lg:flex-row w-full mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="lg:w-full lg:pr-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <article className="prose prose-gray max-w-none pl-6 pr-6 pt-2">
              <SubheadingDescription text="The Pradhan Mantri Formalisation of Micro Food Processing Enterprises (PMFME) Scheme is a significant initiative by the Indian government to empower and support small-scale food processing units across the country. It aims to enhance the competitiveness of these enterprises, foster their formalization, and provide support for technology upgradation, capacity expansion, and better access to markets." />
              <QuoteComponent quote="The PMFME Scheme was launched with the objective of providing financial, technical, and business support for the formalization of micro food processing enterprises. This initiative is designed to promote the establishment of small processing units that utilize local agricultural produce, thereby enhancing value addition and ensuring better returns for farmers." />

              <SubheadingDescription subheading="Key Objectives of PMFME Scheme" />
              <ul className="list-disc list-inside">
                <li>
                  Promotion of Micro Food Processing Units: The scheme aims to
                  encourage the formation and growth of small-scale food
                  processing units in rural and semi-urban areas.
                </li>
                <li>
                  Boosting Farmers’ Income: By aiding in the creation of
                  processing units using locally available raw materials, the
                  scheme seeks to ensure better prices for farmers’ produce.
                </li>
                <li>
                  Generation of Employment Opportunities: The establishment of
                  these units is expected to create job opportunities for local
                  communities, particularly in rural areas.
                </li>
                <li>
                  Focus on Women and SC/ST Entrepreneurs: The PMFME Scheme
                  places emphasis on supporting women entrepreneurs and those
                  from Scheduled Castes and Scheduled Tribes, promoting
                  inclusivity and economic empowerment.
                </li>
                <li>
                  Enhancing Food Safety Standards: The scheme encourages
                  adherence to quality and safety standards, ensuring the
                  production of high-quality processed foods.
                </li>
              </ul>

              <SubheadingDescription subheading="Coverage of States" />
              <p>
                The PMFME Scheme boasts a Rs. 10,000 crore outlay, targeting
                coverage for 2,00,000 enterprises over a 5-year period (2020-21
                to 2024-25).
              </p>
              <QuoteComponent
                quote="The funding structure involves a 60:40 cost-sharing
                between the Central and State Governments, with a 90:10 ratio in
                partnership with North Eastern and Himalayan States."
              ></QuoteComponent>
              <p>
                Similarly, Union Territories with legislatures follow a 60:40
                ratio, while 100% funding is provided by the Center for other
                Union Territories. Notably, in the scheme’s inaugural year
                (2020-21), all expenditures, whether incurred by the Centre or
                the States, are entirely borne by the Central Government.
                Expenses from this first year will be adjusted according to the
                ratios for the subsequent four years’ fund transfers to the
                States.
              </p>

              <SubheadingDescription subheading="Components of PMFME Scheme" />
              <ul className="list-decimal list-inside">
                <li>
                  Micro Enterprises Support: Financial incentives and
                  credit-linked subsidies are provided to eligible units to
                  facilitate their establishment and growth.
                </li>
                <li>
                  Credit Linked Subsidy: Subsidies for loans obtained by these
                  enterprises for expansion or modernization.
                </li>
                <li>
                  Capacity Building: Training programs are conducted to enhance
                  the skills of individuals engaged in food processing.
                </li>
                <li>
                  Promotion of Innovation: Encouraging innovation and technology
                  adoption for efficiency and quality enhancement.
                </li>
                <li>
                  Marketing and Branding Support: Guidance and support are
                  offered for packaging, branding, and marketing to improve the
                  marketability of products.
                </li>
                <li>
                  Technical Upgradation: Assistance is provided for modernizing
                  equipment and upgrading technology in food processing units.
                </li>
              </ul>

              <SubheadingDescription subheading="Eligibility Criteria for PMFME" />
              <ul className="list-disc list-inside">
                <li>
                  Micro Enterprises: Micro food processing units, including
                  individual entrepreneurs, groups of entrepreneurs, and
                  cooperatives, are eligible to apply. Defined by investment
                  limits in machinery and equipment.
                </li>
                <li>
                  Existing Units: Units involved in processing perishable fruits
                  and vegetables, grains, pulses, oilseeds, spices, dairy
                  products, etc., can avail of benefits under the scheme.
                  Upgradation and expansion of existing micro food processing
                  units are considered.
                </li>
                <li>
                  Cooperative Societies, Self-Help Groups (SHGs), Individuals:
                  Open to various organizational structures involved in food
                  processing.
                </li>
              </ul>

              <SubheadingDescription subheading="Implementation and Execution" />
              <ul className="list-disc list-inside">
                <li>
                  Nodal Agencies: State governments and designated agencies
                  oversee the implementation.
                </li>
                <li>
                  Application Process: Typically involves online registration,
                  submission of project proposals, and verification.
                </li>
                <li>
                  Monitoring and Evaluation: Regular monitoring of the progress
                  and impact of the scheme.
                </li>
              </ul>

              <SubheadingDescription subheading="Benefits" />
              <ul className="list-disc list-inside">
                <li>
                  Economic Growth: Boosting income and employment opportunities,
                  especially in rural areas.
                </li>
                <li>
                  Technology Adoption: Encouraging the use of modern technology
                  for efficiency and quality improvement.
                </li>
                <li>
                  Market Access: Facilitating better access to markets for
                  processed food products.
                </li>
                <li>Support to Food Processing Units</li>
              </ul>

              <SubheadingDescription subheading="Eligibility Criteria for FPOs" />
              <ul className="list-disc list-inside">
                <li>
                  Financial Threshold: FPOs aiming to benefit from the scheme
                  should maintain a minimum turnover of Rs. 1 crore, ensuring a
                  reasonable business scale.
                </li>
                <li>
                  Project Size Alignment: The proposed project cost for FPOs
                  should align with or not exceed their current turnover,
                  ensuring a proportionate investment plan.
                </li>
                <li>
                  Financial Contribution: FPOs should demonstrate sufficient
                  internal resources to cover 10% of the project cost and
                  provide margin money for working capital, ensuring their
                  commitment and financial stability.
                </li>
              </ul>

              <SubheadingDescription subheading="Financial Assistance Details" />
              <ul className="list-disc list-inside">
                <li>
                  <strong>35% Credit-Linked Grant for Upgradation:</strong>{" "}
                  Existing unorganized food processing units can access a
                  credit-linked grant covering 35% of the project cost, capped
                  at Rs. 10.0 lakh, to facilitate their modernization.
                </li>
                <li>
                  <strong>
                    Capital Expenditure Grant for SHGs/FPOs/Cooperatives:
                  </strong>
                  Self-Help Groups (SHGs), Farmer Producer Organizations (FPOs),
                  and cooperatives are eligible for a credit-linked grant of 35%
                  of the project cost towards capital expenses.
                </li>
                <li>
                  <strong> Working Capital Support:</strong> Individuals engaged
                  in food processing can receive seed capital of Rs. 40,000 as
                  part of the financial assistance.
                </li>
                <li>
                  <strong>Common Infrastructure Grant:</strong> Provision for a
                  credit-linked grant of 35% of the project cost to develop
                  common infrastructure facilities shared by multiple units.
                </li>
                <li>
                  <strong>Marketing & Branding Support:</strong> Up to 50% of
                  the expenditure is covered to support marketing and branding
                  initiatives, enhancing the visibility of processed food
                  products. This support mechanism aims to enhance market
                  visibility and consumer outreach for these enterprises through
                  strategic branding and marketing endeavors, fostering their
                  growth and competitiveness within the industry.
                </li>
                <li>
                  <strong>Cluster-Based Support:</strong> Encourages a cluster
                  approach for joint packaging and branding initiatives,
                  ensuring a unified market presence.
                </li>
                <li>
                  <strong>Quality Assurance:</strong> Emphasizes adherence to
                  quality control, standardization, and food safety measures
                  essential for retail sale to consumers.
                </li>
                <li>
                  <strong>Active Participation:</strong> Requires active
                  involvement from FPOs, SHGs, and Cooperatives to meet minimum
                  volume criteria for support eligibility.
                </li>
                <li>
                  <strong>State Nodal Agency Assistance:</strong> Offers support
                  up to Rs.5 lakh from the State Nodal Agency for preparing
                  Detailed Project Reports (DPR) related to branding and
                  marketing proposals.
                </li>
                <li>
                  <strong>Financial Limit:</strong> The support for branding and
                  marketing is limited to 50% of the total expenditure, subject
                  to a maximum prescribed limit.
                </li>
                <li>
                  <strong>National-Level Initiatives:</strong> Proposals from
                  states, national-level institutions, or partner organizations
                  for branding and marketing vertical products at a national
                  level are eligible for support.
                </li>
                <li>
                  <strong>Exclusion of Retail Outlets:</strong> Notably, the
                  scheme doesn’t extend support for establishing retail outlets,
                  focusing primarily on marketing and branding initiatives for
                  the products.
                </li>
              </ul>

              <SubheadingDescription subheading="Implementation and Monitoring" />
              <ul className="list-disc list-inside">
                <li>
                  Identification of Unique Products: Each district identifies
                  its distinctive products through a rigorous selection process,
                  considering factors like local demand, market potential, and
                  traditional expertise.
                </li>
                <li>
                  Skill Development and Technology Integration: PMFME supports
                  skill development programs and technology adoption tailored to
                  the specific needs of ODOP products, aiding in quality
                  improvement and productivity enhancement.
                </li>
                <li>
                  Financial Assistance: Micro food processing units focusing on
                  ODOP products are eligible for financial aid under PMFME,
                  aiding in their establishment, expansion, or modernization.
                </li>
              </ul>

              <SubheadingDescription subheading="Application Procedure" />
              <ul class="list-disc list-inside">
                <li>
                  <strong>Eligible Entities:</strong> SHGs, FPOs, cooperatives,
                  or Special Purpose Vehicles (SPVs) can apply for branding and
                  marketing support under the Scheme.
                </li>
                <li>
                  <strong>Preparation of Detailed Project Report (DPR):</strong>{" "}
                  Applicants are required to prepare a Detailed Project Report
                  (DPR) outlining their branding and marketing proposal. This
                  DPR should be submitted to the State Nodal Agency (SNA) for
                  evaluation.
                </li>
                <li>
                  <strong>Evaluation by State Nodal Agency (SNA):</strong> The
                  SNA conducts an appraisal of the proposal and submits it to
                  the State Level Approval Committee (SLAC) for further
                  assessment.
                </li>
                <li>
                  <strong>
                    Approval by State Level Approval Committee (SLAC):
                  </strong>{" "}
                  The SLAC reviews and assesses the proposal submitted by the
                  SNA. Upon approval, the proposal is forwarded to the Ministry
                  of Food Processing Industries (MOFPI).
                </li>
                <li>
                  <strong>Approval by MOFPI:</strong> The MOFPI evaluates the
                  proposal and, upon approval, sanctions the support for
                  branding and marketing.
                </li>
                <li>
                  <strong>Loan Sanction:</strong> Once approved by MOFPI, the
                  proposal is forwarded to a designated bank for the sanction of
                  a loan to facilitate branding and marketing initiatives.
                </li>
                <li>
                  <strong>Similar Process for Infrastructure Creation:</strong>{" "}
                  The same procedural steps outlined above should be followed
                  for applying for support concerning the creation of common
                  infrastructure.
                </li>
              </ul>

              <QuoteComponent quote="This streamlined process ensures that eligible entities can access support for branding and marketing, as well as for creating common infrastructure, by following a structured application and evaluation process, leading to eventual approval and facilitation of funds or loans for the proposed initiatives." />
              <SubheadingDescription
                subheading="Conclusion"
                text="The Pradhan Mantri Formalisation of Micro Food Processing Enterprises Scheme stands as a crucial step toward empowering small-scale food processors and farmers across the country."
              ></SubheadingDescription>
              <QuoteComponent quote="This scheme serves as a beacon of hope for the farming community and micro-entrepreneurs, offering them avenues for growth, prosperity, and sustainable development." />

              <References />

              <CommentForm />
            </article>
          </div>
        </div>
        {/* <div className="lg:w-1/3 lg:pl-8 mt-8 lg:mt-0">
          <CategoryList />
          <TagList />
        </div> */}
      </div>
      {/* <Footer /> */}
    </>
  );
}
