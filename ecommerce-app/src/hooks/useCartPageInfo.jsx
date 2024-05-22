// hooks/useCartPageInfo.jsx
import React from 'react';
import { useUserInfoContext } from '../context/UserInfoContext';
import axios from 'axios';

const useCartPageInfo = () => {
    const { cartItemsInfo, setCartItemsInfo, cartItemCount, setCartItemCount, setPriceDetails } = useUserInfoContext();

    const cartPageInfo = async () => {
        const jwtToken = localStorage.getItem('jwtToken');
        if (jwtToken) {
            try {
                const response = await axios.get('http://localhost:8080/api/cart/items', {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`
                    }
                });

                const data = response.data;
                setCartItemsInfo(data.cartItems);
                setCartItemCount(data.cartItems.length);
                calculatePriceDetails(data.cartItems);

            } catch (error) {
                console.error('Error fetching cart page info:', error);
            }
        }
    };

    const calculatePriceDetails = (cartItems) => {
        let actualTotalPrice = 0;
        let totalDiscountedPrice = 0;
        let totalDeliveryCharge = 0;

        cartItems.forEach(item => {
            actualTotalPrice += item.price * item.quantity;
            totalDiscountedPrice += (item.price - (item.price * item.discountPercent / 100)) * item.quantity;
            totalDeliveryCharge += item.deliveryCharge;
        });

        const totalPayablePrice = actualTotalPrice + totalDeliveryCharge - totalDiscountedPrice;

        const priceDetails = {
            actualTotalPrice,
            totalDiscountedPrice,
            totalDeliveryCharge,
            totalPayablePrice
        };

        setPriceDetails(priceDetails);
    };

    const reduceCartItem = async (cartId) => {
        const jwtToken = localStorage.getItem('jwtToken');
        if (jwtToken) {
            try {
                const response = await axios.put(`http://localhost:8080/api/cart/reduce/${cartId}`, {}, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`
                    }
                });

                if (response.status === 200) {
                    console.log('Item quantity reduced successfully');

                    const updatedCartItems = cartItemsInfo.map(item => {
                        if (item.cartId === cartId && item.quantity > 1) {
                            return { ...item, quantity: item.quantity - 1 };
                        }
                        return item;
                    });

                    setCartItemCount(prevCount => prevCount - 1);
                    setCartItemsInfo(updatedCartItems);
                    calculatePriceDetails(updatedCartItems);
                }
            } catch (error) {
                console.error('Error reducing cart item quantity:', error);
            }
        }
    };

    const addCartItem = async (productId) => {
        const jwtToken = localStorage.getItem('jwtToken');
        if (jwtToken) {
            try {
                const response = await axios.post(`http://localhost:8080/api/cart/add/${productId}`, {}, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`
                    }
                });

                if (response.status === 201) {
                    console.log('Item added to cart successfully');

                    const updatedCartItems = cartItemsInfo.map(item => {
                        if (item.productId === productId) {
                            return { ...item, quantity: item.quantity + 1 };
                        }
                        return item;
                    });

                    setCartItemCount(prevCount => prevCount + 1);
                    setCartItemsInfo(updatedCartItems);
                    calculatePriceDetails(updatedCartItems);
                }
            } catch (error) {
                console.error('Error adding cart item:', error);
            }
        }
    };

    const removeCartItem = async (cartId, quantity) => {
        const jwtToken = localStorage.getItem('jwtToken');
        if (jwtToken) {
            try {
                const response = await axios.delete(`http://localhost:8080/api/cart/remove/${cartId}`, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`
                    }
                });

                if (response.status === 200) {
                    console.log('Item removed from cart successfully');

                    const updatedCartItems = cartItemsInfo.filter(item => item.cartId !== cartId);

                    setCartItemsInfo(updatedCartItems);
                    setCartItemCount(prevCount => prevCount - quantity);
                    calculatePriceDetails(updatedCartItems);
                }
            } catch (error) {
                console.error('Error removing cart item:', error);
            }
        }
    };

    return { cartPageInfo, reduceCartItem, addCartItem, removeCartItem };
}

export default useCartPageInfo;
