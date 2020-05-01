import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Navbar = () => (
  <nav id="navBar" class="navBar" role="navigation">
    <div class="subNav">
      <button class="navButton" onClick={() => scrollTo("#splash")}>
        Home
      </button>
      <button class="navButton" onClick={() => scrollTo("#aboutPage")}>
        About
      </button>
      <button class="navButton" onClick={() => scrollTo("#skillsPage")}>
        Skills
      </button>
      <button class="navButton" onClick={() => scrollTo("#portfolioPage")}>
        Portfolio
      </button>
      <button class="navButton" onClick={() => scrollTo("#contactPage")}>
        Contact
      </button>
    </div>
  </nav>
)

export default Navbar
