import React, { useEffect } from 'react';
import { Box, Stepper, Step, StepLabel, Typography } from '@mui/material';
import productsData from '../../components/ProductCard/ProductsData';
import CartItem from '../../components/OrderSummary/CartItem';
import Price from '../../components/OrderSummary/Price';
import { useUserInfoContext } from '../../../context/UserInfoContext';



const steps = ['Login', 'Address', 'Order Summary', 'Payment'];

export default function OrderSummaryPage() {


  const {choosedAddress, cartItemsInfo,setCartItemsInfo,  priceDetails, setPriceDetails} = useUserInfoContext();
  // console.log("cartItem inside ordersummary -> ",cartItemsInfo);
  // console.log("priceDetails inside ordersummary -> ",priceDetails)


function isObjEmpty (obj) {
    return Object.keys(obj).length === 0;
}

  useEffect(()=>{
    if(isObjEmpty(cartItemsInfo)){
      setCartItemsInfo(JSON.parse(localStorage.getItem("cart_items_info")))
    }
      

    if(isObjEmpty(priceDetails)){
      setPriceDetails(JSON.parse(localStorage.getItem("cart_price_details")))
    }
  },[]);

  return (
    <div>
      <Box sx={{ padding: {md:'0px 5rem'},  }}>
        <Stepper activeStep={3}>
          {steps.map((index, label) => {
            return (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>


          
          <div>
            <div>
              <div className='' style={{ border: '1px solid #ccc', padding: '5px', position: 'relative', boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", marginTop: '30px' }}>
                <Typography variant="body1" style={{ fontWeight: 'bold', textAlign: 'left', marginBottom: '3px',marginTop:'5px',marginLeft:'10px' }}>{choosedAddress.name}</Typography>
                <Typography variant="body1" style={{ textAlign: 'left', fontSize: '15px', marginBottom: '8px', marginLeft: '10px',marginTop:'7px' }}>
                  Mumbai,chincholi bandar,
                  Mind space,400001 Mumbai maharastra 400001
                </Typography>
                <Typography variant="body1" style={{fontWeight:'bold',textAlign:'left',marginLeft:'10px'}}>Phone Number</Typography>
                <Typography variant="body1" style={{textAlign:'left',marginLeft:'10px'}}>{choosedAddress.phoneNumber}</Typography>
              </div>
            </div>
            <div className='mt-5 lg:flex'>
              <div className='lg:w-[71%] lg:mr-5 '>
                {cartItemsInfo.cartItems?.map((cart)=>(
                  
                  <CartItem key={cart.cartId} ProductsData={cart} />
                ))}
                
              </div>
              <div >
              <Price 
                        actualTotalPrice={priceDetails.actualTotalPrice} 
                        totalDisountedPrice={priceDetails.totalDiscountedPrice} 
                        totalDeliveryCharges={priceDetails.totalDeliveryCharge} 
                        totalPayableAmount={priceDetails.totalPayablePrice}
                        buttonText={'Checkout'}
                    />
              </div>
            </div>
          </div>
        
      </Box>
    </div>
  );
}

