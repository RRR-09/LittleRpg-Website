import React, { useState } from "react";
import "./FooterJoinButton.css";

const FooterJoinButton = () => {
  const [showNotification, setShowNotification] = useState(false);
  const toggleShow = () => {
    navigator.clipboard.writeText("play.littlerpg.net");
    setShowNotification(true);
    setTimeout(function () {
      setShowNotification(false);
    }, 5000);
  };
  return (
    <div className="footer-copy-ip">
      <div className="copy-ip-container">
        <div className="copy-ip-label">
          Join us at <span>play.jellycraft.net</span>!
        </div>

        {showNotification ? (
          <div className="copy-ip">Copied!</div>
        ) : (
          <div
            className="copy-ip"
            onClick={toggleShow}
            onKeyPress={toggleShow}
            role="button"
            tabIndex={0}
          >
            Copy IP
          </div>
        )}
      </div>
    </div>
  );
};
export default FooterJoinButton;
