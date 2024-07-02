import React from 'react';

const LogoComponent = () => {
  return (
    <nav className="w-container-lg flex flex-nowrap top-0 left-0 right-0 bottom-0 items-center gap-x-10 z-100 py-3 2xl:py-4">
      <div className="max-w-md">
       <a className="outline-lime-400 outline-offset-4" href="/">
    <img 
        src="https://www.kisanlink.in/wp-content/uploads/2023/03/cropped-cropped-cropped-Picsart_23-03-01_17-20-48-356-scaled-2.jpg" 
        width={60} 
        height={60} 
        alt="Link Image"
    />
</a>

      </div>
    </nav>
  );
};

export default LogoComponent;
