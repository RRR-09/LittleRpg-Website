import React from "react";
import {
  Pictures,
  ProductContainer,
  ProductContainerCard,
  ProductImage,
  ProductNameText,
  ProductPriceText,
} from "./styles-grid";

const ProductCard = ({ item }) => {
  return (
    <ProductContainer>
      <ProductContainerCard>
        <ProductImage src={Pictures[item.image]} alt={item.image} />
        <ProductNameText itemColor={item.color}>
          {item.friendly_name.startsWith("x")
            ? "x" + item.friendly_name.slice(1).toUpperCase()
            : item.friendly_name.toUpperCase()}
        </ProductNameText>
        <ProductPriceText>${item.price_usd} USD</ProductPriceText>
      </ProductContainerCard>
    </ProductContainer>
  );
};
export default ProductCard;
