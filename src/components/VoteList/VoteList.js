import React from "react";
import VoteLink from "./VoteLink";
import "./VoteList.css";

const VoteList = ({ layoutData }) => {
  return (
    <>
      {layoutData.map((linkData, linkIndex) => (
        <VoteLink
          key={`VoteLink_${linkIndex}`}
          voteData={linkData}
          linkNumber={linkIndex + 1}
        />
      ))}
    </>
  );
};
export default VoteList;
