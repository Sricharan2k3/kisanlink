"use client";
import ConsultancyServicesPage from "./accordian";
import KisanlinkDashboard from "./accordianNext";
import Background from "@/utils/background";
import Navigation from "../navbar/page";
import Navigation1 from "../navbar/navigation";

const Technology = () => {
  return (
    <div className=" items-center justify-center content-center">
      <Background title={"Technology Links"}></Background>
      <ConsultancyServicesPage></ConsultancyServicesPage>
      <KisanlinkDashboard></KisanlinkDashboard>
      <Navigation></Navigation>
    </div>
  );
};

export default Technology;
