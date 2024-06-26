import React from 'react';

const DownloadAppBox = () => {
    const downloadLink = "https://example.com/download"; // Replace with your actual download link

    return (
        <div className="bg-green-500 text-white p-6 flex flex-col items-center justify-center h-80 mx-auto rounded-lg shadow-lg">
            <p className="text-2xl font-bold mb-4 text-center">Download Our App</p>
            <a 
                href={downloadLink} 
                className="bg-white text-green-500 px-4 py-2 rounded-lg shadow-md flex items-center justify-center hover:bg-green-400 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className="material-icons mr-2">Googleplay</span> Download
            </a>
        </div>
    );
};

export default DownloadAppBox;
