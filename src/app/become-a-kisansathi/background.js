"use client";
const Background = ({ title }) => {
    return (

        <div
            className="relative lg:flex lg:flex-col  h-80"
            style={{ background: "#F8F4DE" }}
        >
            <div className="absolute lg:text-4xl small:text-3xl text-bold  font-bold text-brown-700 inset-0 flex justify-center items-center">
                {title}
            </div>
            <img
                className="absolute insert-0 pt-4 small:hidden lg:block mt-32 overflow-hidden"
                src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/2022/07/footer-img-1.png"
            />
            <img
                className="absolute  mt-56 lg:hidden small:block h-24 "
                src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/2022/07/footer-img-1.png"
            />
        </div>

    );
};

export default Background;