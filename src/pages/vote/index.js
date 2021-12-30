import React from "react";
import BackgroundVideo from "../../components/BackgroundVideo";
import FooterJoinButton from "../../components/FooterJoinButton";
import Navbar from "../../components/Navbar";
import VoteList from "../../components/VoteList";
import "../../components/VoteList/VoteList.css";
import VoteLinksJSON from "../../content/vote_links.json";

const VotePage = ({ location }) => {
  return (
    <>
      <BackgroundVideo />
      <div className="votelist-container">
        <h1>Voting Links</h1>
        <div className="votelist-panel">
          <VoteList layoutData={VoteLinksJSON} />
        </div>
      </div>

      <div className="footer-bar">
        <Navbar currentPage={location.pathname} />
      </div>
      <FooterJoinButton />
    </>
  );
};
export default VotePage;
