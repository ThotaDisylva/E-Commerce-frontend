import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './UseProductsSlice';
import ordersReducer from './UseOrdersSlice';
const store = configureStore({
  reducer: {
    products: productsReducer,
    orders: ordersReducer,
  },
});

export default store;