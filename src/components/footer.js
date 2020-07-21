import React from "react"
import SocialIcons from "./socialIcons"
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
      <button onClick={() => scrollTo("#splash")} className="footerButton">
        ^
      </button>
      <br />
      <p>You can also find me here</p>
      <div className="socialFooter">
        <SocialIcons />
      </div>
    </footer>
  )
}
