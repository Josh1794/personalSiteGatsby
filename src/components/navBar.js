import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function Navbar() {
  return (
    <nav id="navBar" className="navBar" role="navigation">
      <div className="navContent">
        <p
          className="navLabel"
          onClick={() =>
            console.log(
              "\n\
    ╭━━╮╭━━━┳━━━┳━━━╮╭╮╱╱╭┳━━━┳╮╱╭╮\n\
    ╰┫┣╯┃╭━╮┃╭━━┫╭━━╯┃╰╮╭╯┃╭━╮┃┃╱┃┃\n\
    ╱┃┃╱┃╰━━┫╰━━┫╰━━╮╰╮╰╯╭┫┃╱┃┃┃╱┃┃\n\
    ╱┃┃╱╰━━╮┃╭━━┫╭━━╯╱╰╮╭╯┃┃╱┃┃┃╱┃┃\n\
    ╭┫┣╮┃╰━╯┃╰━━┫╰━━╮╱╱┃┃╱┃╰━╯┃╰━╯┃\n\
    ╰━━╯╰━━━┻━━━┻━━━╯╱╱╰╯╱╰━━━┻━━━╯\n\
    "
            )
          }
        >
          Joshua Grossman
        </p>
        <div className="navLinks">
          <button className="navButton" onClick={() => scrollTo("#splash")}>
            Home
          </button>
          <button className="navButton" onClick={() => scrollTo("#aboutPage")}>
            About
          </button>
          <button className="navButton" onClick={() => scrollTo("#skillsPage")}>
            Skills
          </button>
          <button
            className="navButton"
            onClick={() => scrollTo("#portfolioPage")}
          >
            Portfolio
          </button>
          <button
            className="navButton"
            onClick={() => scrollTo("#contactPage")}
          >
            Contact
          </button>
          <AniLink
            className="navButton"
            swipe
            direction="left"
            to="/resume"
            duration={1}
          >
            Resume
          </AniLink>
        </div>
      </div>
    </nav>
  )
}
