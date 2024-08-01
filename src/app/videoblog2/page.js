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
      <div className="container mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-brown-700 tracking-tight lg:text-5xl">
          How ITC’s Business STRATEGY revolutionised Indian Agriculture? :
          Business case study
        </h1>
        <p className="text-muted-foreground">JULY 16, 2022</p>
      </div>
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="lg:w-2/3 lg:pr-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <article className="prose prose-gray max-w-none pl-6 pr-6 pt-2">
              <SubheadingDescription
                text="Every now and then we all keep hearing about the pathetic state of farmers in our country! and in spite of employing more than 50% of the workforce, the condition of the Indian agricultural sector has been so bad that every day 28 people are dependent on agriculture committed suicide! and every time we hear this news, 99% of us curse the government, feel sorry for the farmers and we just move on until another news comes in! and in this process of shallow activism, we never ever try to understand exactly is the problem of the farmers at the ground level? But you know what guys, the Indian Tabacco company has been working on a revolutionary business strategy and has improved the lives of 4 million farmers across 35,000 villages in India! and the best part is they have achieved this incredible feat of not giving charity by deploying a world-class business strategy that has even doubled the income of farmers! and with the execution of the farm bill, if you understand this strategy, you will not just be able to tap into million-dollar business opportunities in the Agri space, but also be able to understand how can Zomato, Grofers, Swiggy become profitable in the next 5 to 10 years! So the golden question is what exactly is this strategy? How will it help Zomato and Grofers become profitable and what are the lessons that we need to learn from this wonderful case study?

"
              />
              <br></br>
              <iframe
                width="740"
                height="380"
                src="https://www.youtube.com/embed/DzZCVqrtXYw"
                title="How ITC&#39;s Business STRATEGY revolutionised Indian Agriculture? : Business case study"
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
          <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
            <CategoryList />
            <TagList />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
