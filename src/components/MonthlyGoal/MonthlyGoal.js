import React, { useState } from "react";
import styled from "styled-components";
import { ProgressContainer, ProgressLabel, Row } from "./styles";

const MonthlyGoal = () => {
  const [progress, setProgress] = useState(0);

  const Progress = styled.div`
    width: ${progress}%;
    transition: width 2s;
    color: ${progress > 1 ? "#fff" : "#000"};
    background-color: #4caf50 !important;
    text-align: center !important;
    height: 24px;
  `;

  return (
    <Row>
      <ProgressLabel>Monthly Goal Progress:</ProgressLabel>
      <ProgressContainer>
        <Progress>0%</Progress>
      </ProgressContainer>
    </Row>
  );
};
export default MonthlyGoal;
