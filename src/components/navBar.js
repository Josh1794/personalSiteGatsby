import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

export default function Navbar() {
  return (
    <nav id="navBar" className="navBar" role="navigation">
      <button className="navButton" onClick={() => scrollTo("#splash")}>
        Home
      </button>
      <button className="navButton" onClick={() => scrollTo("#aboutPage")}>
        About
      </button>
      <button className="navButton" onClick={() => scrollTo("#skillsPage")}>
        Skills
      </button>
      <button className="navButton" onClick={() => scrollTo("#portfolioPage")}>
        Portfolio
      </button>
      <button className="navButton" onClick={() => scrollTo("#contactPage")}>
        Contact
      </button>
    </nav>
  )
}
