// src/components/TagList.jsx
"use client"
import React from 'react';

const tags = [
  'AgriRevolution', 'agroecology', 'Audit', 'CGSFPO', 'FarmersProducerOrganizations', 'AgriculturalCredit',
  // Add more tags as needed
];

const TagList = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-semibold mb-4">Popular Tags</h2>
      <div className="flex flex-wrap">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default  TagList;
