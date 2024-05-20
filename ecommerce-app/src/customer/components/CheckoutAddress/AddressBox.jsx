
import React from 'react';
import { Button } from '@mui/material';
import CheckoutAddressCard from './CheckoutAddressCard';

function AddressBox() {
  return (
    <div>
      <CheckoutAddressCard/>
      <div>
        <Button variant="outlined"  style={{border:'1px dashed #B3B3B3',borderRadius:'4px',
              width:'100%',
              height: "45px",
              background: 'transparent',
              fontweight: "500",
              fontSize: '16px',
              lineHeight: '19px',
              marginBottom: '20px',
              cursor: 'pointer',
              marginTop:'20px',
              display:'flex'
          
        }}>+ Add New Address</Button>
      </div>
    </div>
    
  );
}

export default AddressBox;




