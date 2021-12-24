import React from "react";
import logo from "../../assets/logo.webp";
import "./Logo.css";
const Logo = () => (
  <div id="logo-container">
    <h1>
      <img
        src={logo}
        className="logo"
        alt="JellyCraft | A Minecraft Survival Community"
      />
    </h1>
  </div>
);
export default Logo;
