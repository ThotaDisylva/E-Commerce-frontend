import React, { useState } from 'react';
import ProductCardCart from '../../components/Cart/ProductCardCart';
import Checkout from '../../components/Cart/Checkout';
import { useEffect } from 'react';
import useCartPageInfo from '../../../hooks/useCartPageInfo';
import { useUserInfoContext } from '../../../context/UserInfoContext';
import OrderSummaryPage from '../OrderSummaryPage/OrderSummaryPage';
const CartPage=()=>{


    const {cartPageInfo} = useCartPageInfo();
    const {cartItemsInfo, priceDetails} = useUserInfoContext();

    console.log("data-->",cartItemsInfo)

    //later fix: it should not fetch data from backend, everytime a user open cart who have not added any product to cart 
    useEffect(() => {
        if(cartItemsInfo.length===0){
            cartPageInfo();
        }
    }, []);
    
    return(
        <div>
            <div className='lg:grid grid-cols-3 lg:px-16 relative lg:space-x-10'>
                <div className='col-span-2 '>
                    {cartItemsInfo?.map((cartItem) => (
                        <ProductCardCart key={cartItem.cartId} cartItem={cartItem}/>
                    ))}
                </div>
                <div className='top-0 w-full col-span-1 flex-1'>
                    <Checkout 
                        actualTotalPrice={priceDetails.actualTotalPrice} 
                        totalDisountedPrice={priceDetails.totalDiscountedPrice} 
                        totalDeliveryCharges={priceDetails.totalDeliveryCharge} 
                        totalPayableAmount={priceDetails.totalPayablePrice}
                        // nextPage={"orderSummary"}
                    />
                </div>
            </div>
        </div>
    )
}
export default CartPage;
