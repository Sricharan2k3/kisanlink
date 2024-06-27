"use client";
import Background from "@/utils/background";
import ContentComponent from "./solns";
import Techsuppourt from "./tech";
import ConsultancyServicesPage from "./consulting";
import BenfitsComponent from "./benfits";
import React from "react";
import TabComponent from "../some/page";

const SolutionsForFPOs = () => {
  return (
    <>
      <div>
        <Background title={"For FPOs"} />
        <ContentComponent />
        <Techsuppourt />
        <ConsultancyServicesPage />
        <TabComponent></TabComponent>
        <BenfitsComponent />
      </div>
    </>
  );
};

export default SolutionsForFPOs;
