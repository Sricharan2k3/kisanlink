import { HoverEffect } from "../components/card-hover-effect"

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-6xl lg:-mt-12 mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [   {
  title: "Agricultural Drones",
  description:
    " Used for Spraying Chemicals, Monitoring Crop Health, Seeding, and Fertilizer Applications.",
},
{
  title: "IoT Devices",
  description:
    "Used as Remote Pump Controllers, Irrigation Automation, Weather Management for Greenhouse and Animal Shelters; and Farm Automation.",
},
{
  title: "Solar Products",
  description:
    "Solar insect traps, solar pumps, solar fences, solar dryers, solar-powered equipment, etc.",
},
{
  title: "Battery Powered Products",
  description:
    " Robots, electric sprayers, weeders, brush cutters, etc ",
},
{
  title: "Agriculture Equipment",
  description:
    " Seed sowing machines, hand paddy transplanter, bike tillers etc",
},
{
  title: "Other Products",
  description:
    "Irrigation pars, Animal Feed, Tarpaulins, Agri Textiles, Organic Products etc.",
},];
