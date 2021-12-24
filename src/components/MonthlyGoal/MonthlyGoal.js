import React from "react";

export const spacing = {
  "3xs": 2,
  "2xs": 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  "2xl": 40,
  "3xl": 48,
};

export const breakpoints = {
  mobile: 400,
  phablet: 550,
  tablet: 750,
  desktop: 1000,
  hd: 1300,
};

const MonthlyGoal = () => (
  <div className="row">
    <div className="col-sm-12">
      <label id="monthlyGoalProgressLabel">Monthly Goal Progress:</label>
      <div id="monthlyGoalProgressContainer" align="left">
        <div id="monthlyGoalProgress" style={{ width: "0%" }}>
          0%
        </div>
      </div>
    </div>
  </div>
);
export default MonthlyGoal;
