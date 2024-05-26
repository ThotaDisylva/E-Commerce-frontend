import React, { useState } from 'react';
import axios from 'axios';
const useProductDetails=()=>{
    const [productInfo, setproductInfo] = useState([]);

    const productPageInfo = async (productId) => {

        console.log("inside useProductDetails hook")
        const jwtToken = localStorage.getItem('jwtToken');
        if (jwtToken) {
            console.log("jwt", jwtToken)
            try {
                const response = await axios.get(`http://localhost:8080/api/admin/products/${productId}`, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`
                    }
                });

                const data = response.data;
                console.log("data",data);
                setproductInfo(data);

            } catch (error) {
                console.error('Error fetching Product info:', error);
            }
        }
    };

    return {productInfo,productPageInfo};
}
export default useProductDetails;