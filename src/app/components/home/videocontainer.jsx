import React from 'react';
import Heading from '../heading';

const VideoContainer = () => {
    return (
        <>
            <Heading value={"Testimonals"} />
            <div className="container mx-[9%] p-4">
                <div className="flex flex-wrap justify-center ">
                    <div className="w-full md:w-1/2 px-4 ">
                        <div className="w-full h-full">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Xi0DALjGSQw?si=-xJnZTuU5OlNwmD_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                        <div className="w-full h-full">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/W3u2UpdcOuU?si=8PO_6oF-quLXhF7x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default VideoContainer;
