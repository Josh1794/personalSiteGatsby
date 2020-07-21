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
      className="skillsPage"
      style={{
        borderBottomWidth: 1,
        borderBottomColor: "White",
        borderBottomStyle: "solid",
      }}
    >
      <br />
      <br />
      <h2 className="pageHeader">Skills</h2>
      <p className="pageSubTitle">{tech}</p>
      <br />
      <div className="skillCards">
        <SkillCards />
      </div>
    </div>
  )
}
