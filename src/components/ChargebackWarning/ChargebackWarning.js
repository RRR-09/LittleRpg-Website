import React from "react";
import { Wrapper } from "../../styles/styles";
import { ChargebackWarningContainer, ChargebackWarningText } from "./styles";
const ChargebackWarning = () => (
  <Wrapper>
    <ChargebackWarningContainer>
      <ChargebackWarningText>
        Intentionally charging back the purchase will result in a ban. If the
        purchase is revoked by accident and a ban occurs,
        <br />
        {/* Requested static spacing by client */}
        contact us through the Discord for help.
      </ChargebackWarningText>
    </ChargebackWarningContainer>
  </Wrapper>
);
export default ChargebackWarning;
