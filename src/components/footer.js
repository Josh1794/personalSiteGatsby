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
      <button onClick={() => scrollTo("#splash")} class="footerButton">
        ^
      </button>
      <br />
      <h4 align="center">You can find me here</h4>
      <div class="socialFooter">
        <SocialIcons />
      </div>
    </footer>
  )
}
