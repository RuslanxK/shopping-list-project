import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { Product } from "@/types";

export const selectProducts = (state: RootState) => state.products.products;
export const selectCategories = (state: RootState) => state.categories.data;

export const selectGroupedProductsByCategory = createSelector(
  [selectProducts, selectCategories],
  (products, categories) => {
    const grouped: Record<string, Product[]> = {};

    categories.forEach((category) => {
      grouped[category.id] = products.filter((p) => p.categoryId === category.id);
    });

    return grouped;
  }
);
