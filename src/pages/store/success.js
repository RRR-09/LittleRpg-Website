import React, { useEffect, useState } from "react";
import BackgroundVideo from "../../components/BackgroundVideo";
import ChargebackWarning from "../../components/ChargebackWarning";
import FooterJoinButton from "../../components/FooterJoinButton";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/Store/ProductCard";
import {
  BackgroundCard,
  StoreHeader,
  StoreNote,
} from "../../components/Store/styles-grid";
import StoreLookupJSON from "../../content/store_lookup.json";
import { CodeBlock, Wrapper } from "../../styles/styles";

const PurchaseSuccessPage = ({ location }) => {
  const [purchasedItem, setPurchasedItem] = useState(StoreLookupJSON.Error);
  useEffect(() => {
    if (location?.search) {
      const urlParams = new URLSearchParams(location.search);
      const purchasedItemCode = urlParams.get("purchased_item");
      if (purchasedItemCode) {
        for (let [key, data] of Object.entries(StoreLookupJSON)) {
          if (data.paypal_id === purchasedItemCode) {
            setPurchasedItem(data);
            break;
          }
        }
      }
    }
  }, [location.search]);
  return (
    <>
      <BackgroundVideo />
      <Wrapper>
        <StoreHeader>
          <h1>Purchase Success</h1>
          <h2>You have purchased:</h2>
        </StoreHeader>
        <BackgroundCard>
          {purchasedItem.friendly_name === "ERROR" ? (
            <StoreNote>
              <h2>UNKNOWN ITEM</h2>
              <CodeBlock>{JSON.stringify(purchasedItem)}</CodeBlock>
              <h3>
                If you have just come from a PayPal purchase, something has gone
                wrong! Please,
              </h3>
              <ol>
                <li>
                  Take a screenshot of this page, including the url (should
                  contain '
                  <CodeBlock>/store/success?purchased_item=...</CodeBlock>')
                </li>
                <li>
                  Check your email and verify the PayPal transaction went
                  through on your end
                </li>
                <li>
                  Contact any staff member on our Discord with the screenshot
                </li>
              </ol>
            </StoreNote>
          ) : (
            <>
              <ProductCard item={purchasedItem} />
              <StoreNote>
                <h2>
                  Please notify staff if your items are not given within 5
                  minutes!
                </h2>
              </StoreNote>
            </>
          )}
        </BackgroundCard>
      </Wrapper>
      <ChargebackWarning />
      <Navbar currentPage={location.pathname} />
      <FooterJoinButton />
    </>
  );
};
export default PurchaseSuccessPage;
