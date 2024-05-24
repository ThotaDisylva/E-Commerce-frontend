import React, { useEffect, useState } from 'react'
import axios from 'axios';

const useOrderDetails = (orderId) => {
    const [orderDetails, setOrderDetails] = useState([]);

    const loadOrderDetailsPage = async () => {
        const jwtToken = localStorage.getItem('jwtToken');
      
        if (jwtToken) {
            try {
                const response = await axios.get(`http://localhost:8080/api/order/${orderId}`, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`
                    }
                });
                console.log(response.data);
                setOrderDetails(response.data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        }
    }

    useEffect(() => {
        loadOrderDetailsPage();
    }, []);

    return { orderDetails, loadOrderDetailsPage };
}

export default useOrderDetails
