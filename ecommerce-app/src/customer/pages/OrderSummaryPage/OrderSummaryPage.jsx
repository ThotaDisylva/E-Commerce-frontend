import React, { useEffect, useState } from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
} from "@mui/material";
import productsData from "../../components/ProductCard/ProductsData";
import CartItem from "../../components/OrderSummary/CartItem";
import Price from "../../components/OrderSummary/Price";
import { useUserInfoContext } from "../../../context/UserInfoContext";
import { useLocation, useNavigate } from "react-router-dom";
import AddressCard from "../../components/SavedAddress/AddressCard";
import useMyOrderPage from "../../../hooks/useMyOrderPage";

export default function OrderSummaryPage() {
  const steps = ["Login", "Address", "Order Summary", "Payment"];
  const {
    choosedAddress,
    cartItemsInfo,
    setCartItemsInfo,
    priceDetails,
    setPriceDetails,
  } = useUserInfoContext();

  const [loadingPayment, setLoadingPayment] = useState(false);

  function isObjEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  useEffect(() => {
    if (isObjEmpty(cartItemsInfo)) {
      setCartItemsInfo(JSON.parse(localStorage.getItem("cart_items_info")));
    }

    if (isObjEmpty(priceDetails)) {
      setPriceDetails(JSON.parse(localStorage.getItem("cart_price_details")));
    }
  }, []);

  const location = useLocation();
  const selectedAddress = location.state;

  console.log("selectedAddress", selectedAddress);

  const navigate = useNavigate();
  const { createOrder, loading } = useMyOrderPage();

  const orderInfo = {
    orderStatus: "Cancelled",
    deliveryCharges: priceDetails.totalDeliveryCharge,
    totalAmount: priceDetails.totalPayablePrice,
    addressId: selectedAddress.addressId,
  };
  console.log("orderInfo", orderInfo)

  const handlePaymentClick = async () => {
    setLoadingPayment(true);
    await createOrder(orderInfo);
  };

  return (
    <div>
      {loading || loadingPayment ? (
        <div className="flex flex-col justify-center items-center h-[31rem]">
          <CircularProgress size={"50px"} />
          <div className="font-bold">Loading Payments...</div>
        </div>
      ) : (
        <div className="px-2 md:px-20">
          <div>
            <Stepper activeStep={2}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>

          <div className="mt-10">
            <div>
              <AddressCard
                key={selectedAddress.addressId}
                address={selectedAddress}
                onEdit={() => {}}
                editable={false}
              />
            </div>
            <div className="mt-5 lg:flex">
              <div className="lg:w-[71%] lg:mr-5 ">
                {cartItemsInfo?.map((cart) => (
                  <CartItem key={cart.cartId} ProductsData={cart} />
                ))}
              </div>
              <div>
                <Price
                  actualTotalPrice={priceDetails.actualTotalPrice}
                  totalDisountedPrice={priceDetails.totalDiscountedPrice}
                  totalDeliveryCharges={priceDetails.totalDeliveryCharge}
                  totalPayableAmount={priceDetails.totalPayablePrice}
                  buttonText={"Payment"}
                  handlePaymentClick={handlePaymentClick}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
