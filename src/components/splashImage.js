import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SplashImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "header-background.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      alt="splash"
      className="skewed"
    />
  )
}

export default SplashImage
