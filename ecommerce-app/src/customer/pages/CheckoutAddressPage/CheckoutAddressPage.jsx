import React, { useEffect, useState } from "react";
import { Stepper, Step, StepLabel, Button } from "@mui/material";
import CheckoutAddressCard from "../../components/CheckoutAddress/CheckoutAddressCard";
import AddAddressCard from "../../components/CheckoutAddress/AddAddressCard";
import useAddressInfo from "../../../hooks/useAddressInfo";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function CheckoutAddressPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentAddress, setCurrentAddress] = useState(null);
  const { loading, savedAddresses, addAddress, updateAddress } =
    useAddressInfo();
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      setAddresses(savedAddresses);
    }
  }, [savedAddresses, loading]);

  console.log("address", addresses);

  console.log("savedAddresses", savedAddresses);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleEdit = (address) => {
    setCurrentAddress(address);
    setIsOpen(true);
  };

  const handleAddressChange = (address) => {
    setSelectedAddress(address);
  };

  const isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0;
  };

  const handleNext = () =>{
    if(!isEmptyObject(selectedAddress)){
      console.log("selectedAddress in checkoutAddress", selectedAddress)
      navigate("/orderSummary", { state: selectedAddress})
    }else{
      toast.error("Choose a address!")
    }
  }

  const handleSave = (newAddress) => {
    if (currentAddress) {
      updateAddress(newAddress);
    } else {
      // Adding a new address
      addAddress(newAddress);
    }
    togglePopup();
  };

  const steps = ["Login", "Address", "Order Summary", "Payment"];

  return (
    <div className="w-full">
      {!isOpen && (
        <div>
          <div className="px-2 md:px-20">
            <Stepper activeStep={2}>
              {steps.map((label) => {
                return (
                  <Step>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </div>

          <div className="w-full h-fit pt-10 pb-5 px-2 mt-4 md:py-10 md:px-20">
            <div className="flex justify-end mb-2">
              <Button variant="contained" color="primary" onClick={handleNext}>
                <p className='font-bold'>Next</p>
              </Button>
            </div>
            <div className="space-y-2">
              {addresses?.map((address) => (
                <CheckoutAddressCard
                  key={address.addressId}
                  address={address}
                  selected={selectedAddress.addressId === address.addressId}
                  onSelect={() => handleAddressChange(address)}
                  onEdit={handleEdit}
                />
              ))}
            </div>

            <div className=" flex justify-end">
              <Button
                variant="outlined"
                style={{
                  border: "1px dashed #B3B3B3",
                  borderRadius: "4px",
                  width: "100%",
                  height: "45px",
                  background: "transparent",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "19px",
                  marginBottom: "20px",
                  cursor: "pointer",
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => {
                  setCurrentAddress(null);
                  togglePopup();
                }}
              >
                + Add New Address
              </Button>
            </div>
          </div>
        </div>
      )}
      {isOpen && (
        <div className="flex justify-center">
          <AddAddressCard
            address={currentAddress}
            togglePopup={togglePopup}
            onSave={handleSave}
          />
        </div>
      )}
    </div>
  );
}

export default CheckoutAddressPage;
