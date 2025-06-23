import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/store/hooks";
import { RootState } from "@/store";
import { Save } from "lucide-react";
import { saveShoppingList } from "@/services/api";
import { fetchAllProductsAsync, resetCount } from "@/store/productSlice";
import { ShoppingListPayload } from "@/types/shoppingList";
import { buttonClass } from "@/utils/bootstrap";

const SaveListButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const products = useSelector((state: RootState) => state.products.products);
  const categories = useSelector((state: RootState) => state.categories.data);

  const isSaveDisabled = useMemo(() => {
    return !categories.some((category) =>
      products.some((p) => p.categoryId === category.id)
    );
  }, [categories, products]);

  const generateGroupedPayload = (): ShoppingListPayload => {
    return categories.map((category) => {
      const itemsByName: Record<string, number> = {};
           products.forEach((product) => {
          if (product.categoryId === category.id) {
            const name = product.name.trim();
            itemsByName[name] = (itemsByName[name] || 0) + 1;
          }
        });

        const items = Object.entries(itemsByName).map(([name, quantity]) => ({
          name,
          quantity,
        }));

        if (items.length === 0) return null;

        return {
          categoryName: category.name,
          items,
        };
      })
      .filter(Boolean) as ShoppingListPayload;
  };

  
  const handleSaveList = async () => {
    try {
      const payload = generateGroupedPayload();
      await saveShoppingList(payload);
      alert("הרשימה נשמרה בהצלחה!");
      dispatch(fetchAllProductsAsync());
      dispatch(resetCount());
    } catch (error: unknown) {
  if (error instanceof Error) {
    alert("שגיאה: " + error.message);
    console.error(error.message);
  } else {
    alert("שגיאה לא צפויה");
    console.error(error);
  }
}
  };

  return (
    <button
      className={buttonClass}
      onClick={handleSaveList}
      title="שמור רשימה"
      disabled={isSaveDisabled}
    >
      <Save size={38} />
    </button>
  );
};

export default SaveListButton;
