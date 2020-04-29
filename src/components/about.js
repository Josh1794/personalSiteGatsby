import React from "react"
import Image from "./image"
import { useStaticQuery, graphql } from "gatsby"

export default function About() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            bio
            tech
          }
        }
      }
    `
  )
  const bio = site.siteMetadata.bio
  const tech = site.siteMetadata.tech

  return (
    <div id="aboutPage" class="aboutPage">
      {/* <div data-sal="fade" id="aboutAnimation"> */}
      <h1 class="aboutHeader">
        About me <Image />
      </h1>
      <body>{bio}</body>
      <br />

      <body>{tech}</body>
      <br />
      <ul>
        <li>JavaScript (ES6+)</li>
        <li>ReactJS</li>
        <li>React-Native</li>
        <li>Gatsby.js</li>
        <li>Next.js</li>
        <li>Redux.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Sequelize.js</li>
        <li>PostgreSQL</li>
      </ul>
      {/* </div> */}
    </div>
  )
}
