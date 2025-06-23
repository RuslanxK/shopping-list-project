import { Category, Product, NewProduct } from "@/types";
import { ShoppingListPayload } from "@/types/shoppingList";


export const API_URL = import.meta.env.VITE_API_URL;


export const fetchCategories = async (): Promise<Category[]> => {
  const res = await fetch(`${API_URL}/categories`);
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
};

export const createProduct = async (product: NewProduct): Promise<Product> => {
  const res = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  if (!res.ok) throw new Error("Failed to create product");
  return res.json();
};

export const fetchProductCount = async (): Promise<number> => {
  const res = await fetch(`${API_URL}/products/count`);
  if (!res.ok) throw new Error("Failed to fetch product count");
  const data = await res.json();
  return data.count;
};

export const fetchAllProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${API_URL}/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};


export const saveShoppingList = async (data: ShoppingListPayload): Promise<{ message: string }> => {
  const response = await fetch(`${API_URL}/save-shopping-list`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || "Failed to save the list");
  }

  return result;
};
