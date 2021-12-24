import React from "react";
import bg from "../../assets/bg.mp4";
const BackgroundVideo = () => (
  <video
    autoPlay
    muted
    loop
    style={{
      position: "fixed",
      right: 0,
      bottom: 0,
      minWidth: "100vw",
      minHeight: "100vh",
      zIndex: -100,
    }}
  >
    <source src={bg} type="video/mp4" />
  </video>
);
export default BackgroundVideo;
