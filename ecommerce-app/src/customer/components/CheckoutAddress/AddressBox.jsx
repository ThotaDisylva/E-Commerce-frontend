import React, { useState } from "react";
import { Button } from "@mui/material";
import CheckoutAddressCard from "./CheckoutAddressCard";
import Popup from "reactjs-popup";
import AddAddressCard from "./AddAddressCard";
import EditAddressCard from "./EditAddressCard";

function AddressBox() {
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [editingAddress, setEditingAddress] = useState(null);
  const [addAddressOpen, setAddAddressOpen] = useState(false); // State for AddAddressCard popup
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      addressObj: {
        name: "disylva",
        type: "work",
        addressline1:
          "Aditya Hyundai, Plot No 2132/5132, Hal Plot No 342/P, Lewis Road, Dist, BJB Nagar",
        city: "bhubaneswar",
        state: "Odisha",
        pincode: "751014",
        phoneNo: "6371949629",
      },
    },
    {
      id: 2,
      addressObj: {
        name: "swasthik",
        type: "home",
        addressline1:
          "GIPC, Plot No 2132/5132, Hal Plot No 342/P, Lewis Road, Dist, BJB Nagar",
        city: "bhubaneswar",
        state: "Odisha",
        pincode: "751014",
        phoneNo: "6371949629",
      },
    },
    {
      id: 3,
      addressObj: {
        name: "vasu",
        type: "home",
        addressline1:
          "Dominos, Plot No 2132/5132, Hal Plot No 342/P, Lewis Road, Dist, BJB Nagar",
        city: "bhubaneswar",
        state: "O",
        pincode: "751014",
        phoneNo: "6371949629",
      },
    },
  ]);

  const handleAddressChange = (id) => {
    setSelectedAddressId(id);
  };

  const handleEdit = (address) => {
    console.log("Edit address clicked:", address);
    setEditingAddress(address);
  };

  const handleCloseEdit = () => {
    setEditingAddress(null);
  };
  const handleCloseEdit2 = () => {
    setAddingAddress(null);
  };

  const handleSaveEdit = (updatedAddress) => {
    setAddresses((prevAddresses) =>
      prevAddresses.map((address) =>
        address.id === editingAddress.id
          ? { ...address, addressObj: updatedAddress }
          : address
      )
    );
    setEditingAddress(null);
  };

  const handleClose = () => {
    setAddAddressOpen(false);
    console.log("addressStae", addAddressOpen);
  };

  return (
    <div>
      <div className='w-full lg:w-[90%] h-fit pt-10 pb-5 px-2 md:p-10 space-y-2'>
        {addresses.map((address) => (
            <CheckoutAddressCard
              key={address.id}
              add={address.addressObj}
              selected={selectedAddressId === address.id}
              onSelect={() => handleAddressChange(address.id)}
              onEdit={() => handleEdit(address)}
            />
          ))}
      </div>
        

      <div className="popup-content hide-scrollbar">
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
            setAddAddressOpen(true);
            console.log("state", addAddressOpen);
          }}
        >
          + Add New Address
        </Button>
      </div>
      {isOpen && (
        <div className='flex justify-center'>
          <AddAddressCard address={currentAddress} togglePopup={togglePopup} onSave={handleSave} />
        </div>
      )}
    </div>
  );
}

export default AddressBox;
