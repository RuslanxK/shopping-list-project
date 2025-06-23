export interface Category {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  categoryId: string;
}

export interface NewProduct {
  name: string;
  categoryId: string;
}

export interface ProductCardProps {
  name: string;
  count: number;
}

export interface CategoryCardProps {
  category: Category;
  products: Product[];
}