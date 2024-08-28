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
    "Department of Animal Husbandry & Dairying. (n.d.). Revised Guidelines [PDF]. Retrieved from https://dahd.nic.in/sites/default/filess/RevisedGuidelinesRGM.pdf",
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
          Rashtriya Gokul Mission (RGM)
        </h1>
        <p className="text-muted-foreground">February 9, 2024</p>
      </div>
      <div className="flex flex-col lg:flex-row w-full mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="lg:w-full lg:pr-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <article className="prose prose-gray max-w-none pl-6 pr-6 pt-2">
              <SubheadingDescription text="The Rashtriya Gokul Mission (RGM) has been in operation since December 2014, focusing on the development and preservation of native bovine breeds. This initiative plays a crucial role in increasing both milk production and the overall productivity of bovines, aiming to meet the rising demand for milk and improve the economic prospects of rural farmers in the country." />
              <SubheadingDescription text="The program has been integrated into the Rashtriya Pashudhan Vikas Yojna as part of the larger scheme from 2021 to 2026, with a budget allocation of Rs. 2400 crore. The implementation of the RGM is anticipated to lead to heightened productivity, benefiting all cattle and buffaloes in India, particularly those owned by small and marginal farmers. Notably, this program is expected to have a positive impact on women, as they contribute to over 70% of the work involved in livestock farming." />
              <SubheadingDescription subheading="Objectives" />
              <ul class="list-disc list-inside">
                <li>
                  To enhance productivity of bovines and increasing milk
                  production in a sustainable manner using advance technologies.
                </li>
                <li>
                  To propagate use of high genetic merit bulls for breeding
                  purposes.
                </li>
                <li>
                  To enhance Artificial insemination coverage through
                  strengthening breeding network and delivery of Artificial
                  insemination services at farmers' doorstep.
                </li>
                <li>
                  To promote indigenous cattle & buffalo rearing and
                  conservation in a scientific and holistic manner.
                </li>
              </ul>
              <SubheadingDescription subheading="Components of RGM" text="" />
              <ul class="list-decimal list-inside">
                <li>Bull Production Program</li>
                <li>Support to Semen stations</li>
                <li>Implementation of IVF Technology</li>
                <li>Breed Multiplication Farms</li>
              </ul>
              <SubheadingDescription subheading="Breed Multiplication Farms" />

              <QuoteComponent quote="Funding: 50% of Project cost up to Rs. 2.00 crore."></QuoteComponent>
              <SubheadingDescription subheading="Objectives" text="" />
              <ul class="list-disc list-inside">
                <li>
                  To make available disease-free high-yielding heifers/ pregnant
                  heifers/ cows preferably of indigenous breeds of
                  cattle/buffalo.
                </li>
                <li>
                  To incentivize private individuals, Entrepreneurs, FPOs, SHGs,
                  FCOs, JLGs, and Section 8 companies for the establishment of
                  breed multiplication farm.
                </li>
                <li>
                  To spread awareness about scientific management practices
                  including animal nutrition and disease control.
                </li>
                <li>
                  To facilitate multiplication of high-yielding milch animals
                  through scientific breeding including IVF technology and sex
                  sorted semen.
                </li>
                <li>
                  To develop private entrepreneurs for undertaking cattle and
                  buffalo breeding.
                </li>
              </ul>
              <SubheadingDescription
                subheading="Essential Criteria of selection of entrepreneur"
                text=""
              />
              <ul class="list-disc list-inside">
                <li>
                  The entrepreneur-aggregator can be a private individual / FPOs
                  / FCOs/SHGs / JLGs.
                </li>
                <li>
                  Entrepreneur shall have appropriate experience in breeding or
                  rearing of farm animals.
                </li>
                <li>
                  The entrepreneur will be responsible for the arrangement of
                  land of suitable size and location. At least having
                  ownership/lease deed of suitable size of land to house 200
                  animals and its followers.
                </li>
                <li>
                  Any individual/ organization availing loan facility under
                  Animal Husbandry Infrastructure Development Fund (AHIDF) for
                  establishment of breed multiplication farm would also be
                  allowed to obtain subsidy under breed multiplication farm.
                </li>
                <li>
                  Entrepreneur will make its own arrangement for procurement of
                  feed and fodder as per requirement of the farm.
                </li>
                <li>
                  The entrepreneur will establish breed multiplication farm of
                  at least 200 milch cows / buffalo using the latest breeding
                  technology for continuously upgrading stock in States other
                  than North-Eastern and Hilly States.
                </li>
                <li>
                  The entrepreneur may make available 116 elite female calves to
                  farmers on cost basis out of 160 calves born at the farm. Sex
                  sorted semen and IVF technology will be used by the
                  entrepreneur for production of female calves. Remaining female
                  calves may be used for replacement of the stock available at
                  the farm.
                </li>
                <li>
                  The entrepreneur will make available high-yielding heifers/
                  pregnant heifers/cows to the farmers/ small entrepreneurs
                  interested on a cost basis. The entrepreneur will also guide
                  farmers on animal nutrition, vaccination, disease testing,
                  maintaining biosecurity etc., and provide veterinary aid to
                  the farmer.
                </li>
              </ul>
              <SubheadingDescription subheading="Funding Pattern" text="" />
              <ul class="list-disc list-inside">
                <li>
                  Each entrepreneur will be provided as one-time assistance from
                  Central Government for the establishment of breeder farm @ 50%
                  of project cost upto Rs 2 crore.
                </li>
                <li>
                  The other 50% should be managed by the beneficiary by
                  obtaining loan from scheduled banks/ any other financial
                  institutions like NCDC etc. The loan period, margin money, and
                  collateral may be decided by the financial institution.
                </li>
                <li>
                  Self-financing shall be allowed subject to the condition that
                  subsidy shall be released by NDDB after ascertaining there is
                  investment from beneficiary side as mentioned in the DPR and
                  strictly on the basis of progress made in the implementation
                  of the project.
                </li>
                <li>
                  The capital subsidy will be provided for the cost of housing,
                  procurement of breeding animals along with transportation &
                  insurance cost, and equipment /machines in the form of capital
                  costs (except land).
                </li>
                <li>The subsidy will be routed through NDDB.</li>
              </ul>
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
