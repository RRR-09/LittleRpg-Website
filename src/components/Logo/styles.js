import styled, { keyframes } from "styled-components";
const pulse = keyframes`
0% {
  transform: scale(0.95);
}

70% {
  transform: scale(1);
}

100% {
  transform: scale(0.95);
}
`;
export const LogoContainer = styled.div`
  &,
  & h1,
  & img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
    user-select: none;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  & h1 img {
    width: 25vw;
    min-width: 6em;
    @media (max-width: 768px) {
      max-width: 60vw;
    }
  }
  & img {
    transform: scale(1);
    animation: ${pulse} 4s infinite;
  }
`;