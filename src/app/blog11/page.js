import SubheadingDescription from "../blog1/subheading";
import ImageComponent from "../blog1/image";
import QuoteComponent from "../blog1/quote";
import React from "react";
import CommentForm from "../blog1/comment";
import CategoryList from "../blog1/category";
import TagList from "../blog1/taglist";
import Footer from "../blog1/footer";
import Background from "../../utils/background";

const References = () => {
  const referencesList = [
    "Indian Council of Agricultural Research (ICAR). (2021). Strategies for Sustainable Oil Palm Cultivation. ICAR Publications.",
    "National Mission on Oilseeds and Oil Palm (NMOOP). (2019). Annual Report: Enhancing Oil Palm Cultivation in India. Ministry of Agriculture & Farmers Welfare.",
    "Ministry of Agriculture & Farmers Welfare, Government of India. (2020). National Mission on Oilseeds and Oil Palm: Policy Guidelines. Government Printing Office. Retrieved from https://nmeo.dac.gov.in/",
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
          Sub-Mission on Agricultural Mechanization (SMAM)
        </h1>
        <p className="text-muted-foreground">December 20, 2023</p>
      </div>
      <div className="flex flex-col lg:flex-row w-full mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="lg:w-full lg:pr-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <article className="prose prose-gray max-w-none pl-6 pr-6 pt-2">
              <SubheadingDescription
                subheading="Introduction to SMAM"
                text="The SMAM scheme was launched with the primary objective of promoting agricultural mechanization across the country. Recognizing the significance of mechanized farming in boosting agricultural output, reducing manual labor, and improving overall efficiency, the scheme aims to facilitate the widespread adoption of modern agricultural equipment and machinery among farmers."
              />
              <ImageComponent
                src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/7606-Converted-1536x1536.jpg"
                alt="Sustainable agriculture"
              />
              <SubheadingDescription text="The SMAM scheme has both centrally sponsored and central sector scheme components. In the centrally sponsored scheme components, the Government of India funds 60% of the cost and the states’ share is 40% in all states except north-eastern and Himalayan states where the ratio is 90:10 wherein GOI funds 90%. In UTs, the central share is 100%."></SubheadingDescription>
              <SubheadingDescription
                subheading="Mission Strategy"
                text="To achieve the above objectives, the Mission will adopt the following strategies:"
              />
              <ul className="list-disc list-inside">
                <li>
                  Conduct performance testing for various farm machinery and
                  equipment at the four Farm Machinery Training and Testing
                  Institutes (FMTTIs), designated State Agricultural
                  Universities (SAUs), and ICAR institutions.
                </li>
                <li>
                  Promote farm mechanization among stakeholders by way of
                  on-field and off-field training and demonstrations.
                </li>
                <li>
                  Provide financial assistance to farmers for procurement of
                  farm machinery and implements.
                </li>
                <li>
                  Establish custom hiring centers of the location and
                  crop-specific farm machinery and implements.
                </li>
                <li>
                  Provide financial assistance to small and marginal farmers for
                  hiring machinery and implements in low-mechanized regions.
                </li>
              </ul>
              <SubheadingDescription subheading="Mission Components" text="" />
              <ul className="list-disc list-inside">
                <li>
                  Promotion and Strengthening of Agricultural Mechanization
                  through Training, Testing and Demonstration.
                </li>
                <li>
                  Demonstration, Training and Distribution of Post-Harvest
                  Technology and Management (PHTM).
                </li>
                <li>
                  Financial Assistance for Procurement of Agriculture Machinery
                  and Equipment.
                </li>
                <li>Establish Farm Machinery Banks for Custom Hiring.</li>
                <li>
                  Establish Hi-Tech, High Productive Equipment Hub for Custom
                  Hiring.
                </li>
                <li>Promotion of Farm Mechanization in Selected Villages.</li>
                <li>
                  Financial Assistance for Promotion of Mechanized
                  Operations/hectare Carried out Through Custom Hiring Centres.
                </li>
                <li>
                  Promotion of Farm Machinery and Equipment in the North-Eastern
                  Region.
                </li>
              </ul>
              <SubheadingDescription subheading="Objectives of SMAM" text="" />
              <ul className="list-disc list-inside">
                <li>
                  Increased Productivity: One of the primary goals of the SMAM
                  scheme is to increase agricultural productivity by introducing
                  and promoting the use of modern machinery. Mechanization helps
                  in timely farm operations, which directly contributes to
                  higher yields.
                </li>
                <li>
                  Reduced Drudgery: By reducing the dependence on manual
                  labor-intensive tasks, the scheme aims to alleviate the
                  physical strain on farmers. This is particularly crucial in an
                  agrarian society where the majority of labor comes from the
                  farming community.
                </li>
                <li>
                  Resource Optimization: Mechanization enables better
                  utilization of resources like water, seeds, fertilizers, and
                  energy. Modern machinery allows for precise application and
                  distribution, minimizing wastage and improving resource
                  efficiency.
                </li>
                <li>
                  Enhanced Quality: Mechanization often leads to more consistent
                  and higher-quality produce. From planting to harvesting, the
                  use of modern equipment ensures better control over processes,
                  resulting in improved quality standards.
                </li>
                <li>
                  Sustainable Agriculture: The scheme also focuses on promoting
                  sustainable agricultural practices by encouraging the use of
                  eco-friendly machinery and techniques that reduce
                  environmental impact.
                </li>
              </ul>
              <SubheadingDescription
                subheading="Components of SMAM"
                text="The SMAM scheme encompasses various components and initiatives to achieve its objectives:"
              />
              <ul className="list-disc list-inside">
                <li>
                  Financial Assistance: It provides financial support to farmers
                  for the purchase of machinery and equipment. Subsidies and
                  grants are often offered to make these technologies more
                  accessible and affordable.
                </li>
                <li>
                  Training and Awareness: Alongside providing machinery, the
                  scheme emphasizes educating farmers on the proper use and
                  maintenance of these tools. Training programs help in
                  maximizing the benefits of mechanization.
                </li>
                <li>
                  Technology Dissemination: The scheme facilitates the
                  dissemination of information about modern agricultural
                  technologies, best practices, and innovative techniques among
                  farmers through workshops, demonstrations, and extension
                  services.
                </li>
                <li>
                  Research and Development: Encouraging research and development
                  in agricultural machinery is another crucial aspect. The
                  scheme supports initiatives aimed at developing and promoting
                  advanced, efficient, and context-specific agricultural
                  equipment.
                </li>
              </ul>
              <SubheadingDescription
                subheading="Impact of SMAM"
                text="The SMAM scheme has shown promising results since its inception. It has contributed significantly to improving agricultural practices, enhancing farm productivity, and reducing post-harvest losses. The adoption of modern machinery has not only increased efficiency but has also transformed the socio-economic condition of many farming communities."
              />
              <SubheadingDescription
                subheading="Eligibility"
                text="All landholding farmers’ families, Self Help Groups (SHGs), User Groups, Cooperative Societies, Farmer Producer Organizations (FPOs) and Entrepreneurs. The farmer must be a native of India. Women farmers can also take advantage of this scheme. They will be given priority in this scheme. The benefit of this scheme will be given by the central government to those farmers who are financially weak. The benefit of this scheme will be given to those farmers who have not taken the benefit of subsidy from any other central scheme earlier."
              />
              <SubheadingDescription
                subheading="Details required from FPOs:"
                text=""
              />
              <ul className="list-disc list-inside">
                <li>PAN NO</li>
                <li>Registration number</li>
                <li>Registration year</li>
                <li>Registration place</li>
                <li>FPO Name</li>
                <li>FPO address</li>
                <li>Authorised person details</li>
                <li>Bank details</li>
              </ul>
              <a href="https://agrimachinery.nic.in/Index/Index">
                <SubheadingDescription subheading="Application form: https://agrimachinery.nic.in/Index/Index"></SubheadingDescription>
              </a>
              <SubheadingDescription
                subheading="Conclusion"
                text="In essence, the SMAM scheme stands as a cornerstone in India’s efforts towards agricultural transformation. By promoting mechanization and technological advancements in farming practices, it not only boosts productivity but also aims to uplift the lives of farmers, making agriculture a more sustainable and profitable venture. This scheme continues to play a vital role in shaping the future of agriculture in India."
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
