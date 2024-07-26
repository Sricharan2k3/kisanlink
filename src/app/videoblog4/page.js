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
    "Gustafson, L. (2019). Regenerative Farming Goes Beyond Sustainability. The Mindful Fork.",
    "Regeneration International. (n.d.). Regeneration International: Building a global regeneration movement.",
    "Rodale Institute. (n.d.). About us.",
    "Savory Institute. (n.d.). Savory Global Network.",
    "The Land Institute. (n.d.). Home page.",
    "The Carbon Underground. (n.d.). The Carbon Underground: Taking action to reverse climate change.",
    "Yadav, A. (2022). Restore by use: Regenerative agriculture can help save water, here is how. Down to Earth.",
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
          Regenerative Agriculture: A Sustainable Way to Feed the World
        </h1>
        <p className="text-muted-foreground">JULY 16, 2022</p>
      </div>
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="lg:w-2/3 lg:pr-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <article className="prose prose-gray max-w-none pl-6 pr-6 pt-2">
              <SubheadingDescription text="Regenerative agriculture is a progressive form of farming that minimizes the utilization of resources like water and other inputs, while also preventing the deterioration of land and deforestation. It aims to safeguard and enhance soil quality, biodiversity, climate resilience, and water resources while simultaneously enhancing the productivity and profitability of farming." />
              <ImageComponent src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/2023/03/REA2-768x768.jpg"></ImageComponent>
              <SubheadingDescription
                subheading="The Need of the Hour"
                text="Our future survival is threatened by the depletion of the world’s fertile soil and biodiversity, as well as the disappearance of indigenous seeds and knowledge. According to soil experts, if soil destruction continues at its current pace, the quality of our food supply will deteriorate, leading to reduced nutrition and the loss of important trace minerals."
              />
              <QuoteComponent text="If the degradation of soil persists, the UN has forecasted that the world will be left with less than 60 years of high-quality topsoil." />
              <SubheadingDescription
                subheading="Difference between Organic Farming & Regenerative Farming"
                text="Certified regenerative farms, similar to 100% organic farms, refrain from using synthetic chemicals or pesticides and provide their livestock with organic feed in humane conditions without the use of antibiotics or hormones."
              />
              <QuoteComponent text="Regenerative farming surpasses sustainability" />
              <SubheadingDescription
                subheading="Key Practices in Regenerative Agriculture"
                text=""
              />
              <ImageComponent src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/2023/03/REGENERATIVE-AGRICULTURE-INFO-1536x719.jpg"></ImageComponent>
              <ul className="list-disc list-inside">
                <li>
                  Cover cropping: Planting cover crops helps to protect and
                  enrich the soil, reducing erosion and improving soil
                  structure.
                </li>
                <li>
                  Crop rotation: By rotating crops, farmers can help to prevent
                  the build-up of pests and diseases, while also promoting soil
                  health and biodiversity.
                </li>
                <li>
                  No-till farming: No-till farming helps to preserve soil
                  structure and reduce erosion.
                </li>
                <li>
                  Intercropping: Planting different crops together can help to
                  promote biodiversity, while also providing mutual benefits for
                  the crops.
                </li>
                <li>
                  Agroforestry: Integrating trees into farming systems promotes
                  biodiversity and reduces soil erosion.
                </li>
                <li>
                  Livestock integration: Grazing animals improve soil health and
                  promote biodiversity.
                </li>
                <li>
                  Aquaculture: Aquaculture can help restore degraded ecosystems
                  and improve water quality.
                </li>
                <li>
                  Biochar: Biochar reduces the need for synthetic fertilizers
                  and pesticides, enhancing soil's resistance to pests and
                  diseases.
                </li>
              </ul>
              <SubheadingDescription
                subheading="Benefits of Regenerative Agriculture"
                text=""
              />
              <ul className="list-disc list-inside">
                <li>
                  Improves soil health by promoting beneficial microorganisms
                  and building soil organic matter.
                </li>
                <li>
                  Increases biodiversity by encouraging a diverse range of crops
                  and beneficial organisms.
                </li>
                <li>
                  Reduces greenhouse gas emissions by capturing carbon in the
                  soil.
                </li>
                <li>
                  Improves water quality by reducing soil erosion and promoting
                  beneficial organisms.
                </li>
                <li>
                  Increases resilience to severe weather events and other
                  challenges.
                </li>
              </ul>
              <SubheadingDescription
                subheading="Practical Implications: Real-time Data"
                text=""
              />
              <p>
                On-the-ground analyses have provided evidence supporting the
                positive relationship between regenerative agriculture, soil
                health, and water conservation.
              </p>
              <p>
                Kheti Virasat Mission, a civil society organization in Punjab,
                conducted a survey of over 350 organic farmers in 2021-22, with
                93.6% reporting an increase in their land’s rainwater-holding
                capacity and a 30-60% decrease in irrigation requirements.
              </p>
              <p>
                In Andhra Pradesh, the Rythu Sadhikara Samstha, a non-profit
                organization, conducted two studies in 2020 comparing the water
                and energy consumption of zero-budget natural farming with
                chemical farming. The studies showed a decrease in irrigation
                frequency and energy consumption with natural farming.
              </p>
              <p>
                The Samaj Pragati Sahyog, a grassroots organization in Madhya
                Pradesh promoting natural pest control methods, conducted field
                trials with 1,000 farmers on over 2,000 hectares of land in
                2016-18 to measure water conservation. Its results, published in
                its 2018-19 annual report, showed that sustainable agricultural
                practices saved almost 15 billion liters of water, with
                replacing water-intensive crops alone saving 5.53 billion
                liters.
              </p>
              <br></br>
              <iframe
                width="740"
                height="380"
                src="https://www.youtube.com/embed/fSEtiixgRJI"
                title="What is Regenerative Agriculture?"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
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
