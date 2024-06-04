// hooks/useCartPageInfo.jsx
import React, { useEffect, useState } from 'react';
import { useUserInfoContext } from '../context/UserInfoContext';
import axios from 'axios';
import usePaymentSuccessfull from './usePaymentSuccessfull';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const useCartPageInfo = () => {
    const { cartItemsInfo, setCartItemsInfo, cartItemCount, setCartItemCount, setPriceDetails } = useUserInfoContext();
    const [loading, setLoading] = useState(false);
    
    const navigate = useNavigate();    

    const cartPageInfo = async () => {

        const jwtToken = localStorage.getItem('jwtToken');
        setLoading(true)
        if (jwtToken) {
            try {
                const response = await axios.get('http://localhost:8080/api/cart/items', {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`
                    }
                });

                const data = response.data;
                console.log("cartitem from data",data)
                localStorage.setItem("cart_items_info",JSON.stringify(data.cartItems))
                setCartItemsInfo(data.cartItems);
                console.log("cartitem",cartItemsInfo);
                calculatePriceDetails(data.cartItems);

            } catch (error) {
                console.error('Error fetching cart page info:', error);
            }finally {
                setLoading(false)
            }

        } else {
            console.error("JWT Token not found in local storage");
            setLoading(false);
        }
    };

    // useEffect(() => {
    //     if(jwtToken){
    //         console.log("inside useEffect useCartPageInfo")
    //         cartPageInfo();  
    //     }
    // }, []);

    const calculatePriceDetails = (cartItems) => {
        let actualTotalPrice = 0;
        let totalDiscountedPrice = 0;
        let totalDeliveryCharge = 0;

        cartItems.forEach(item => {
            actualTotalPrice =  Math.floor(actualTotalPrice + item.price * item.quantity);
            totalDiscountedPrice = Math.floor(totalDiscountedPrice + (item.price * item.discountPercent / 100) * item.quantity);
            totalDeliveryCharge = Math.floor(totalDeliveryCharge +item.deliveryCharge);
        });

        const totalPayablePrice = actualTotalPrice + totalDeliveryCharge - totalDiscountedPrice;

        const priceDetails = {
            actualTotalPrice,
            totalDiscountedPrice,
            totalDeliveryCharge,
            totalPayablePrice
        };

        localStorage.setItem("cart_price_details", JSON.stringify(priceDetails));
        setPriceDetails(priceDetails);
        
    };

    const reduceCartItem = async (cartId) => {
        
        const jwtToken = localStorage.getItem('jwtToken');
        setLoading(true)
        if (jwtToken) {
            try {
                const response = await axios.put(`http://localhost:8080/api/cart/reduce/${cartId}`, {}, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`
                    }
                });

                if (response.status === 200) {
                    console.log('Item quantity reduced successfully');

                    const updatedCartItems = cartItemsInfo?.map(item => {
                        if (item.cartId === cartId && item.quantity > 1) {
                            return { ...item, quantity: item.quantity - 1 };
                        }
                        return item;
                    });

                    setCartItemCount(prevCount => prevCount - 1);
                    setCartItemsInfo(updatedCartItems);
                    calculatePriceDetails(updatedCartItems);

                    localStorage.setItem("cart_items_count", cartItemCount)
                    localStorage.setItem("cart_items_info", JSON.stringify(cartItemsInfo))

                }
            } catch (error) {
                console.error('Error reducing cart item quantity:', error);
            }finally {
                setLoading(false)
            }

        } else {
            console.error("JWT Token not found in local storage");
            setLoading(false);
        }
    };

    const addCartItem = async (productId) => {
        const jwtToken = localStorage.getItem('jwtToken');
        setLoading(true);

        if (jwtToken) {
            try {
                const response = await axios.post(`http://localhost:8080/api/cart/add/${productId}`, {}, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`
                    }
                });
    
                if (response.status === 201) {
                    console.log('Item added to cart successfully');
                    console.log("cartItems inside add", cartItemsInfo);
                    const updatedCartItems = cartItemsInfo?.map(item => {
                        if (item.productId === productId) {
                            return { ...item, quantity: item.quantity + 1 };
                        }
                        return item;
                    });
    
                    setCartItemCount(prevCount => prevCount + 1);
                    console.log("after", cartItemCount);
                    setCartItemsInfo(updatedCartItems);
                    calculatePriceDetails(updatedCartItems);
    
                    localStorage.setItem("cart_items_count", cartItemCount);
                    localStorage.setItem("cart_items_info", JSON.stringify(cartItemsInfo));
                }
            } catch (error) {
                if (error.response) {
                    const { status, data } = error.response;
                    if (status === 400) {
                        toast.error(data.message || 'Product quantity exceeded.');
                    } else if (status === 500) {
                        toast.error('An unexpected error occurred. Please try again later.');
                    } else {
                        toast.error('Error adding cart item.');
                    }
                } else {
                    toast.error('Error adding cart item.');
                }
                console.error('Error adding cart item:', error);
            } finally {
                setLoading(false);
            }
        } else {
            console.error("JWT Token not found in local storage");
            setLoading(false);
        }
    };

    const removeCartItem = async (cartId, quantity) => {

        const jwtToken = localStorage.getItem('jwtToken');
        setLoading(true)
        if (jwtToken) {
            try {
                const response = await axios.delete(`http://localhost:8080/api/cart/remove/${cartId}`, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`
                    }
                });

                if (response.status === 200) {
                    console.log('Item removed from cart successfully');

                    const updatedCartItems = cartItemsInfo?.filter(item => item.cartId !== cartId);

                    console.log("updatedCartItems", updatedCartItems);

                    setCartItemCount(prevCount => prevCount - quantity);
                    
                    
                    setCartItemsInfo(updatedCartItems);
                    
                    calculatePriceDetails(updatedCartItems);

                    localStorage.setItem("cart_items_count", cartItemCount)
                    localStorage.setItem("cart_items_info", JSON.stringify(cartItemsInfo))
                }
            } catch (error) {
                console.error('Error removing cart item:', error);
            }finally {
                setLoading(false)
            }

        } else {
            console.error("JWT Token not found in local storage");
            setLoading(false);
        }
    };

    const removeAllCartItems = async() =>{

        const jwtToken = localStorage.getItem('jwtToken');
        setLoading(true)
        if (jwtToken) {
            try {
                const response = await axios.delete(`http://localhost:8080/api/cart/remove/all`, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`
                    }
                });

                if (response.status === 200) {
                    console.log('All items removed from cart successfully');

                    setCartItemsInfo([]);
                    setCartItemCount(0);
                    calculatePriceDetails([]);

                    localStorage.setItem("cart_items_count", cartItemCount)
                    localStorage.setItem("cart_items_info", JSON.stringify(cartItemsInfo))

                    
                }
            } catch (error) {
                console.error('Error removing all cart item:', error);
            }finally {
                setLoading(false)
            }

        } else {
            console.error("JWT Token not found in local storage");
            setLoading(false);
        }
    }

    return { loading, cartPageInfo, reduceCartItem, addCartItem, removeCartItem, removeAllCartItems };
}

export default useCartPageInfo;
