import React from "react";
import Heading from "../components/heading";
const Card = (props) => {
  return (
    <div className="mt-12">
      <Heading value={"Benefits of Becoming a Kisansathi"}></Heading>

      <div className="flex justify-center gap-4">
        {/* Card 1 */}
        <div
          className="bg-white rounded-lg overflow-hidden shadow-md"
          style={{ width: "calc(30% - 1rem)" }}
        >
          <img
            src="https://www.kisanlink.in/wp-content/uploads/2022/03/Felxible-time.png"
            alt="Card 1"
            className="w-24 h-24 object-cover mx-auto mt-4"
          />
          <div className="text-center p-4 text-lg">
            <p className="font-medium">{props.h1}</p>
          </div>
          <div className="p-2 text-center text-md">
            <p>{props.content1}</p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="bg-white rounded-lg overflow-hidden shadow-md"
          style={{ width: "calc(30% - 1rem)" }}
        >
          <img
            src="https://www.kisanlink.in/wp-content/uploads/2022/03/unlimites-income.png"
            alt="Card 2"
            className="w-24 h-24 object-cover mx-auto mt-4"
          />
          <div className="p-4 text-center text-lg">
            <p className="font-medium">{props.h2}</p>
          </div>
          <div className="p-4 text-center text-mg">
            <p>{props.content2}</p>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="bg-white rounded-lg overflow-hidden shadow-md"
          style={{ width: "calc(30% - 1rem)" }}
        >
          <img
            src="https://www.kisanlink.in/wp-content/uploads/2022/03/certifications.png"
            alt="Card 3"
            className="w-24 h-24 object-cover mx-auto mt-4"
          />
          <div className="p-4 text-center text-lg">
            <p className="font-medium">{props.h3}</p>
          </div>
          <div className="p-4 text-md text-center">
            <p>{props.content3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
