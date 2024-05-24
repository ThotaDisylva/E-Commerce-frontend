
import React, { useState } from 'react';
import { Button } from '@mui/material';
import AddressCard from '../../../components/SavedAddress/AddressCard';
import AddAddressCard from '../../../components/CheckoutAddress/AddAddressCard';

function SavedAddressPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentAddress, setCurrentAddress] = useState(null);
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      add: {
        name: "skp",
        phone: "6371949629",
        line1: "Aditya Hyundai, Plot No 2132/5132",
        landmark: "Hal Plot No 342/P, Lewis Road, Dist, BJB Nagar",
        city: "Bhubaneswar",
        state: "Odisha",
        pincode: "751014",
        type: "Home"
      }
    },
    
  ]);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleEdit = (address) => {
    setCurrentAddress(address);
    setIsOpen(true);
  };

  const handleSave = (newAddress) => {
    if (currentAddress) {
      // Editing existing address
      setAddresses(prevAddresses =>
        prevAddresses.map(address =>
          address.add.phone === newAddress.phone ? { ...address, add: newAddress } : address
        )
      );
    } else {
      // Adding a new address
      setAddresses(prevAddresses => [
        ...prevAddresses,
        { id: prevAddresses.length + 1, add: newAddress }
      ]);
    }
    togglePopup();
  };

  return (
    <div className='w-full'>
      {!isOpen && (
        <div>
          <div className='w-full flex justify-end'>
            <Button
              className='w-fit'
              variant="contained"
              onClick={() => { setCurrentAddress(null); togglePopup(); }}
              sx={{
                color: "#fff",
                fontWeight: "bold",
                padding: "8px 16px",
                borderRadius: "5px",
                border: "none",
                marginTop: "5px",
              }}
            >
              Add Address
            </Button>
          </div>
          <div className='w-full lg:w-[90%] h-fit pt-10 pb-5 px-2 md:p-10 space-y-2'>
            {addresses.map((address) => (
              <AddressCard key={address.id} address={address.add} onEdit={handleEdit} />
            ))}
          </div>
        </div>
      )}
      {isOpen && (
        <div className='flex justify-center'>
          <AddAddressCard address={currentAddress} togglePopup={togglePopup} onSave={handleSave} />
        </div>
      )}
    </div>
  );
}

export default SavedAddressPage;
