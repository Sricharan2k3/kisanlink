import React, { useState, useEffect } from "react";
import { StickyScroll } from "../components/sticky-scroll-reveal";
import { LuDot } from "react-icons/lu";

const content = [
  {
    id: "soil-testing-service",
    title: "Soil Testing Service",
    description: (
      <>
        Understanding soil health is essential for a healthy yield. We make
        reliable soil testing services easily accessible by connecting farmers
        with nearby testing laboratories.
        <br />
        <br />
        <ol>
          <li className="flex flex-row">
            <LuDot />
            Soil sample collected by Kisansathi
          </li>
          <br />
          <li className="flex flex-row">
            <LuDot />
            Faster and digitized process
          </li>
          <br />
          <li className="flex flex-row">
            <LuDot />
            Reliable soil testing report
          </li>
          <br />
          <li className="flex flex-row">
            <LuDot />
            Reliable recommendations report
          </li>
        </ol>
      </>
    ),
    imageSrc: "https://www.kisanlink.in/wp-content/uploads/soil-test.png",
  },
  {
    id: "farm-mechanization-service",
    title: "Farm Mechanization Service",
    description: (
      <>
        Farm mechanization services involve the utilization of innovative
        technologies like drones, which offer farmers an efficient method for
        applying agricultural products.
        <br />
        <br />
        <ol>
          <li className="flex flex-row">
            <LuDot />
            Cost-effective compared to traditional methods
          </li>
          <br />
          <li className="flex flex-row">
            <LuDot />
            Time-saving and less labor-intensive
          </li>
          <br />
          <li className="flex flex-row">
            <LuDot />
            Less harmful to health than traditional methods
          </li>
        </ol>
      </>
    ),
    imageSrc: "https://www.kisanlink.in/wp-content/uploads/farm-mech.png",
  },
  {
    id: "output-purchase-services",
    title: "Output Purchase Services",
    description: (
      <>
        We assist farmers in realizing better value through our trading
        platform, enabling them to access buyers in the market to bid on the
        yield.
        <br />
        <br />
        <ol>
          <li className="flex flex-row">
            <LuDot />
            Realize better price for the produce
          </li>
          <br />
          <li className="flex flex-row">
            <LuDot />
            Encourages competition among buyers
          </li>
          <br />
          <li className="flex flex-row">
            <LuDot />
            Easy process and clear payment terms
          </li>
        </ol>
      </>
    ),
    imageSrc: "https://www.kisanlink.in/wp-content/uploads/output-purchase.png",
  },
  {
    id: "government-subsidy-schemes",
    title: "Facilitation of Government Subsidy/Schemes",
    description: (
      <>
        We educate farmers about the latest government schemes & subsidies and
        help with the documentation process to avail these benefits.
        <br />
        <br />
        <ol>
          <li className="flex flex-row">
            <LuDot />
            Information about latest schemes/subsidies
          </li>
          <br />
          <li className="flex flex-row">
            <LuDot />
            Hassle-free application process
          </li>
          <br />
          <li className="flex flex-row">
            <LuDot />
            Faster approvals
          </li>
        </ol>
      </>
    ),
    imageSrc: "https://www.kisanlink.in/wp-content/uploads/subscidies.png",
  },
  {
    id: "advisory-services",
    title: "Advisory Services",
    description: (
      <>
        We help farmers to enhance their crop quality and yield by providing
        reliable solutions offered by agronomists or other technical experts.
        <br />
        <br />
        <ol>
          <li className="flex flex-row">
            <LuDot />
            Quick resolution turnaround time
          </li>
          <br />
          <li className="flex flex-row">
            <LuDot />
            Encourages competition among buyers
          </li>
          <br />
          <li className="flex flex-row">
            <LuDot />
            Reliable solutions offered{" "}
          </li>
        </ol>
      </>
    ),
    imageSrc: "https://www.kisanlink.in/wp-content/uploads/advisory.png",
  },
];

const StickyScrollRevealDemo = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Adjust scroll position as needed
      const sections = document.querySelectorAll("section[data-id]");
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.getAttribute("data-id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100, // Adjust scroll offset as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="p-10">
      <div className="flex">
        <div className="w-1/4">
          <div className="sticky top-20">
          
            <ul className="space-y-2">
              {content.map((item) => (
                <li key={item.id} className="cursor-pointer">
                  <a
                    className={
                      activeSection === item.id
                        ? "text-blue-600 font-bold text-lg"
                        : "text-gray-600 hover:text-blue-600 text-lg"
                    }
                    onClick={() => scrollToSection(item.id)}
                  >

                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-3/4">
          {content.map((item) => (
            <section
              key={item.id}
              id={item.id}
              data-id={item.id}
              className="mb-10 flex"
            >
              <div className="w-2/3">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">
                  {item.title}
                </h3>
                <div className="text-gray-700 mb-4">{item.description}</div>
              </div>
              <div className="w-1/3">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="h-80 w-80 object-cover"
                />
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StickyScrollRevealDemo;
