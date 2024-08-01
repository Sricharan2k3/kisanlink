"use client"
import React, { useRef } from "react";

const Services = () => {
  const services = [
    {
      title: "Soil Testing Service",
      description:
        "Understanding soil health is essential for a healthy yield. We make reliable soil testing services easily accessible by connecting farmers with nearby testing laboratories.",
      points: [
        "Soil sample collected by Kisansathi",
        "Faster and digitized process",
        "Reliable soil testing report",
        "Reliable recommendations report",
      ],
    },
    {
      title: "Farm Mechanization Service",
      description:
        "Farm mechanization services involve the utilization of innovative technologies like drones, which offer farmers an efficient method for applying agricultural products.",
      points: [
        "Cost-effective compared to traditional methods",
        "Time-saving and less labor-intensive",
        "Less harmful to health than traditional methods",
      ],
    },
    {
      title: "Output Purchase Services",
      description:
        "We assist farmers in realizing better value through our trading platform, enabling them to access buyers in the market to bid on the yield.",
      points: [
        "Realize better price for the produce",
        "Encourages competition among buyers",
        "Easy process and clear payment terms",
      ],
    },
    {
      title: "Facilitation of Government Subsidy/Schemes",
      description:
        "We educate farmers about the latest government schemes & subsidies and help with the documentation process to avail these benefits.",
      points: [
        "Information about latest schemes/subsidies",
        "Hassle-free application process",
        "Faster approvals",
      ],
    },
    {
      title: "Advisory Services",
      description:
        "We help farmers to enhance their crop quality and yield by providing reliable solutions offered by agronomists or other technical experts.",
      points: [
        "Quick resolution turnaround time",
        "Reliable solutions offered",
      ],
    },
  ];

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const refs = services.reduce((acc, service) => {
    acc[service.title] = useRef(null);
    return acc;
  }, {});

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-10">
      <div className="w-full max-w-4xl px-5">
        <div className="flex flex-wrap -mx-3">
          <div className="hidden sm:block w-1/6">
            <div className="sticky top-20">
              <h2 className="font-semibold text-lg mb-4">Services</h2>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index} className="cursor-pointer">
                    <a
                      className="text-blue-600 hover:text-blue-800"
                      onClick={() => scrollToRef(refs[service.title])}
                    >
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full sm:w-5/6">
            {services.map((service, index) => (
              <div
                key={index}
                ref={refs[service.title]}
                className={`w-full px-3 mb-6 ${
                  index === services.length - 1 ? "sm:mx-auto" : ""
                }`}
              >
                <div
                  style={{
                    background: `linear-gradient(to bottom, #e0f3dc, #c2e6d0)`,
                    boxShadow: `0 4px 6px rgba(0, 0, 0, 0.1)`,
                  }}
                  className="rounded-lg shadow-md p-6 h-full flex flex-col justify-between transition-transform transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-600">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{service.description}</p>
                  </div>
                  <ul className="text-gray-600 list-disc pl-5">
                    {service.points.map((point, i) => (
                      <li key={i} className="mb-2">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
