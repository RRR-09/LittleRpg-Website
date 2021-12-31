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

      <Navbar currentPage={location.pathname} />
      <FooterJoinButton />
    </>
  );
};
export default VotePage;
