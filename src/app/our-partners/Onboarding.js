import React from "react";

const OnboardingPartners = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-start px-4 pt-4 mb-2px">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-6">
        <header className="bg-green-600 text-white py-4 text-center rounded-t-lg">
          <h1 className="text-2xl lg:text-3xl">Onboarding Partners</h1>
        </header>

        <section
          id="fpos"
          className="p-6 my-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          <h2 className="text-gray-800 border-b-2 border-green-600 pb-2">
            FPOs (Farmer Producer Organizations)
          </h2>
          <div className="content">
            <h3 className="text-green-600 mt-4">Streamlined Onboarding</h3>
            <p className="my-2">
              Our partners assist in the seamless onboarding of FPOs, ensuring
              they have access to our comprehensive tech platform and resources.
            </p>
            <h3 className="text-green-600 mt-4">Training and Support</h3>
            <p className="my-2">
              We provide training modules and workshops to FPOs, helping them
              understand and utilize our platform effectively for better
              communication and streamlined operations.
            </p>
          </div>
        </section>

        <section
          id="kisansathis"
          className="p-6 my-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          <h2 className="text-gray-800 border-b-2 border-green-600 pb-2">
            Kisansathis
          </h2>
          <div className="content">
            <h3 className="text-green-600 mt-4">
              Empowering Rural Entrepreneurs
            </h3>
            <p className="my-2">
              Our partners help identify and recruit motivated individuals from
              rural communities to become Kisansathis, who act as intermediaries
              between Kisanlink and local farmers.
            </p>
            <h3 className="text-green-600 mt-4">Comprehensive Training</h3>
            <p className="my-2">
              Kisansathis undergo extensive training to familiarize themselves
              with Kisanlink’s platform, products, and services, ensuring they
              can effectively support farmers.
            </p>
          </div>
        </section>

        <section
          id="farmers"
          className="p-6 my-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          <h2 className="text-gray-800 border-b-2 border-green-600 pb-2">
            Farmers
          </h2>
          <div className="content">
            <h3 className="text-green-600 mt-4">Direct Engagement</h3>
            <p className="my-2">
              Our partners facilitate direct engagement with farmers, helping
              them onboard onto our platform and access a wide range of
              agricultural products and services.
            </p>
            <h3 className="text-green-600 mt-4">Continuous Support</h3>
            <p className="my-2">
              We provide ongoing support to farmers, ensuring they can make the
              most of our offerings to enhance their productivity and
              profitability.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OnboardingPartners;
