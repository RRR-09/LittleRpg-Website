import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faHandHoldingUsd, faVoteYea } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React from "react";
import "../../styles/hover.css";
import "./Navbar.css";

const Navbar = () => (
  <nav>
    {/* fa-custom fas fa-hand-holding-usd fa-5x hvr-pulse */}
    <div className="nav-item">
      <a href="https://discord.gg/3EavG3zXsy" target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          icon={faDiscord}
          size="5x"
          className="fa-shadow fa-responsive-size hvr-pulse"
        />
      </a>
      <h2>Discord</h2>
    </div>
    <div className="nav-item">
      <Link to="/vote">
        <FontAwesomeIcon
          icon={faVoteYea}
          size="5x"
          className="fa-shadow fa-responsive-size hvr-pulse"
        />
      </Link>
      <h2>Vote</h2>
    </div>
    <div className="nav-item">
      <Link to="/store">
        <FontAwesomeIcon
          icon={faHandHoldingUsd}
          size="5x"
          className="fa-shadow fa-responsive-size hvr-pulse"
        />
      </Link>
      <h2>Store</h2>
    </div>
  </nav>
);
export default Navbar;
