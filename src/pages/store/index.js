import React from "react";
import BackgroundVideo from "../../components/BackgroundVideo";
import MonthlyGoal from "../../components/MonthlyGoal/MonthlyGoal";
import Navbar from "../../components/Navbar";
import PurchaseListing from "../../components/Store";
import StoreLayoutJSON from "../../content/store_layout.json";
const StorePage = ({ location }) => {
  return (
    <>
      <BackgroundVideo />
      <div id="wrapper">
        <div id="store-header">
          <h1>Store</h1>
          <h2>Your support keeps us going!</h2>
        </div>
        <MonthlyGoal />
        <PurchaseListing layoutData={StoreLayoutJSON.default} />
      </div>

      <Navbar currentPage={location.pathname} />
      {/* <ChargebackWarning /> */}
    </>
  );
};
export default StorePage;
