
import React from 'react';
import { Typography,Stepper, Step, StepLabel } from '@mui/material';
import AddressBox from '../../components/CheckoutAddress/AddressBox';



function CheckoutAddressPage() {

  const steps = ['Login', 'Address', 'Order Summary', 'Payment'];

  return (
    <div className='lg:px-10'>
      <div>
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
      
        <div className='mt-7'>
          <Typography style={{ fontWeight: 'bold', fontSize: '15px', textAlign: 'left', marginBottom: '10px' }}>Delivery Address</Typography>
          <AddressBox />
        </div>
        
    </div>
  );
}

export default CheckoutAddressPage;

