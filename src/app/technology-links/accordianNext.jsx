import React from 'react';
import Heading from '../components/heading';

const KisanlinkDashboard = () => {
  return (
    <div className="container mx-auto p-5 items-center w-3/4  bg-white">
      <Heading value={"Welcome to Kisanlink Dashboard"}></Heading>
      <p className="leading-relaxed mb-4">
        Upon logging in, users can access all relevant information about farmers, products, sales, and financials via their personalized dashboard. With just one click, users gain access to a comprehensive database of farmers, complete with detailed profiles.
      </p>
      <Heading value={"Our Platform Features"}></Heading>
      <ul className="list-none p-0">
        <li className="bg-green-50 mb-2 p-4 border-l-4 border-green-500">
          <span className="text-green-600 font-bold">Comprehensive Database:</span> Our platform stands out with its complete inventory management solution, ensuring every aspect of agricultural operations is accounted for and optimized for efficiency.
        </li>
        <li className="bg-green-100 mb-2 p-4 border-l-4 border-green-500">
          <span className="text-green-600 font-bold">Tech-enabled Membership Cards:</span> Our tech-enabled platform manages farmers' membership cards, each featuring a unique QR code. This code provides access to the farmer's complete profile, including transactions and credit history.
        </li>
        <li className="bg-green-50 mb-2 p-4 border-l-4 border-green-500">
          <span className="text-green-600 font-bold">Real-time Data Synchronization:</span> These features are in sync with our e-commerce platform, the Kisanlink mobile app, and are integrated with our ERP system for real-time data synchronization.
        </li>
        <li className="bg-green-100 mb-2 p-4 border-l-4 border-green-500">
          <span className="text-green-600 font-bold">Expanded Market Reach:</span> This integration expands market reach and provides valuable access to farmers and FPO members.
        </li>
      </ul>
    </div>
  );
};

export default KisanlinkDashboard;