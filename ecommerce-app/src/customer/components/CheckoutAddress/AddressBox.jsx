import React, { useState } from 'react';
import { Button } from '@mui/material';
import CheckoutAddressCard from './CheckoutAddressCard';
import Popup from 'reactjs-popup';
import AddAddressCard from './AddAddressCard';
import EditAddressCard from './EditAddressCard';

function AddressBox() {
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [editingAddress, setEditingAddress] = useState(null);
  const [addresses, setAddresses] = useState([
    { id: 1, addressObj: { name:'disylva', type:'work', addressline1: 'Aditya Hyundai, Plot No 2132/5132, Hal Plot No 342/P, Lewis Road, Dist, BJB Nagar', city: 'bhubaneswar', state: 'Odisha', pincode: '751014', phoneNo: '6371949629' } },
    { id: 2, addressObj: { name:'swasthik', type:'home', addressline1: 'GIPC, Plot No 2132/5132, Hal Plot No 342/P, Lewis Road, Dist, BJB Nagar', city: 'bhubaneswar', state: 'Odisha', pincode: '751014', phoneNo: '6371949629' } },
    { id: 3, addressObj: { name:'vasu', type:'home', addressline1: 'Dominos, Plot No 2132/5132, Hal Plot No 342/P, Lewis Road, Dist, BJB Nagar', city: 'bhubaneswar', state: 'O', pincode: '751014', phoneNo: '6371949629' } }
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

  const handleSaveEdit = (updatedAddress) => {
    setAddresses((prevAddresses) =>
      prevAddresses.map((address) =>
        address.id === editingAddress.id ? { ...address, addressObj: updatedAddress } : address
      )
    );
    setEditingAddress(null);
  };

  return (
    <div>
      {addresses.map((address) => (
        <CheckoutAddressCard
          key={address.id}
          add={address.addressObj}
          selected={selectedAddressId === address.id}
          onSelect={() => handleAddressChange(address.id)}
          onEdit={() => handleEdit(address)}
        />
      ))}

      <div>
        <Popup
          modal
          trigger={
            <Button
              variant="outlined"
              style={{
                border: '1px dashed #B3B3B3',
                borderRadius: '4px',
                width: '100%',
                height: "45px",
                background: 'transparent',
                fontWeight: "500",
                fontSize: '16px',
                lineHeight: '19px',
                marginBottom: '20px',
                cursor: 'pointer',
                marginTop: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              + Add New Address
            </Button>
          }
          contentStyle={{
            width: '50vw',
            height: '100vh',
            margin: 'auto',
            overflowY: 'scroll',
            borderRadius: '10px',
            padding: '65px'
          }}
          overlayStyle={{
            display: 'flex',
            position: 'absolute',
            zIndex: "1000",
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0, 0, 0, 0.5)',
          }}
          lockScroll
        >
          <div className="popup-content hide-scrollbar">
            <AddAddressCard />
          </div>
        </Popup>

        <Popup
          modal
          open={!!editingAddress}
          onClose={handleCloseEdit}
          contentStyle={{
            width: '46vw',
            height: '100vh',
            margin: 'auto',
            overflowY: 'scroll',
            borderRadius: '10px',
            padding: '20px',
            
          }}
          overlayStyle={{
            display: 'flex',
            position: 'absolute',
            zIndex: "1000",
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0, 0, 0, 0.5)',
          }}
          lockScroll
        >
          <div className="popup-content hide-scrollbar">
            {editingAddress && (
              <EditAddressCard
                address={editingAddress.addressObj}
                onClose={handleCloseEdit}
                onSave={handleSaveEdit}
              />
            )}
          </div>
        </Popup>
      </div>
    </div>
  );
}

export default AddressBox;
