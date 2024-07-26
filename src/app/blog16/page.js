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
    "Chand, R. & Singh, J. (July, 2023). “From Green Revolution to Amritkaal.” NITI Aayog, Government of India.",
    "Das, P. (2023). “More Funds Required for Agriculture Mechanization, Says Standing Committee.”",
    "Prasad, S., & Reddy, P. R. (2018). “Farm Mechanization and Its Impact on Indian Agriculture.” International Journal of Science, Environment, and Technology.",
    "Satish, S. (2023). “Mechanization of Indian Agriculture.”",
    "Singh, M., & Singh, S. P. (2020). “Assessment of Sustainable Agriculture through Mechanization in India.” International Journal of Agriculture Sciences.",
    "Soni, S. and Subrahmanya, M.H.B. (2020), “Growth and Structural Change in the Indian Economy: An Analysis of Pattern, Determinants, and Outcomes”, Economic and Political Weekly.",
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
      <div className="container mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-brown-700 tracking-tight lg:text-5xl">
          Revolutionizing Agriculture: The Power of Farm Mechanization!{" "}
        </h1>
        <p className="text-muted-foreground">OCTOBER 13, 2023</p>
      </div>
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="lg:w-2/3 lg:pr-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <article className="prose prose-gray max-w-none pl-6 pr-6 pt-2">
              <SubheadingDescription
                subheading="Introduction"
                text="Agriculture has been the backbone of human civilization for thousands of years. However, it has come a long way from the days of manual labour and rudimentary tools. The introduction of farm mechanization has brought about a revolution in agriculture, transforming it into a highly efficient and productive industry."
              />

              <SubheadingDescription
                subheading="What is Farm Mechanization?"
                text="Farm mechanization refers to the use of machinery and technology to perform agricultural tasks that were previously done by hand. This includes activities such as planting, harvesting, ploughing, irrigation, and even livestock management. The primary goal of farm mechanization is to increase agricultural productivity, reduce labour intensity, and enhance overall efficiency."
              />

              <QuoteComponent quote="Currently, the overall agriculture mechanization level of India is 47%, which is lower than that of other developing countries such as China (59.5%) and Brazil (75%)." />

              <SubheadingDescription
                subheading="Key Components of Farm Mechanization"
                text="Farm mechanization encompasses a wide range of equipment and technologies. Here are some of the key components:"
              />
              <ImageComponent src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/new-blog1-2-768x512.jpg"></ImageComponent>

              <ul className="list-disc list-inside">
                <li>
                  <strong>Tractors:</strong> Versatile machines used for
                  ploughing, planting, and other tasks, available in various
                  sizes and power levels.
                </li>
                <li>
                  <strong>Harvesting Machinery:</strong> Includes combine
                  harvesters and fruit-picking machines, which reduce labour and
                  time.
                </li>
                <li>
                  <strong>Irrigation Systems:</strong> Efficient water
                  management systems like drip irrigation and sprinklers
                  optimize water use.
                </li>
                <li>
                  <strong>Planting and Seeding Equipment:</strong> Tools like
                  seed drills and transplanters ensure precise seed placement.
                </li>
                <li>
                  <strong>Livestock Equipment:</strong> Automated systems for
                  feeding, milking, and environmental control improve efficiency
                  in livestock management.
                </li>
              </ul>

              <SubheadingDescription
                subheading="Benefits of Farm Mechanization"
                text="The advantages of farm mechanization are manifold, including:"
              />
              <ul className="list-disc list-inside">
                <li>Increased productivity and efficiency</li>
                <li>Reduced labour requirements</li>
                <li>Improved precision in farming activities</li>
                <li>Long-term cost savings</li>
                <li>Promotion of sustainable agriculture practices</li>
              </ul>

              <SubheadingDescription
                subheading="Challenges and Considerations"
                text="Despite its many advantages, farm mechanization also poses certain challenges and considerations:"
              />
              <ul>
                <li>
                  <strong>High Initial Costs:</strong> Acquiring and maintaining
                  modern farming equipment can be expensive, particularly for
                  small-scale farmers.
                </li>
                <li>
                  <strong>Technical Expertise:</strong> Operating and
                  maintaining machinery requires technical knowledge and skills.
                  Training is essential to ensure safe and efficient use.
                </li>
              </ul>
              <p>
                To boost farm mechanization in the country, a special dedicated
                Centrally Sponsored scheme ‘Sub Mission on Agricultural
                Mechanization (SMAM)’ was introduced by the Government of India
                in 2014-15.
              </p>
              <p>
                Under this scheme, financial assistance at 40% to 50% of the
                cost of machines depending on the categories of farmers, is
                provided for the purchase of agricultural machines. Financial
                assistance at 40% of the project cost is also provided to rural
                youth & farmers as an entrepreneur, Cooperative Societies of
                Farmers, Registered Farmers Societies, Farmer Producer
                Organizations (FPOs), and Panchayats for the establishment of
                Custom Hiring Centres (CHCs), and Hi-tech hubs of high-value
                agricultural machine (Satish, 2023).
              </p>

              <SubheadingDescription
                subheading="Key Statistics"
                text="To gain insight into the current status of farm mechanization in India, let’s look at some key statistics:"
              />
              <QuoteComponent quote="According to the World Bank estimates, half of the Indian population will be urban by the year 2050. It is estimated that the percentage of agricultural workers in the total workforce will drop to 25.7% by 2050 from 58.2% in 2001" />
              <p>
                Thus, there is a need to enhance the level of farm mechanization
                in the country. Due to the intensive involvement of labour in
                different farm operations, the cost of production of many crops
                is quite high (Das, 2023).
              </p>
              <p>
                Withdrawal of agricultural labour affects the farm economy
                either by creating a physical scarcity of labour or through the
                rise in farm wages (Soni & Subrahamanya, 2020). Income
                disparities among agricultural workers in India have undergone a
                significant transformation. In 1950-51, agricultural workers
                earned only half of what they did in 1970-71. The income gap
                continued to widen over the next four decades. However, since
                2010-11, there has been a reversal in this trend, with
                agricultural workers’ income increasing to 29% of their previous
                earnings, primarily due to higher agricultural prices (Chand &
                Singh, 2023).
              </p>
              <p>
                Given the increasing wage demands of the present era, the
                integration of farm mechanization has become a pressing
                necessity for farmers. Mechanization not only enhances
                productivity and diminishes labour-intensive activities, but
                also contributes to elevated yields and income.
              </p>
              <p>
                <strong>
                  At Kisanlink, we are actively engaged in the mission to make
                  farm mechanization a reality for Indian farmers. With a pilot
                  project already underway in Telangana, Kisanlink is at the
                  forefront of bringing modern agricultural machinery and
                  technologies to the hands of farmers, further contributing to
                  the mechanization drive in the country. This initiative not
                  only aims to enhance farm productivity, but also empower small
                  and marginal farmers with the tools they need to thrive in the
                  ever-evolving agricultural landscape.
                </strong>
              </p>

              <SubheadingDescription
                subheading="Conclusion"
                text="Farm mechanization has transformed agriculture from a labour-intensive endeavour into a highly efficient and productive industry. Farmers can increase yields, reduce labour costs, and practice more sustainable agriculture by harnessing the power of machines and technology. However, it is crucial to strike a balance between mechanization and environmental and social considerations to ensure a prosperous and sustainable future for agriculture. As technology continues to advance, the future of farm mechanization holds even greater promise for feeding the growing global population."
              />

              <References />
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
