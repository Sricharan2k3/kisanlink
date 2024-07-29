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
    "Department of Animal Husbandry & Dairying. (n.d.). Revised Guidelines [PDF]. Retrieved from https://dahd.nic.in/sites/default/filess/RevisedGuidelinesRGM.pdf",
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
          Decoding Indian Agritech 3.0: Is It Time To Focus On GM Instead Of
          GMV?{" "}
        </h1>
        <p className="text-muted-foreground">July 18, 2022</p>
      </div>
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="lg:w-2/3 lg:pr-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <article className="prose prose-gray max-w-none pl-6 pr-6 pt-2">
              <SubheadingDescription text="Indian agritech took its root about a decade back. The first five to seven years saw first-mover startups such as CropIn, AgroStar, BigHaat, S4S Technologies, Innoterra, DeHaat, Promethean, and Unnati trying to integrate technology into various facets of the Indian agricultural supply chain. It was a phase of evangelisation, experimentation and explorations, with entrepreneurs figuring out a business model centred around technology." />
              <SubheadingDescription text="The year 2017 was an inflexion point in the Indian agritech space. It was largely driven by the entry of an army of entrepreneurs building tech-enabled models. They aimed to solve for farmers’ access to market, credit, inputs, data and advisory. Several startups such as Samunnati, SatSure, Ninjacart, WayCool, FarMart, and Jai Kisan, among others demonstrated the adoption of innovative products and services. This adoption was done across the value chain from farmers to traders to FPOs (Farmer Producer Organisations). This phase also saw banks, NBFCs and corporates partner with some of the agritechs." />
              <SubheadingDescription subheading="Agritech’s Pivot To Agri-Fintech, Consolidation & More" />
              <SubheadingDescription text="Phase two featured agritech startups pivoting to agri-fintech models. This move was supported by increasing participation from banks and NBFCs to build digital models of lending. As a result, agri-fintechs like Dvara E-Registry and Grey Matter Technologies emerged with a focus on farmer financing. Additionally, there was an emergence of tech models in ancillary value chains. The fisheries space saw startups such as Numer8 and FreshR sprout up. ReshaMandi is a supply chain management platform that focused on the silk industry. Startups such as Milklane, Mooofarm and Dvara E-Dairy sprang up in the dairy space. Other examples include poultry (Eggoz), storage and logistics (Inficold, Agrigator, Tusker Transport), and international trade (Maalexi, OriginKonnect) among others." />
              <p>
                The space also startups focused on specialised value chains such
                as staples (SuperZop), spices (Parvata Foods, Krishikan, Krishi
                Sahyog), vegetables and fruits (Agrowave), onions (GFresh
                Agrotech), bananas (Greenikk, Oxecart) among others.
              </p>

              <p>
                Further, there was also a bit of consolidation with the likes of
                Kamatan Farm Tech, FarmGuide, SV Agri, Helicrofter, InI Farms,
                and CropTrails getting acquired by other startups. Indian
                startups started to go international, setting up offices in
                Europe, the Middle East, and South-East Asia. Some entered
                global markets through acquisition. For instance, SatSure’s
                acquisition of Old City Innovations ​​helped expand its
                footprints in the US market.
              </p>

              <p>
                The continued government support and growing investor interest
                during this phase contributed to making the Indian agritech
                mainstream. The scale demonstrated by startups proved that
                agritech is an integral part of the agriculture supply chain in
                times to come. Accelerated digital adoption among farmers during
                the pandemic resulted in many agritechs demonstrating a high GMV
                (gross merchandise value) growth. This translated to a growth in
                the range of 2x to 4x year-on-year (YoY) between 2019 and 2022.
                This growth was fuelled by venture capital investment of over $2
                Bn in this period.{" "}
              </p>

              <p>
                Another noteworthy trend of this phase was the development of
                captive agritech platforms by agri-corporates and SMEs. A few
                examples include the development of nurture.farm by UPL, MAARS
                by ITC, SAF GREEN app by Suri AgroFresh, Xarvio by BASF, and
                Farmer Connect app by Corteva, among others. The key driver
                behind building these digital platforms is to enable direct
                farmer connect to drive scale, efficiency and service model in
                their businesses.{" "}
              </p>
              <SubheadingDescription subheading="Indian Agritech Phase 3.0: What Lies Ahead?" />
              <SubheadingDescription text="What lies ahead for startups in the post-pandemic era? As we enter the third phase, estimated to last for the next 5 to 7 years, I am confident that the number of agritech startups will continue to grow. My projections put the number at over 10K in the next few years. This figure is supported by the colossal size of opportunity with proof of concepts in place. However, I also see a few fundamental shifts in the way the space will behave and evolve in this phase, as depicted in the fifteen trends below:" />
              <ul class="list-disc list-inside">
                <li>
                  Farmer adoption of agritech solutions will inch up from less
                  than 10% to over 50%. Increasing digital adoption and access
                  to curated content and personalised advisory will help farmers
                  discover quality inputs, get access to more buyers and yield
                  higher prices for their produce.
                </li>
                <li>
                  Digital tools combined with video, and vernacular voice,
                  farmer-friendly UI (user interface), UX (user experience) and
                  social media integration can drive adoption faster.
                </li>
                <li>
                  The underpenetrated segments in Indian agritech such as agri
                  biotech, deeptech, processing tech, infra-tech, and drone tech
                  will soon gain momentum.
                </li>
                <li>
                  Agritechs with phygital models will emerge as channel partners
                  for banks. This would enable easy credit access to farmers
                  through services such as onboarding, KYC, credit scoring, risk
                  assessment, mitigation and loan recovery.
                </li>
                <li>
                  Building a digital wrapper for credit facilitation in
                  partnership with banks can fast track the development of
                  agri-fintech tools.
                </li>
                <li>
                  Parametric insurance products, especially the ones linked to
                  weather, where the data is standardised and usually
                  non-disputable, will find more acceptance.
                </li>
                <li>
                  Ancillary industries including dairy, fishery, aqua, poultry,
                  beekeeping, fibre, and sericulture will see many new startups
                  sprouting up.
                </li>
                <li>
                  In order to leverage their last-mile connect, agritech,
                  fintech and rural tech sectors might see a fusion and blurring
                  of boundaries.
                </li>
                <li>
                  Drone applications in agriculture are likely to gain even more
                  momentum in the coming few years.
                </li>
                <li>
                  Drone surveillance and data collection could be another
                  application for the purpose of pest detection, insurance
                  settlement, and recording mutation in land boundaries, among
                  others.
                </li>
                <li>
                  Farmer-driven brands will soon see an uptick. This surge will
                  be backed by the aggregation of farmers, FPO movement and
                  availability of digital tools for quality assaying and
                  traceability.
                </li>
                <li>
                  The proprietariness of the captive data stacks created by
                  hundreds of agritech startups will get diluted with the
                  availability of publicly available, curated and authenticated
                  datasets.
                </li>
                <li>
                  Government support in the form of incubation, facilitation and
                  digitisation (through Agristack and other digital tools) at
                  the federal and state levels will continue to drive more
                  innovations.
                </li>
                <li>
                  Investor interest will continue to grow with some
                  demonstration of exits.
                </li>
                <li>
                  Climate tech will become integral to agritech to solve
                  pressing challenges around water use, soil nutrition and
                  volatility in weather patterns.
                </li>
              </ul>
              <SubheadingDescription
                subheading="Time To Move From GMV To A GM Mindset"
                text="This trend demands a separate section as it could bring about a defining moment in Indian agritech, as we enter phase three. This trend is as applicable to any other sector as much as to agritech. "
              />
              <References />
            </article>
            <div className="p-6">
              <CommentForm />
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
            <CategoryList />
            <TagList />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
