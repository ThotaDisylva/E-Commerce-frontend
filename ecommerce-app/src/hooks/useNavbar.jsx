import React from 'react'
import { useUserInfoContext } from '../context/UserInfoContext'
import axios from 'axios';
import categories from '../customer/components/Header/CategoryButton/categories';

const useNavbar = () => {
    const{setCategoriesDetails,categoriesDetails} = useUserInfoContext();

    const getCategoriesDetails = async () =>{
        try {
            const response = await axios.get(`http://localhost:8080/auth/category/getAll`);

            if (response.status === 200) {
                console.log('Categories details fetched successfully');
                const data = response.data;
                console.log("categories data->",data);
                setCategoriesDetails(data.categories)
                localStorage.setItem("categories_details", JSON.stringify(data.categories))
            }
        } catch (error) {
            console.error('Error fetching categories details:', error);
        }
    }

  return {getCategoriesDetails}
}

export default useNavbar
