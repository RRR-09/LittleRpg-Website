import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import StoreLookupJSON from "../../content/store_lookup.json";

const Product = ({ itemName, size }) => {
  const item = StoreLookupJSON[itemName];
  const breakpoints = {
    mobile: 400,
    phablet: 550,
    tablet: 750,
    desktop: 1000,
    hd: 1300,
  };
  const widths = {
    2: 50,
    3: 33.3333333333,
  };
  console.log(size);
  const ProductColumn = styled.div`
    @media (min-width: ${breakpoints.phablet}px) {
      flex: 0 0 auto;
      width: ${widths[size]}%;
    }
  `;
  return (
    <ProductColumn>
      <img src={item.image} alt={item.image} />
      <p style={{ color: item.color }}>{item.friendly_name}</p>
      <p>${item.price_usd} USD</p>
      <Link to={`#${item.paypal_id}`}>Buy</Link>
    </ProductColumn>
  );
};
export default Product;
