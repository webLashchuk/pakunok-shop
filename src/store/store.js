import { configureStore } from "@reduxjs/toolkit";
import catalogReducer from "./reducers/catalogReducer";
import wishListReducer from "./reducers/wishlistReducer";
import cartReducer from "./reducers/cartReducer";

let store = configureStore({
    reducer: {
        catalog: catalogReducer,
        wishlist: wishListReducer,
        cart: cartReducer,
    }
});

export default store;
