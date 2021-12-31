import styled from "styled-components";
export const VotelistContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 90%;
  margin-top: 2em !important;
  border-radius: 20px;
  & h1 {
    text-shadow: 2px 2px 4px #000000;
    color: #eee;
    font-family: "Lato", sans-serif;
    font-weight: bold;
    font-size: 3em;
  }
`;
export const VotelistPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 16px;
  color: #fff;
  flex-wrap: wrap;
  text-align: center;
`;
export const VoteName = styled.a`
  margin-top: 8px;
  border: 2px solid #333533;
  font-size: 21px;
  width: 60%;
  background-color: #333533;
  padding: 15px;
  color: #fff;
  text-decoration: none currentcolor solid; /*Default*/
  & span {
    color: #25c936;
  }
`;
