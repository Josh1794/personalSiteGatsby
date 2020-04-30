import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Skills() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            tech
          }
        }
      }
    `
  )
  const tech = site.siteMetadata.tech
  return (
    <div id="skillsPage" class="skillsPage">
      <br />
      <br />
      <h2 class="skillsHeader">Skills</h2>
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
    </div>
  )
}
