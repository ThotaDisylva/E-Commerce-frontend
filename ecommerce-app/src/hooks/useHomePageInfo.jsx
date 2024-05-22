import React, { useState } from 'react'
import { useUserInfoContext } from '../context/UserInfoContext';
import axios from 'axios';

const useHomePageInfo = () => {

    const [categoryInfo, setCategoryInfo] = useState([]);

    const {setCartItemCount, cartItemCount} = useUserInfoContext();

    const loadHomePageInfo = async () => {


        try {
            const response = await axios.get('http://localhost:8080/auth/home/load');
      
            const data = response.data;

            console.log(data);
            setCategoryInfo(data.categories);
          } catch (error) {
            console.error('Error fetching homepage info:', error);
          }

        const jwtToken = localStorage.getItem('jwtToken');
        
      
        if (jwtToken) {
          try {
            const response = await axios.get('http://localhost:8080/api/cart/quantity', {
              headers: {
                "Authorization": `Bearer ${jwtToken}`
              }
            });
      
            const data = response.data;
            console.log(data)
            setCartItemCount(data.totalCartItems);
            console.log("usehomecartCount-> ",cartItemCount);
          } catch (error) {
            console.error('Error fetching homepage info:', error);
          }
        }
      };

  return {categoryInfo, loadHomePageInfo};
}

export default useHomePageInfo



  
