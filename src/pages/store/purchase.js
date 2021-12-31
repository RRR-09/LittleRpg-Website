import { Link, navigate } from "gatsby";
import React, { useRef, useState } from "react";
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
  const reactInputUsername = useRef(null);
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.replace(/\s+/g, "")) {
      alert("Please enter your username!");
      reactInputUsername.current.focus();
    } else {
      inputSubmitForm.current.click();
    }
  };
  const handleChange = (e) => {
    setUsername(e.target.value);
    inputUsername.current.value = username;
  };
  if (!locationState ?? true) {
    navigate("/store");
  }
  return (
    <>
      <BackgroundVideo />
      <div style={{ display: "none" }}>
        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_top"
        >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input
            type="hidden"
            name="hosted_button_id"
            value={locationState?.item?.paypal_id ?? ""}
          />
          <input type="text" name="os0" ref={inputUsername} />
          <input
            type="image"
            alt="submit"
            name="submit"
            ref={inputSubmitForm}
          />
        </form>
      </div>

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
              type="text"
              value={username}
              maxLength="200"
              required="required"
              onChange={handleChange}
              ref={reactInputUsername}
            />
          </StoreNote>
        </BackgroundCard>
        <Row>
          <Column size={2}>
            <StoreButtonContainer>
              <Link to="/store">
                <StoreButton backgroundColor="red">Return to store</StoreButton>
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
    </>
  );
};
export default PurchasePage;
