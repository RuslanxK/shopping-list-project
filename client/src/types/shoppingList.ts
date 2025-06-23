export interface ShoppingListItem {
  name: string;
  quantity: number;
}

export interface ShoppingListCategory {
  categoryName: string;
  items: ShoppingListItem[];
}

export type ShoppingListPayload = ShoppingListCategory[];

