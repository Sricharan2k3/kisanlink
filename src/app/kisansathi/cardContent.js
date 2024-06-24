import React from 'react';
import Heading from '../components/heading';

const LeftContent = () => {
    return (
        <div className="p-4 items-center pt-32">
            <Heading value="About Kisansathi" />
            <p className="mb-4">
                Agriculture is ingrained in our history and culture. By working with us, you will get an opportunity to earn livelihood, work from your own hometown and impact the lives of farmers around you.
            </p>
        </div>
    );
};

const RightImage = () => {
    return (
        <div className="p-4">
            <img
                src="https://www.kisanlink.in/wp-content/uploads/2022/03/farmer-standing-rice-field-with-tablet-scaled.jpg"
                alt="Placeholder"
                className="w-[550px] h-[350px]"
            />
        </div>
    );
};

const CenteredLayout = () => {
    return (
        <div className="flex justify-center items-center ">
            <div className="w-3/4  rounded-lg flex">
                <div className="w-1/2">
                    <LeftContent />
                </div>
                <div className="w-1/2 pt-32">
                    <RightImage />
                </div>
            </div>
        </div>
    );
};

export default CenteredLayout;
