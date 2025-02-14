import { configureStore } from "@reduxjs/toolkit";
import catalogReducer from "./reducers/catalogReducer";
import wishListReducer from "./reducers/wishlistReducer";
import cartReducer from "./reducers/cartReducer";
import productReducer from "./reducers/productReducer";

let store = configureStore({
    reducer: {
        catalog: catalogReducer,
        product: productReducer,
        cart: cartReducer,
        wishlist: wishListReducer,
    }
});

export default store;
