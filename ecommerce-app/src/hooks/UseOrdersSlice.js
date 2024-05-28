import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchOrders = createAsyncThunk('orders/fetchOrders',async () => {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken){
        try {
            const response = await axios.get(`http://localhost:8080/api/admin/orders/details`,{
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                  //   'Content-Type': 'application/json',
                  },
            });
            console.log("Order Details"); 
            console.log(response.data);
            return response.data;
        }
       catch (error) {
        console.error("Error fetching orders ");
        console.log("error")
      }
    }
});
const ordersSlice = createSlice({
    name: 'orders',
    initialState: {
      orders: [],
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchOrders.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchOrders.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.orders = action.payload;
        })
        .addCase(fetchOrders.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
  export default ordersSlice.reducer;
  