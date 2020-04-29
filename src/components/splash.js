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
              <a
                aria-label="Linkedin Profile"
                href="https://www.linkedin.com/in/joshua-grossman17/"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a aria-label="Github Profile" href="https://github.com/Josh1794">
                <i class="fab fa-github"></i>
              </a>
              <a
                aria-label="Stack Overflow Profile"
                href="https://stackoverflow.com/users/12751027/josh"
              >
                <i class="fab fa-stack-overflow"></i>
              </a>
              <a
                aria-label="Twitter Profile"
                href="https://twitter.com/Coding_Ginger"
              >
                <i aria-hidden="false" class="fab fa-twitter"></i>
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
