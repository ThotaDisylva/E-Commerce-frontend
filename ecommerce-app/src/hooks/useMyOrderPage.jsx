import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useOrderDetails from './useOrderDetails';
import { useUserInfoContext } from '../context/UserInfoContext';
import toast from 'react-hot-toast';

const useMyOrderPage = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    const jwtToken = localStorage.getItem('jwtToken');
    const { cartItemsInfo } = useUserInfoContext();
    const {createOrderDetails} = useOrderDetails();

    const loadOrderPage = async () => {
      
        setLoading(true);
        if (jwtToken) {
            try {
                const response = await axios.get('http://localhost:8080/api/order/getAll', {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`
                    }
                });
                setOrders(response.data.orders);
            } catch (error) {
                console.error("Error loading order page:", error.response ? error.response.data : error.message);
            } finally {
                setLoading(false);
            }
        } else {
            console.error("JWT Token not found in local storage");
            setLoading(false);
        }
    }

   
    
  

    const createOrder = async(orderInfo) =>{

        

        setLoading(true);
        if (jwtToken) {
            try {
                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtToken}`,
                };
                console.log("Headers being sent:", headers);
                console.log("orderInfo",orderInfo)

    
                const response = await axios.post("http://localhost:8080/api/order/create", orderInfo, { headers });
    
                if (response.status === 201) {
                    console.log("Order added successfully!");
                    setOrders(prevOrders => [...prevOrders,orderInfo ]);
                    // should get orderId in response;
                    // toast.success("Order added successfully!");

                        const data = response.data;

                        const requestOrderDetails = {
                            orderId: data.orderId,
                            orderProductsInfo: cartItemsInfo.map(cartItem => ({
                                productId: cartItem.productId,
                                quantity: cartItem.quantity,
                                discountedPrice: Math.ceil(cartItem.price-(cartItem.price*cartItem.discountPercent/100)),
                            }))
                        };
                   await createOrderDetails(requestOrderDetails);
                } else {
                    console.error("Unexpected response status:", response.status);
                }
            } catch (error) {
                console.error("Error creating order :", error.response ? error.response.data : error.message);
            } finally {
                setLoading(false);
            }
        } else {
            console.error("JWT Token not found in local storage");
            setLoading(false);
        }
    }

    return {loading, orders, loadOrderPage , createOrder};
}

export default useMyOrderPage;
