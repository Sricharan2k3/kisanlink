import React from "react";

const DownloadAppBox = () => {
  const downloadLink =
    "https://play.google.com/store/apps/details?id=com.kisanlink"; // Replace with your actual download link

  return (
    <div className="lg:max-width-full h-80 bg-green-600 lg:flex items-center justify-center small:overflow-hidden">

      <div className="overlay-bg ">
        <div className="text-center lg:mt-80 small:m-24  lg:m-0 lg:flex lg:flex-row">
          <h1 className="text-4xl lg:ml-36 lg:w-2/3 font-bold text-white text-center lg:mr-16 ">
            Download Our App
          </h1>
          <br />
          <div className="bg-white lg:ml-80 px-4 lg:h-10 border lg:w-80 small:w-44  small:-mt-2 border-green-500  rounded-2xl shadow-md text-green-500 font-semibold cursor-pointer hover:bg-green-500 hover:text-white transition duration-300 ">
            <a href="https://play.google.com/store/apps/details?id=com.kisanlink">
              <button
                type="button"
                class="lg:flex lg:items-center lg:justify-center lg:w-16 text-white rounded-3xl lg:h-8 small:-ml-20 lg:ml-0 "
              >

                <div class="flex flex-row mr-3">
                  <div className="flex flex-row ml-24 ">
                    <svg viewBox="30 336.7 120.9 129.2" width="20">
                      <path
                        fill="#FFD400"
                        d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                      ></path>
                      <path
                        fill="#FF3333"
                        d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                      ></path>
                      <path
                        fill="#48FF48"
                        d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                      ></path>
                      <path
                        fill="#3BCCFF"
                        d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                      ></path>
                    </svg>
                  </div>
                  <div className="lg:flex lg:flex-row">
                    <h1 className="text-black w-36">Google Play</h1>
                  </div>
                </div>
              </button>
            </a>
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
  );
};

export default DownloadAppBox;
