// PaymentSuccessfullPage.js
import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import OrderDetailsCard from "../../components/OrderDetails/OrderDetailsCard/OrderDetailsCard";
import OrderAddressCard from "../../components/Address/OrderAddressCard";
import ProductCardSummary from "../../components/ProductCard/ProductCardSummary/ProductCardSummary";
import useOrderDetails from "../../../hooks/useOrderDetails";
import usePaymentSuccessfull from "../../../hooks/usePaymentSuccessfull";

const PaymentSuccessfullPage = () => {
  const { orderId } = useParams();
  const location = useLocation();

  // Function to extract query parameters
  const useQuery = () => {
    return new URLSearchParams(location.search);
  };

  const query = useQuery();
  const paymentId = query.get("razorpay_payment_id");

  console.log(orderId);
  console.log(paymentId);

  const { loading, orderDetails, loadOrderDetailsPage } = useOrderDetails();
 

  useEffect(() => {
    loadOrderDetailsPage(orderId);
  }, [orderId, paymentId]);

  const steps = {
    Placed: 1,
    "Order Confirmed": 2,
    Shipped: 3,
    "Out For Delivery": 4,
    Delivered: 5,
    Cancelled: 6,
  };

  return (
    <div className="px-5 sm:px-20 space-y-5">
      <div className="flex p-5 border-solid border-green-600 bg-green-600 justify-center border">
        <p className="text-white font-bold text-xl">Payment Successful</p>
      </div>
      <div>
        <OrderDetailsCard orderDetails={orderDetails} orderId={orderId} />
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
      <div>
        {orderDetails?.productCartInfo?.map((product) => (
          <ProductCardSummary key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PaymentSuccessfullPage;
