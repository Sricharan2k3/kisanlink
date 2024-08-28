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
    "Ministry of Agriculture and Farmers Welfare, Government of India. (2021). Credit Guarantee Fund Scheme for Farmers’ Producer Organizations (CGSFPO) – Scheme Details. [Government website]. Retrieved from https://www.agriculture.gov.in/schemes/credit-guarantee-fund-scheme-farmers-producer-organizations-cgsfpo.",
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
          Credit Guarantee Fund Scheme for Farmers' Producer Organizations
        </h1>
        <p className="text-muted-foreground">DECEMBER 5, 2024</p>
      </div>
      <div className="flex flex-col lg:flex-row w-full mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="lg:w-full lg:pr-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <article className="prose prose-gray max-w-none pl-6 pr-6 pt-2">
              <SubheadingDescription text="The Credit Guarantee Fund Scheme for Farmers’ Producer Organizations (CGSFPO) is a crucial initiative by the Indian government aimed at enhancing the financial capabilities and empowerment of Farmers’ Producer Organizations (FPOs). FPOs play a significant role in aggregating the produce of small and marginal farmers, ensuring better access to markets, technology, and inputs. The CGSFPO is designed to provide financial support to these FPOs and strengthen their creditworthiness." />

              <SubheadingDescription
                subheading="Key Elements"
                text="Key elements of the CGSFPO include:"
              />
              <ul className="list-disc list-inside">
                <li>
                  Objective: The primary objective of the CGSFPO is to
                  facilitate access to credit for FPOs and promote their growth
                  and development. By providing credit guarantees, the scheme
                  encourages banks and financial institutions to extend
                  financial assistance to FPOs without the need for collateral
                  security.
                </li>
                <li>
                  Credit Guarantee: Under this scheme, the government provides a
                  credit guarantee cover to the lending institutions for loans
                  sanctioned to FPOs. This cover mitigates the risk for banks
                  and encourages them to offer loans to FPOs at reasonable terms
                  and interest rates.
                </li>
                <li>
                  Coverage: The scheme covers term loans and working capital
                  loans extended to FPOs by scheduled commercial banks, regional
                  rural banks, and cooperative banks. The loans are primarily
                  meant for various activities such as agriculture production,
                  post-harvest management, marketing, and infrastructure
                  development.
                </li>
              </ul>
              <SubheadingDescription subheading="Eligibility" />
              <ul className="list-disc list-inside">
                <li>
                  FPOs registered under the Companies Act, Producer Companies
                  Act, or any other relevant state-level cooperative society
                  acts are eligible to avail benefits under the CGSFPO.
                </li>
                <li>
                  FPO should have a satisfactory track record and a viable
                  business plan to qualify for credit support.
                </li>
                <li>
                  If the FPO has already availed credit guarantee under any
                  scheme of GOI or any other scheme is not eligible for
                  application.
                </li>
                <li>
                  FPO must be eligible for lending as per the Lendability
                  Assessment Tool available in the NABARD’s Guidance Note on FPO
                  financing or any other tools developed by NABARD/IBA or Ell’s(
                  co-operative banks/NCDC) approved assessment toll.
                </li>
                <li>FPOs should have a minimum of 300 farmers.</li>
              </ul>

              <SubheadingDescription subheading="Guarantee Coverage" />
              <p>
                The credit guarantee cover under the scheme is up to 85% of the
                sanctioned loan amount or the amount in default, whichever is
                lower. The maximum credit guarantee cover per FPO is ₹1.50
                crores. For credit facilities up to ₹1 crore, the cover is 85%
                with a ceiling of ₹85 lakhs. For credit facilities above ₹1
                crore, the cover is 75% with a ceiling of ₹1.5 crores.
              </p>
              <p>
                This cover helps reduce the risk for lending institutions and
                encourages them to finance FPOs more readily.
              </p>
              <SubheadingDescription subheading="Loan Repayment Period" />
              <p>
                The repayment period for loans extended under the CGSFPO is
                flexible, allowing FPOs to repay the loans as per the cash flow
                generated from their activities. This feature ensures that FPOs
                can manage their finances efficiently without undue pressure.
              </p>

              <SubheadingDescription
                subheading="Application Process"
                text="FPOs interested in availing credit support under this scheme need to apply through the designated lending institutions. They need to submit a comprehensive business plan and fulfill the required documentation for loan approval."
              />

              <SubheadingDescription subheading="Procedure to Avail Guarantee Cover" />
              <ol className="list-decimal list-inside">
                <li>
                  {" "}
                  The Eligible Lending Institution (ELI) shall be required to
                  apply for Guarantee cover to the Trust.
                </li>
                <li>
                  ELI appraises each loan proposal for selecting commercially
                  viable projects and submits the Guarantee application to the
                  trust.
                </li>
                <li>
                  ELI undertakes regular desk/ field monitoring of the borrowing
                  FPOs.
                </li>
              </ol>
              <QuoteComponent quote="The Annual Guarantee Fee (AGF) stands at 0.75% for amounts up to Rs.1.0 crore and increases to 0.85% for amounts exceeding Rs.1.0 crore."></QuoteComponent>
              <SubheadingDescription subheading="Invocation of Guarantee" />
              <p>
                ELI may invoke the guarantee in respect of the credit facility
                within 12 months from the date of NPA. The Guarantee could be
                invoked if the following conditions are satisfied:
              </p>
              <ul className="list-decimal list-inside">
                <li>
                  If the borrower fails to pay the due amount to the ELI and the
                  loan account has been classified by the ELI as NPA.
                </li>
                <li>The lock-in period of 12 months has lapsed</li>
                <li>
                  The claim is forwarded to the trust through ELI’s Controlling
                  Office.
                </li>
                <li>
                  ElI shall take all necessary precautions and take recourse to
                  all measures to recover the entire amount of the credit
                  facility from the borrower.
                </li>
              </ul>
              <SubheadingDescription subheading="Termination of Trust's Liability" />
              <p>
                A loan guaranteed by a trust will be cancelled if the business
                transfers the loan or its liabilities to another entity without
                getting permission from the trust. The trust can grant this
                permission, but the new borrower must meet the same conditions
                and terms as the original borrower. If these conditions are not
                met, the guarantee ends from the date of the transfer.
              </p>
              <p>
                Additionally, the trust's liability for any loans provided to a
                borrower by the financial institution is limited to the amount
                the borrower owed to the financial institution on the date they
                became eligible for the loan program. This limit is subject to
                specific rules set in the scheme.
              </p>
              <SubheadingDescription subheading="Benefits of the Credit Guarantee Fund Scheme for FPOs" />
              <ul className="list-disc list-inside">
                <li>
                  Enhanced Access to Credit: FPOs, especially those comprising
                  small and marginal farmers, can access credit facilities
                  without providing collateral security.
                </li>
                <li>
                  Financial Stability: The scheme promotes the financial
                  stability of FPOs by facilitating access to timely credit,
                  enabling them to undertake various agricultural and allied
                  activities.
                </li>
                <li>
                  Promotion of FPOs: By supporting FPOs, the scheme contributes
                  to the overall development of the agricultural sector, leading
                  to better market linkages, improved infrastructure, and
                  increased income for farmers.
                </li>
              </ul>
              <QuoteComponent quote="The Credit Guarantee Fund Scheme for FPOs is a significant step towards strengthening the financial backbone of FPOs, ultimately benefiting the farming community and fostering rural development."></QuoteComponent>
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
