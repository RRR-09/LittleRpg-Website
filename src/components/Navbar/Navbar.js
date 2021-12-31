import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import {
  faHandHoldingUsd,
  faHome,
  faVoteYea,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React from "react";
import "../../styles/hover.css";
import "./Navbar.css";

const Navbar = ({ currentPage }) => {
  return (
    <div className="nav-container">
      <nav>
        {/* fa-custom fas fa-hand-holding-usd fa-5x hvr-pulse */}
        {currentPage !== "/" && (
          <div className="nav-item">
            <Link to="/">
              <FontAwesomeIcon
                icon={faHome}
                size="5x"
                className="fa-shadow fa-responsive-size hvr-pulse"
              />
            </Link>
            <h2>Home</h2>
          </div>
        )}
        <div className="nav-item">
          <a
            href="https://discord.gg/3EavG3zXsy"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faDiscord}
              size="5x"
              className="fa-shadow fa-responsive-size hvr-pulse"
            />
          </a>
          <h2>Discord</h2>
        </div>
        {currentPage.indexOf("/vote") === -1 && (
          <div className="nav-item">
            {/* <Link to="/vote"> */}
            <Link to="#">
              <FontAwesomeIcon
                icon={faVoteYea}
                size="5x"
                className="fa-shadow fa-responsive-size hvr-pulse"
              />
            </Link>
            <h2>Vote (WIP)</h2>
          </div>
        )}
        {currentPage.indexOf("/store") === -1 && (
          <div className="nav-item">
            {/* <Link to="/store"> */}
            <Link to="#">
              <FontAwesomeIcon
                icon={faHandHoldingUsd}
                size="5x"
                className="fa-shadow fa-responsive-size hvr-pulse"
              />
            </Link>
            <h2>Store (WIP)</h2>
          </div>
        )}
      </nav>
    </div>
  );
};
export default Navbar;
