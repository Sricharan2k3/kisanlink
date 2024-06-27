"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { DirectionAwareHover } from "../components/direction-aware-hover";
import Heading from "../components/heading";

export function DirectionAwareHoverDemo() {
  const imageUrl =
    "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
    <div className="h-[40rem] relative gap-x-20 -mt-24 -mb-24 flex items-center justify-center">
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-bold text-xl font-gray-600">Drone Spraying Services</p>
        <p className="font-normal text-sm">The center partners with companies like DRÓGO, MARUT, and VYOMIK to provide drone spraying services, which are more efficient and cover larger areas compared to traditional methods.</p>
      </DirectionAwareHover>
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-bold text-xl font-gray-600">Rental Tools</p>
        <p className="font-normal text-sm">Farmers can rent various agricultural tools such as power weeders, tillers, brush cutters, battery sprayers, hand transplanters, and electric weeders, making advanced equipment accessible without the need for large capital investments.</p>
      </DirectionAwareHover>
    
    </div>
    <Heading value={"Training and Workshops"} />
    <div className="h-[40rem] relative gap-x-20 -mt-24 -mb-24 flex items-center justify-center">
          
     
     <DirectionAwareHover imageUrl={imageUrl}>
       <p className="font-bold text-xl font-gray-600">Skill Training</p>
       <p className="font-normal text-sm">The center offers training and workshops for farmers, entrepreneurs, and Farmer Producer Organizations (FPOs) on the use of these innovative products and technologies. This includes agriculture workshops, skill development training, SHG workshops, collaborator workshops, organic farming workshops, and FPO training workshops.,
       </p>
     </DirectionAwareHover>
     <DirectionAwareHover imageUrl={imageUrl}>
       <p className="font-bold text-xl font-gray-600">Field Demonstrations</p>
       <p className="font-normal text-sm">These practical demonstrations help farmers understand the application and benefits of new technologies and products in real-world scenarios.</p>
     </DirectionAwareHover>
    </div>
    </>

);
}
