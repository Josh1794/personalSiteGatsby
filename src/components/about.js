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
          }
        }
      }
    `
  )
  const { bio } = site.siteMetadata

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
      <div>
        <h2 class="pageHeader">
          About me <Image />
        </h2>
        <body class="aboutText">{bio}</body>
      </div>
    </div>
  )
}
