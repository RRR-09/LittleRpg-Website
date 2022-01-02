import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 12px;
  padding-right: 12px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
  & a {
    color: #61ac4c;
  }
`;

export const CodeBlock = styled.div`
  font-family: Consolas;
  display: inline;
  background-color: rgba(0, 0, 0, 0.25);
  word-break: break-all;
`;
