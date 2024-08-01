"use client";
import Background from "../../utils/background";
import Heading from "../components/heading";
// import { MembershipCardBenefits } from "./benefits";
// import { TermsAndConditions } from "./membership";
import MembershipCardBenefits from "./benefits";
import TermsAndConditions from "./membership";
import VideoContainer from "./video";
const smartcard = () => {
  return (
    <>
      {/* <Background title={"Smart Cards"}></Background> */}
      <VideoContainer></VideoContainer>{" "}
      <div>
        <Heading value={"Kisanlink Smart Membership Card"}></Heading>
      </div>
      <div>
        <p className="text-center lg:-mt-4 lg:mb-20 lg:ml-40 lg:mr-40">
          Kisanlink issues and manages farmers' physical membership cards
          through a technologically advanced platform. Each card is embedded
          with a unique QR code, granting access to substantial information.
          This QR code enables seamless tracking of the farmer's complete
          profile, including transaction history and credit records.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-stretch justify-center p-4 gap-2 md:gap-4 lg:gap-6">
        <div className="flex-1 max-w-sm mx-auto md:max-w-md lg:max-w-lg">
          <img
            className="w-full h-auto object-cover rounded-lg"
            src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/17A-scaled.jpg"
            alt="First Image"
          />
        </div>
        <div className="flex-1 max-w-sm mx-auto md:max-w-md lg:max-w-lg">
          <img
            className="w-full h-auto object-cover rounded-lg"
            src="./front.jpg"
            alt="Second Image"
          />
        </div>
      </div>
      <div>
        <div>
          <Heading value={"Membership Card Benefits"}></Heading>
        </div>
        <MembershipCardBenefits></MembershipCardBenefits>
        <div>
          <div>
            <Heading value={"Customer Support"}></Heading>
          </div>

          <div className="">
            <p className="text-center lg:-mt-4  lg:ml-40 lg:mr-40">
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
