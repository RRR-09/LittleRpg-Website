import React from "react";
import { VoteName } from "../../components/VoteList/styles.js";
const VoteLink = ({ voteData, linkNumber }) => {
  return (
    <>
      <VoteName href={voteData.url} target="_blank">
        <p>
          Link {linkNumber} - <span>{voteData.name}</span>
        </p>
      </VoteName>
    </>
  );
};
export default VoteLink;
