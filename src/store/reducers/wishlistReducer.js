import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        products: [],
    },
    reducers: {
        toggleWishList: (state, action) => {
            const product = action.payload;
            const existingIndex = state.products.findIndex(item => item.id === product.id);

            if (existingIndex >= 0) {
                state.products.splice(existingIndex, 1);
            } else {
                state.products.push(product);
            }
        },
    },
});

export const { toggleWishList } = wishlistSlice.actions;
export default wishlistSlice.reducer;
