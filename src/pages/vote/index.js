import React from "react";
import BackgroundVideo from "../../components/BackgroundVideo";
import FooterJoinButton from "../../components/FooterJoinButton";
import Navbar from "../../components/Navbar";
import VoteList from "../../components/VoteList";
import {
  VotelistContainer,
  VotelistPanel,
} from "../../components/VoteList/styles.js";
import VoteLinksJSON from "../../content/vote_links.json";

const VotePage = ({ location }) => {
  return (
    <>
      <BackgroundVideo />
      <VotelistContainer>
        <h1>Voting Links</h1>
        <VotelistPanel>
          <VoteList layoutData={VoteLinksJSON} />
        </VotelistPanel>
      </VotelistContainer>

      <Navbar currentPage={location.pathname} />
      <FooterJoinButton />
    </>
  );
};
export default VotePage;
