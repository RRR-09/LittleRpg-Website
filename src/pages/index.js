import * as React from "react";
import BackgroundVideo from "../components/BackgroundVideo";
import FooterJoinButton from "../components/FooterJoinButton";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import { Wrapper } from "../styles/styles.js";
const HomePage = ({ location }) => {
  return (
    <>
      <BackgroundVideo />
      <Wrapper>
        <Logo />
      </Wrapper>
      <Navbar currentPage={location.pathname} />
      <FooterJoinButton />
    </>
  );
};

export default HomePage;
