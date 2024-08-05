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
    "Government of India. Ministry of Agriculture & Farmers Welfare. (2022). Agricultural Statistics at a Glance 2021. [Online]. Available: https://agriwelfare.gov.in/en/Agricultural_Statistics_at_a_Glance.",
    "Kumar, A., & Dagar, J. C. (2021). Adoption of modern irrigation technologies and its impact on agricultural productivity: A case study of Punjab, India. Agricultural Water Management, 245, 106543. [DOI: 10.1016/j.agwat.2020.106543]",
    "Mishra, A. K., & Dhar, A. (2020). Climate change and agriculture in India: Impact and adaptation. Environmental Development, 33, 100510. [DOI: 10.1016/j.envdev.2019.100510]",
    "National Statistical Office (NSO), Government of India. (2023). Advance Estimates of National Income, 2023-24. [Online]. Available: https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2010223#:~:text=Nominal%20GDP%20or%20GDP%20at,growth%20rate%20of%209.1%20percent..",
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
          The Hidden Cost of India's Growing GDP: Agricultural Sector Struggles
          amidst Economic Growth
        </h1>
        <p className="text-muted-foreground">APRIL 16, 2024</p>
      </div>
      <div className="flex flex-col lg:flex-row w-full mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="lg:w-full lg:pr-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <article className="prose prose-gray max-w-none pl-6 pr-6 pt-2">
              <ImageComponent
                src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/BLOG-GDP-1.jpg"
                alt="Farmer Producer Organizations"
              />
              <SubheadingDescription
                subheading="Introduction"
                text="The recent release of the National Statistical Office’s (NSO) advance estimates for the 2023-24 fiscal year brought with it both good news and a stark reality check. While the overall Gross Domestic Product (GDP) is expected to record a commendable growth of 7.3 percent, this growth hides a concerning trend within the country’s largest employer—the agriculture sector."
              />
              <SubheadingDescription
                subheading="Analysis"
                text="According to the NSO, the agriculture sector, including livestock, forestry, and fishing, is estimated to grow at a mere 1.8 percent in 2023-24, marking a significant decline from the previous year’s 4 percent growth. This decline is not just a blip on the radar; it reflects a broader trend of stagnation and struggles within India’s agricultural landscape."
              />
              <SubheadingDescription
                subheading="Key Challenges Facing India’s Agricultural Sector"
                text="For years, agriculture has been the backbone of the Indian economy, employing over 45 percent of the country’s workforce. However, the sector’s growth has been hampered by a variety of factors, including erratic monsoons, crop losses due to extreme weather events, and the ongoing El Nino effect. These challenges have led to a decline in production, particularly in staple crops like rice, which has a cascading effect on the livelihoods of millions of farmers across the country."
              />
              <SubheadingDescription text="Furthermore, the sector grapples with issues such as inadequate access to modern agricultural technologies, inefficient irrigation systems, and fragmented landholdings, which hinder productivity and profitability. Additionally, the lack of proper storage facilities and post-harvest management infrastructure results in substantial post-harvest losses, exacerbating the woes of farmers." />
              <SubheadingDescription
                subheading="Impact"
                text="The repercussions of this low agricultural growth extend far beyond the fields. As individual consumption accounts for a significant portion of the country’s GDP, the struggles faced by farmers directly impact the overall economy."
              />
              <QuoteComponent quote="With stagnating incomes and meagre expenditure growth, many farmers are pushed into debt or the poverty trap, further exacerbating the economic challenges faced by the nation." />
              <SubheadingDescription text="Moreover, the NSO’s estimates highlight the changing climate’s impact on the agriculture sector and the continued losses borne by the majority of Indians who depend on it. This not only poses a threat to food security but also undermines the country’s economic stability." />
              <SubheadingDescription
                subheading="Solutions for Sustainable Growth"
                text="To address these challenges and foster sustainable growth in the agricultural sector, a multi-faceted approach is necessary. Firstly, there is a critical need for investment in research and development to develop drought-resistant crop varieties and climate-smart agricultural practices. This will help farmers adapt to changing environmental conditions and mitigate the impacts of climate change on crop yields."
              />
              <SubheadingDescription text="Additionally, improving access to credit and financial services for smallholder farmers is essential to enable them to invest in modern agricultural technologies and improve productivity. Strengthening agricultural extension services to provide farmers with timely information and training on best practices is also crucial." />
              <SubheadingDescription text="Furthermore, enhancing infrastructure such as roads, storage facilities, and market linkages will help reduce post-harvest losses and improve farmers’ access to markets, ensuring better prices for their produce." />
              <SubheadingDescription
                subheading="Conclusion"
                text="As we await the revised estimates in the coming weeks, it is essential to recognize the urgent need for comprehensive measures to address the challenges facing the agriculture sector. This includes investment in sustainable farming practices, improved infrastructure, access to credit, and support for smallholder farmers."
              />
              <SubheadingDescription text="Ultimately, the health of the agricultural sector is not just a matter of concern for farmers but for the entire nation. Without addressing the underlying issues and supporting the backbone of the economy, India’s path to sustainable growth and development will remain uncertain. It is time for policymakers and stakeholders to prioritize the needs of the agriculture sector and work towards building a more resilient and inclusive economy for all." />
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
