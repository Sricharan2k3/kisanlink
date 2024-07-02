import React from "react";
import { FarmsDemo } from "../components/farms";
import { ProductsDemo } from "../components/products";
import { BillingDemo } from "../components/billing";
import { PaymentsDemo } from "../components/payments";
import { FarmersDemo } from "../components/farmers";
import { OutputDemo } from "../components/output";
import { SecurityDemo } from "../components/security";
import InventoryManagementComponent from "../components/inventory";

const ContentSections = () => {
  return (
    <div>
      <div id="farms" className="content-section mt-5">
        <div className="text-center mt-24 pt-2">
          <h1 className="text-lg lg:text-4xl font-bold text-brown-700">
            Farms
          </h1>
          <div className="text-2xl -mb-24 text-brown-700 font-bold mt-4">
            Efficient farm management
          </div>
        </div>
        <FarmsDemo />
      </div>

      <div id="products" className="content-section mt-5">
        <div className="text-center mt-24 pt-2">
          <h1 className="text-lg lg:text-4xl font-bold text-brown-700">
            Products
          </h1>
          <div className="text-2xl -mb-24 text-brown-700 font-bold mt-4">
            All products in one place
          </div>
        </div>
        <ProductsDemo />
      </div>

      <div id="billing" className="content-section mt-5">
        <div className="text-center mt-24 pt-2">
          <h1 className="text-lg lg:text-4xl font-bold text-brown-700">
            Billing
          </h1>
          <div className="text-2xl -mb-24 text-brown-700 font-bold mt-4">
            Streamline your billing process
          </div>
        </div>
        <BillingDemo />
      </div>

      <div id="outputpurchase" className="content-section mt-5">
        <div className="text-center mt-24 pt-2">
          <h1 className="text-lg lg:text-4xl font-bold text-brown-700">
            Output Purchase
          </h1>
          <div className="text-2xl -mb-24 text-brown-700 font-bold mt-4">
            Avail Output purchase services
          </div>
        </div>
        <OutputDemo />
      </div>

      <div id="inventory" className="content-section mt-5">
        <div className="text-center mt-24 pt-2">
          <h1 className="text-lg lg:text-4xl font-bold text-brown-700">
            Inventory Management
          </h1>
          <div className="text-2xl -mb-24 text-brown-700 font-bold mt-4">
            Efficient inventory management
          </div>
        </div>
        <InventoryManagementComponent />
      </div>

      <div id="payments" className="content-section mt-5">
        <div className="text-center mt-24 pt-2">
          <h1 className="text-lg lg:text-4xl font-bold text-brown-700">
            Payments
          </h1>
          <div className="text-2xl -mb-24 text-brown-700 font-bold mt-4">
            Secure and Easy payments
          </div>
        </div>
        <PaymentsDemo />
      </div>

      <div id="farmers" className="content-section mt-5">
        <div className="text-center mt-24 pt-2">
          <h1 className="text-lg lg:text-4xl font-bold text-brown-700">
            Farmers
          </h1>
          <div className="text-2xl -mb-24 text-brown-700 font-bold mt-4">
            Empowering Farmers
          </div>
        </div>
        <FarmersDemo />
      </div>

      <div id="datasecurity" className="content-section mt-5">
        <div className="text-center mt-24 pt-2">
          <h1 className="text-lg lg:text-4xl font-bold text-brown-700">
            Data Security
          </h1>
          <div className="text-2xl -mb-24 text-brown-700 font-bold mt-4">
            Protecting your Data
          </div>
        </div>
        <SecurityDemo />
      </div>
    </div>
  );
};

export default ContentSections;
