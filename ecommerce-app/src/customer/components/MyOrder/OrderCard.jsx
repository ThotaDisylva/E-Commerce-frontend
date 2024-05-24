import { Typography, Box } from '@mui/material';
import React from 'react';
export default function OrderCard({orderInfo}) {

  const {orderId,totalAmount, productImages, deliveryStatus} = orderInfo;
  return (
    <div className="hover:bg-gray-100 transition duration-300 ease-in-out mb-4">
      <div className="bg-white pb-5 pt-4 pr-6 pl-6 rounded-md w-full shadow-md">
        <div className="flex justify-between mb-4 bg-slate-300 rounded-lg pl-2 pr-2 ">
          <div className='pr-5'>
            <Typography variant="subtitle1">Order id: {orderId}</Typography>
          </div>
          <div className='flex items-center text-center'>
            <Typography variant="subtitle1">₹{totalAmount}</Typography>
          </div>
        </div>
        <div className="sm:flex space-y-4 justify-between items-center ">
          <div className="flex space-x-1 justify-center sm:justify-start items-center">
            {productImages.slice(0,2).map((productImage)=>(
              <img className="w-20 object-cover " src={productImage} alt={"Product Image"} />
            ))}
            {productImages.length>2 && (<Typography className='w-fit' variant="subtitle1">+{productImages.length-2} more</Typography>)}
          </div>
          <div className=''>
            <div className='flex justify-center'>
            <p className='border border-green-700 text-green-500 rounded-xl p-2'>Status: {deliveryStatus}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}