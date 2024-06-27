import { HoverEffect } from "../components/card-hover-effect"

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [{
  
    title: "Agricultural Drones",
    description:
      "These are used for various agricultural applications such as spraying pesticides and monitoring crop health, which enhances efficiency and reduces manual labor.",
  },
  {
    title: "IoT Devices",
    description:
      "These include motor pump starters and devices for poultry and dairy farms, which help in automating and optimizing farm operations.",
  },
  {
    title: "Seed Sowing Machines",
    description:
      "These machines improve the precision and efficiency of planting seeds, leading to better crop yields.",
  },
  {
    title: "Sprayers and Insect Traps",
    description:
      "These tools help in the effective application of pesticides and management of pests, ensuring healthier crops.",
  },
  {
    title: "Irrigation Parts",
    description:
      "These components are crucial for efficient water management, which is vital for crop growth.",
  },
  {
    title: "Animal Feed and Solar Fences",
    description:
      "These products support livestock management and farm security, respectively.",
  },];
