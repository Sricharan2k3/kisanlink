import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { CalendarIcon } from 'lucide-react';
import Heading from '../components/heading';
const Milestone = ({ date, description }) => (
  <div className="flex items-center mb-8">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brown-700 flex items-center justify-center">
      <img src='https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/milestone.png' className="text-white h-9 w-9" size={8} />
    </div>
    <div className="ml-4 flex-grow">
      <h3 className="text-lg font-semibold text-brown-700">{date}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const KeyMilestonesComponent = () => {
  const milestones = [
    {
      date: "July 2023",
      description: "Assisted E-commerce App launch and 2500 Acres of Farm Mechanization Services and 60 tons Commodities traded."
    },
    {
      date: "January 2024",
      description: "Farmer Experience Center launch partnering with FPO and IOT device integration."
    },
    {
      date: "May 2024",
      description: "SaaS platform for FPOs and Farmer Smart Membership Card launch."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        
        <CardContent>
          <div className="bg-gray-200  w-full flex items-center justify-center rounded-lg">
            <img src='https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/timeline.png'></img>
          </div>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
            <Heading value={"Key Milestones Achieved"}></Heading>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 "></div>
            {milestones.map((milestone, index) => (
              <Milestone key={index} date={milestone.date} description={milestone.description} />
            ))}
          </div>
        </CardContent>
      </Card>
      
      
    </div>
  );
};

export default KeyMilestonesComponent;