import React from 'react';
import { Card, Typography } from '@mui/material';
import { styled } from '@mui/system';
import 'tailwindcss/tailwind.css';

const StyledCard = styled(Card)({
  borderRadius: '16px',
  transition: 'transform 0.1s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 8px 16px rgba(0, 98, 255, 0.7)',
  },
});
    
const MoreText = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '1px',
  height: '1px',
  borderRadius: '50%',
  color: '#4caf50',
  fontWeight: 'bolder'
});

const OrderCard = ({ orderInfo }) => {
  const { orderId, totalAmount, productImages, deliveryStatus } = orderInfo;
  const productNames="Apple iPhone 15 Pro (128 GB) - White Titanium Apple iPhone 15 Pro (128 GB) - White Titanium Apple iPhone 15 Pro (128 GB) - White Titanium ";
  return (
    <div className='w-full'>
      <StyledCard className="card-stepper flex items-center w-full m-3 p-4">
        <div className='sm:flex w-full'>
          {/* Images Div */}
          <div className="w-full flex justify-center items-center space-x-1 sm:w-2/6">
            {productImages.slice(0, 2).map((productImage, index) => (
              <img key={index} className="w-20 h-20 object-cover" src={productImage} alt="Product" />
            ))}
            {productImages.length > 2 && (
              <MoreText variant="subtitle1" className='p-3'>
                +{productImages.length - 2}
              </MoreText>
            )}
          </div>
          {/* Product Names and Order ID Div */}
          <div className="flex flex-col justify-between w-full sm:w-3/6 pl-4">
            <div className="flex items-start w-full overflow-hidden">
            <Typography variant="body2" className="mb-1 overflow-hidden font-custom" style={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                fontWeight:"bold"
                
              }}>
                {productNames}
              </Typography>
            </div>
            <div className="flex flex-col items-start w-full text-gray-400">
              <span style={{ fontSize:"10px" }}>Order ID {orderId}</span>
              <span style={{ fontSize: "10px" }}>
                {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
              </span>
            </div>
          </div>
          {/* Total Amount and Status Div */}
          <div className="flex flex-row sm:flex-col justify-between items-end sm:w-1/6">
            <Typography variant="body2" className="font-bold text-body px-1 mb-1">
              ₹{totalAmount}
            </Typography>
            <Typography variant="subtitle1" className={`font-bold text-body mb-1 rounded-xl px-2 py-1 ${deliveryStatus === 'Pending' ? 'bg-purple-500 text-white' : (deliveryStatus === 'Cancelled' ? 'bg-red-500 text-white' : (deliveryStatus === 'Delivered' ? 'bg-green-500 text-white': 'bg-yellow-400 text-white'))}`}>
              {deliveryStatus}
            </Typography>
          </div>
        </div>
      </StyledCard>
    </div>
  );
};

export default OrderCard;
