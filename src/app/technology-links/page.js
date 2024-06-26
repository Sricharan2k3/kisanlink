"use client";
import ConsultancyServicesPage from "./accordian";
import KisanlinkDashboard from "./accordianNext";
import Background from "@/utils/background";

const Technology = () => {
  return (
    <div className=" items-center justify-center content-center">
      <Background title={"Technology Links"}></Background>
      <ConsultancyServicesPage></ConsultancyServicesPage>
      <KisanlinkDashboard></KisanlinkDashboard>
    </div>
  );
};

export default Technology;
