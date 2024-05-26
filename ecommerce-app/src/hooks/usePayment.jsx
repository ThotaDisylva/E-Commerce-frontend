import React, { useState } from 'react';
import { useUserInfoContext } from '../context/UserInfoContext';
import axios from 'axios';

const usePayment = () => {
    const [data, setData]=useState();
    const paymentPost= async(orderId)=>{
        const jwtToken = localStorage.getItem('jwtToken');
        if (jwtToken) {
            try {
                const response = await axios.put(`http://localhost:8080/api/payments/${orderId}`, {}, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`
                    }
                });

                const data = response.data;
                console.log("ABCD:",data);
                setData(data);
            } catch (error) {
                console.error('Error reducing cart item quantity:', error);
            }
        }
    };

    const orderCreate= async()=>{
        const jwtToken = localStorage.getItem('jwtToken');
        if (jwtToken) {
            try {
                const response = await axios.put(`http://localhost:8080/api/order/create`, {}, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`
                    }
                });

                const data = response.data;
                console.log(data);
                setData(data);
            } catch (error) {
                console.error('Error reducing cart item quantity:', error);
            }
        }
    };
    return {data, paymentPost};

}
export default usePayment;