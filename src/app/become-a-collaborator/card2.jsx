import React from "react";
const cardContent = [
  {
    image: 'https://www.kisanlink.in/wp-content/uploads/2022/03/form1.png',
    heading: 'Step 1',
    points: [
'Apply for collaboration by filling the form',
    ],
  },
  {
    image: 'https://www.kisanlink.in/wp-content/uploads/2022/03/product-service-1.png',
    heading: 'Step 2',
    points: [
  'Upload the content of your products/services on the web application',
    ],
  },
  {
    image: 'https://www.kisanlink.in/wp-content/uploads/2022/03/network-1.png',
    heading: 'Step 3',
    points: [
'Keep track of the number of Kisansathis completing your course and get direct sales through them.',
    ],
  },
];

const Card = ({ image, heading, points }) => (
  <div className=" rounded-lg  m-6 w-96">
    <img src={image} alt={heading} className="w-16 h-16 object-cover rounded-t-lg" />
    <h3 className="text-xl font-bold mt-4 mb-2">{heading}</h3>
    <ul className="list-disc list-inside">
      {points.map((point, index) => (
       <p key={index}>{point}</p>
      ))}
    </ul>
  </div>
);

const CardRow = () => (
  <div className="flex flex-wrap justify-around">
    {cardContent.map((content, index) => (
      <Card key={index} {...content} />
    ))}
  </div>
);

const Card1 = () => (
  <div className="  flex items-center justify-center">
    <CardRow />
  </div>
);

export default Card1;
