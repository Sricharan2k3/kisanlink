"use client";

import Heading from "../components/heading";
import Background from "@/utils/background";
import { CardHoverEffectDemo } from "./cardhover";
import { DirectionAwareHoverDemo } from "./directionaware";
import { ThreeDCardDemo } from "./threedcard";

const ExperienceCenter = () => {
    return ( // Add the return statement
        <div className="bg-white">
            <Background title={"Experience Center"} />
            <Heading value={"Kisanlink Experience Center"} />
            <CardHoverEffectDemo/>
            <Heading value={"Services and Support"} />
     
            <DirectionAwareHoverDemo/>
            <Heading value={"   Marketing and Financial Support"}/>
            <ThreeDCardDemo/>

            
          
       

           
     

         
          
            
        </div>
    );
}

export default ExperienceCenter;
