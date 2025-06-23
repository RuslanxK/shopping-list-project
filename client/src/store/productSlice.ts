// src/store/productFormSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "@/types";
import { createProduct, fetchProductCount, fetchAllProducts } from "@/services/api";
import { RootState } from "./index";

interface ProductState {
  name: string;
  categoryId: string;
  loading: boolean;
  error: string | null;
  count: number;
  products: Product[];
}

const initialState: ProductState = {
  name: "",
  categoryId: "",
  loading: false,
  error: null,
  count: 0,
  products: [],
};

export const createProductAsync = createAsyncThunk<
  Product,
  { name: string; categoryId: string },
  { state: RootState }
>("product/create", async ({ name, categoryId }) => {
  return await createProduct({ name, categoryId });
});

export const fetchProductCountAsync = createAsyncThunk<
  number,
  void,
  { state: RootState }
>("product/fetchCount", async () => {
  return await fetchProductCount();
});


export const fetchAllProductsAsync = createAsyncThunk<
  Product[],
  void,
  { state: RootState }
>("product/fetchAll", async () => {
  return await fetchAllProducts();
});


const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setCategoryId: (state, action: PayloadAction<string>) => {
      state.categoryId = action.payload;
    },

    resetCount: (state) => {
    state.count = 0;
  },

  },
  extraReducers: (builder) => {
    builder
      .addCase(createProductAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createProductAsync.fulfilled, (state) => {
        state.loading = false;
        state.count += 1; // Optimistic update
      })

      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
      state.products = action.payload;
      })

      .addCase(createProductAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "שגיאה ביצירת פריט";
      })
      .addCase(fetchProductCountAsync.fulfilled, (state, action) => {
        state.count = action.payload;
      });
  },
});

export const { setName, setCategoryId, resetCount  } = productSlice.actions;
export default productSlice.reducer;
