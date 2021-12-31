import styled from "styled-components";
export const CopyIPContainer = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  font-size: 21px;
  justify-content: center;
  margin-top: 8px;
  padding-bottom: 16px;
  text-align: center;
  width: 100%;
`;
export const CopyIPLabel = styled.div`
  background-color: #434643;
  padding: 15px;
  & span {
    color: #25c936;
  }
`;
export const CopyIPBar = styled.div`
  background-color: #333533;
  cursor: pointer;
  padding: 15px;
  color: #fff;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;
`;
