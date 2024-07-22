// src/components/CommentForm.jsx
"use client"
import React from 'react';

const CommentForm = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Leave a comment</h2>
      <form>
        <textarea
          className="w-full p-4 border rounded-lg mb-4"
          placeholder="Comment"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-2 bg-green-500 text-white rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
