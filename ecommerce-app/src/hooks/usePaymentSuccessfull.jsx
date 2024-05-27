import React, { useEffect, useState } from 'react'
import axios from 'axios';

const usePaymentSuccessfull = (paymentId,orderId) => {

    const postPaymentRequest = async () => {
        const jwtToken = localStorage.getItem('jwtToken');
        if (jwtToken) {
            try {
                const response = await axios.post(`http://localhost:8080/api/payments?payment_id=${paymentId}&order_id=${orderId}`, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                      }
                });
                console.log(response.data);
                setOrderDetails(response.data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        }
    }

    return { postPaymentRequest };
}

export default usePaymentSuccessfull;
