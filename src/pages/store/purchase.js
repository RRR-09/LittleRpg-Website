import { Link, navigate } from "gatsby";
import React, { useRef } from "react";
import BackgroundVideo from "../../components/BackgroundVideo";
import ProductCard from "../../components/Store/ProductCard";
import {
  BackgroundCard,
  Column,
  Row,
  StoreButton,
  StoreButtonContainer,
  StoreHeader,
  StoreNote,
} from "../../components/Store/styles-grid";
import { Wrapper } from "../../styles/styles";

const PurchasePage = ({ location }) => {
  const locationState = location?.state ?? {};
  const inputUsername = useRef(null);
  const inputSubmitForm = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputUsername.current.value.replace(/\s+/g, "")) {
      alert("Please enter your username!");
      inputUsername.current.focus();
    } else {
      inputSubmitForm.current.click();
    }
  };
  if (!locationState ?? true) {
    navigate("/store");
  }
  return (
    <>
      <BackgroundVideo />

      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
      >
        <input type="hidden" name="on0" value="Minecraft Username" />
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input
          type="hidden"
          name="hosted_button_id"
          value={locationState?.item?.paypal_id ?? ""}
        />
        <input
          style={{ display: "none" }}
          type="image"
          alt="submit"
          name="submit"
          ref={inputSubmitForm}
        />
        <Wrapper>
          <StoreHeader>
            <h1>Purchase Confirmation</h1>
            <h2>You are purchasing:</h2>
          </StoreHeader>
          <BackgroundCard>
            <ProductCard item={locationState?.item ?? ""} />
            <StoreNote>
              <h2>Please enter your Minecraft username:</h2>
              <input
                name="os0"
                type="text"
                maxLength="200"
                required="required"
                ref={inputUsername}
              />
            </StoreNote>
          </BackgroundCard>
          <Row>
            <Column size={2}>
              <StoreButtonContainer>
                <Link to="/store">
                  <StoreButton backgroundColor="red">
                    Return to store
                  </StoreButton>
                </Link>
              </StoreButtonContainer>
            </Column>
            <Column size={2}>
              <StoreButtonContainer>
                <a href="" onClick={handleSubmit}>
                  <StoreButton>Purchase</StoreButton>
                </a>
              </StoreButtonContainer>
            </Column>
          </Row>
        </Wrapper>
      </form>
    </>
  );
};
export default PurchasePage;
