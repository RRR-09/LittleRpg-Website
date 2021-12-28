import React from "react";
import BackgroundVideo from "../../components/BackgroundVideo";
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
        <div class="votelist-panel">
          <VoteList layoutData={VoteLinksJSON} />
        </div>
      </div>

      <div class="footer-bar">
        <Navbar currentPage={location.pathname} />
      </div>

      {/* Required on site to be listed */}
    </>
  );
};
export default VotePage;
