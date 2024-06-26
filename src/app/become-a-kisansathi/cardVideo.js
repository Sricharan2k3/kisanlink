import React from 'react';
import Heading from '../components/heading';

const LeftContent = () => {
    return (
        <div className="pt-10 pr-10 mr-5 items-center content-center text-sm">
            <Heading  classname="items=center style={{ color: 'rgb(245, 245, 245)' }}" value="Why Become a Kisansathi" />
            <p className="text-sm style={{ color: 'rgb(245, 245, 245)' }}">
                Agriculture is ingrained in our history and culture. By working with us, you will get an opportunity to earn livelihood, work from your own hometown and impact the lives of farmers around you.
            </p>
        </div>
    );
};

const RightImage = () => {
    return (
        <div className="pt-16">
            <iframe
                width="400"
                height="225"
                src="https://www.youtube.com/embed/R4x78KHuGHc"
                title="Become a Kisansathi"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    );
};

const CenteredVideo = () => {
    return (
        <div className="flex justify-center items-start min-h-screen">
            <div className="ml-12 ml-5 w-3/4 rounded-lg flex">
                <div className="w-1/2">
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
