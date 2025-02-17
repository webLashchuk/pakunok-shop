import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { database, ref, get } from "../../firebase/firebase";

export const fetchProduct = createAsyncThunk(
    "product/fetchProduct",
    async (productId, { rejectWithValue }) => {
        try {
            const snapshot = await get(ref(database, `products/${productId}`));
            if (snapshot.exists()) {
                return snapshot.val();
            } else {
                return rejectWithValue("No product data available");
            }
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const productSlice = createSlice({
    name: "product",
    initialState: {
        product: {},
        status: null,
        error: null
    },
    reducers: {
        resetProduct: (state) => {
            state.product = {};
            state.status = null;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.product = action.payload;
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    }
});

export const { resetProduct } = productSlice.actions;
export default productSlice.reducer;