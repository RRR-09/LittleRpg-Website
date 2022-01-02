import React from "react";
import BackgroundVideo from "../../components/BackgroundVideo";
import ChargebackWarning from "../../components/ChargebackWarning";
import FooterJoinButton from "../../components/FooterJoinButton";
import MonthlyGoal from "../../components/MonthlyGoal/MonthlyGoal";
import Navbar from "../../components/Navbar";
import PurchaseListing from "../../components/Store";
import { StoreHeader } from "../../components/Store/styles-grid";
import StoreLayoutJSON from "../../content/store_layout.json";
import { Wrapper } from "../../styles/styles";

const StorePage = ({ location }) => {
  return (
    <>
      <BackgroundVideo />
      <Wrapper>
        <StoreHeader>
          <h1>Store</h1>
          <h2>Your support keeps us going!</h2>
        </StoreHeader>
        <MonthlyGoal />
        <PurchaseListing layoutData={StoreLayoutJSON.default} />
      </Wrapper>
      <ChargebackWarning />
      <Navbar currentPage={location.pathname} />
      <FooterJoinButton />
    </>
  );
};
export default StorePage;
