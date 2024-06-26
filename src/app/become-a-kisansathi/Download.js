import React from 'react';

const DownloadAppBox = () => {
    const downloadLink = "https://play.google.com/store/apps/details?id=com.kisanlink"; // Replace with your actual download link

    return (
        <div className="bg-green-500 text-white p-6 flex flex-col items-center justify-center h-80 mx-auto rounded-lg shadow-lg">
            <p className="text-2xl font-bold mb-4 text-center">Download Our App</p>
            <a 
                href={downloadLink} 
                className="bg-white text-green-500 px-4 py-2 rounded-lg shadow-md flex items-center justify-center transition duration-300 hover:bg-black hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className="material-icons mr-2">Googleplay</span> Download
            </a>
        </div>
    );
};

export default DownloadAppBox;
