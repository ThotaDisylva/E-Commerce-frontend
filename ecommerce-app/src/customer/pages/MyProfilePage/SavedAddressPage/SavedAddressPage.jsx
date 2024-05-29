
import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import AddressCard from '../../../components/SavedAddress/AddressCard';
import AddAddressCard from '../../../components/CheckoutAddress/AddAddressCard';
import useAddressInfo from '../../../../hooks/useAddressInfo';

function SavedAddressPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentAddress, setCurrentAddress] = useState(null);
  const {loading, savedAddresses, addAddress, updateAddress, deleteAddress} = useAddressInfo();
  const [addresses, setAddresses] = useState([]);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [deleteAddressId, setDeleteAddressId] = useState("");

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
  const handleDelete = (id) => {
    setShowDeletePopup(true);
    setDeleteAddressId(id);
  };

  const confirmDelete = () => {
    setShowDeletePopup(false);
    deleteAddress(deleteAddressId);
  };

  const cancelDelete = () => {
    setShowDeletePopup(false);
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
              <AddressCard key={address.addressId} address={address} onEdit={handleEdit} editable={true} onDelete={handleDelete} />
            ))}
          </div>
        </div>
      )}
      {isOpen && (
        <div className='flex justify-center'>
          <AddAddressCard address={currentAddress} togglePopup={togglePopup} onSave={handleSave} />
        </div>
      )}
      {showDeletePopup && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4">Are you sure you want to delete the address?</p>
            <div className="flex space-x-4">
              <button
                onClick={confirmDelete}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Yes
              </button>
              <button
                onClick={cancelDelete}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SavedAddressPage;
