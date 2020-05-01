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
  const subTitle = site.siteMetadata.subTitle

  return (
    <div role="banner" class="splash" id="splash">
      <div class="headerPage">
        <div id="splashAnimation" data-sal="slide-up">
          <SVGTitle />
          <h3 class="subTitle" align="center">
            {subTitle}
            <div class="social">
              <SocialIcons />
            </div>
          </h3>
        </div>
        <section>
          <div class="skewed">
            <HeaderBackground />
          </div>
        </section>
      </div>
    </div>
  )
}
