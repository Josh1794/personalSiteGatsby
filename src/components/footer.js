import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

export default function Footer() {
  return (
    <footer
      style={{
        borderTopColor: "white",
        borderTopStyle: "solid",
        borderTopWidth: 1,
      }}
    >
      <button onClick={() => scrollTo("#splash")} class="footerButton">
        ^
      </button>
      <br />
      <h4 align="center">You can find me here</h4>
      <div class="socialFooter">
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
      <div>
        <br />© {new Date().getFullYear()}, Built with
        {` `}
        <a style={{ color: "white" }} href="https://www.gatsbyjs.org">
          Gatsby
        </a>
      </div>
    </footer>
  )
}
