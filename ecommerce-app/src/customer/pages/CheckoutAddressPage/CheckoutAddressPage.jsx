
import React from 'react';
import { Typography,Stepper, Step, StepLabel, Button } from '@mui/material';
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
      
        <div className='mt-7 space-y-4'>
          <div className='flex justify-between'>
          <Typography style={{ fontWeight: 'bold', fontSize: '15px', textAlign: 'left' }}>Delivery Address</Typography>
          <div className=''><Button variant='contained' color='primary' >Next</Button></div>
          </div>
          <AddressBox />
        </div>
        
    </div>
  );
}

export default CheckoutAddressPage;

