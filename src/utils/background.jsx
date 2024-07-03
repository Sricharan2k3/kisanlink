"use client";
const Background = ({title}) => {
    return (
        
      <div
        className="relative flex flex-col h-80"
        style={{ background: "#F8F4DE" }}
      >
        <div className="absolute text-4xl text-bold  font-bold text-brown-700 inset-0 flex justify-center items-center">
          {title}
        </div>
        <img
          className="absolute insert-0 pt-12 mt-24 overflow-hidden"
          src="https://www.kisanlink.in/wp-content/uploads/2022/07/footer-img-1.png"
        />
      </div>
    );
  };
  
  export default Background;