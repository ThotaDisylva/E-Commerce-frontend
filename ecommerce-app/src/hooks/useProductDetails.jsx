import React, { useState } from 'react';
import axios from 'axios';
const useProductDetails=()=>{
    const [productInfo, setproductInfo] = useState([]);

    const productPageInfo = async (productId) => {
            try {
                const response = await axios.get(`http://localhost:8080/auth/admin/products/${productId}`);
                const data = response.data;
                console.log("data",data);
                setproductInfo(data);

            } catch (error) {
                console.error('Error fetching Product info:', error);
            }
    };

    return {productInfo,productPageInfo};
}
export default useProductDetails;