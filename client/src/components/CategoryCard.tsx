import React from "react";
import { categoryIcons } from "@/utils/icons";
import { cardColumn, cardBase, cardHeader, cardHeaderGradient, cardBody } from "@/utils/bootstrap";
import ItemCard from "./ItemCard";
import { CategoryCardProps } from "@/types/index";



const CategoryCard: React.FC<CategoryCardProps> = ({ category, products }) => {
  const productCounts = products.reduce<Record<string, number>>((acc, product) => {
    const name = product.name.trim();
    acc[name] = (acc[name] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className={cardColumn}>
      <div className={cardBase}>
        <div className={`${cardHeader} ${cardHeaderGradient}`}>
          <span>{categoryIcons[category.name] + " " + category.name}</span>
        </div>
        <div className={cardBody}>
          {Object.entries(productCounts).map(([name, count]) => (
            <ItemCard key={name} name={name} count={count} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(CategoryCard);
