import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        productsInCart: [],
    },
    reducers: {
        addProductsToCart: (state, action) => {
            const { id } = action.payload;
            const availableProduct = state.productsInCart.find(product => product.id === id);

            state.productsInCart = availableProduct
                ? state.productsInCart.map(product =>
                    product.id === id ? { ...product, counter: product.counter + 1 } : product
                )
                : [...state.productsInCart, { ...action.payload, counter: 1 }];
        },

        removeProductFromCart: (state, action) => {
            state.productsInCart = state.productsInCart.filter(product => product.id !== action.payload);
        },

        incrementQuantity: (state, action) => {
            state.productsInCart = state.productsInCart.map(product =>
                product.id === action.payload ? { ...product, counter: product.counter + 1 } : product
            );
        },

        decrementQuantity: (state, action) => {
            state.productsInCart = state.productsInCart
                .map(product =>
                    product.id === action.payload ? { ...product, counter: product.counter - 1 } : product
                )
                .filter(product => product.counter > 0);
        }
    },
});

export const { addProductsToCart, removeProductFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
