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
      className="aboutPage"
      style={{
        borderBottomWidth: 1,
        borderBottomColor: "White",
        borderBottomStyle: "solid",
      }}
    >
      <br />
      <br />
      <div>
        <h2 className="pageHeader">
          About me <Image />
        </h2>
        <p className="aboutText">{bio}</p>
      </div>
    </div>
  )
}
