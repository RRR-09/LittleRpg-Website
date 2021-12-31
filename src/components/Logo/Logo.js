import React from "react";
import logo from "../../assets/logo.webp";
import { LogoContainer } from "./styles";

const Logo = () => (
  <LogoContainer>
    <h1>
      <img src={logo} alt="Logo" />
    </h1>
  </LogoContainer>
);
export default Logo;
