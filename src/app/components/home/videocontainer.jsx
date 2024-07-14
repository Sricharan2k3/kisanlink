import React from 'react';
import Heading from '../heading';

const VideoContainer = () => {
    return (
        <div className='bg-[#E5E6E7]'>
            <Heading value={"Testimonals"} />
            <div className=" lg:overflow-hidden container lg:mx-[9%]  p-4">
                <div className=" lg:flex lg:flex-wrap lg:justify-center   ">
                    <div className="lg:w-1/2 px-4 small:w-1/2">
                        <div className="lg:w-full lg:h-full ">
                        <iframe className=' lg:w-[560px] lg:h-[315px] medium:pr-24 lg:pr-8  small:w-[300px]  small:h-[250px] ' src="https://www.youtube.com/embed/pOLaveXyxsw?si=i1UpLUKd5hp-IceW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                    <br />
                    <div className="w-full md:w-1/2 px-4">
                        <div className="w-full h-full">
                      <iframe className=' lg:w-[560px] lg:h-[315px] medium:pr-24 lg:pr-8 small:w-[300px] small:h-[250px] ' src="https://www.youtube.com/embed/nYNAwQVVrLA?si=Mk1gzl5qQrj8WABz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default VideoContainer;
