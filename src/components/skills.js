import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SkillCards from "./skillsCard"

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
  const { tech } = site.siteMetadata
  return (
    <div
      id="skillsPage"
      class="skillsPage"
      style={{
        borderBottomWidth: 1,
        borderBottomColor: "White",
        borderBottomStyle: "solid",
      }}
    >
      <br />
      <br />
      <h2 class="pageHeader">Skills</h2>
      <body class="pageSubTitle">{tech}</body>
      <br />
      <div class="skillCards">
        <SkillCards />
      </div>
    </div>
  )
}
