import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import {
  faHandHoldingUsd,
  faHome,
  faVoteYea,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React from "react";
import { NavContainer, NavItem } from "./styles.js";

const Navbar = ({ currentPage }) => {
  return (
    <NavContainer>
      <nav>
        {currentPage !== "/" && (
          <NavItem>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} size="5x" />
            </Link>
            <h2>Home</h2>
          </NavItem>
        )}
        <NavItem>
          <a
            href="https://discord.gg/2TyssdbTHH"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faDiscord} size="5x" />
          </a>
          <h2>Discord</h2>
        </NavItem>
        {currentPage.indexOf("/vote") === -1 && (
          <NavItem>
            {/* <Link to="/vote"> */}
            <Link to="#">
              <FontAwesomeIcon icon={faVoteYea} size="5x" />
            </Link>
            <h2>Vote (WIP)</h2>
          </NavItem>
        )}
        {currentPage.indexOf("/store") === -1 && (
          <NavItem>
            {/* <Link to="/store"> */}
            <Link to="#">
              <FontAwesomeIcon icon={faHandHoldingUsd} size="5x" />
            </Link>
            <h2>Store (WIP)</h2>
          </NavItem>
        )}
      </nav>
    </NavContainer>
  );
};
export default Navbar;
