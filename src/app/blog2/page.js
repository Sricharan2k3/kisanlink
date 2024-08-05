import SubheadingDescription from "./subheading";
import ImageComponent from "./image";
import QuoteComponent from "./quote";
import React from "react";
import CommentForm from "./comment";
import CategoryList from "./category";
import TagList from "./taglist";
import Footer from "./footer";
import Background from "../../utils/background";

const References = () => {
  const referencesList = [
    "Brown, L. et al. (2022). “AI Applications in Sustainable Agriculture: A Case Study of Emerging Start-ups.” Sustainable Farming Journal, 8(3), 211-225.",
    "Chen, K. & Patel, R. (2021). “Unlocking Financial Inclusivity for Small-Scale Farmers Through AI-Based Credit Scoring.” Agricultural Finance Review, 78(4), 332-345.",
    "Smith, J. (2023). “The Impact of Artificial Intelligence on Agriculture: A Comprehensive Review.” Journal of Agricultural Technology, 15(2), 87-104.",
  ];

  return (
    <div className="mt-4">
      <h2 className="text-xl text-center font-bold mb-4">References</h2>
      <ul className="space-y-2">
        {referencesList.map((ref, index) => (
          <li key={index} className="text-md">
            {ref}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Component() {
  return (
    <>
      <Background title={"Blogs"} />
      <div className="container mt-16 w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-brown-700 tracking-tight lg:text-5xl">
          Transforming Agriculture with Artificial Intelligence: Exploring
          Innovative Start-ups
        </h1>
        <p className="text-muted-foreground">APRIL 23, 2024</p>
      </div>
      <div className="flex flex-col lg:flex-row w-full mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="lg:w-full lg:pr-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <article className="prose prose-gray max-w-none pl-6 pr-6 pt-2">
              <SubheadingDescription text="In recent years, the agricultural sector has witnessed a profound transformation fuelled by the integration of artificial intelligence (AI). This marriage of cutting-edge technology with traditional farming practices has ushered in a new era of efficiency, sustainability, and profitability for farmers worldwide." />

              <ImageComponent
                src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/BP-AI-in-Agriculture-The-Future-of-Farming_body-im-3.jpg"
                alt="Farmer Producer Organizations"
              />
              <SubheadingDescription
                subheading="Empowering Farmers with Data-Driven Insights"
                text="Several start-ups are at the forefront of providing AI-powered solutions to empower farmers with data-driven insights. These solutions aggregate vast amounts of farm data, including genetics, soil fertility, climate conditions, harvest history, and yield projections, to offer customized recommendations. By leveraging AI algorithms, farmers can make informed decisions regarding crop selection, planting schedules, and resource allocation, ultimately maximizing yields and optimizing resource usage."
              />
              <SubheadingDescription
                subheading="Optimizing Crop Selection and Health"
                text="Furthermore, AI-based software solutions are assisting farmers in optimizing crop selection and health. These solutions take into account various factors such as soil type, climate, and market demand to recommend the most suitable crops for specific conditions. Additionally, AI-driven disease diagnostics utilize computer vision technology to analyse crop health, enabling early detection and mitigation of diseases, thereby safeguarding yields and ensuring crop viability."
              />
              <SubheadingDescription
                subheading="Enhancing Efficiency and Sustainability"
                text="In addition to crop management, AI-powered tools are enhancing various aspects of agricultural operations. Intelligent spraying systems optimize pesticide usage, while fertilizer recommendation tools minimize waste and environmental impact. These solutions not only increase efficiency but also promote sustainability, making farming practices more environmentally friendly and economically viable."
              />
              <SubheadingDescription
                subheading="Bridging Financial Gaps and Promoting Inclusivity"
                text="AI is also extending its reach to the financial aspects of farming, addressing financial inclusivity issues faced by small-scale farmers. Alternative credit scoring powered by AI enables farmers overlooked by traditional banks to access financial resources, empowering them to invest in their operations and improve productivity."
              />
              <SubheadingDescription
                subheading="The Future of AI in Agriculture"
                text="As AI continues to evolve, its potential in agriculture remains vast. Predictive analytics for weather forecasting and pricing trends, as well as automated anomaly detection in plants and livestock, are just a few examples of how AI can revolutionize every facet of farming. With ongoing advancements in technology and increased adoption of AI-driven solutions, the future of agriculture looks promising, with improved efficiency, sustainability, and prosperity for farmers worldwide."
              />
              <SubheadingDescription
                subheading="Our Vision"
                text="In this transformative landscape, Kisanlink is dedicated to providing AI-enabled technologies to all its farmers. With a vision to empower farmers with cutting-edge tools and insights, Kisanlink aims to democratize access to AI in agriculture, ensuring that farmers of all scales and backgrounds can benefit from the latest advancements in technology."
              />
              <SubheadingDescription
                subheading="Conclusion"
                text="In conclusion, the integration of artificial intelligence into agriculture represents a paradigm shift, empowering farmers with data-driven insights and fostering sustainable practices. Innovative start-ups, along with initiatives like Kisanlink, are driving this transformation, harnessing the power of AI to reshape the agricultural landscape and pave the way for a more prosperous and sustainable future."
              />
              <References />
            </article>
            <div className="p-6">
              <CommentForm />
            </div>
          </div>
        </div>
        {/* <div className="lg:w-1/3 mt-8 lg:mt-0">
          <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
            <CategoryList />
            <TagList />
            <Footer />
          </div>
        </div> */}
      </div>
    </>
  );
}
