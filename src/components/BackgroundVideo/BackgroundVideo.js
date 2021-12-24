import React from "react";
import bg from "../../assets/bg.mp4";
import { backgroundVideoStyle } from "./BackgroundVideo.module.css";
const BackgroundVideo = () => (
  <video autoPlay muted loop className={backgroundVideoStyle}>
    <source src={bg} type="video/mp4" />
  </video>
);
export default BackgroundVideo;
