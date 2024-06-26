"use client"
import React from 'react';
import Heading from '../components/heading';

const TermsAndConditions = () => {
  return (
    <div className=" flex items-center justify-center py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-white shadow-md rounded-lg p-6">
        <div className="-mt-10">
          <Heading value={"Terms And Conditions"}></Heading>
        </div>
          <p className="text-gray-700 leading-relaxed mb-4 p-4 pl-6 border-l-4 border-blue-500 bg-blue-50 relative animate-fadeIn">
            ✔ To benefit from the Scheme, members must provide their personal and nominee details during registration.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 p-4 pl-6 border-l-4 border-blue-500 bg-blue-50 relative animate-fadeIn">
            ✔ The cardholder is responsible for paying any taxes or charges levied on benefits received through the Kisanlink smart membership card.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 p-4 pl-6 border-l-4 border-blue-500 bg-blue-50 relative animate-fadeIn">
            ✔ The membership of the Kisanlink smart membership card cannot be transferred to another person.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 p-4 pl-6 border-l-4 border-blue-500 bg-blue-50 relative animate-fadeIn">
            ✔ Kisanlink reserves the right to terminate the membership of any individual who is found to be misusing the scheme, violating the terms and conditions, or engaging in any activity that contradicts the local or state laws, statutes, or ordinances.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
