import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";
import { ProgressContainer, ProgressLabel, Row } from "./styles";

const MonthlyGoal = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      donationsGoalPercentage {
        percentage
      }
    }
  `);
  const [progress, setProgress] = useState(
    data?.donationsGoalPercentage?.percentage || 0
  );

  const Progress = styled.div`
    width: ${progress}%;
    transition: width 2s;
    color: ${progress > 4 ? "#fff" : "#000"};
    background-color: #4caf50 !important;
    text-align: center !important;
    height: 24px;

    & label {
      padding-left: ${progress > 5 ? "0px" : "5px"};
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
