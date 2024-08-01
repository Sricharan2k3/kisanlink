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
    "Government of India. (n.d.). Dalit Bandhu Scheme. Retrieved from https://www.myscheme.gov.in/schemes/dalit-bandhu",
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
          Dalit Bandhu Scheme
        </h1>
        <p className="text-muted-foreground">NOVEMBER 7, 2023</p>
      </div>
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="lg:w-2/3 lg:pr-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <article className="prose prose-gray max-w-none pl-6 pr-6 pt-2">
              <SubheadingDescription text="The Dalit Bandhu program, introduced by the Telangana government, is an exceptional effort aimed at fostering the economic progress of Scheduled Caste (SC) families. This initiative offers Rs. 10 lakhs in financial support to qualified SC households, enabling them to embark on their own business ventures or entrepreneurial endeavors. This, in turn, opens doors for them to achieve self-sufficiency and enhance their quality of life." />
              <SubheadingDescription text="Through this program, qualifying families will be granted Rs. 10 lakhs each to initiate small businesses or entrepreneurial projects. It is anticipated that this initiative will positively impact more than 20 lakh families within the state in the coming years. This one-time capital assistance of Rs. 10 lakhs per SC family is offered entirely as a grant or subsidy, without the requirement for any bank loans, to enable them to establish income-generating endeavors of their choosing." />
              <SubheadingDescription text="In its inaugural year, the Telangana government has set aside a budget of Rs. 1,000 crores for the execution of the program. The scheme will be rolled out gradually, with the identification and selection of qualifying families being contingent on specific criteria, including income, educational background, and entrepreneurial capabilities." />
              <SubheadingDescription
                subheading="Eligibility"
                text="Here are the eligibility criteria for the scheme:"
              />
              <ul className="list-disc list-inside">
                <li>
                  The program exclusively targets households within the SC
                  community.
                </li>
                <li>Candidates must be residents of Telangana.</li>
                <li>
                  Families should demonstrate an annual income below Rs. 2.5
                  lakh.
                </li>
                <li>
                  They must not possess more than 3 acres of agricultural land
                  or more than one residential property.
                </li>
                <li>
                  Applicants must not have previously received any government
                  loans or subsidies.
                </li>
                <li>
                  They should present a viable business plan or entrepreneurial
                  concept eligible for grant support.
                </li>
                <li>
                  Applicants are required to contribute 10% of the project cost.
                </li>
                <li>They must possess an active bank account.</li>
                <li>
                  A digital identity, such as an Aadhaar card, is necessary.
                </li>
                <li>
                  Applicants should fall within the age bracket of 25 to 50.
                </li>
                <li>
                  They must have completed at least the 10th standard education.
                </li>
                <li>
                  No criminal record or history of convictions is allowed for
                  applicants.
                </li>
              </ul>
              <SubheadingDescription text="The Dalit Bandhu scheme’s eligibility requirements in Telangana are rooted in the socio-economic status of Dalit households." />
              <SubheadingDescription text="A specialized entity known as the Telangana Dalit Bandhu Corporation will carry out the eligibility assessment. This corporation will additionally offer capacity development and training initiatives, along with assistance in marketing and facilitating access to credit." />
              <SubheadingDescription text="According to the Telangana Chief Minister, K. Chandrasekhar Rao, the following parameters will be considered in the eligibility survey:" />
              <ul className="list-disc list-inside">
                <li>Land holdings</li>
                <li>Annual income</li>
                <li>Savings</li>
                <li>Liabilities</li>
                <li>Education</li>
                <li>Skills</li>
                <li>Employment status</li>
              </ul>
              <SubheadingDescription
                subheading="Dalit Bandhu Sectors"
                text="The program encompasses several sectors including:"
              />
              <ul className="list-disc list-inside">
                <li>Agriculture & Allied</li>
                <li>Manufacturing & Industry</li>
                <li>Retails & Shops</li>
                <li>Transport</li>
                <li>Services & Supplies</li>
                <li>Animal Husbandry</li>
              </ul>
              <SubheadingDescription
                subheading="Exclusions"
                text="While the primary goal of the Dalit Bandhu Scheme in Telangana is to offer financial aid to Scheduled Caste (SC) families, enabling them to achieve economic self-sufficiency, the program does have certain limitations and exclusions. Some of these exclusions are:"
              />
              <ul className="list-disc list-inside">
                <li>
                  Income criteria: The scheme is applicable only to families
                  with an annual income of less than Rs. 2.5 lakh. Families with
                  higher incomes are not eligible for the scheme.
                </li>
                <li>
                  Non-SC families: The scheme is exclusively for families
                  belonging to the SC community. Families from other castes and
                  communities are not eligible for the scheme.
                </li>
                <li>
                  Existing government loan or subsidy: Families who have already
                  availed of any other government loan or subsidy are not
                  eligible for the scheme.
                </li>
                <li>
                  Criminal record: Families with a criminal record or who have
                  been convicted of a crime are not eligible for the scheme.
                </li>
                <li>
                  Land ownership: Families who own more than three acres of
                  agricultural land or more than one residential house are not
                  eligible for the scheme.
                </li>
                <li>
                  Educational qualifications: Families with members who have
                  completed a professional degree, such as engineering or
                  medicine, are not eligible for the scheme.
                </li>
              </ul>
              <SubheadingDescription
                subheading="Application Process"
                text="The application process for the Dalit Bandhu scheme in Telangana is as follows:"
              />
              <ul className="list-decimal list-inside">
                <li>
                  Obtain the application form from the website of the Telangana
                  State Scheduled Castes Development Corporation (TSSCDC).
                </li>
                <li>
                  Fill in the application form and submit it, along with
                  essential documents (proof of identity, residence, age,
                  income, educational qualifications, a viable business plan or
                  entrepreneurial concept, and bank account details), to the
                  TSSCDC office in the applicant’s district.
                </li>
                <li>
                  After receiving and verifying the application, the TSSCDC will
                  conduct a feasibility study of the proposed business or
                  entrepreneurial venture.
                </li>
                <li>
                  Upon approval, the TSSCDC will disburse the grant directly
                  into the applicant’s bank account.
                </li>
                <li>
                  The applicant must contribute 10% of the project cost, with
                  the remaining 90% covered by the grant.
                </li>
                <li>
                  The applicant will receive training in financial management,
                  entrepreneurship, and other relevant skills.
                </li>
                <li>
                  Regular progress reports must be submitted to the TSSCDC,
                  which will monitor the performance of the business or
                  entrepreneurial venture.
                </li>
              </ul>
              <SubheadingDescription text="Based on the information available so far, it is likely that the application process will also involve the following steps:" />
              <ul className="list-disc list-inside">
                <li>
                  Identification of eligible Dalit families will occur through a
                  comprehensive survey of their socio-economic conditions.
                </li>
                <li>
                  The Telangana Dalit Bandhu Corporation, as the executing body,
                  will notify qualifying families and guide them through the
                  application process.
                </li>
                <li>
                  Qualifying families must submit an application detailing their
                  proposed business or venture, alongside other relevant
                  information.
                </li>
                <li>
                  The Corporation will review and process these applications,
                  providing financial assistance in stages to approved
                  beneficiaries.
                </li>
                <li>
                  Beneficiaries will receive support through capacity-building
                  programs, training initiatives, and assistance for marketing
                  strategies and access to credit facilities.
                </li>
              </ul>
              <SubheadingDescription
                subheading="Documents Required"
                text="The following documents are required for the application:"
              />
              <ul class="list-disc list-inside">
                <li>Caste certificate</li>
                <li>Bank account details</li>
                <li>Valid mobile number</li>
                <li>Aadhar card</li>
                <li>Voter ID card</li>
                <li>Residential proof</li>
              </ul>
              <SubheadingDescription subheading="Contact Details:" />
              <ul class="list-disc list-inside">
                <li>
                  Email assistance:{" "}
                  <a href="mailto:support@dalitbandhu.telangana.gov.in">
                    support@dalitbandhu.telangana.gov.in
                  </a>
                </li>
                <li>Hotline Number: 040-23220652</li>
                <li>
                  Address: O/o VC&Managing Director, SC Co-op Development
                  Corporation Ltd., 5th Floor, Damodaram Sanjeevaiah Samkshema
                  Bhavan, Masab Tank, Hyderabad – 500 028
                </li>
                <li>
                  <strong>Toll Free No: 1800-599-2525</strong>
                </li>
              </ul>
              <SubheadingDescription subheading="Important Information:" />
              <ul class="list-disc list-inside">
                <li>
                  Application form:{" "}
                  <a
                    href="https://dalitbandhu.telangana.gov.in/#/applicationForm"
                    target="_blank"
                  >
                    https://dalitbandhu.telangana.gov.in/#/applicationForm
                  </a>
                </li>
                <li>
                  How to fill the application form:{" "}
                  <a
                    href="https://www.youtube.com/watch?v=87UET977kxo"
                    target="_blank"
                  >
                    https://www.youtube.com/watch?v=87UET977kxo
                  </a>
                </li>
                <li>
                  Official Website:{" "}
                  <a
                    href="https://dalitbandhu.telangana.gov.in/Home/"
                    target="_blank"
                  >
                    https://dalitbandhu.telangana.gov.in/Home/
                  </a>
                </li>
              </ul>

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
