import React, { useState } from "react";
import { inputLg, selectLg, btnLgSuccess, formContainer, productForm, formHeader, formTitle, alertDanger, colMd4, colMd2Grid, colMd10 } from "@/utils/bootstrap";
import { useAppDispatch } from "@/store/hooks";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { setName, setCategoryId, createProductAsync, fetchAllProductsAsync } from "@/store/productSlice";
import { validateProductForm } from "@/utils/formValidation";

const ProductForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [nameError, setNameError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);

  const { name, categoryId } = useSelector((state: RootState) => state.products);
  const { data: categories, loading, error } = useSelector((state: RootState) => state.categories);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const error = validateProductForm(name, categoryId);
    const trimmedName = name.trim();
    setNameError(!trimmedName || trimmedName.length < 2);
    setCategoryError(!categoryId);
    if (error) {
      setErrorMessage(error);
      return;
    }
    setErrorMessage(null);
    setNameError(false);
    setCategoryError(false);
    await dispatch(createProductAsync({ name, categoryId }));
    dispatch(fetchAllProductsAsync());
    dispatch(setName(""));
    dispatch(setCategoryId(""));
  };


  return (
  <div className={formContainer}>
    <form className={productForm} onSubmit={handleSubmit}>
    
      <div className={colMd4}>
         <div className={formHeader}>
          <h2 className={formTitle}>הוספת מוצר חדש</h2>
        </div>
        <input
          type="text"
          className={`${inputLg} ${nameError ? "border border-danger" : ""}`}
          placeholder="שם המוצר"
          value={name}
          onChange={(e) => dispatch(setName(e.target.value))} />
      </div>
      <div className={colMd4}>
        <select
          className={`${selectLg} ${categoryError ? "border border-danger" : ""}`}
          value={categoryId}
          onChange={(e) => dispatch(setCategoryId(e.target.value))}>
          <option value="" disabled hidden>בחר קטגוריה</option>
          {loading && <option disabled>טוען קטגוריות...</option>}
          {error && <option disabled>שגיאה בטעינת קטגוריות</option>}
          {!loading && !error && categories.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
      </div>

      <div className={colMd2Grid}>
        <button type="submit" className={btnLgSuccess}>הוסף מוצר</button>
      </div>

      {errorMessage && (
        <div className={colMd10}>
          <div className={alertDanger} role="alert">
            {errorMessage}
          </div>
        </div>
      )}
    </form>
  </div>
);
};

export default ProductForm;
