import React from 'react';
import { HiOutlineCheckCircle } from 'react-icons/hi'; // Importing icons from Heroicons

const InventoryManagementComponent = () => {
  return (
    <div className="flex justify-center py-8">
      <section className="w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Section 1 */}
        <section className="section-1 grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
          {/* Article 1 */}
          <article className="article bg-gray-100 rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105">
            <figure className="mb-4 relative">
              <img
                src="https://www.kisanlink.in/wp-content/uploads/Kisan-Link-Brave-06-06-2024-08_46_06.png"
                alt=""
                className="w-full h-auto rounded-t-lg cursor-pointer"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <img
                  src="https://www.kisanlink.in/wp-content/uploads/Kisan-Link-Brave-06-06-2024-08_46_06.png"
                  alt=""
                  className="max-w-full max-h-full rounded-lg"
                />
              </div>
            </figure>
            <div className="article-body p-6">
              <h2 className="text-xl font-bold mb-4">
                Gain control of your inventory and effortlessly manage all your items
              </h2>
              <ul className="list-disc pl-6">
                <li className="mb-4 flex items-start">
                  <div className="flex-shrink-0 mt-1.5">
                    <HiOutlineCheckCircle className="text-green-500 w-6 h-6" />
                  </div>
                  <span className="ml-3">
                    Arrange your products meticulously by categorizing them based on type, brand, or other relevant criteria.
                  </span>
                </li>
                <li className="mb-4 flex items-start">
                  <div className="flex-shrink-0 mt-1.5">
                    <HiOutlineCheckCircle className="text-green-500 w-6 h-6" />
                  </div>
                  <span className="ml-3">
                    Classify your products to ensure easy tracking and management.
                  </span>
                </li>
                <li className="mb-4 flex items-start">
                  <div className="flex-shrink-0 mt-1.5">
                    <HiOutlineCheckCircle className="text-green-500 w-6 h-6" />
                  </div>
                  <span className="ml-3">
                    Access real-time inventory reports to stay updated on stock levels and make informed decisions.
                  </span>
                </li>
              </ul>
            </div>
          </article>

          {/* Article 2 */}
          <article className="article bg-gray-100 rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105">
            <figure className="mb-4 relative">
              <img
                src="https://www.kisanlink.in/wp-content/uploads/Kisan-Link-Brave-06-06-2024-08_50_17.png"
                alt=""
                className="w-full h-auto rounded-t-lg cursor-pointer"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <img
                  src="https://www.kisanlink.in/wp-content/uploads/Kisan-Link-Brave-06-06-2024-08_50_17.png"
                  alt=""
                  className="max-w-full max-h-full rounded-lg"
                />
              </div>
            </figure>
            <div className="article-body p-6">
              <h2 className="text-xl font-bold mb-4">Inventory Management Features</h2>
              <ul className="list-disc pl-6">
                <li className="mb-4 flex items-start">
                  <div className="flex-shrink-0 mt-1.5">
                    <HiOutlineCheckCircle className="text-green-500 w-6 h-6" />
                  </div>
                  <span className="ml-3">
                    <strong>Tracking:</strong> Track the movement of products from the warehouse to the customer, ensuring transparency and accountability.
                  </span>
                </li>
                <li className="mb-4 flex items-start">
                  <div className="flex-shrink-0 mt-1.5">
                    <HiOutlineCheckCircle className="text-green-500 w-6 h-6" />
                  </div>
                  <span className="ml-3">
                    Set up alerts for low stock levels, ensuring timely replenishment and avoiding stockouts.
                  </span>
                </li>
                <li className="mb-4 flex items-start">
                  <div className="flex-shrink-0 mt-1.5">
                    <HiOutlineCheckCircle className="text-green-500 w-6 h-6" />
                  </div>
                  <span className="ml-3">
                    Manage different product variants to cater to diverse customer needs.
                  </span>
                </li>
                <li className="mb-4 flex items-start">
                  <div className="flex-shrink-0 mt-1.5">
                    <HiOutlineCheckCircle className="text-green-500 w-6 h-6" />
                  </div>
                  <span className="ml-3">
                    Track and manage batches of products, ensuring proper inventory rotation and minimizing waste.
                  </span>
                </li>
              </ul>
            </div>
          </article>

          {/* Article 3 */}
          <article className="article bg-gray-100 rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105">
            <figure className="mb-4 relative">
              <img
                src="https://www.kisanlink.in/wp-content/uploads/Kisan-Link-Brave-06-06-2024-08_51_43.png"
                alt=""
                className="w-full h-auto rounded-t-lg cursor-pointer"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <img
                  src="https://www.kisanlink.in/wp-content/uploads/Kisan-Link-Brave-06-06-2024-08_51_43.png"
                  alt=""
                  className="max-w-full max-h-full rounded-lg"
                />
              </div>
            </figure>
            <div className="article-body p-6">
              <h2 className="text-xl font-bold mb-4">Inventory Analytics</h2>
              <ul className="list-disc pl-6">
                <li className="mb-4 flex items-start">
                  <div className="flex-shrink-0 mt-1.5">
                    <HiOutlineCheckCircle className="text-green-500 w-6 h-6" />
                  </div>
                  <span className="ml-3">
                    Analyze inventory turnover rates to identify slow-moving products and optimize inventory levels.
                  </span>
                </li>
                <li className="mb-4 flex items-start">
                  <div className="flex-shrink-0 mt-1.5">
                    <HiOutlineCheckCircle className="text-green-500 w-6 h-6" />
                  </div>
                  <span className="ml-3">
                    Calculate inventory costs, including storage, handling, and maintenance, to optimize inventory management.
                  </span>
                </li>
                <li className="mb-4 flex items-start">
                  <div className="flex-shrink-0 mt-1.5">
                    <HiOutlineCheckCircle className="text-green-500 w-6 h-6" />
                  </div>
                  <span className="ml-3">
                    Use historical sales data and seasonal trends to forecast future inventory needs and optimize inventory levels.
                  </span>
                </li>
              </ul>
            </div>
          </article>
        </section>
      </section>
    </div>
  );
};

export default InventoryManagementComponent;
