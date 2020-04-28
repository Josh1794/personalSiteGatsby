import { Link } from "gatsby"
import React from "react"

const Navbar = () => (
  <header id="navBar" class="navBar">
    <div class="subNav">
      <Link class="Links" to="/#splash">
        Joshua Grossman
      </Link>
      <Link class="Links" to="/#aboutPage">
        About
      </Link>
      <Link class="Links" to="/#contactPage">
        Contact
      </Link>
      <Link class="Links" to="/#portfolioPage">
        Portfolio
      </Link>
    </div>
  </header>
)

export default Navbar
