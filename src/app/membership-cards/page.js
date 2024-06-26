"use client";
import Background from "@/utils/background";
import Heading from "../components/heading";
import MembershipCardBenefits from "./benefits";
import TermsAndConditions from "./membership";

const smartcard = () => {
  return (
    <>
      <Background title={"Smart Cards"}></Background>
      <div className="-mt-10">
        <Heading value={"Kisanlink Membership Card"}></Heading>
      </div>

      <div>
        <p className="text-center -mt-4 mb-20 ml-40 mr-40">
          Kisanlink issues and manages farmers' physical membership cards
          through a technologically advanced platform. Each card is embedded
          with a unique QR code, granting access to substantial information.
          This QR code enables seamless tracking of the farmer's complete
          profile, including transaction history and credit records.
        </p>
      </div>
      <div className="w-full items-center content-center justify-center align-middle pl-64">
        <img
          className="w-4/5 content-center items-center justify-center align-middle"
          src="https://www.kisanlink.in/wp-content/uploads/17A-scaled.jpg"
        ></img>
      </div>
      <div>
        <div className="-mt-10">
          <Heading value={"Membership Card Benefits"}></Heading>
        </div>
        <MembershipCardBenefits></MembershipCardBenefits>
        <div>
          <div className="-mt-10">
            <Heading value={"Customer Support"}></Heading>
          </div>

          <div className="">
            <p className="text-center -mt-4 mb-20 ml-40 mr-40">
              24/7 customer support will be accessible to all farmers through a
              dedicated helpline number to address any doubts or queries.
            </p>
          </div>
        </div>
        <TermsAndConditions></TermsAndConditions>
      </div>
    </>
  );
};

export default smartcard;
