import React from 'react';
import styled from 'styled-components';
import JSONData from "../../content/store_lookup.json";
import Product from "./Product";

export const spacing = {
    '3xs': 2,
    '2xs': 4,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 40,
    '3xl': 48
};

export const breakpoints = {
    mobile: 400,
    phablet: 550,
    tablet: 750,
    desktop: 1000,
    hd: 1300
};

const ProductRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${spacing.lg}px;
  @media (min-width: ${breakpoints.desktop}px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: ${spacing['2xl']}px;
  }
`;

const ProductListing = () => (
    <>
        <h1>Store</h1>
        <ProductRow>
            <Product product={JSONData.Membership_1Month} />
            <Product product={JSONData.Membership_Permanent} />
        </ProductRow>
    </>
)
export default ProductListing
