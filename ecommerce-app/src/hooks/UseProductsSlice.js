import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// Async thunk to fetch products
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
      // const jwtToken = localStorage.getItem('jwtToken');
  const jwtToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzd2FzdGlrMS5wYWRoZWVAZW1haWwuY29tIiwiaWF0IjoxNzE2NzgzMTMyLCJleHAiOjE3MTY4Njk1MzJ9.dtDJARO5FX6MkLPMWQBOkZskDee6I9jaZcrMx_dffPHYyXu1Z7ZfGF33sFVResO8SN-qfEPjXIRtk9GtI4deIw'

  if (jwtToken){
    try {
        const response = await axios.get(`http://localhost:8080/api/admin/products`,{
            headers: {
                Authorization: `Bearer ${jwtToken}`,
              //   'Content-Type': 'application/json',
              },
        });
        console.log("Product Details") 
        return response.data;
    }
   catch (error) {
    console.error("Error fetching product details ");
    console.log("error")
  }
}
});

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (productId, {rejectWithValue}) => {
  const jwtToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzd2FzdGlrMS5wYWRoZWVAZW1haWwuY29tIiwiaWF0IjoxNzE2NzgzMTMyLCJleHAiOjE3MTY4Njk1MzJ9.dtDJARO5FX6MkLPMWQBOkZskDee6I9jaZcrMx_dffPHYyXu1Z7ZfGF33sFVResO8SN-qfEPjXIRtk9GtI4deIw'

  if (jwtToken){
      try {
          const response = await axios.delete(`http://localhost:8080/api/admin/products/${productId}`,{
              headers: {
                  Authorization: `Bearer ${jwtToken}`,
                //   'Content-Type': 'application/json',
                },
          }); 
          return productId;
      }
     catch (error) {
    //   console.error("Error deleting product details ");
    //   console.log("hcbs")
    return rejectWithValue(error.message);
    }
  }
  });

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
