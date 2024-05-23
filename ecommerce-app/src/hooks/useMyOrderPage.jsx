import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useMyOrderPage = () => {
    const [orders, setOrders] = useState([]);

    const loadOrderPage = async () => {
        const jwtToken = localStorage.getItem('jwtToken');
      
        if (jwtToken) {
            try {
                const response = await axios.get('http://localhost:8080/api/order/getAll', {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`
                    }
                });
                setOrders(response.data.orders);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        }
    }

    useEffect(() => {
        loadOrderPage();
    }, []);

    return { orders, loadOrderPage };
}

export default useMyOrderPage;
