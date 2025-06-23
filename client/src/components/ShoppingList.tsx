import React, {useMemo} from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { shoppingListContainer, shoppingListHeading, emptyListText } from "@/utils/bootstrap";
import CategoryCard from "@/components/CategoryCard";
import ErrorMessage from "@/components/messages/ErrorMessage";
import LoadingMessage from "@/components/messages/LoadingMessages";
import { selectGroupedProductsByCategory } from "@/store/selectors/shoppingListSelectors";

const ShoppingList: React.FC = () => {
  const categories = useSelector((state: RootState) => state.categories.data);
  const categoryLoading = useSelector((state: RootState) => state.categories.loading);
  const categoryError = useSelector((state: RootState) => state.categories.error);

  const productLoading = useSelector((state: RootState) => state.products.loading);
  const productError = useSelector((state: RootState) => state.products.error);
  const groupedProducts = useSelector(selectGroupedProductsByCategory);


  const renderedCategories = useMemo(() => {
  return categories.map((category) => {
    const categoryProducts = groupedProducts[category.id] || [];
    if (categoryProducts.length === 0) return null;
    return <CategoryCard key={category.id} category={category} products={categoryProducts} />;
  });
}, [categories, groupedProducts]);



  if (categoryLoading || productLoading) {
  return <LoadingMessage message="טוען רשימת קניות..." />;
}

 if (categoryError || productError) {
  return <ErrorMessage message="שגיאה בטעינת נתונים. נסה לרענן את העמוד." />;
}

  return (
    <div className={shoppingListContainer}>
      <h2 className={shoppingListHeading}>רשימת קניות לפי קטגוריות</h2>
      {renderedCategories.every((cat) => cat === null) ? (
        <div className={emptyListText}>רשימת המוצרים ריקה</div>
      ) : (
        <div className="row g-4">{renderedCategories}</div>
      )}
    </div>
  );
};

export default ShoppingList;
