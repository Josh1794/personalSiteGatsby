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
    <div
      id="aboutPage"
      class="aboutPage"
      style={{
        borderBottomWidth: 1,
        borderBottomColor: "White",
        borderBottomStyle: "solid",
      }}
    >
      <br />
      <br />
      <h2 class="aboutHeader">
        About me <Image />
      </h2>
      <body>{bio}</body>
    </div>
  )
}
