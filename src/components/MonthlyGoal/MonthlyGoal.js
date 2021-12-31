import React, { useState } from "react";
import styled from "styled-components";

const MonthlyGoal = () => {
  const [progress, setProgress] = useState(0);

  const Row = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    width: 100%;
    padding-top: 1.5em;
  `;
  const ProgressLabel = styled.label`
    display: block;
    text-shadow: 2px 2px 4px #000000;
    color: #eee;
    font-family: "Lato", sans-serif;
    font-weight: bold;
    display: block;
    font-size: 21px;
    color: #fff;
    font-size: 21px;
    margin-bottom: 6px;
    text-align: center !important;
  `;
  const ProgressContainer = styled.div`
    color: #000 !important;
    background-color: #f1f1f1 !important;
    margin-bottom: 12px;
    width: 100%;
  `;
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
