import React from "react";
import styled from "styled-components";
import Product from "./Product";

export const spacing = {
  "3xs": 2,
  "2xs": 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  "2xl": 40,
  "3xl": 48,
};

export const breakpoints = {
  mobile: 400,
  phablet: 550,
  tablet: 750,
  desktop: 1000,
  hd: 1300,
};

const ProductRow = styled.div`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(var(--bs-gutter-y) * -1);
  margin-right: calc(var(--bs-gutter-x) / -2);
  margin-left: calc(var(--bs-gutter-x) / -2);
`;

const ProductListing = ({ layoutData }) => {
  const layout = layoutData[0];
  return (
    <>
      {layout.map((row, rowIndex) => (
        <ProductRow key={`ProductRow_${rowIndex}`}>
          {row.items.map((itemName, itemIndex) => (
            <Product
              itemName={itemName}
              size={row.items_in_row}
              key={`Product_${rowIndex}_${itemIndex}`}
            />
          ))}
          <br />
        </ProductRow>
      ))}
    </>
  );
};
export default ProductListing;
