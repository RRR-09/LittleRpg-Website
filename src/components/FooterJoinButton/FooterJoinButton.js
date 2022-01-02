import React, { useState } from "react";
import { CopyIPBar, CopyIPContainer, CopyIPLabel } from "./styles";

const FooterJoinButton = () => {
  const ipAddr = "play.littlerpg.net";
  const [showNotification, setShowNotification] = useState(false);
  const toggleShow = () => {
    navigator.clipboard.writeText(ipAddr);
    setShowNotification(true);
    setTimeout(function () {
      setShowNotification(false);
    }, 5000);
  };
  return (
    <CopyIPContainer>
      <CopyIPLabel>
        Join us at <span>{ipAddr}</span>!
      </CopyIPLabel>

      {showNotification ? (
        <CopyIPBar>Copied!</CopyIPBar>
      ) : (
        <CopyIPBar
          onClick={toggleShow}
          onKeyPress={toggleShow}
          role="button"
          tabIndex={0}
        >
          Copy IP
        </CopyIPBar>
      )}
    </CopyIPContainer>
  );
};
export default FooterJoinButton;
