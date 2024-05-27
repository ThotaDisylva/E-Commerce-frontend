import React, { useEffect, useState } from "react";
import productsData from "../../components/ProductCard/ProductsData";
import { Button, Step, StepLabel, Stepper } from "@mui/material";
import OrderDetailsCard from "../../components/OrderDetails/OrderDetailsCard/OrderDetailsCard";
import OrderAddressCard from "../../components/Address/OrderAddressCard";
import ProductCardSummary from "../../components/ProductCard/ProductCardSummary/ProductCardSummary";
import { useLocation } from "react-router-dom";
import useOrderDetails from "../../../hooks/useOrderDetails";

const steps = {
  Processing: 1,
  Placed: 1,
  "Order Confirmed": 2,
  Shipped: 3,
  "Out For Delivery": 4,
  Delivered: 5,
};

const OrderDetailsPage = () => {
  const location = useLocation();

  const { fromOrder } = location.state;

  const { orderDetails, loadOrderDetailsPage } = useOrderDetails();

  useEffect(() => {
    const load = async () => {
      await loadOrderDetailsPage(fromOrder?.orderId);
    };
    load();
  }, []);

  return (
    <div className="px-5 sm:px-20  space-y-5">
      <div>
        <OrderDetailsCard
          orderDetails={orderDetails}
          orderId={fromOrder?.orderId}
        />
      </div>

      <div className="">
        <OrderAddressCard
          address={orderDetails?.orderAddress?.address}
          name={orderDetails?.orderAddress?.name}
          city={orderDetails?.orderAddress?.city}
          state={orderDetails?.orderAddress?.state}
          postalCode={orderDetails?.orderAddress?.postalCode}
          phoneNumber={orderDetails?.orderAddress?.phoneNumber}
        />
      </div>
      <div className="sm:flex  sm:items-center  sm:h-24 bg-white sm:px-5">
        <div className="sm:w-[78%] ">
          <Stepper
            activeStep={steps[orderDetails.orderStatus]}
            alternativeLabel
          >
            {Object.keys(steps)
              .slice(1, 6)
              .map((label) => (
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
        {orderDetails?.productCartInfo?.map((product) => (
          <ProductCardSummary product={product} />
        ))}
      </div>
    </div>
  );
};

export default OrderDetailsPage;
