import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const upDateProductService = () => {
    const updateProduct = async(product,productId) => {
          // const jwtToken = localStorage.getItem('jwtToken');
      const jwtToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzd2FzdGlrMS5wYWRoZWVAZW1haWwuY29tIiwiaWF0IjoxNzE2NzgzMTMyLCJleHAiOjE3MTY4Njk1MzJ9.dtDJARO5FX6MkLPMWQBOkZskDee6I9jaZcrMx_dffPHYyXu1Z7ZfGF33sFVResO8SN-qfEPjXIRtk9GtI4deIw'
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
          }
        }
      }
    return {updateProduct};
}
export default upDateProductService