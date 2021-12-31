import { Link } from "gatsby";
import React from "react";
import StoreLookupJSON from "../../content/store_lookup.json";
import ProductCard from "./ProductCard";
import { StoreButton, StoreButtonContainer } from "./styles-grid";

const PurchaseCard = ({ itemObj, size }) => {
  const item = StoreLookupJSON[itemObj.name];
  return (
    <>
      <ProductCard item={item} />
      <StoreButtonContainer>
        {itemObj.view_only ?? false ? (
          <Link to={`/store/${itemObj.real_url ?? "#"}`}>
            <StoreButton>View</StoreButton>
          </Link>
        ) : (
          <Link to="/store/purchase" state={{ item: item }}>
            <StoreButton>Buy</StoreButton>
          </Link>
        )}
      </StoreButtonContainer>
    </>
  );
};
export default PurchaseCard;
