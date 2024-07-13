"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { DirectionAwareHover } from "../components/direction-aware-hover";
import Heading from "../components/heading";

export function DirectionAwareHoverDemo() {
 
  return (
    <div className="overflow-hidden">
    <div className="lg:h-[40rem] relative lg:gap-x-20 lg:-mt-32 lg:-mb-28 lg:flex items-center justify-center ">
      <DirectionAwareHover imageUrl={"https://www.kisanlink.in/wp-content/uploads/drone-441.png"}>
        <p className="font-bold text-xl font-gray-600">Drone Spraying Services</p>
        <p className="font-normal text-sm">The center partners with certified drone companies to provide more efficient drone spraying services covering larger areas compared to traditional methods.</p>
      </DirectionAwareHover>
      <DirectionAwareHover imageUrl={"https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/rental-441.png"}>
        <p className="font-bold text-xl font-gray-600">Rental Tools</p>
        <p className="font-normal text-sm">Farmers can rent various agricultural tools, making advanced equipment accessible without large capital investments.</p>
      </DirectionAwareHover>
    
    </div>
    <Heading value={"Training and Workshops"} />
  <div className="lg:h-[40rem] relative lg:gap-x-20 lg:-mt-32 lg:-mb-28 lg:flex items-center justify-center ">
          
     
     <DirectionAwareHover imageUrl={"https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/skill-training.png"}>
       <p className="font-bold text-xl font-gray-600">Skill Training</p>
       <p className="font-normal text-sm">The center offers training for stakeholders on the use of innovative products and technologies and skill development along with workshops for SHGs, collaborators, organic farming, and FPO training.
       </p>
     </DirectionAwareHover>
     <DirectionAwareHover imageUrl={"https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/field-demonstration.png"}>
       <p className="font-bold text-xl font-gray-600">Field Demonstrations</p>
       <p className="font-normal text-sm">These practical demonstrations help farmers understand the application and benefits of new technologies and products in real-world scenarios.</p>
     </DirectionAwareHover>
    </div>
    </div>

);
}
