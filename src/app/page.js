import Image from "next/image";

import Carousel from "./components/home/carousel";
import "../styles/global.css";
import Empower from "./components/home/empower";
import StatsCarousel from "./components/home/stats";
import Screenshot from "./components/home/screenshot";
import StatsCarousel1 from "./components/home/stats1";
import FourCards from "./components/home/fourcards";
import Collaborators from "./components/home/collaborators";
import VideoContainer from "./components/home/videocontainer";
import Component from "./transition/transit";
import FarmMechanizationSection from "./components/home/farmmechanization";
// const slides = ["./resizere.png", "./storere.png", "./amritire.png"];

export default function Home() {
  return (
    <div>
      {/* <Carousel autoSlide={true}>
        {[...slides.map((s) => <img src={s} key={s} />)]}
      </Carousel> */}
      <Component></Component>
      <Empower></Empower>
      {/* <FarmMechanization /> */}
      <FarmMechanizationSection />
      <StatsCarousel></StatsCarousel>

      <StatsCarousel1></StatsCarousel1>
      <Screenshot></Screenshot>

      <FourCards />
      <Collaborators />
      <VideoContainer />
    </div>
  );
}
