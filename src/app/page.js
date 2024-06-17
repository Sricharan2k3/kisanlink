import Image from "next/image";

import Carousel from "./components/home/carousel";
import FourCards from "./components/home/fourcards";
import Collaborators from "./components/home/collaborators";
import VideoContainer from "./components/home/videocontainer";
import FarmMechanization from "./about/page";



const slides = [
  "https://www.kisanlink.in/wp-content/uploads/0707-new-web-banner.jpg",
  "https://www.kisanlink.in/wp-content/uploads/FPObanner.jpg",
  "https://www.kisanlink.in/wp-content/uploads/banner.jpg",


]

export default function Home() {
  return (

    <div>


      <Carousel autoSlide={true} >
        {[...slides.map((s) => (
          <img src={s} key={s} />
        ))]}
      </Carousel>
      <FarmMechanization />
      <FourCards />
      <Collaborators />
      <VideoContainer />


    </div>



  )
}
