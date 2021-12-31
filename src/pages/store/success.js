import React, { useEffect, useState } from "react";
import BackgroundVideo from "../../components/BackgroundVideo";
import FooterJoinButton from "../../components/FooterJoinButton";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/Store/ProductCard";
import { BackgroundCard } from "../../components/Store/styles-grid";
import StoreLookupJSON from "../../content/store_lookup.json";
import "../../styles/styles.css";

const PurchaseSuccessPage = ({ location }) => {
  const [purchasedItem, setPurchasedItem] = useState(StoreLookupJSON.Error);
  useEffect(() => {
    if (location?.search) {
      const urlParams = new URLSearchParams(location.search);
      const purchasedItemCode = urlParams.get("purchased_item");
      if (purchasedItemCode) {
        for (let [key, data] of Object.entries(StoreLookupJSON)) {
          console.log(key, data);
          if (data.paypal_id === purchasedItemCode) {
            setPurchasedItem(data);
            break;
          }
        }
      }
    }
  }, []);
  return (
    <>
      <BackgroundVideo />
      <div id="wrapper">
        <div id="store-header">
          <h1>Purchase Success</h1>
          <h2>You have purchased:</h2>
        </div>
        <BackgroundCard>
          {purchasedItem.friendly_name === "ERROR" ? (
            <div style={{ marginBottom: "24px" }}>
              <h2>UNKNOWN ITEM</h2>
              <code>{JSON.stringify(purchasedItem)}</code>
              <h3>
                If you have just come from a PayPal purchase, something has gone
                wrong! Please,
              </h3>
              <ol>
                <li>
                  Take a screenshot of this page, including the url (should
                  contain '<code>/store/success?purchased_item=...</code>')
                </li>
                <li>
                  Check your email and verify the PayPal transaction went
                  through on your end
                </li>
                <li>
                  Contact any staff member on our Discord with the screenshot
                </li>
              </ol>
            </div>
          ) : (
            <>
              <ProductCard item={purchasedItem} />
              <div style={{ marginBottom: "24px" }}>
                <h2>
                  Please notify staff if your items are not given within 5
                  minutes!
                </h2>
              </div>
            </>
          )}
        </BackgroundCard>
      </div>
      <Navbar currentPage={location.pathname} />
      <FooterJoinButton />
    </>
  );
};
export default PurchaseSuccessPage;
