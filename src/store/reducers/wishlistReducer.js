import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        productsInWishList: [],
    },
    reducers: {
        toggleWishList: (state, action) => {
            const { id } = action.payload;
            const isInWishlist = state.productsInWishList.some(productInWishList => productInWishList.id === id);

            if (isInWishlist) {
                state.productsInWishList = state.productsInWishList.filter(productInWishList => productInWishList.id !== id);
            } else {
                state.productsInWishList.push(action.payload);
            }
        }
    },
});

export const { toggleWishList, isInWishList } = wishlistSlice.actions;
export default wishlistSlice.reducer;