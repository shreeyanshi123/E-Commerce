import axios from "axios";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    isLoading: false,
}

export const addToCart = createAsyncThunk(
    "cart/addToCart",
    async ({ userId, productId, quantity }) => {
        const resp = await axios.post("https://e-commerce-backend-6tnh.onrender.com/api/shop/cart/add", {
            userId,
            productId,
            quantity
        });
        return resp.data;
    }
)


export const fetchCartItems = createAsyncThunk(
    "cart/fetchCartItems",
    async (userId) => {
        const res = await axios.get(`https://e-commerce-backend-6tnh.onrender.com/api/shop/cart/get/${userId}`);
        return res.data;
    }
)


export const deleteCartItem = createAsyncThunk(
    "cart/deleteCartItem",
    async ({userId,productId}) => {
        const res = await axios.delete(`https://e-commerce-backend-6tnh.onrender.com/api/shop/cart/${userId}/${productId}`);
        return res.data;
    }
)

export const updateCartQuantity = createAsyncThunk(
    "cart/updateCartQuantity",
    async ({ userId, productId, quantity }) => {
        const res = await axios.put("https://e-commerce-backend-6tnh.onrender.com/api/shop/cart/update-cart", {
            userId,
            productId,
            quantity,
        });
        return res.data;
    }
)

const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addToCart.pending, (state) => {
                state.isLoading = true;
            }).addCase(addToCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.cartItems = action.payload.data;
            }).addCase(addToCart.rejected, (state) => {
                state.isLoading = false;
                state.cartItems = [];
            }).addCase(fetchCartItems.pending, (state) => {
                state.isLoading = true;
            }).addCase(fetchCartItems.fulfilled, (state, action) => {
                state.isLoading = false;
                state.cartItems = action.payload.data;
            }).addCase(fetchCartItems.rejected, (state) => {
                state.isLoading = true;
                state.cartItems = [];
            }).addCase(updateCartQuantity.pending, (state) => {
                state.isLoading = true;
            }).addCase(updateCartQuantity.fulfilled, (state, action) => {
                state.isLoading = false;
                state.cartItems = action.payload.data;
            }).addCase(updateCartQuantity.rejected, (state) => {
                state.isLoading = false;
                state.cartItems = [];
            }).addCase(deleteCartItem.pending, (state) => {
                state.isLoading = true;
            }).addCase(deleteCartItem.fulfilled, (state, action) => {
                state.isLoading = false;
                state.cartItems = action.payload.data;
            }).addCase(deleteCartItem.rejected, (state) => {
                state.isLoading = false;
                state.cartItems = [];
            })
    }
})


export default shoppingCartSlice.reducer;