import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './UseProductsSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;