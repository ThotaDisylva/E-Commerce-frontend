import React, { useEffect, useState } from "react";
import productsData from "../../components/ProductCard/ProductsData";
import { Button, Step, StepLabel, Stepper } from "@mui/material";
import OrderDetailsCard from "../../components/OrderDetails/OrderDetailsCard/OrderDetailsCard";
import OrderAddressCard from "../../components/Address/OrderAddressCard";
import ProductCardSummary from "../../components/ProductCard/ProductCardSummary/ProductCardSummary";
import { useLocation, useParams } from "react-router-dom";
import useOrderDetails from "../../../hooks/useOrderDetails";
import usePaymentSuccessfull from "../../../hooks/usePaymentSuccessfull";



const steps ={
  "Processing":1,
  "Placed":1,
  "Order Confirmed":2,
  "Shipped":3,
  "Out For Delivery":4,
  "Delivered":5,
}



const PaymentSuccessfullPage = () => {
  const queryParameters = new URLSearchParams(window.location.search)
  const paymentId = queryParameters.get("razorpay_payment_id")
  const {orderId}=useParams();
  console.log(orderId);
  console.log(paymentId);
  const {postPaymentRequest} = usePaymentSuccessfull(paymentId,orderId);
  const {orderDetails,loadOrderDetailsPage}=useOrderDetails(orderId);
  if(orderDetails.orderStatus=="Processing"){
    postPaymentRequest();
  }
  // const location = useLocation();
  
  // const { fromOrder } = location.state;


  return (
    <div className="px-5 sm:px-20  space-y-5">
      <div className="flex p-5 border-solid border-green-600 bg-green-600 justify-center border"><p className=" text-white font-bold text-xl">Payment Successfull</p></div>
      <div>
        <OrderDetailsCard orderDetails={orderDetails} orderId={orderId}/>
      </div>

      <div className="">
        <OrderAddressCard address={orderDetails?.orderAddress?.address} name={orderDetails?.orderAddress?.name} city={orderDetails?.orderAddress?.city} state={orderDetails?.orderAddress?.state} postalCode={orderDetails?.orderAddress?.postalCode} phoneNumber={orderDetails?.orderAddress?.phoneNumber}/>
      </div>
      <div>
        {orderDetails?.productCartInfo?.map((product) => (
          <ProductCardSummary product={product} />
        ))}
      </div>
    </div>
  );
};

export default PaymentSuccessfullPage;
