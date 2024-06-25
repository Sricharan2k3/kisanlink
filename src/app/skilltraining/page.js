"use client";
import React from "react";
import Heading from "../components/heading";
import Background from "../../utils/background";

const ast = () => {
  return (
    <>
      <Background title={"Agriculture Skill Training"}></Background>
      <div className="-mt-10">
        <Heading value={"Agriculture Skill Training"}></Heading>
      </div>

      <div>
        <p className="text-center -mt-4 mb-20 ml-40 mr-40">
          We aim to empower farmers, rural entrepreneurs, university students,
          and Farmers Producer Organizations (FPOs) with the knowledge and
          skills they need to thrive in the agricultural sector.
        </p>
      </div>
      <div className="-mt-10">
        <Heading
          value={"Agri Skill Training for University Students"}
        ></Heading>
      </div>

      <div>
        <p className="text-center -mt-4 mb-20 ml-40 mr-40">
          Kisanlink is committed to nurturing the next generation of
          agricultural professionals. We offer specialized agri skill training
          programs for university students, providing them with
        </p>
      </div>
      <div className="-mt-10">
        <Heading value={"FPO Training Modules"}></Heading>
      </div>

      <div>
        <p className="text-center -mt-4 mb-20 ml-40 mr-40">
          We offer training to our partner FPOs on agricultural products and
          services utilized by farmers. These modules, available both online and
          offline, are conducted by industry experts to ensure comprehensive and
          practical learning.
        </p>
      </div>
      <div className="-mt-10">
        <Heading value={"Courses"}></Heading>
      </div>
      <div className="-mt-10">
        <Heading value={"Why do we offer courses?"}></Heading>
      </div>

      <div>
        <p className="text-center -mt-4 mb-20 ml-40 mr-40">
          To enable Kisansathis to communicate well about the products and
          services offered by our collaborators and train them to become experts
          in fields of their interest to further their careers.
        </p>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 gap-4 mt-10 mx-40">
        <img
          src="https://www.kisanlink.in/wp-content/uploads/introductory-english-thumbnail.jpg"
          alt="Agriculture Image 1"
          className="w-full h-auto rounded-xl"
        />
        <img
          src="https://www.kisanlink.in/wp-content/uploads/introductory-telugu-thumbnail.jpg"
          alt="Agriculture image 2"
          className="w-full h-auto rounded-xl"
        />
        <img
          src="https://www.kisanlink.in/wp-content/uploads/introductory-hindi-thumbnail.jpg"
          alt="Agriculture Image 3"
          className="w-full h-auto rounded-xl"
        />
        <img
          src="https://www.kisanlink.in/wp-content/uploads/eng.jpg"
          alt="Agriculture Image 4"
          className="w-full h-auto rounded-xl"
        />
        <img
          src="https://www.kisanlink.in/wp-content/uploads/tel.jpg"
          alt="Agriculture Image 5"
          className="w-full h-auto rounded-xl"
        />
        <img
          src="https://www.kisanlink.in/wp-content/uploads/hin.jpg"
          alt="Agriculture Image 6"
          className="w-full h-auto rounded-xl"
        />
        <img
          src="https://www.kisanlink.in/wp-content/uploads/advisory-english-1.jpg"
          alt="Agriculture Image 7"
          className="w-full h-auto rounded-xl"
        />
        <img
          src="https://www.kisanlink.in/wp-content/uploads/introductory-telugu-thumbnail.jpg"
          alt="Agriculture Image 8"
          className="w-full h-auto rounded-xl"
        />
        <img
          src="https://www.kisanlink.in/wp-content/uploads/introductory-hindi-thumbnail.jpg"
          alt="Agriculture Image 9"
          className="w-full h-auto rounded-xl"
        />
        <img
          src="https://www.kisanlink.in/wp-content/uploads/mustard-english-thumbnail.jpg"
          alt="Agriculture Image 10"
          className="w-full h-auto rounded-xl"
        />
        <img
          src="https://www.kisanlink.in/wp-content/uploads/mustard-telugu-1-thumbnail.jpg"
          alt="Agriculture Image 11"
          className="w-full h-auto rounded-xl"
        />
        <img
          src="https://www.kisanlink.in/wp-content/uploads/mustard-telugu-thumbnail.jpg"
          alt="Agriculture Image 12"
          className="w-full h-auto rounded-xl"
        />
        <img
          src="https://www.kisanlink.in/wp-content/uploads/safflower-course-english.jpg"
          alt="Agriculture Image 13"
          className="w-full h-auto rounded-xl"
        />
        <img
          src="https://www.kisanlink.in/wp-content/uploads/safflower-course-hin.jpg"
          alt="Agriculture Image 14"
          className="w-full h-auto rounded-xl"
        />
      </div>

      {/* Centered Last Image */}
      <div className="flex justify-center mt-10">
        <img
          src="https://www.kisanlink.in/wp-content/uploads/safflower-course-telugu.jpg"
          alt="Agriculture Image 15"
          className="w-2/5 h-2/5 rounded-xl"
        />
      </div>
    </>
  );
};

export default ast;
