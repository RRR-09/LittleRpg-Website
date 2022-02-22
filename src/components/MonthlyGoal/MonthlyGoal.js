import React, { useState } from "react";
import styled from "styled-components";
import { ProgressContainer, ProgressLabel, Row } from "./styles";

const MonthlyGoal = () => {
  const [progress, setProgress] = useState(0);

  const Progress = styled.div`
    width: ${progress}%;
    transition: width 2s;
    color: ${progress > 4 ? "#fff" : "#000"};
    background-color: #4caf50 !important;
    text-align: center !important;
    height: 24px;

    & label {
      padding-left: ${progress > 1 ? "5px" : "0px"};
      font-size: 24px;
    }
  `;

  return (
    <Row>
      <ProgressLabel>Monthly Goal Progress:</ProgressLabel>
      <ProgressContainer>
        <Progress>
          <label>{progress}%</label>
        </Progress>
      </ProgressContainer>
    </Row>
  );
};
export default MonthlyGoal;
