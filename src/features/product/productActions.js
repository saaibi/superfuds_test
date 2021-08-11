import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { filter, unionBy } from 'lodash';

const initialState = {
    products: [],
    shopCart: [],
    status: 'complete',
};

export const getAllProducts = createAsyncThunk('product/getAllProducts',
    async () => {
        const response = await axios.get('https://superfuds-assets.s3-sa-east-1.amazonaws.com/utils/product.json');
        return response.data;
    }
);

export const productActions = createSlice({
    name: 'product',
    initialState,
    reducers: {
        update: (state, action) => {
            state.shopCart = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.status = 'complete';
                state.products = action.payload;
            });
    },
});

export const { update } = productActions.actions;


export const addCart = (product) => (dispatch, getState) => {
    const currentValue = getState().product.shopCart;
    dispatch(update(unionBy(currentValue, [product], 'id')));
};

export const deleteCart = (id) => (dispatch, getState) => {
    const currentValue = getState().product.shopCart;
    dispatch(update(filter(currentValue, (item) => item.id !== id)));
};

export default productActions.reducer;
