"use client";
import React from "react";
import { StickyScroll } from "../components/sticky-scroll-reveal";
import Image from "next/image";
import { LuDot } from "react-icons/lu";

const content = [
  {
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

          <li className=" flex flex-row">
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
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://www.kisanlink.in/wp-content/uploads/soil-test.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
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

          <li className=" flex flex-row">
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
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://www.kisanlink.in/wp-content/uploads/farm-mech.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
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

          <li className=" flex flex-row">
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
    content: (
      //   <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
      //     Version control
      //   </div>
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://www.kisanlink.in/wp-content/uploads/output-purchase.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
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

          <li className=" flex flex-row">
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
    content: (
      //   <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
      //     Running out of content
      //   </div>
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://www.kisanlink.in/wp-content/uploads/advisory.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
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

          <li className=" flex flex-row">
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
    content: (
      //   <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
      //     Running out of content
      //   </div>
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://www.kisanlink.in/wp-content/uploads/brands.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
const StickyScrollRevealDemo = () => {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
};

export default StickyScrollRevealDemo;
