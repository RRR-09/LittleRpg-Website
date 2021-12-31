import React from "react";
import bg from "../../assets/bg.mp4";
import { StyledBackgroundVideo } from "./styles";
const BackgroundVideo = () => (
  <StyledBackgroundVideo autoPlay muted loop>
    <source src={bg} type="video/mp4" />
  </StyledBackgroundVideo>
);
export default BackgroundVideo;
