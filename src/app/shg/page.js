import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../components/ui/accordion";
import Heading from "../components/heading";
import Background from "../../utils/background";

const SHGMicroEnterprisesPage = () => {
  return (
    <div className="  ">
      <Background title={"SHGs"} />
      <div>
        <Heading value={"Self Help Groups (SHGs)"}></Heading>
        <p className="pl-12 pr-12">
          Self-help groups (SHGs) are small, voluntary associations of people,
          typically from similar socio-economic backgrounds, who come together
          to save money and provide loans to one another. SHGs are crucial in
          empowering rural communities, particularly women, by promoting
          financial inclusion, enhancing livelihoods, and fostering
          entrepreneurship.{" "}
        </p>
      </div>

      <main className=" pl-12 pr-12 mx-auto">
        <section className="mb-4">
          <Card>
            <CardHeader>
              <Heading value={"SHGs and Micro-Enterprises"}></Heading>
            </CardHeader>
            <CardContent>
              <p className="-mt-6 mb-4">
                SHGs are pivotal in establishing micro-enterprises, particularly
                in rural areas where traditional employment opportunities may be
                limited. By forming SHGs, members can pool their resources,
                share knowledge, and access financial support, essential for
                starting and sustaining small businesses.
              </p>
              <ul className="list-disc pl-6">
                <li>
                  <strong>Access to Capital:</strong> SHGs provide members with
                  a collective platform to save and borrow money, enabling them
                  to invest in micro-enterprises such as food processing,
                  handicrafts, and agricultural ventures.
                </li>
                <li>
                  <strong>Skill Development:</strong> Through training programs
                  and workshops, SHGs enhance the skills of their members,
                  equipping them with the necessary knowledge to operate and
                  manage micro-enterprises effectively.
                </li>
                <li>
                  <strong>Collective Marketing:</strong> SHGs can collaborate to
                  market their products collectively, increasing their
                  bargaining power and ensuring better prices for their goods.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-6 -mt-8">
          <Card>
            <CardHeader>
              <Heading
                value={"Solar Dryers as a Sustainable Solution"}
              ></Heading>
            </CardHeader>
            <CardContent>
              <p className="mb-4 -mt-6">
                The integration of solar dryers into SHG initiatives presents a
                unique opportunity to enhance income generation and
                sustainability:
              </p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Income Generation</AccordionTrigger>
                  <AccordionContent>
                    SHGs involved in agriculture and food processing can utilize
                    solar dryers to efficiently dry fruits, vegetables, and
                    other agricultural produce. This not only enhances their
                    production capacity but also allows them to sell dried
                    products at higher prices, thereby increasing their income.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Reduction in Post-Harvest Losses
                  </AccordionTrigger>
                  <AccordionContent>
                    Solar dryers help in preserving perishable food items,
                    significantly reducing post-harvest losses. This ensures a
                    more stable income for SHGs by minimizing wastage and
                    maximizing the value of their produce.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Environmental Benefits</AccordionTrigger>
                  <AccordionContent>
                    Solar dryers utilize renewable energy, reducing reliance on
                    fossil fuels and minimizing carbon emissions. This aligns
                    with sustainable development goals and contributes to
                    environmental conservation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Skill Enhancement</AccordionTrigger>
                  <AccordionContent>
                    Operating solar dryers requires technical knowledge, which
                    can be imparted to SHG members through training programs.
                    This skill acquisition can open up further employment
                    opportunities and entrepreneurial ventures for them.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardHeader>
              <Heading value={"Challenges and Support for SHGs"}></Heading>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                While SHGs have the potential to drive economic empowerment,
                they also face challenges:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Lack of Resources:</strong> Many SHGs struggle with
                  inadequate resources and capital to invest in technology and
                  infrastructure.
                </li>
                <li>
                  <strong>Dependence on External Support:</strong> SHGs often
                  rely on NGOs and government programs for training and
                  financial assistance. The withdrawal of support can jeopardize
                  their sustainability.
                </li>
              </ul>
              <p className="mb-4">
                To address these challenges, Kisanlink provides SHGs with:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  <strong>Training and Capacity Building:</strong> Workshops and
                  training programs focused on solar dryer technology, marketing
                  strategies, and financial management can empower SHG members
                  to operate their micro-enterprises successfully.
                </li>
                <li>
                  <strong>Financial Support:</strong> Government initiatives and
                  subsidies can help SHGs acquire solar dryers and other
                  necessary equipment, making the transition to sustainable
                  practices more feasible.
                </li>
                <li>
                  <strong>Networking Opportunities:</strong> Facilitating
                  connections between SHGs and market access platforms can
                  enhance their visibility and improve sales opportunities for
                  their products.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default SHGMicroEnterprisesPage;
