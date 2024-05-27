import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const upDateProductService = () => {

  const jwtToken = localStorage.getItem('jwtToken');

    const updateProduct = async(product,productId) => {
          
      if (jwtToken) {
          try{
            console.log(productId);
            const update = await axios.put(`http://localhost:8080/api/admin/products/${productId}`, product,{
              headers: {
                  Authorization: `Bearer ${jwtToken}`,
                  'Content-Type': 'application/json',
                },
          }); 
          return update.data;
          }catch (error){

            console.error("Error updating product details",error);
          }finally {
            setLoading(false);
        }
        } else {
            console.error("JWT Token not found in local storage");
            setLoading(false);
        }
      }
    return {updateProduct};
}
export default upDateProductService