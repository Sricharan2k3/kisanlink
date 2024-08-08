







import React from 'react';


function VideoContainer() {
  return (
    <div className=" pt-20 flex items-center bg-white justify-center lg:h-screen lg:-m-1.5 overflow-hidden small:w-full">
      <div className="relative overflow-hidden lg:w-full lg:h-full small:w-full small:h-[280px] bg-white">
        <iframe
          className="absolute overflow-hidden  lg:w-full lg:h-full small:w-full small:h-[280px] "
src='https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/new-admin-panel-1.mp4'          title="Full Screen Video"
         
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default VideoContainer;
