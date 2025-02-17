import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { database, ref, get } from "../../firebase/firebase";

export const fetchProducts = createAsyncThunk(
    "catalog/fetchProducts",
    async (_, { rejectWithValue }) => {
        try {
            const snapshot = await get(ref(database, "products"));
            if (snapshot.exists()) {
                return snapshot.val();
            } else {
                return rejectWithValue("No data available");
            }
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const catalogSlice = createSlice({
    name: "catalog",
    initialState: {
        catalog: [],
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.catalog = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    }
});

export const { setProducts } = catalogSlice.actions;
export default catalogSlice.reducer;