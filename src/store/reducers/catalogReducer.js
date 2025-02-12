import { createSlice } from "@reduxjs/toolkit";

const catalogSlice = createSlice({
    name: "catalog",
    initialState: {
        catalog: []
    },
    reducers: {
        setProducts: (state, action) => {
            return { ...state, catalog: action.payload };
        }
    }
});

export const { setProducts } = catalogSlice.actions;
export default catalogSlice.reducer;