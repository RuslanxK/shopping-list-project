import React from "react";
import {pageTitleContainer, pageTitleHeading, pageTitleUnderline, pageTitleSubtitle} from "@/utils/bootstrap";

const PageTitle: React.FC = () => {
  return (
    <div className={pageTitleContainer}>
      <h1 className={pageTitleHeading}>
        ניהול רשימת קניות
        <div
          className={`${pageTitleUnderline} page-title-underline`} />
      </h1>
      <p className={pageTitleSubtitle}>הוסף מוצרים לפי קטגוריה, צפה ברשימה ושמור אותה</p>
    </div>
  );
};

export default PageTitle;
