import React from "react";
import productsData from "../../components/ProductCard/ProductsData";
import { Button, Step, StepLabel, Stepper } from "@mui/material";
import OrderDetailsCard from "../../components/OrderDetails/OrderDetailsCard/OrderDetailsCard";
import OrderAddressCard from "../../components/Address/OrderAddressCard";
import ProductCardSummary from "../../components/ProductCard/ProductCardSummary/ProductCardSummary";

const steps = [
  "Placed",
  "Order Confirmed",
  "Shipped",
  "Out For Delivery",
  "Delivered",
];

const OrderDetailsPage = () => {
  return (
    <div className="px-5 sm:px-20  space-y-5">
      <div>
        <OrderDetailsCard />
      </div>

      <div className="">
        <OrderAddressCard />
      </div>
      <div className="sm:flex  sm:items-center  sm:h-24 bg-white sm:px-5">
        <div className="sm:w-[78%] ">
          <Stepper activeStep={2} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
        <div className="flex sm:flex-1 justify-end">
          <Button>Cancel Order</Button>
        </div>
      </div>
      <div>
        {productsData.map((product) => (
          <ProductCardSummary product={product} />
        ))}
      </div>
    </div>
  );
};

export default OrderDetailsPage;
