"use client";
const content1 =
  "Start working at any time, have flexible timing and no fixed working days in a week";
const content2 =
  "Earn margin on each product/service sold to farmers, sell multiple solutions to the same farmer and earn more money.";
const content3 =
  "Complete the training courses to become eligible to sell products/service and build a career in Agri Industry.";
const h1 = "Be your own boss and work as per your own will";
const h2 = "Get an opportunity to earn unlimited income";
const h3 = "Get Industry level certifications and develop your career";

const content4 =
  "Start working at any time, have flexible timing and no fixed working days in a week";
const content5 =
  "Earn margin on each product/service sold to farmers, sell multiple solutions to the same farmer and earn more money.";
const content6 =
  "Complete the training courses to become eligible to sell products/service and build a career in Agri Industry.";
const h4 = "Be your own boss and work as per your own will";
const h5 = "Get an opportunity to earn unlimited income";
const h6 = "Get Industry level certifications and develop your career";

const img1 =
  "https://www.kisanlink.in/wp-content/uploads/2022/03/Age-requriement.png";
const img2 =
  "https://www.kisanlink.in/wp-content/uploads/2022/03/educational-qualification.png";
const img3 =
  "https://www.kisanlink.in/wp-content/uploads/2022/03/motorcycle.png";

import CenteredLayout from "./cardContent";
import Card from "./threeCard";
import Card2 from "./threecards2";
import CenteredVideo from "./cardVideo";
import OfferComponent from "./offer";
import DownloadAppBox from "./Download";
import Background from "@/utils/background";
const Kisansathi = () => {
  return (
    <div>
      <Background title={"Become a Kisansathi"}></Background>
      <CenteredVideo />
      <CenteredLayout />

      <Card
        h1={h1}
        h2={h2}
        h3={h3}
        content1={content1}
        content2={content2}
        content3={content3}
      />
      <OfferComponent />
      <Card2 img1={img1} img2={img2} img3={img3} />
      <DownloadAppBox />
    </div>
  );
};

export default Kisansathi;
