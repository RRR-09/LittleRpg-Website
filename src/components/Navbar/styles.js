import styled, { keyframes } from "styled-components";
export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 4em;
  padding-bottom: 1em;
  width: 100%;
  & nav {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 60vw;
    @media (max-width: 768px) {
      max-width: 100%;
      width: 100%;
    }
  }
`;
const pulse = keyframes`
  25% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  75% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
`;
export const NavItem = styled.div`
  text-align: center;
  color: #eee;
  text-shadow: 2px 2px 4px #000000;
  &,
  & a,
  & i {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
  & svg {
    color: #61ac4c;
    -webkit-filter: drop-shadow(3px 3px 2px rgba(0.23, 0.23, 0.23, 0.5));
    filter: drop-shadow(3px 3px 2px rgba(0.23, 0.23, 0.23, 0.5));
    /*Pulse*/
      display: inline-block;
      vertical-align: middle;
      -webkit-transform: perspective(1px) translateZ(0);
      transform: perspective(1px) translateZ(0);
  }
  & svg:active, & svg:focus, & svg:hover {
      animation: ${pulse} 1s linear infinite;
      -webkit-animation: ${pulse} 1s linear infinite;
    }
  }
  & img {
    width: 100%;
  }
`;
export const FaResponsive = styled.div``;
