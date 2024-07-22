// src/App.js
"use client"
import React from 'react';
import CommentForm from './comment';
import CategoryList from './category';
import TagList from './taglist';
import Footer from './footer';

const Blog = () => {
  return (
    <div className="container mx-auto p-6">
      <CommentForm />
      <CategoryList />
      <TagList />
      <Footer />
    </div>
  );
};

export default Blog;
