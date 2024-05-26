
import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import AddressCard from '../../../components/SavedAddress/AddressCard';
import AddAddressCard from '../../../components/CheckoutAddress/AddAddressCard';
import useAddressInfo from '../../../../hooks/useAddressInfo';

function SavedAddressPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentAddress, setCurrentAddress] = useState(null);
  const {loading, savedAddresses, addAddress, updateAddress} = useAddressInfo();
  const [addresses, setAddresses] = useState([]);



  useEffect(() => {
    if (!loading) {
        setAddresses(savedAddresses);
    }
}, [savedAddresses, loading]);

console.log("address", addresses)

console.log("savedAddresses",savedAddresses)
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleEdit = (address) => {
    setCurrentAddress(address);
    setIsOpen(true);
  };

  const handleSave = (newAddress) => {
    if (currentAddress) {
      updateAddress(newAddress)
    } else {
      // Adding a new address
      addAddress(newAddress)
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
            {addresses?.map((address) => (
              <AddressCard key={address.addressId} address={address} onEdit={handleEdit} />
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
