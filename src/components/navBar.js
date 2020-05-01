import { Link } from "gatsby"
import React from "react"

const Navbar = () => (
  <header id="navBar" class="navBar" role="navigation">
    <div class="subNav">
      <Link class="Links" to="/#">
        Joshua Grossman
      </Link>
      <Link class="Links" to="/#aboutPage">
        About
      </Link>
      <Link class="Links" to="/#skillsPage">
        Skills
      </Link>
      <Link class="Links" to="/#portfolioPage">
        Portfolio
      </Link>
      <Link class="Links" to="/#contactPage">
        Contact
      </Link>
    </div>
  </header>
)

export default Navbar
