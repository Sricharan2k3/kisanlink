import React from 'react';

const cardContent = [
  {
    image: 'https://www.kisanlink.in/wp-content/uploads/2022/03/features.png',
    heading: 'Features',
    points: [
      'Digital training modules for products and services.',
      'Village level entrepreneurs with an interest to protect their own reputation;',
      'Technologically driven process execution with easy user-based solutions;',
      'Physical and Digital Communication channels with farmers.',
    ],
  },
  {
    image: 'https://www.kisanlink.in/wp-content/uploads/2022/03/Experience.png',
    heading: 'Experiences',
    points: [
      'Access to web app to keep up with dashboard of key indicators.',
      'Vast rural entrepreneurial chain linked on a single digital platform.',
      'Diverse sales generation with short deployment time.',
    ],
  },
  {
    image: 'https://www.kisanlink.in/wp-content/uploads/2022/03/Benefits.png',
    heading: 'Benefits',
    points: [
      'Effective knowledge transfer about products/services.',
      'Shortest onboarding time and quick sale generation.',
      'Opportunity to expand to new markets.',
      'No requirement of infrastructure and on-field staff.',
    ],
  },
];

const Card = ({ image, heading, points }) => (
  <div className=" rounded-lg  m-6 w-96">
    <img src={image} alt={heading} className="w-24 h-24 object-cover rounded-t-lg" />
    <h3 className="text-xl font-bold mt-4 mb-2">{heading}</h3>
    <ul className="list-disc list-inside">
      {points.map((point, index) => (
        <li key={index} className="break-words">{point}</li>
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
