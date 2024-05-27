import React from 'react';
import { Box, Button, Divider, Grid, Typography } from '@mui/material';
const Price = ({actualTotalPrice, totalDisountedPrice, totalDeliveryCharges, totalPayableAmount, buttonText, handlePaymentClick}) => {


  return (
    <div className='w-full'>
        <Box sx={{backgroundColor:'white  ' ,padding: '10px',minWidth:"18rem", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", borderRadius:"5px"}}>
          <Typography sx={{textTransform: 'uppercase', fontWeight:"bold" ,opacity: 0.6, textAlign: 'left', fontSize: '15px', marginTop:'10px',marginBottom:'15px'}} gutterBottom>
          PRICE DETAILS
            </Typography>
            <Divider  />
          <Box sx={{ marginBottom: '5px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '10px' }}>
              <Typography sx={{ color: '#313131',fontSize: '15px',fontWeight:'bold' }}>Price</Typography>
              <Typography sx={{ fontSize: '15px',fontWeight:'bold' }}>{`₹${actualTotalPrice}`}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '10px' }}>
              <Typography sx={{ color: '#313131',fontSize: '15px', marginRight: '20px',fontWeight:'bold'}}>Discount</Typography>
              <Typography sx={{ color: '#008000', fontSize: '15px',fontWeight:'bold' }}>{`-₹${totalDisountedPrice}`}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '10px' }}>
              <Typography style={{ color: '#313131', fontSize: '15px', marginRight: '20px',fontWeight:'bold' }}>Delivery charges</Typography>
              <Typography style={{ color: '#008000', fontSize: '15px',fontWeight:'bold' }}>{`₹${totalDeliveryCharges}`}</Typography>
            </Box>
            <Divider  sx={{marginTop:"10px"}}/>            <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '10px', fontWeight: 'bold' }}>
              <Typography style={{ marginRight: '20px', fontSize: '15px',fontWeight:'bolder' }}>Total Amount</Typography>
              <Typography style={{ color: '#008000', fontSize: '15px', fontWeight: 'bolder' }}>{`₹${totalPayableAmount}`}</Typography>
            </Box>
          </Box>
        <Grid item xs={12} md={12} sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <Button variant="contained" onClick={handlePaymentClick} sx={{ backgroundColor:'#2196f3', color: 'white', fontWeight: 'bold', padding: '8px 16px', borderRadius: '5px', border: 'none', width: '100%',marginTop:'10px', '&:hover': {backgroundColor: '#4a90e2', color: 'white',} }}>
          {buttonText}
        </Button>
      </Grid>
        </Box>
    </div>
  );
};
export default Price;
