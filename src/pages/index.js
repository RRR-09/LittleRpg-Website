import * as React from "react";
import BackgroundVideo from "../components/BackgroundVideo";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import "../styles/styles.css";
// markup
const IndexPage = () => {
  return (
    <>
      <BackgroundVideo />
      <div id="wrapper">
        <Logo />
        <Navbar />
      </div>
    </>
  );
};

export default IndexPage;
