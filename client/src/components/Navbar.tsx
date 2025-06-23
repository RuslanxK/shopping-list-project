import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import {navbarMain, navbarContainer,navbarBrand,productCounterBox,productCounterText,productCounterIcon} from "@/utils/bootstrap";

const Navbar: React.FC = () => {
  const total = useSelector((state: RootState) => state.products.count);
  return (
    <nav
      className={`${navbarMain} navbar-gradient`}>
      <div className={navbarContainer}>
        <span className={navbarBrand}>
          <span className="fs-4 fs-md-3">🛍️ רשימת קניות</span>
        </span>

        <span className={productCounterBox}>
          <span className={productCounterIcon}>🛒</span>
          <span className={productCounterText}>סה״כ מוצרים:</span>
          <span className={`${productCounterText} fw-bold`}>{total}</span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
