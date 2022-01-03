import React from "react";
import BackgroundVideo from "../../components/BackgroundVideo";
import FooterJoinButton from "../../components/FooterJoinButton";
import Navbar from "../../components/Navbar";
import PurchaseCard from "../../components/Store/PurchaseCard";
import { BackgroundCard } from "../../components/Store/styles-grid";
import { Wrapper } from "../../styles/styles";

const PurchaseSuccessPage = ({ location }) => {
  return (
    <>
      <BackgroundVideo />
      <Wrapper>
        <BackgroundCard>
          <PurchaseCard itemObj={{ name: "TestItem" }} />
        </BackgroundCard>
      </Wrapper>
      <Navbar currentPage={location.pathname} />
      <FooterJoinButton />
    </>
  );
};
export default PurchaseSuccessPage;
