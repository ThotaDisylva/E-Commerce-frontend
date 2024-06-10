import React, { useEffect, useState } from 'react'
import axios from 'axios';

const usePaymentSuccessfull = () => {
    const jwtToken = localStorage.getItem('jwtToken');
    const [ loading, setLoading] = useState(false);


    const prePaymmentRequest = async(orderId) =>{

        setLoading(true);
        if (jwtToken) {
            try {
                const response = await axios.post(`http://localhost:8080/api/payments/${orderId}`,{}, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                      }
                });

                if (response.status === 201) {
                    console.log("Order added successfully!");
                    const data = response.data;
                    console.log("payment URL: ",data.payment_link_url)
                    console.log("payment ID: ",data.payment_link_id)
                    // sending order details id to backend to add it to orders
                    window.location.replace(data.payment_link_url);
                } else {
                    console.error("Unexpected response status:", response.status);
                }
            } catch (error) {
                console.error("Error in pre payment :", error.response ? error.response.data : error.message);
            } finally {
                setLoading(false);
            }
        } else {
            console.error("JWT Token not found in local storage");
            setLoading(false);
        }
    }

    return { prePaymmentRequest, loading };
}

export default usePaymentSuccessfull;
