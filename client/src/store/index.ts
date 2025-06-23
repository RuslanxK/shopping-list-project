import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "@/store/categoriesSlice";
import productReducer from "@/store/productSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
