import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/productActions';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
