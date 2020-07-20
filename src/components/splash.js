import React from "react"
import SVGTitle from "./titleSVG"
import SocialIcons from "./socialIcons"
import HeaderBackground from "./headerBackground"
import { useStaticQuery, graphql } from "gatsby"

export default function Splash() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            subTitle
          }
        }
      }
    `
  )
  const { subTitle } = site.siteMetadata

  return (
    <div role="banner" className="splash" id="splash">
      <div className="headerPage">
        <div id="splashAnimation" data-sal="slide-up">
          <h1>
            <SVGTitle />
          </h1>
          <h3 className="subTitle" align="center">
            {subTitle}
            <div className="social">
              <SocialIcons />
            </div>
          </h3>
        </div>
        <section>
          <div className="skewed">
            <HeaderBackground />
          </div>
        </section>
      </div>
    </div>
  )
}
