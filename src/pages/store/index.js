import React from "react";
import MonthlyGoal from "../../components/MonthlyGoal/MonthlyGoal";
import ProductListing from "../../components/ProductListing";
import StoreLayoutJSON from "../../content/store_layout.json";
const StorePage = () => (
  <>
    <h1>Store</h1>
    <h2>Your support keeps us going!</h2>
    <MonthlyGoal />
    <ProductListing layoutData={StoreLayoutJSON.crates} />
    {/* <ChargebackWarning /> */}
  </>
);

export default StorePage;
