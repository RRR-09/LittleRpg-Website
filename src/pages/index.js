import * as React from "react";
import BackgroundVideo from "../components/BackgroundVideo";
import FooterJoinButton from "../components/FooterJoinButton";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import "../styles/styles.css";
const HomePage = ({ location }) => {
  return (
    <>
      <BackgroundVideo />
      <div id="wrapper">
        <div id="content">
          <Logo />
          <Navbar currentPage={location.pathname} />
          <FooterJoinButton />
        </div>
      </div>
    </>
  );
};

export default HomePage;
