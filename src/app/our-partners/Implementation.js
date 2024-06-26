import React from 'react';

const Implementation = () => {
  return (
    <div className=" bg-gray-100 flex justify-center items-center px-4  lg:py-12">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-6 lg:p-10">
        <header className="bg-green-600 text-white py-4 text-center rounded-t-lg">
          <h1 className="text-3xl lg:text-4xl font-bold">Implementation Partners</h1>
        </header>
        <main className="p-4">
          <section id="fpos" className="bg-white rounded-lg shadow-md p-4 lg:p-6 my-4 transition-transform duration-300">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 border-b-2 border-green-600 pb-2 mb-3 lg:mb-4">Order Management</h2>
            <div className="content">
              <h3 className="text-lg lg:text-xl font-semibold text-green-600">Efficient Order Processing</h3>
              <p className="my-2 lg:my-3">Our partners play a crucial role in managing the order lifecycle, from placement to delivery, ensuring timely and accurate fulfillment of orders.</p>
              <h3 className="text-lg lg:text-xl font-semibold text-green-600">Logistics and Delivery</h3>
              <p className="my-2 lg:my-3">We collaborate with our partners to cover delivery charges and ensure that products reach farmers efficiently through our dedicated logistics services.</p>
            </div>
          </section>
          <section id="kisansathis" className="bg-white rounded-lg shadow-md p-4 lg:p-6 my-4 transition-transform duration-300">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 border-b-2 border-green-600 pb-2 mb-3 lg:mb-4">Training and Development</h2>
            <div className="content">
              <h3 className="text-lg lg:text-xl font-semibold text-green-600">Skill Development</h3>
              <p className="my-2 lg:my-3">Our partners help create and deliver training modules, both online and offline, covering various agricultural topics and modern farming techniques.</p>
              <h3 className="text-lg lg:text-xl font-semibold text-green-600">Workshops and Certifications</h3>
              <p className="my-2 lg:my-3">We organize workshops and certification programs to enhance the skills of farmers, FPOs, and Kisansathis, ensuring they stay updated with the latest developments in agriculture.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Implementation;
