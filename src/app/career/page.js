const Background = (value) => {
  return (
    <div
      className="relative flex flex-col h-60"
      style={{ background: "#F8F4DE" }}
    >
      <div className="absolute text-5xl -mt-24 font-bold text-brown-700 inset-0 flex justify-center items-center">
        {value}
      </div>
      <img
        className="absolute insert-0 pt-14 overflow-hidden"
        src="https://www.kisanlink.in/wp-content/uploads/2022/07/footer-img-1.png"
      />
    </div>
  );
};

export default Background;
