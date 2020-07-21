module.exports = {
  siteMetadata: {
    title: `Personal Website`,
    description: `My Personal Website and Portfolio. I'm a Fullstack Software Engineer in New York City always striving to learn.`,
    author: `Joshua Grossman`,
    bio:
      "I received my Masters in Sustainability Management at Columbia University in 2017 and worked in Sustainable Finance and Renewable Energy. Recently, I decided to learn to code in order to challenge myself intellectually and to expand my skillset. I chose to attend Fullstack Academy because of its rigorous and highly regarded programs. I am currently looking for a fulltime software engineering position where I can continue to grow and improve as a developer. I hope to incorporate my passion for sustainability into my development work. Feel free to check out some of my sample projects linked below or reach out to me on LinkeIn or with my contact information. I also offer consulting and web development services as a freelance developer. I look forward to hearing from you!",
    tech: " Here's a few technologies I love to work with:",
    subTitle: "I'm a Fullstack Software Engineer",
    occupation: "Fullstack Software Engineer",
    name: "Joshua Grossman",
    email: "Josh1794@gmail.com",
    phone: "516-776-4357",
    resumedownload:
      "https://drive.google.com/file/d/12PmzEic0ahuzrIa68hHjOe3Puex12Aqm/view?usp=sharing",
    siteUrl: "https://www.joshua-grossman.com",
    keywords: [
      "personal website",
      "Fullstack Software Engineer in New York City",
      "Fullstack Software Engineer",
      "Web Developer",
      "New York City",
      "Joshua Grossman",
      "Josh Grossman",
      "Grossman",
      "Joshua",
      "Josh",
      "Developer",
      "website",
      "resume",
      "NYC",
      "developer in NYC",
      "developer in NY",
      "Fullstack Academy Alumni",
      "Columbia University Alumni",
      "Columbia University Alumni Software Developer",
      "Hofstra Alumni",
      "Joshua Grossman's Resume",
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
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
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Poppins:wght@300"],
        },
      },
    },

    //
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
