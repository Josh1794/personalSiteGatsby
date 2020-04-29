import React from "react"
import SVGTitle from "./titleSVG"
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
              <a href="https://www.linkedin.com/in/joshua-grossman17/">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/Josh1794">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://stackoverflow.com/users/12751027/josh">
                <i class="fab fa-stack-overflow"></i>
              </a>
              <a href="https://twitter.com/Coding_Ginger">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </h3>
        </div>
        <section>
          <div class="skewed"></div>
        </section>
      </div>
    </div>
  )
}
