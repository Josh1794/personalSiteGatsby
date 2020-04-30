import React from "react"
import Cards from "./cards"

const Portfolio = () => (
  <div
    id="portfolioPage"
    class="portfolioPage"
    style={{
      borderBottomWidth: 1,
      borderBottomColor: "White",
      borderBottomStyle: "solid",
    }}
  >
    <br />
    <br />
    <div>
      <h2>My Portfolio</h2>
      <div>
        <h3 align="center">Check out some of my projects</h3>
        <Cards />
      </div>
    </div>
  </div>
)

export default Portfolio
