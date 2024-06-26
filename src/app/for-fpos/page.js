"use client";
import Background from "./Background";
import ContentComponent from "./solns"
import Techsuppourt from "./tech";
import ConsultancyServicesPage from "./consulting";
import BenfitsComponent from "./benfits";
import React from "react";

const SolutionsForFPOs = () => {
  return (
    <>
    <div>
      <Background title={"For FPOs"}/>
        <ContentComponent/>
        <Techsuppourt/>
        <ConsultancyServicesPage/>
        <BenfitsComponent/>
        </div>
    </>
  );
};

export default SolutionsForFPOs;
