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
                src="./ic1.png"
                alt=""
                className="w-full h-auto rounded-t-lg cursor-pointer"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <img
                  src="./ic1.png"
                  alt=""
                  className="max-w-full max-h-full rounded-lg"
                />
              </div>
            </figure>
            <div className="article-body p-6">
              <h2 className="text-xl font-bold mb-4">
                Gain control of your inventory and effortlessly manage all your items
              </h2>
                 
                  <span>
                  Arrange your products meticulously by categorizing them based on type, brand, or other relevant criteria to ensure easy tracking and management, and access real-time inventory reports to stay updated on stock levels and make informed decisions.
                  </span>

            </div>
          </article>

          {/* Article 2 */}
          <article className="article bg-gray-100 rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105">
            <figure className="mb-4 relative">
              <img
                src="./ic2.png"
                alt=""
                className="w-full h-auto rounded-t-lg cursor-pointer"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <img
                  src="./ic2.png"
                  alt=""
                  className="max-w-full max-h-full rounded-lg"
                />
              </div>
            </figure>
            <div className="article-body p-6">
              <h2 className="text-xl font-bold mb-4">Inventory Management Features</h2>
             
             
                  
                  <span >
                  Track the movement of products from the warehouse to the customer to ensure transparency and accountability, set up alerts for low stock levels to avoid stockouts, manage different product variants to meet diverse customer needs, and manage batches of products for proper inventory rotation and waste minimization.
                  </span>

                
            </div>
          </article>

          {/* Article 3 */}
          <article className="article bg-gray-100 rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105">
            <figure className="mb-4 relative">
              <img
                src="./ic3.png"
                alt=""
                className="w-full h-auto rounded-t-lg cursor-pointer"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <img
                  src="./ic3.png"
                  alt=""
                  className="max-w-full max-h-full rounded-lg"
                />
              </div>
            </figure>
            <div className="article-body p-6">
              <h2 className="text-xl font-bold mb-4">Inventory Analytics</h2>
              
                  <span >
                  Analyze inventory turnover rates to identify slow-moving products, calculate inventory costs including storage, handling, and maintenance, and use historical sales data and seasonal trends to forecast future inventory needs, all to optimize inventory management.
                  </span>
               
            </div>
          </article>
        </section>
      </section>
    </div>
  );
};

export default InventoryManagementComponent;
