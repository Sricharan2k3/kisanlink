import SubheadingDescription from "../blog1/subheading";
import ImageComponent from "../blog1/image";
import QuoteComponent from "../blog1/quote";
import React from "react";
import CommentForm from "../blog1/comment";
import CategoryList from "../blog1/category";
import TagList from "../blog1/taglist";
import Footer from "../blog1/footer";
import Background from "../../utils/background";

export default function Component() {
  return (
    <>
      <Background title={"Blogs"} />
      <div className="container mt-16 w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-brown-700 tracking-tight lg:text-5xl">
          Introduction to Agriculture | Crop Production and Management | Don’t
          Memorise
        </h1>
        <p className="text-muted-foreground">JULY 16, 2022</p>
      </div>
      <div className="flex flex-col lg:flex-row w-full mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="lg:w-full lg:pr-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <article className="prose prose-gray max-w-none pl-6 pr-6 pt-2">
              <SubheadingDescription text="What is agriculture? Agriculture forms the most integral part of our lives, as the food we require is obtained from it. Agriculture seems to be a set of easy activities but it requires a lot of efforts." />
              <br></br>
              <iframe
                width="740"
                height="380"
                src="https://www.youtube.com/embed/NCp93xbSwWM"
                title="Introduction to Agriculture | Crop Production and Management | Don&#39;t Memorise"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </article>

            <div className="p-6">
              <CommentForm />
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          {/* <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
            <CategoryList />
            <TagList />
            <Footer />
          </div>
        </div> */}
      </div>
    </>
  );
}
