import React from "react";

const VoteLink = ({ voteData, linkNumber }) => {
  // const ProductColumn = styled.div`
  //   @media (min-width: ${breakpoints.phablet}px) {
  //     flex: 0 0 auto;
  //     width: ${widths[size]}%;
  //   }
  // `;
  return (
    <>
      <a className="vote-name" href={voteData.url} target="_blank">
        <p>
          Link {linkNumber} - <span>{voteData.name}</span>
        </p>
      </a>
    </>
  );
};
export default VoteLink;
