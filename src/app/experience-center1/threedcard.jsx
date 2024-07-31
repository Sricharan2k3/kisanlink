"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var space-x-24">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto small:w-[350px] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Marketing Support
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
The center provides brand space for promoting agricultural products and services, distributes marketing materials like flyers and pamphlets, and showcases promotional videos on TVs and projectors at the center.
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/experience-centre-1.png"
            height="1000"
            width="1000"
            className="h-60 lg:w-full small:w-[350px] object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        {/* <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
          
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
           
          </CardItem>
        </div> */}
      </CardBody>
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto small:w-[350px] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Financial Support
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
 Kisanlink also provides financial support to farmers and SHGs through partnerships with financial institutions and government schemes. We assist in securing loans and subsidies to help our stakeholders invest in sustainable technologies, such as solar dryers, and expand their micro-enterprises.        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/finance.jpeg"
            height="1000"
            width="1000"
            className="h-60 lg:w-full small:w-[350px] object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        {/* <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
          
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
           
          </CardItem>
        </div> */}
      </CardBody>
    </CardContainer>
    
  );
}
