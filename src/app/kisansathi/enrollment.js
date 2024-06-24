import React from 'react';
import Card from './threeCard';

const EnrollmentProcess = () => {
    return (
        <div className="flex justify-center items-center min-h-screen p-4">
            <div className="rounded-lg p-6 w-3/4">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    Become a Kisansathi as a PoSP
                </h2>
                <p className="mb-4">
                    Anyone who fulfills these basic criteria can enroll to become a Kisansathi as a PoSP. Thus, the company can provide jobs for freshers, jobs for fresh graduates, part-time jobs for graduates, jobs for college students, even retired individuals.
                </p>
                <h3 className="text-xl font-bold mb-2">Enrollment Steps:</h3>
                <ol className="list-none pl-0 mb-4">
                    <li className="flex items-start mb-2">
                        <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        If you meet the eligibility criteria, you can sign up on the App.
                    </li>
                    <li className="flex items-start mb-2">
                        <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Submit your KYC details and documents.
                    </li>
                    <li className="flex items-start mb-2">
                        <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Complete the introductory course of a specified duration and get certified to become a Kisansathi.
                    </li>
                    <li className="flex items-start mb-2">
                        <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Take additional courses to sell products and services offered by the collaborators.
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default EnrollmentProcess;
