import React, { useEffect, useState } from 'react'
import axios from 'axios';
import useCartPageInfo from './useCartPageInfo';
import toast from 'react-hot-toast';
import usePaymentSuccessfull from './usePaymentSuccessfull';

const useOrderDetails = () => {
    const [orderDetails, setOrderDetails] = useState([]);
    const {removeAllCartItems} = useCartPageInfo();
    const [loading, setLoading] = useState(false);
    const jwtToken = localStorage.getItem('jwtToken');
    const {prePaymmentRequest}= usePaymentSuccessfull();

    const loadOrderDetailsPage = async (orderId) => {
        setLoading(true);
        if (jwtToken) {
            try {
                const response = await axios.get(`http://localhost:8080/api/order/${orderId}`, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`
                    }
                });
                console.log("orderDetails inside order details hook before",response.data);
                setOrderDetails(response.data);
                console.log("orderDetails inside order details hook after",orderDetails);
            } catch (error) {
                console.error("Error load order details :", error.response ? error.response.data : error.message);
            } finally {
                setLoading(false);
            }
        } else {
            console.error("JWT Token not found in local storage");
            setLoading(false);
        }
    }

    // useEffect(() => {
    //     loadOrderDetailsPage();
    // }, []);


    const createOrderDetails = async(orderDetailsInfo) =>{
        
        console.log("inside useOrderDetails")

        setLoading(true);
        if (jwtToken) {
            try {
                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtToken}`,
                };
                console.log("Headers being sent:", headers);
                console.log(orderDetailsInfo)
    
                const response = await axios.post("http://localhost:8080/api/order/details/create", orderDetailsInfo, { headers });
    
                if (response.status === 201) {
                    console.log("Order Details added successfully!");
                    toast.success("Order Details added successfully!");
                    setOrderDetails(prevOrderDetails => [...prevOrderDetails,orderDetailsInfo ]);
                    await removeAllCartItems();
                    prePaymmentRequest(orderDetailsInfo.orderId);

                } else {
                    console.error("Unexpected response status:", response.status);
                }
            } catch (error) {
                console.error("Error creating order details :", error.response ? error.response.data : error.message);
            } finally {
                setLoading(false);
            }
        } else {
            console.error("JWT Token not found in local storage");
            setLoading(false);
        }
    }

    return { loading,orderDetails, loadOrderDetailsPage, createOrderDetails };
}

export default useOrderDetails
