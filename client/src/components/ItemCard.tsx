import React from "react";
import { itemBox, itemName, itemBadge } from "@/utils/bootstrap";
import { ProductCardProps } from "@/types/index";



const ItemCard: React.FC<ProductCardProps> = ({ name, count }) => {
  return (
    <div className={itemBox}>
      <span className={itemName}>{name}</span>
      {count > 1 && <span className={itemBadge}>× {count}</span>}
    </div>
  );
};

export default React.memo(ItemCard);
