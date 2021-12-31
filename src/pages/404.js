import React from "react";
import BackgroundVideo from "../components/BackgroundVideo";
import FooterJoinButton from "../components/FooterJoinButton";
import Navbar from "../components/Navbar";
import { BackgroundCard } from "../components/Store/styles-grid";
import "../styles/styles.css";
const NotFoundPage = ({ location }) => {
  return (
    <main>
      <title>Not found</title>
      <BackgroundVideo />
      <div id="wrapper">
        <BackgroundCard style={{ height: "50vh", marginTop: "5vh" }}>
          <h1>Sorry, we couldn't find what you were looking for!</h1>
        </BackgroundCard>
      </div>

      <Navbar currentPage={location.pathname} />
      <FooterJoinButton />
    </main>
  );
};
export default NotFoundPage;
