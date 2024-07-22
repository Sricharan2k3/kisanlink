// src/components/CategoryList.jsx
"use client"
import React from 'react';

const categories = [
  { name: 'Blog', count: 14 },
  { name: 'Blogs', count: 19 },
  { name: 'Uncategorized', count: 2 },
  { name: 'Videos', count: 4 },
];

const CategoryList = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-semibold mb-4">Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="mb-2">
            {category.name} ({category.count})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
