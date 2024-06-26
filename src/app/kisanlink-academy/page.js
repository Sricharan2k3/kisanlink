"use client";

import Heading from "../components/heading";
import Background from "@/utils/background";
import KisanAcademy from "./accordian";
import FPOTraining from "./accordian1";

const Academy = () => {
  return (
    <>
      {" "}
      <Background title={"Kisanlink Academy"} />
      <div className="flex flex-col items-center">
        <Heading
          value="Empowering Farmers/Kisansathis through Education"
          className="text-3xl font-bold mb-4"
        />

        <div className="w-2/3 text-center mt-4 mb-8 text-lg">
          Welcome to Kisanlink Academy, where we offer a wide range of
          agricultural courses designed to empower farmers with the knowledge
          and skills they need to thrive. Accessible anytime, anywhere, our app
          provides
        </div>
        <KisanAcademy />
        <div className="bg-shape bg-blue-700 h-96">
          <img
            src="https://www.kisanlink.in/wp-content/plugins/saaspik-addons/elementor/widgets/images/left-shape.png"
            alt="shape"
            className="shape-left"
            style={{
              transform:
                "translate3d(-82.361px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
              WebkitTransform:
                "translate3d(-82.361px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
            }}
            data-parallax='{"x": -130}'
          />

          {/* <img
            src="https://www.kisanlink.in/wp-content/plugins/saaspik-addons/elementor/widgets/images/right_shape.png"
            alt="shape"
            className="shape-right"
            style={{
              transform:
                "translate3d(300.166px, -217px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
              WebkitTransform:
                "translate3d(72.166px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
            }}
            data-parallax='{"x": 130}'
          /> */}
        </div>
        <div className="-mt-64 mb-8 text-white text-center">
          <h2 className="text-4xl font-bold leading-tight font-serif">
            Download our Kisanlink academy app
            <br />
            to start your learning journey today!
          </h2>
        </div>
        <div className="mt-6 text-center">
          <div className="bg-white py-3 px-6 border border-green-500 rounded-full shadow-md inline-block">
            <span className="text-green-500 font-bold">Kisanlink</span>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />

        <Heading
          value="
Continuous Training for FPOs"
          className="text-3xl font-bold mb-4"
        />

        <div className="w-2/3 text-center mt-4 mb-8 text-lg">
          We understand the critical role that Farmers Producer Organizations
          (FPOs) play in supporting farmers and promoting sustainable
          agriculture. We provide continuous training programs to all FPOs
          onboarded on our platform, focusing on
        </div>

        <FPOTraining />
        <div className="w-2/3 text-center mt-4 mb-8 text-lg">
          Our continuous training programs are designed to keep FPOs up-to-date
          with industry advancements and enhance their capacity to serve their
          communities effectively.
        </div>
      </div>
    </>
  );
};

export default Academy;
