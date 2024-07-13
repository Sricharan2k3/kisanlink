"use client";
const Background = ({ title }) => {
  return (
    <div
      className="relative flex flex-col h-60"
      style={{ background: "#F8F4DE" }}
    >
      <div className="absolute text-4xl -mt-24 font-bold text-brown-700 inset-0 flex justify-center items-center">
        {title}
      </div>
      <img
        className="absolute insert-0 pt-16 overflow-hidden"
        src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/2022/07/footer-img-1.png"
      />
    </div>
  );
};

export default Background;
