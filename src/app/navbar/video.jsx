import React from 'react';


function VideoContainer() {
  return (
    <div className=" pt-20 flex items-center bg-white justify-center lg:h-screen -m-1.5 overflow-hidden">
      <div className="relative overflow-hidden lg:w-full lg:h-full small:w-full small:h-[450px] bg-white">
        <iframe
          className="absolute overflow-hidden  lg:w-full lg:h-full small:w-fulll small:h-[450px] "
          src="https://www.kisanlink.in/wp-content/uploads/pitchdesk_0.mp4"
          title="Full Screen Video"
         
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default VideoContainer;
