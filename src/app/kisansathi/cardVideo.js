import React from 'react';
import Heading from '../components/heading';

const LeftContent = () => {
    return (
        <div className="pt-16 ">
            <Heading value="Why Become a Kisansathi" />
            <p className="mb-4">
                Agriculture is ingrained in our history and culture. By working with us, you will get an opportunity to earn livelihood, work from your own hometown and impact the lives of farmers around you.
            </p>
        </div>
    );
};

const RightImage = () => {
    return (
        <div className="pt-16">
            <iframe width="550" height="310" src="https://www.youtube.com/embed/R4x78KHuGHc" title="Become a Kisansathi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    );
};

const CenteredVideo = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-3/4  rounded-lg flex">
                <div className="w-1/2 ">
                    <LeftContent />
                </div>
                <div className="w-1/2">
                    <RightImage />
                </div>
            </div>
        </div>
    );
};

export default CenteredVideo;
