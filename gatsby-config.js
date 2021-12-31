module.exports = {
  siteMetadata: {
    siteUrl: "https://LittleRpg.net",
    title: "LittleRpg",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-fontawesome-css",
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    "gatsby-plugin-gatsby-cloud",
  ],
};
