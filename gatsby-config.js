module.exports = {
  siteMetadata: {
    title: `Joshua Grossman`,
    description: `Joshua Grossman's personal website and portfolio`,
    author: `Joshua Grossman`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1,
        once: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Joshua Grossman`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `public/icons/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },

    //
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
