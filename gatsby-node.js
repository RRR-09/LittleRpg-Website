require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const fetch = require("node-fetch");
exports.sourceNodes = async ({ actions: { createNode, contentDigest } }) => {
  const response = await fetch(`${process.env.DONATION_GOAL_API}`);
  const data = await response.text();
  createNode({
    percentage: data,
    // Required fields.
    id: `donations-goal-percentage`,
    parent: null,
    children: [],
    internal: {
      type: `DonationsGoalPercentage`,
      contentDigest: data,
    },
  });
};
