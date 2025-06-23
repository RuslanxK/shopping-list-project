import React, { useEffect, Fragment } from "react";
import { useAppDispatch } from "@/store/hooks";
import { fetchCategoriesAsync } from "@/store/categoriesSlice";
import { fetchAllProductsAsync } from "@/store/productSlice";
import { fetchProductCountAsync } from "@/store/productSlice";
import Navbar from "@/components/Navbar";
import ProductForm from "@/components/Form";
import ShoppingList from "@/components/ShoppingList";
import PageTitle from "./components/PageTitle";
import SaveListButton from "./components/SaveListButton";

const App: React.FC =() => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
    dispatch(fetchAllProductsAsync());
    dispatch(fetchProductCountAsync());
  }, [dispatch]);

  return (
    <Fragment>
      <Navbar />
      <PageTitle />
      <ProductForm />
      <ShoppingList />
      <SaveListButton />
    </Fragment>
  );
}

export default App;
