"use client";
import React from "react";
import ProfileCard from "../components/homeComp/profilecard"; // Assuming correct casing for component name
import Heading from "../components/heading";
import Background from "../../utils/background";

const App = () => {
  // Array of user profiles
  const userProfiles = [
    {
      photo:
        "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-22-at-1.35.54-PM.png",
      name: "Meher Prasad Verdeneni",
      position: "Founder & CEO",
      qualification: "MBA, HEC Montreal",
      experience: [
        "6 years of experience in output procurement and the end-to-end management of the Agri input value chain",
        "Proficient in identifying market trends, optimizing supply chain processes, and driving sustainable growth",
      ],
      linkedInUrl: "https://www.linkedin.com/in/meherprasadverd",
    },
    // Add more profiles as needed
    {
      photo:
        "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/2022/07/image-097.png",
      name: "V.Ramana Rao",
      position: "Director",
      qualification: "B.Sc Agriculture, Akola University",
      experience: [
        "30 years of experience in Agri Input Value chain",
        "CEO of E-Raithu",
      ],
      linkedInUrl: "https://www.linkedin.com/in/verdeneni-ramana-rao",
    },
    // Add more profiles as needed
    {
      photo:
        "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/2022/11/Team-members-Shivani.png",
      name: "Shivani Agarwal",
      position: "VP – Training & Marketing",
      qualification: "M.Com, MJPRU",
      experience: [
        "20 years of experience in leadership, fostering collaboration, and developing curriculum with meticulous attention to detail.",
        "Proficient in instructional design, administration, and policymaking.",
      ],
      linkedInUrl: "https://www.linkedin.com/in/shiniag",
    },
    {
      photo:
        "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/Ramkishor-photo.jpeg",
      name: "Ramkishor Gujjar",
      position: "VP - Operations",
      qualification: "B.Tech, NIT Raipur",
      experience: [
        "6 years of operational experience in agritech & edtech",
        "Expert in streamlining processes & optimizing efficiency",
      ],
      linkedInUrl: "https://www.linkedin.com/in/ram-kishor-356515100/",
    },
    {
      photo:
        "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/2022/11/Bhuvana-Chandra.png",
      name: "Bhuvana Chandra",
      position: "Design Manager",
      qualification: "M.Sc. Agronomy, LPU",
      experience: [
        "2 years of experience in motion graphics",
        "Gained invaluable hands-on experience in farming",
      ],
      linkedInUrl:
        "https://www.linkedin.com/in/bhuvana-chandra-pechetti-2010811a7/",
    },

    {
      photo:
        "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/elementor/thumbs/Mohan-photo-scaled-e1688157118505-q8qoj83v860v009r84x4muwctzdjz50ifsmz35fhzk.jpg",
      name: "Mohan Krishna",
      position: "Tech Manager",
      qualification: "M.Sc. Agronomy, LPU",
      experience: [
        "1 year of experience in driving digital transformation",
        "Skilled in enhancing farmers’ engagement with technology",
      ],
      linkedInUrl: "https://www.linkedin.com/in/mohan-krishna-436ab4219/",
    },

    {
      photo:
        "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/elementor/thumbs/IMG_6219-1-scaled-qox9f17ez4p4ha2ahbxux8abzr4mf9738ohgdc3qog.jpg",
      name: "Jyothirmayi Kimidi",
      position: "Marketing Intern",
      qualification: "Bsc Agriculture, CUTM Odisha",
      experience: [
        "1 year experience in social media management and content creation.",
        "Gained valuable skills in engaging posts and creating videos.",
      ],
      linkedInUrl: "https://www.linkedin.com/in/jyothirmayikimidi",
    },

    {
      photo:
        "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/elementor/thumbs/Sricharan-Nama-qomv5zryeh4efgelkjauc3rv7u0xz85vjbp8u4pplc.jpeg",
      name: "Nama Sri Charan",
      position: "Tech Intern",
      qualification: "B.E, CBIT Hyderabad",
      experience: [
        "Tech enthusiast with 1 year of practical experience, specializing in Web development to deliver impactful solutions.",
        "Committed to leveraging technical skills to contribute to innovative solutions.",
      ],
      linkedInUrl: "https://www.linkedin.com/in/sri-charan-nama-507581249/",
    },

    {
      photo: "./akash.jpeg",
      name: "Akash pingali",
      position: "Techn intern",
      qualification: "B.E, CBIT Hyderabad",
      experience: [
        "Tech enthusiast with 1 year of practical experience, specializing in Web development to deliver impactful solutions.",
        "Committed to leveraging technical skills to contribute to innovative solutions.",
      ],
      linkedInUrl: "https://www.linkedin.com/in/akash-pingali-b05537234/",
    },

    {
      photo: "https://via.placeholder.com/150",
      name: "Kalyan Battula",
      position: "Techn intern",
      qualification: "B.E, CBIT Hyderabad",
      experience: [
        "Tech enthusiast with 1 year of practical experience, specializing in Web development to deliver impactful solutions.",
        "Committed to leveraging technical skills to contribute to innovative solutions.",
      ],
      linkedInUrl: "https://www.linkedin.com/in/kalyan-bathula-675630229/",
    },
    // Add more profiles as needed
  ];

  return (
    <>
      <Background title={"Team"}></Background>
      <Heading value={"Our Team"}></Heading>
      <div className="flex flex-wrap justify-center mb-4">
        <p className="pl-24 text-center ">
          Founded by a team of agriculture enthusiasts and tech experts,
          Kisanlink brings together a unique blend of industry knowledge,
          technical expertise, and a passion for making a difference. With
          diversified backgrounds, our team is dedicated to developing
          innovative solutions that address the specific needs of farmers and
          agricultural communities.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-items-center items-center  p-4">
        {userProfiles.map((profile, index) => (
          <div key={index} className=" w-[600px] h-[330px]">
            <ProfileCard {...profile} />
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
