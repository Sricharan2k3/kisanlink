"use client";

import Heading from "../components/heading";
import Background from "../../utils/background";
import Card1 from "./card1";
import Card2 from "./card2";
import Collaborators from "../components/home/collaborators";

const CollaboratorsPage = () => {
  return (
    <div className="small:overflow-hidden">
      <Background title={"Collaborators"} />
      <div className="flex flex-col items-center">
        <Heading
          value="Introduction to Collaborative Approach"
          className="text-3xl font-bold "
        />

        <div className="lg:w-2/3 text-center small:pr-2 small:pl-2 lg:p-0 mb-8">
          Our Vision is farmer empowerment and we are looking to collaborate
          with the companies who share similar objectives. These collaborative
          companies can use our entity; Kisansathis, and our tech platform to
          earn mutual benefits, along with the farmers, and create a lucrative
          market space for the betterment of the farming community.
        </div>

        <div className="text-2xl font-semibold -mb-4 text-green-600">
          WHY JOIN HANDS WITH US?
        </div>

        <Heading
          value="Value Proposition to Businesses"
          className="text-3xl  font-bold  mb-4"
        />

        <Card1 />

        <Heading
          value="How Does It Work?"
          className="text-3xl font-bold  mb-4"
        />

        <div className="text-center text-2xl font-semibold mb-8">
          Three simple steps to increase your sales.
        </div>

        <Card2 />

        <Collaborators />
        <div className="lg:max-width-full h-80 bg-green-600 lg:flex items-center justify-center">
          <div className="overlay-bg ">
            <div className="text-center lg:mt-80 lg:flex lg:flex-row">
              <h1 className="lg:text-4xl small:text-2xl small:mt-24 lg:mt-0 lg:ml-36 lg:w-2/3 font-bold text-white text-center mr-16 ">
                Become a collaborator
              </h1>
              <div className="bg-white py-2 px-4 border lg:w-64 small:w-48 small:mt-2 small:ml-48 border-green-500 rounded-2xl shadow-md text-green-500 font-semibold cursor-pointer hover:bg-green-500 hover:text-white transition duration-300 mr-80">
                Reach out to us
              </div>
            </div>

            <img
              src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/plugins/saaspik-addons/elementor/widgets/images/ellipse.png"
              alt="bg"
            />
          </div>
          <div className="scroll-circle">
            <img
              src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/plugins/saaspik-addons/elementor/widgets/images/circle13.png"
              alt="circle"
              style={{
                transform:
                  "translate3d(0px, -107.794px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
                WebkitTransform:
                  "translate3d(0px, -107.794px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaboratorsPage;
